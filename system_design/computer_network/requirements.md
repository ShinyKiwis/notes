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

