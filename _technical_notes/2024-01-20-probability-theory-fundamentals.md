---
layout: note
title: "Fundamentals of Probability Theory"
date: 2024-01-20
category: "probability"
tags: ["probability", "mathematics", "theory"]
summary: "An overview of fundamental concepts in probability theory, including probability distributions, expectation, and variance with mathematical derivations."
---

This note covers essential concepts in probability theory that form the foundation for understanding machine learning and statistical inference.

## Basic Definitions

A **probability space** is defined by a triple $(\Omega, \mathcal{F}, P)$ where:
- $\Omega$ is the sample space
- $\mathcal{F}$ is the $\sigma$-algebra of events
- $P$ is the probability measure

### Probability Mass Function

For a discrete random variable $X$, the probability mass function (PMF) is defined as:

$$P(X = x) = p_X(x)$$

where $\sum_{x} p_X(x) = 1$ and $p_X(x) \geq 0$ for all $x$.

### Probability Density Function

For a continuous random variable $X$, the probability density function (PDF) satisfies:

$$P(a \leq X \leq b) = \int_a^b f_X(x) \, dx$$

where $\int_{-\infty}^{\infty} f_X(x) \, dx = 1$ and $f_X(x) \geq 0$ for all $x$.

## Expected Value

The **expected value** (or mean) of a random variable $X$ is:

For discrete case:
$$E[X] = \sum_{x} x \cdot P(X = x)$$

For continuous case:
$$E[X] = \int_{-\infty}^{\infty} x \cdot f_X(x) \, dx$$

### Properties of Expectation

1. **Linearity**: $E[aX + bY] = aE[X] + bE[Y]$
2. **Law of Total Expectation**: $E[X] = E[E[X|Y]]$

## Variance

The **variance** of a random variable $X$ is defined as:

$$\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$$

The **standard deviation** is $\sigma_X = \sqrt{\text{Var}(X)}$.

## Common Distributions

### Normal Distribution

A random variable $X$ follows a normal distribution $X \sim \mathcal{N}(\mu, \sigma^2)$ if its PDF is:

$$f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$

### Bernoulli Distribution

A Bernoulli random variable $X \sim \text{Bernoulli}(p)$ has PMF:

$$P(X = k) = \begin{cases} 
p & \text{if } k = 1 \\
1-p & \text{if } k = 0
\end{cases}$$

with $E[X] = p$ and $\text{Var}(X) = p(1-p)$.

## Conditional Probability

Given events $A$ and $B$ with $P(B) > 0$, the conditional probability is:

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

### Bayes' Theorem

One of the most important results in probability theory:

$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

This forms the foundation for Bayesian inference and machine learning.

## Central Limit Theorem

For independent and identically distributed random variables $X_1, X_2, \ldots, X_n$ with mean $\mu$ and variance $\sigma^2$, the sample mean $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i$ converges in distribution to:

$$\sqrt{n}(\bar{X}_n - \mu) \xrightarrow{d} \mathcal{N}(0, \sigma^2)$$

as $n \to \infty$.

## Applications in Machine Learning

These probability theory fundamentals are crucial for:

1. **Maximum Likelihood Estimation**: Finding parameters $\theta$ that maximize $P(D|\theta)$
2. **Bayesian Inference**: Using Bayes' theorem to update beliefs about parameters
3. **Neural Networks**: Understanding gradient descent as stochastic optimization
4. **Uncertainty Quantification**: Modeling prediction uncertainty in machine learning models

The mathematical rigor provided by probability theory ensures that machine learning algorithms have solid theoretical foundations.
