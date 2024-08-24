---
author: Kameron Tanseli
date: '2024-08-24T12:09:59Z'
title: 'Growth: Thinking in systems'
category: 'growth'
byline: "A lot of what we rebranded as growth is just systems thinking applied to business..."
---

> “A system is never the sum of its parts, it's the product of their interaction.” **– Russell Ackoff**

I’ve spent the majority of my life working on growth teams since I first started coding professionally at 16. It was only later on in my career that I was taught growth from a theoretical standpoint; it was more gut intuition and a hacking around that drove many of the experiments and initiatives I was tasked with or worked on over the years.

Now, I find myself upskilling other engineers on how to become Growth Engineers, which presents a conundrum: If growth is mostly driven by gut instinct, how do you teach it to engineers? And more importantly, how do you educate the wider business to adopt a growth mindset?

As I've delved deeper and deeper into growth theory. It becomes apparent a lot of what we rebranded as growth is just [systems thinking](https://en.wikipedia.org/wiki/Systems_thinking) applied to business.

As an engineer, I feel best suited to break apart systems and put them together again, so let me attempt to structure what growth theory really is:

## Linear -> Circular

Everyone loves a funnel. Pirates love funnels ([AARRR](https://www.productplan.com/glossary/aarrr-framework/)). Marketers adore them. But funnels are a narrow way to think about your business. In fact, even in the AARRR framework, referrals are just one step, suggesting that there’s something deeper going on with this funnel concept.

If you were to create a diagram of how everything fits together in your business, it might start to resemble the drawings a crazy homeless guy makes on a dirty window on a busy sidewalk.

![Cycle](/posts/cycle.png)

You slowly nod your head, recognizing that your business is a system of interconnected parts, and you begin to grasp the magnitude of it all. Every part feeds into another, creating a loop that drives your business's growth. Whether it’s clients recommending you to others, people sharing their weight loss progress, or coworkers inviting each other to a chat app, something is fueling this growth loop.

Have you ever heard the phrase, _"The whole is greater than the sum of its parts"?_ I hope so, because that’s exactly what comes next. For a long time, product development focused on creating long, detailed roadmaps for features that customers wanted. These features were often developed in isolation—sometimes they worked out, and sometimes they didn’t.

We are often so focused on solving the isolated problems of a single metric that we forget to consider how a feature fits into the broader system we discussed earlier. For example, let’s say we’re Slack, a chat app where the growth loop is centered around inviting coworkers and messaging (**more people -> more messages -> higher annual plan costs -> increased net revenue retention**).

Customers express a strong desire to have meetings, so as a Product Manager, I take this feedback and create a feature that automatically opens Google Meet from Slack with the people in my Slack channel. While this might be a useful feature for Google Calendar, for Slack, communication outside of its platform could **reduce messages -> fewer invites -> lower annual plan costs -> decreased net revenue retention**. TLDR: I might lose my job because I shipped a feature that people wanted but ultimately hurt the business. Oops.

This isn’t to say that you shouldn’t experiment or challenge the status quo. From a growth perspective, it’s crucial to ensure that your features align with how the wider business grows. If you can’t figure out how your feature leads customers to take actions that drive business growth, it might be time to take it back to the drawing board.

**Think**:
- **For each feature in your product, determine how it contributes to the growth of the wider business. If it doesn’t, find a way to make it contribute.**
  - Try to come up with a simpler way to describe how you grow, for example like Slack:  more people -> more messages -> higher annual plan costs -> Net revenue retention.

### Loops vs Habits

![](/posts/loop.png)

On the topic of circular things, growth loops often get muddled up with habitual loops. ***There is*** a distinct difference between the two:

- **Growth loop** - A circular system where one user’s action affects another user’s behaviour.

- **Habitual loop** - A circular system where one user’s action encourages them to repeat that action, driven by variable rewards and triggers.

Everyone likes to use Dropbox as an example of a growth loop, but I’m not going to be that basic. Instead, let’s talk about one of my favorite growth loops: MyFitnessPal.

At MyFitnessPal, they’ve mastered both a growth loop and a habitual loop:

- **Growth loop** - *More food tracking -> More coverage of food products in their database -> Easier food logging for other users -> More food tracking.*
- **Habitual loop** - *Eat a meal (trigger) -> Food tracking (action) -> Weight loss (variable reward) -> Improved intrinsic motivation (outcome)  -> More food tracking (action)*


Weight loss is actually a variable reward in itself. As it fluctuates throughout the months, it can provide moments of pleasure (reward) and pain (motivation).

**Think:**
- **What variable rewards could you provide in exchange for the actions you want the user to perform?**
  - Monetary ($$$), status (likes), 


## Network effects

This one is straightforward, given we’ve already covered growth loops. Essentially, the most valuable businesses of the 21st century have built networks where customers can interact with one another. This creates a defensive moat against switching to competitors, facilitates cheap growth, and enhances the product for every new user acquired.

![Network effect](/posts/network.png)

LinkedIn is **the** social platform for work. You’ve probably never heard of its competitors (e.g., [Jobcase](https://www.jobcase.com/)), and why would you? LinkedIn is where all the working professionals are. This is a sign of a strong network effect at play, establishing the kind of monopoly that Peter Thiel often talks about.

Spotify, on the other hand, has a network effect through its user-generated playlists, which allow for sharing and create data lock-in, making it harder to switch to Apple Music. However, this network effect isn’t strong enough to completely prevent Apple Music from gaining market share.

If you want to go deeper on network effects, I recommend Andrew Chen’s [Cold Start Problem](https://a16z.com/books/the-cold-start-problem/).

**Think**
- **If I suddenly had 1M users tomorrow what features would be 1M times better than they are now?**
  - MyFitnessPal’s calorie database would have more than 10m entries if they suddently acquired 1m users overnight. What would yours have?
- **How does one customer “talk” to another?**
  - Users on Spotify create and share playlists that you can find via their search page. 

## Emergence

Speaking about human behavior gives me the urge to do a TED talk. It can feel presumptuous, and sometimes even degrading, to reduce our complex minds to a flock of birds. Yet, it's one of the best analogies for understanding emergence in our own daily lives.

![Birds](/posts/birds.png)

Complex systems tend to self-organize, spontaneously forming patterns or structures without external guidance or control. Any single bird can fly in any direction it wants, yet they all fly together as a flock. When a complex system forms a pattern, we call it emergent behavior because it arises from seemingly incomprehensible complexity.

Each bird in that flock is acting out of its own self-interest. It's self-governed; no one has programmed it to work this way (shoutout to the "birds aren't real" crowd). It's simply the result of each bird's deepest desires—to find a mate and stay safe from predators.

When we open Instagram and post a picture of our six-pack after a workout at the gym, we do that because we crave admiration and, perhaps, to attract a mate (fun fact: there are 91 million posts tagged with #weightloss on Instagram).

We are independent, of course, yet we all seem to follow similar routines: we get up, brush our teeth, shower, get dressed, go to work, drink coffee, buy a "live-laugh-love" mug for our mum, go home, watch Netflix, and sleep.

It should be no surprise, then, that the summation of all these little habits—whether driven by social pressure or other motivations—leads to observable patterns of behavior on a global scale. This is emergence: you couldn’t possibly draw a diagram of how everyone lives their lives, but you can identify patterns in how we all do everything.

**Think:**
- **What are your users up to outside of your platform that you could incentivise and be a part of?** 
  - Loads of people share quotes, so if you run a blog could you offer Instagram-sized quote images that people can easily copy and share?
- **Are your customers using a feature in an unexpected way?**
  - Slack was started because customers preferred the instant messaging part of the game, rather than the game itself.


### Pull with the market. Don’t push.

Changing people's behavior is incredibly hard and often near impossible. Many people look to the launch of the iPhone as an example of behavior change, but it's important to understand that Steve Jobs wasn't aiming to change the way we do things. He was focused on enhancing the way we do things.

![iPhone](/posts/iphone.png)

We were all already accustomed to messaging each other, sending photos, listening to music, browsing the internet, and consuming content—long before the iPhone launched. Steve Jobs didn’t set out to change these behaviors; he aimed to enhance them. He made these activities easier and more accessible than the competition. He enlarged the screen to allow us to take in more information, making the phone aesthetically appealing because we value the status it gives us. He removed physical buttons, as a virtual keyboard was sufficient.

None of this was about forcing customers to change how they work or behave. It was simply a 10x better way to do what they were already doing.

Often, you'll find customers using your product in unexpected ways. Let them — people will often try to retrofit your solution to fit their existing workflows. At Numan, for example, we noticed that customers were price-hopping between vendors. So, when we offered them an alternative way to save money, they quickly adopted it.

In the case of AI (as it's a trendy topic), many startups are beginning to realize that, while AI is indeed groundbreaking, it must fit seamlessly into our existing behaviors, or it risks being forgotten. This is why Google is so concerned about ChatGPT. We're accustomed to searching for information and taking the first result — ChatGPT accomplishes the same task, but faster. We used to Google specific websites to format text or validate JSON; now, we simply paste it into ChatGPT. The behaviors remain the same, but they're carried out more efficiently.

**Think:**
- **Am I pulling or pushing against the market?**
  - Am I forcing my opinion of how they should work or am I complementing how they work already?


## Go forth and grow

> “We can’t impose our will on a system. We can listen to what the system tells us, and discover how its properties and our values can work together to bring forth something much better than could ever be produced by our will alone.” **― Donella H. Meadows**



