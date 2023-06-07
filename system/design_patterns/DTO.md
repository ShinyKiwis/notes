**Table of contents**
${toc}

# Data Transfer Object 
Data Transfer Object or DTO is a design pattern first introduced by Martin Fowler in his book: [Patterns of Enterprise Application](https://martinfowler.com/books/eaa.html)

## What is it ? 
It is an object (of course, it is), that carries data between processes with the **main purpose of** reducing the number of method calls.  

But what does "reducing the number of methods calls" actually means ? 

Assuming we are developing an application following the **client-server architecture**, backend is built with REST API. For each time we make a request to the API, it does takes time so we need to limit the number of making request to the API and for each time we request, more things are processed.

In other words, processing more work means receiving more input. For example, to process **job A**, the API require 2 parameters A1,A2, but now it is require to process **multiple jobs B**, the API requires 4 paramters A1,A2,B1,B2. However, using a lot of input argument will affect the productivity in both frontend and backend side.

And this is interesting, some language, Java as an example or C, only allow us to return **only one object of a specific type**.

The solution is initializing a DTO contains all arguments when calling to the API. It needs to be serialized when transfering through the connection and deserialized to extract the original DTO.

> 07/06/2023: At this moment, I only write to this section since more knowledge require to continue the journey with DTO:

> I used 2 sources for this topic: 
> - https://shareprogramming.net/dto-la-gi-dung-dto-trong-nhung-truong-hop-nao/
> - https://viblo.asia/p/entity-domain-model-va-dto-sao-nhieu-qua-vay-YWOZroMPlQ0
