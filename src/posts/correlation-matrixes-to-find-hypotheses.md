---
author: Kameron Tanseli
date: '2021-10-10T13:52:20Z'
title: 'Creating correlation matrixes to generate hypotheses'
category: 'growth'
byline: "Utilizing the Pearson Correlation Coefficient in order to identify correlated matrixes to create hypotheses."
---

Often a startup will offer multiple features, like task management, video calls, messaging, etc. 

As a data scientist or growth engineer, you're always on the hunt for causal relationships as they can be optimized to drive results. In order to find casual relationships, you often have to first find correlated metrics and then run randomized controlled experiments to determine if the two are indeed casual or not.

Take this correlation matrix below:

![Correlation Matrix Example](/static/correlation-matrix.jpeg)

Where 1 is perfect correlation (i.e: impossible or it's the same metric), and where -1 is absolutely no correlation.

We can see that the final exam score and hours spent studying have a high correlation of 82%. On the flip side, it might surprise you that hours spent sleeping and exam score were not highly correlated. It's only an example but it shows the learnings you can derive from the matrix.

## How do you calculate correlation?

In statistics, the Pearson correlation coefficient is a measure of linear correlation between two sets of data. In even simpler terms it measures the closeness of movement between two linear datasets.

You can calculate it using the formula below:

![Coefficient](/static/coefficient.gif)

### Example: Tasks created versus Messages Sent

Take this dataset, where each week we calculate the total number of tasks and messages created:

| Week | Tasks created (x) | Messages sent (y) |
|------|-------------------|-------------------|
| 1    | 20                | 7                 |
| 2    | 24                | 8                 |
| 3    | 22                | 9                 |
| 4    | 27                | 12                |
| 5    | 21                | 7                 |
| 6    | 23                | 8                 |

1) First step is to make a new column called xy which is the multiplication of x and y:

| Week | Tasks created (x) | Messages sent (y) | xy  |
|------|-------------------|-------------------|-----|
| 1    | 20                | 7                 | 140 |
| 2    | 24                | 8                 | 192 |
| 3    | 22                | 9                 | 198 |
| 4    | 27                | 12                | 324 |
| 5    | 21                | 7                 | 147 |
| 6    | 23                | 8                 | 184 |

2) Next, we created an x<sup>2</sup> column, where we square the result of tasks created (x):

| Week | Tasks created (x) | Messages sent (y) | xy  | x^2 |
|------|-------------------|-------------------|-----|-----|
| 1    | 20                | 7                 | 140 | 400 |
| 2    | 24                | 8                 | 192 | 576 |
| 3    | 22                | 9                 | 198 | 484 |
| 4    | 27                | 12                | 324 | 729 |
| 5    | 21                | 7                 | 147 | 441 |
| 6    | 23                | 8                 | 184 | 529 |

3) The same for y<sup>2</sup>:

| Week | Tasks created (x) | Messages sent (y) | xy  | x^2 | y^2 |
|------|-------------------|-------------------|-----|-----|-----|
| 1    | 20                | 7                 | 140 | 400 | 49  |
| 2    | 24                | 8                 | 192 | 576 | 64  |
| 3    | 22                | 9                 | 198 | 484 | 81  |
| 4    | 27                | 12                | 324 | 729 | 144 |
| 5    | 21                | 7                 | 147 | 441 | 49  |
| 6    | 23                | 8                 | 184 | 529 | 64  |

4) Then we simply add up all of the numbers in the columns and put the result at the bottom of the column. The Greek letter sigma (Σ) is a short way of saying “sum of” or summation.

| Week | Tasks created (x) | Messages sent (y) | xy    | x^2   | y^2 |
|------|-------------------|-------------------|-------|-------|-----|
| 1    | 20                | 7                 | 140   | 400   | 49  |
| 2    | 24                | 8                 | 192   | 576   | 64  |
| 3    | 22                | 9                 | 198   | 484   | 81  |
| 4    | 27                | 12                | 324   | 729   | 144 |
| 5    | 21                | 7                 | 147   | 441   | 49  |
| 6    | 23                | 8                 | 184   | 529   | 64  |
| Σ    | 137               | 51                | 1,185 | 3,159 | 451 |

5) Then we can now calculate the correlation coefficient between x and y:

![Coefficient](/static/coefficient.gif)

```
n = sample size (which in our case is 6 rows)
Σx = 137
Σy = 51
Σxy = 1185
Σx^2 = 3159
Σy^2 = 451

R = (6 * 1185 - 137 * 51) / sqrt(
  (6 * 3159 - 137^2) * (6 * 451 - 51^2 )
) = 0.88 (88%)

```

88% signifies quite a high correlation between tasks created and messages sent. From here we can develop our own hypotheses for why this might be:

* Do users who create new tasks then message other users to talk about the task?
* Is there an issue with our data collection where a task will trigger a message?
* If we reduce the number of tasks being created will that also reduce messages sent?
* Etc etc.

Remember kids: [Correlation does not mean causation](https://www.theguardian.com/science/blog/2012/jan/06/correlation-causation). Use [randomized controlled AB experiments](https://hbr.org/2017/06/a-refresher-on-ab-testing) to determine the casual relationship of the two metrics.