# Randomize Data
## Scenario
Have you ever making a game yourself ? 

When I was 15 years old, I have tried to make a simple game with C++, a very classic one, Snake. Beside implementing how to move the snake and render the grid or the playground. The final thing worth worrying is how to spawn the food for the snake to eat. 

Here is when I have to think about **randomly** spawn the food according to the coordinates of the grid, random x then y and render it ( let's forget about checking food collision here, just focus on randomizing ). So simple grab the built-in feature of C++ for randomizing.

That was what I did.

Now, I want to know how people do it.
## Notes
Randomization plays an important role in many applications. It lets a program
simulate random processes, test algorithms to see how they behave with random
inputs, and search for solutions to difficult problems. The first step in any randomized algorithm is generating random numbers.
### Generating random values
Even though many programmers talk about “random” number generators, any
algorithm used by a computer to produce numbers is not truly random. If you knew the details of the algorithm and its internal state, you could correctly
predict the “random” numbers it generates.

To truly get an unpredictable randomness, you need to use a source other than a computer program, like asking your girlfriend what to eat today (No one knows the answer, the most mysterious one with no answer until now). Joke aside, you can roll a dice or something from a chemical experience, ... But they are all complicated and takes time. 

For this reason, most applications use a faster pseudorandom number generator (PRNG) instead.
#### Generating them all
One simple and common method of creating pseudorandom numbers is a **linear
congruential generator**, which uses the following relationship to generate numbers:

<center>

$X_{n+1} = (A * X_n +B)$ Mod M 

</center>

With A,B and M are constants.

Before process further, let's implement this in JavaScript (`linear.js`), go run the program with node. You will notice that after a sequence of random number, the sequence will repeat, so if someone give you a current number, you can guess the next one. After at most M numbers, the generator will now produces a number it produced before.

To solve this problem, some PRNG algorithms use multiple linear congruential generators with different constants and then select from among the values generated at each step
to make the numbers seem more random and to increase the sequence’s repeat
period. That can make programs produce more random-seeming results, but
those methods are still not truly random.

But we can use this to generate a same random values repeatedly with a particular seed and enhancing the experience of debugging.

Another usage is we can use this to store a complex data.

For example:
You have a program generate a route on a map, the program could generate the same route with a same seed. So great news, you just need to store the seed in your database.

### Ensuring Fairness
Usually programs need to use a fair PRNG. A fair PRNG is one that produces all
its possible outputs with the same probability. A PRNG that is unfair is called
biased. For example, a coin that comes up heads two-thirds of the time is biased. (Darn it, I am bad at probability)

Many programming languages have methods that produce random numbers
within any desired range. But if you need to write the code to transform the
PRNG’s values into a specifi c range, you need to be careful to do so in a fair way.

A linear congruential generator produces a number between 0 (inclusive)
and M (exclusive), where M is the modulus used in the generator’s equation (our first equation):

<center>

$X_{n+1} = (A * X_n +B)$ Mod M 

</center>

But we usually need a specific range like 2-10 or 5-10. An obvious but bad way to map **a number produced by the generator** into a range Min to Max is to use the following equation:

<center>

$result = Min + number$ Mod $(Max – Min + 1)$

</center>

So, to get a value between 1 and 100, we would calculate the following:

<center>

$result = 1 + number$ Mod $(100 – 1 + 1)$

</center>

The problem with this is that it may make some results more likely than others.
Let's have a look at a small example, using same values from previous equation just change `M` to `3`, `Min = 0` and `Max = 1` (0-1 is still an acceptable range). Have a look at `linear-fairness.js`, with 100 randomized values, the result of random in range using the previous equation is biased. The number of `0` appear is always twice the number of `1` appear.

In a real PRNG where the modulus M is very large, the problem is smaller, but it’s still present.

A better approach is to convert the value produced by the PRNG into a fraction between 0 and 1 and then multiply that by the desired range, as in the
following formula:

<center>

$result = Min + (number ÷ M) × (Max – Min)$

</center>
Another method of converting a pseudorandom value from one range to
another is to simply ignore any results that fall outside the desired range. In
the previous example, you would use the limited PRNG to generate a value
between 0 and 2. If you get a 2, which is outside the desired range, you ignore
it and get another number.

### Getting Fairness from Biased Sources
Even if a PRNG is unfair, there may be a way to generate fair numbers. For example, suppose you think a coin is unfair. You don't know the probabilities getting heads or tails but you suspect the probabilities are not 0.5. In that case, the following algorithm produces a fair coin flip:
```
Flip the biased coin twice.
  If the result is {Heads, Tails}, return Heads.
  If the result is {Tails, Heads}, return Tails.
  If the result is something else, start over.

```
To see why this works, suppose the probability of the biased coin coming up
heads is P, and the probability of its coming up tails is 1 – P. Then the probability
of getting heads followed by tails is P × (1 – P). The probability of getting tails
followed by heads is (1 – P) × P. The two probabilities are the same, so the prob-
ability of the algorithm returning heads or tails is the same, and the result is fair.

