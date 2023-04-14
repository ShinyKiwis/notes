# Requirements 
## What to do first ?
Before designing a computer network, or more general a system, we need to know the requirements ? Why ? 

The answer is simple, only we know the requirements, we will know what we need to design! 

But another question is where do we get the requirements ? 

We make it up ourselves ? Of course not! We get them from the stakeholders

## Stakeholders
Stakeholders are individuals, groups or organizations that have an interest in or are affected by the activities of a company, project or initiative.

> Fun fact, this definition is taken from ChatGPT

So for the case of a computer network, there are 3 stakeholders (We are not considering the case of end users here):
1. The application programmers
  - They may want a guarantee that each message the application sends will be delivered without error within a certain amount of time or the ability to switch gracefully among different connections to the network as the user moves around.
2. Network operators
  - They would list the characteristics of a system that is easy to administer and manage such as faults can be easily isolated, new devices can be added to the network and configured correctly, and it is easy to account for usage
3. Network designers
  - would list the properties of a cost-effective design such as network resources are efficiently utilized and fairly allocated to different users. Issues of performance are also likely to be important.

One thing is clear that, different stakeholder will have different requirements.

But let's try to abstract it (Programmers always love to abstract thing to higher level for better understanding) into a high-level introduction to the major considerations that drive network design as well as the challenges

## Scalable Connectivity
First of all, a network must provide Connectivity among sets of computers. Sometimes it is enough to build a limited network that connects only a few computers (machines), for example private network of corporation or company. In constrast, other networks such as Internet are designed to grow in a way that allows them the potential to connect all the computers in the world. 

~> A system that is designed to support the growth of an arbitrarily large size is said to **scale**.

But to understand the requirement of Connectivity more fully, we need to understand how computers are connected!

A network can consist of two or more computers directly connected by some physical medium, such as a coaxial cable or an optical fiber. We call such a physical medium a link, and we often refer to the computers it connects as nodes.

As illustrated in **Figure 2**, physical links are sometimes limited to a pair of nodes (such a link is said to be point-to-point), while in other cases more than two nodes may share a single physical link (such a link is said to be multiple-access). Wireless links, such as those provided by cellular networks and Wi-Fi networks, are an important class of multiple-access links. It is always the case that multiple-access links are limited in size, in terms of both the geographical distance they can cover and the number of nodes they can connect. For this reason, they often implement the so-called last mile, connecting end users to the rest of the network.

![Connectivity between computers at lowest level](https://book.systemsapproach.org/_images/f01-02-9780123850591.png)
**Figure 2:** 
- a) point-to-point
- b) multiple-access

And you can guess that if computer networks were limited to situations in which all nodes are directly connected to each other over a common physical medium, then either networks would be very limited in the number of computers they could connect, or the number of wires coming out of the back of each node would quickly become both unmanageable and very expensive. But connectivity between two nodes does not necessarily imply a direct physical connection between them—indirect connectivity may be achieved among a set of cooperating nodes.

Let's have a look at **Figure 3**!

