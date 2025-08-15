---
title: "A Comparison of Gradient Descent Variants"
date: 2024-01-15
category: "optimization"
tags: ["gradient descent", "optimization", "machine learning"]
summary: "An in-depth comparison of different gradient descent optimization algorithms including SGD, Adam, and RMSprop."
---

# A Comparison of Gradient Descent Variants

Gradient descent and its variants are fundamental optimization algorithms in machine learning. This note provides a comprehensive comparison of the most commonly used variants.

## Standard Gradient Descent (GD)

The basic gradient descent algorithm updates parameters using the full dataset:

$$\theta_{t+1} = \theta_t - \eta \nabla_\theta J(\theta_t)$$

where:
- $\theta_t$ are the parameters at iteration $t$
- $\eta$ is the learning rate
- $J(\theta)$ is the cost function

### Advantages:
- Guaranteed convergence to global minimum for convex functions
- Stable convergence

### Disadvantages:
- Computationally expensive for large datasets
- Can get stuck in local minima for non-convex functions

## Stochastic Gradient Descent (SGD)

SGD updates parameters using individual training examples:

$$\theta_{t+1} = \theta_t - \eta \nabla_\theta J(\theta_t; x^{(i)}, y^{(i)})$$

### Advantages:
- Much faster per iteration
- Can escape local minima due to noise
- Online learning capability

### Disadvantages:
- High variance in parameter updates
- May not converge to exact minimum

## Mini-batch Gradient Descent

A compromise between GD and SGD, using small batches of data:

$$\theta_{t+1} = \theta_t - \eta \nabla_\theta J(\theta_t; x^{(i:i+n)}, y^{(i:i+n)})$$

### Advantages:
- Reduces variance compared to SGD
- More efficient than full GD
- Can leverage vectorization

## Momentum

Momentum helps accelerate SGD in relevant directions and dampens oscillations:

$$v_t = \gamma v_{t-1} + \eta \nabla_\theta J(\theta_t)$$
$$\theta_{t+1} = \theta_t - v_t$$

where $\gamma$ is typically set to 0.9.

## Adam (Adaptive Moment Estimation)

Adam combines the advantages of two other extensions of SGD: AdaGrad and RMSprop.

$$m_t = \beta_1 m_{t-1} + (1-\beta_1) \nabla_\theta J(\theta_t)$$
$$v_t = \beta_2 v_{t-1} + (1-\beta_2) (\nabla_\theta J(\theta_t))^2$$

$$\hat{m}_t = \frac{m_t}{1-\beta_1^t}$$
$$\hat{v}_t = \frac{v_t}{1-\beta_2^t}$$

$$\theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t$$

### Default hyperparameters:
- $\beta_1 = 0.9$
- $\beta_2 = 0.999$
- $\epsilon = 10^{-8}$

## Practical Recommendations

1. **Start with Adam**: Generally works well out of the box
2. **Try SGD with momentum**: Often achieves better final performance
3. **Tune learning rate**: Most important hyperparameter
4. **Consider learning rate scheduling**: Decay over time

## Implementation Notes

When implementing these algorithms, consider:

- **Numerical stability**: Add small epsilon values to prevent division by zero
- **Memory efficiency**: Some algorithms require additional memory for momentum terms
- **Convergence criteria**: Define appropriate stopping conditions

## References

- Kingma, D. P., & Ba, J. (2014). Adam: A method for stochastic optimization.
- Ruder, S. (2016). An overview of gradient descent optimization algorithms.