![](https://book.systemsapproach.org/_images/f01-03-9780123850591.png) 
**Figure 3:** 

This figure shows a set of nodes, each of which is attached to one or more point-to-point links. Those nodes that are attached to at least two links run software that forwards data received on one link out on another. If organized in a systematic way, these forwarding nodes form a switched network. There are numerous types of switched networks, of which the two most common are circuit switched and packet switched.

- Packet-switched: nodes in such a network send discrete blocks of data to each other.
  - Think those blocks of data are corresponding to some application data like images, text file, email,... We call each block of data either **packet** or **message** 
  - This type of network typically use a strategy called **store-and-forward**. As the name suggests, each node in a store-and-forward network first receives a **complete packet** over some link, stores the packet in its internal memory, and then forwards the complete packet to the next node.

- Circuit-switched: first establishes a dedicated circuit across a sequence of links and then allows the source node to send a stream of bits across this circuit to a destination node 

So what's about the cloud around those switched ? Let's break **Figure 3** down, shall we?

![](https://book.systemsapproach.org/_images/f01-04-9780123850591.png) 

The cloud in **Figure 3** distinguishes between the nodes on the inside that implement the network, they are known as **switches** and their primary function is to store and forward packets. The nodes outside the cloud that use the network (they are traditionally called **hosts**, and they support users and run application programs)

However, the **Figure 4**  will show us the innovation of what we called **internetwork**  or **internet** for short.

![](https://book.systemsapproach.org/_images/f01-04-9780123850591.png)
**Figure 4: Interconnection of networks.** 

In this situation, a set of independent networks (clouds) are interconnected to form an internetwork, or internet for short. We adopt the Internet’s convention of referring to a generic internetwork of networks as a lowercase i internet, and the TCP/IP Internet we all use every day as the capital I Internet.

A node that is connected to two or more networks is commonly called **a router** or **gateway**, and it plays much the same role as a switch—**it forwards messages from one network to another.**

> Note that an internet can itself be viewed as another kind of network, which means that an internet can be built from a set of internets. Thus, we can recursively build arbitrarily large networks by interconnecting clouds to form larger clouds.

Just because a set of hosts are directly or indirectly connected to each other does not mean that we have succeeded in providing host-to-host connectivity. We still missing something, how they know who is who to talk to ?

The final requirement is that each node must be able to say which of the other nodes on the network it wants to communicate with. This is done by assigning an address to each node. An address is a byte string that identifies a node; that is, the network can use a node’s address to distinguish it from the other nodes connected to the network.

When a source node wants to send message to a certain destination node, it simply specifies the address of the destination node. If the sending and receiving nodes are not directly connected, then the switches and routers of the network use this address to decide how to forward the message toward the destination.

The process of determining systematically how to forward messages toward the destination node based on its address is called **routing**.

## Cost-Effective Resource Sharing

Given a collection of nodes indirectly connected by a nesting of networks, it is possible for any pair of hosts to send messages to each other across a sequence of links and nodes. Of course, we want to do more than support just one pair of communicating hosts—we want to provide all pairs of hosts with the ability to exchange messages.

There is one question we have to answer: How do all the hosts that want to communicate share the network, especially if they want to use it at the same time ? To make it harder, how do several hosts share the same link when they all want to use it at the same time ?

A new fundamental concept need to be introduced - **multiplexing** - it means that a system resource is shared among multiple users. Data being sent by multiple users can be multiplexed over the physical links that make up a network.

Let's have a look at **Figure 5**:
![](https://book.systemsapproach.org/_images/f01-05-9780123850591.png)

Three host on the left are senders (S1-S3) and three host on the right are receivers (R1-R3) and they send all their data through one mutual physical link. In this situation, three flows of data—corresponding to the three pairs of hosts—are multiplexed onto a single physical link by switch 1 and then demultiplexed back into separate flows by switch 2.

There are several different methods for multiplexing multiple flows onto one physical link.
- Synchronous Time-Division Multiplexing (STDM): divide time into equal-sized quanta and, in a round-robin fashion, give each flow a chance to send its data over the physical link.
  - In other words, during time quantum 1, data from S1 to R1 is transmitted; during time quantum 2, data from S2 to R2 is transmitted; in quantum 3, S3 sends data to R3. At this point, the first flow (S1 to R1) gets to go again, and the process repeats.
- Frequency-Division Multiplexing (FDM): transmit each flow over the physical link at a different frequency, much the same way that the signals for different TV stations are transmitted at a different frequency over the airwaves or on a coaxial cable TV link.

Although simple to understand, both STDM and FDM are limited in two ways.

**Firstly**, if one of the flows (host pairs) does not have any data to send, its share of the physical link—that is, its time quantum or its frequency—remains idle, even if one of the other flows has data to transmit. For example, S3 had to wait its turn behind S1 and S2 in the previous paragraph, even if S1 and S2 had nothing to send.

For computer communication, the amount of time that a link is idle can be very large—for example, consider the amount of time you spend reading a web page (leaving the link idle) compared to the time you spend fetching the page

**Secondly**, both STDM and FDM are limited to situations in which the maximum number of flows is fixed and known ahead of time. It is not practical to resize the quantum or to add additional quanta in the case of STDM or to add new frequencies in the case of FDM.

To solve these two problems, one technique was introduced called **statistical multiplexing**, which means **a time-division multiplexing technique in which time slots are dynamically allocated on the basis of need**.

So this technique has 2 key ideas:

**First**, it is like STDM in that the physical link is shared over time—first data from one flow is transmitted over the physical link, then data from another flow is transmitted, and so on. Unlike STDM, however, data is transmitted from each flow **on demand** rather than during a predetermined time slot. Thus, if only one flow has data to send, it gets to transmit that data without waiting for its quantum to come around and thus without having to watch the quanta assigned to the other flows go by unused. It is this avoidance of idle time that gives packet switching its efficiency. ( Solved the first problem)

As defined so far, however, statistical multiplexing has **no mechanism to ensure that all the flows eventually get their turn to transmit over the physical link**. That is, once a flow begins sending data, we need some way to limit the transmission, so that the other flows can have a turn. To account for this need, statistical multiplexing defines an upper bound on the size of the block of data that each flow is permitted to transmit at a given time. This limited-size block of data is typically referred to as a packet, to distinguish it from the arbitrarily large message that an application program might want to transmit. Because a packet-switched network limits the maximum size of packets, a host may not be able to send a complete message in one packet. The source may need to fragment the message into several packets, with the receiver reassembling the packets back into the original message.

![](https://book.systemsapproach.org/_images/f01-06-9780123850591.png)
**Figure 6: A switch multiplexing packets from multiple sources onto one shared link**

In other words, each flow sends a sequence of packets over the physical link, with a decision made on a packet-by-packet basis as to which flow’s packet to send next. Notice that, if only one flow has data to send, then it can send a sequence of packets back-to-back; however, should more than one of the flows have data to send, then their packets are interleaved on the link. Figure 6 depicts a switch multiplexing packets from multiple sources onto a single shared link.

Also, notice in Figure 6 that since the switch has to multiplex three incoming packet streams onto one outgoing link, it is possible that the switch will receive packets faster than the shared link can accommodate. In this case, the switch is forced to buffer these packets in its memory. Should a switch receive packets faster than it can send them for an extended period of time, then the switch will eventually run out of buffer space, and **some packets will have to be dropped**. When a switch is operating in this state, it is said to be **congested**.

## Support for Common Services

When two application programs need to communicate with each other, a lot of complicated things must happen beyond simply sending a message from one host to another. One option would be for application designers to build all that complicated functionality into each application program. However, since many applications need common services, it is much more logical to implement those common services once and then to let the application designer build the application using those services.

The challenge for the network designer is to identify the right set of common services. The goal is to hide the complexity of the network from the application without overly constraining the application designer.

Intuitively, we view the network as providing logical channels over which application-level processes can communicate with each other; each channel provides the set of services required by that application.

The challenge is to recognize what functionality the channels should provide to application programs. For example, does the application require a guarantee that messages sent over the channel are delivered, or is it acceptable if some messages fail to arrive? Is it necessary that messages arrive at the recipient process in the same order in which they are sent, or does the recipient not care about the order in which messages arrive? Does the network need to ensure that no third parties are able to eavesdrop on the channel, or is privacy not a concern? In general, a network provides a variety of different types of channels, with each application selecting the type that best meets its needs. The rest of this section illustrates the thinking involved in defining useful channels.

### Identify Common Communication Patterns
**Designing abstract channels involves first understanding the communication needs of a representative collection of applications, then extracting their common communication requirements, and finally incorporating the functionality that meets these requirements in the network.**

Have a look at the book for example for this section 

### Reliable Message Delivery
As suggested by the examples just considered, reliable message delivery is one of the most important functions that a network can provide. It is difficult to determine how to provide this reliability, however, without first understanding how networks can fail.

Thus, a major requirement of a network is to recover from certain kinds of failures, so that application programs don’t have to deal with them or even be aware of them. There are 3 general cases for these failures.

- First, as a packet is transmitted over a physical link, bit errors may be introduced into the data; that is, a 1 is turned into a 0 or vice versa. Sometimes single bits are corrupted, but more often than not a burst error occurs—several consecutive bits are corrupted.
  - Bit errors typically occur because outside forces, such as lightning strikes, power surges, and microwave ovens, interfere with the transmission of data but they are rare and can be detected.
- The second class of failure is at the packet, rather than the bit, level; that is, a complete packet is lost by the network 
  - One reason this can happen is that the packet contains an uncorrectable bit error and therefore has to be discarded
  - Another one is one of the nodes that has to handle the packet—for example, a switch that is forwarding it from one link to another—is so overloaded that it has no place to store the packet and therefore is forced to drop it. 
  - Less commonly, the software running on one of the nodes that handles the packet makes a mistake. For example, it might incorrectly forward a packet out on the wrong link, so that the packet never finds its way to the ultimate destination. 
- The third class of failure is at the node and link level 
  - That is, a physical link is cut, or the computer it is connected to crashes. This can be caused by software that crashes, a power failure, or a reckless backhoe operator.
  - Failures due to misconfiguration of a network device are also common. 

> Key idea to take away is that defining useful channels involves both understanding the applications’ requirements and recognizing the limitations of the underlying technology. The challenge is to fill in the gap between what the application expects and what the underlying technology can provide. This is sometimes called the semantic gap.

## Manageability
A final requirement, which seems to be neglected or left till last all too often (as we do here), is that networks need to be managed. Managing a network includes upgrading equipment as the network grows to carry more traffic or reach more users, troubleshooting the network when things go wrong or performance isn’t as desired, and adding new features in support of new applications.

One way to make a network easier to manage is to **avoid change**. Once the network is working, **simply do not touch it!** This mindset exposes the fundamental tension between stability and feature velocity: the rate at which new capabilities are introduced into the network. Favoring stability is the approach the telecommunications industry (not to mention University system administrators and corporate IT departments) adopted for many years, making it one of the most slow moving and risk averse industries you will find anywhere. But the recent explosion of the cloud has changed that dynamic, making it necessary to bring stability and feature velocity more into balance.
