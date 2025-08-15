---
title: "Introduction to Bayesian Neural Networks"
date: 2023-11-20
category: "probabilistic ml"
tags: ["bayesian", "neural networks", "uncertainty", "variational inference"]
summary: "An introduction to Bayesian neural networks, covering uncertainty quantification and variational inference techniques."
---

# Introduction to Bayesian Neural Networks

Bayesian Neural Networks (BNNs) extend traditional neural networks by placing probability distributions over weights, enabling principled uncertainty quantification.

## Motivation

Standard neural networks provide point estimates but lack uncertainty quantification:

- **Overconfident predictions**: No measure of prediction uncertainty
- **Limited robustness**: Sensitive to out-of-distribution data
- **No principled way to incorporate prior knowledge**

BNNs address these issues by treating weights as random variables.

## Bayesian Framework

### Prior Distribution
Place a prior distribution over network weights:

$$p(\mathbf{w}) = \prod_{i} \mathcal{N}(w_i | 0, \sigma_p^2)$$

### Likelihood
For regression with Gaussian noise:

$$p(\mathbf{y} | \mathbf{X}, \mathbf{w}) = \prod_{n=1}^N \mathcal{N}(y_n | f(\mathbf{x}_n, \mathbf{w}), \sigma_n^2)$$

### Posterior Distribution
By Bayes' theorem:

$$p(\mathbf{w} | \mathcal{D}) = \frac{p(\mathcal{D} | \mathbf{w}) p(\mathbf{w})}{p(\mathcal{D})}$$

where $\mathcal{D} = \{(\mathbf{x}_n, y_n)\}_{n=1}^N$ is the training data.

## Prediction with Uncertainty

For a new input $\mathbf{x}^*$, the predictive distribution is:

$$p(y^* | \mathbf{x}^*, \mathcal{D}) = \int p(y^* | \mathbf{x}^*, \mathbf{w}) p(\mathbf{w} | \mathcal{D}) d\mathbf{w}$$

This integral is generally intractable, requiring approximation methods.

## Approximation Methods

### 1. Variational Inference

Approximate the posterior with a simpler distribution $q(\mathbf{w} | \boldsymbol{\theta})$:

$$\text{minimize } \text{KL}[q(\mathbf{w} | \boldsymbol{\theta}) || p(\mathbf{w} | \mathcal{D})]$$

This is equivalent to maximizing the Evidence Lower Bound (ELBO):

$$\mathcal{L}(\boldsymbol{\theta}) = \mathbb{E}_{q(\mathbf{w})}[\log p(\mathcal{D} | \mathbf{w})] - \text{KL}[q(\mathbf{w} | \boldsymbol{\theta}) || p(\mathbf{w})]$$

### 2. Mean-Field Variational Inference

Assume factorized Gaussian posterior:

$$q(\mathbf{w} | \boldsymbol{\theta}) = \prod_{i} \mathcal{N}(w_i | \mu_i, \sigma_i^2)$$

Parameters $\boldsymbol{\theta} = \{\mu_i, \sigma_i\}$ are learned via gradient descent.

### 3. Monte Carlo Dropout

Interpret dropout as approximate Bayesian inference:

- Keep dropout active during inference
- Multiple forward passes give samples from approximate posterior
- Simple to implement but limited theoretical justification

## Implementation: Bayes by Backprop

The reparameterization trick enables gradient-based optimization:

$$w_i = \mu_i + \sigma_i \odot \epsilon_i$$

where $\epsilon_i \sim \mathcal{N}(0, 1)$.

### Algorithm:
1. Sample $\epsilon \sim \mathcal{N}(0, \mathbf{I})$
2. Compute weights: $\mathbf{w} = \boldsymbol{\mu} + \boldsymbol{\sigma} \odot \epsilon$
3. Forward pass: $f(\mathbf{x}, \mathbf{w})$
4. Compute ELBO loss
5. Backpropagate and update $\boldsymbol{\mu}$ and $\boldsymbol{\sigma}$

## Types of Uncertainty

BNNs can capture two types of uncertainty:

### Aleatoric Uncertainty (Data Uncertainty)
- Inherent noise in observations
- Cannot be reduced with more data
- Captured by likelihood function

### Epistemic Uncertainty (Model Uncertainty)
- Uncertainty about model parameters
- Can be reduced with more data
- Captured by posterior distribution over weights

## Practical Considerations

### Computational Cost
- Training: ~2x slower than standard NNs
- Inference: Multiple forward passes needed
- Memory: Store mean and variance for each weight

### Hyperparameter Selection
- Prior variance $\sigma_p^2$: Controls regularization strength
- Number of samples: Trade-off between accuracy and speed
- Learning rate scheduling: Often requires careful tuning

### Calibration
BNN predictions may not be well-calibrated. Techniques:
- Temperature scaling
- Platt scaling
- Isotonic regression

## Advanced Topics

### Structured Variational Inference
- Matrix-variate distributions
- Low-rank approximations
- Normalizing flows

### Deep Gaussian Processes
- Infinite-width BNN limit
- Compositional uncertainty
- Non-parametric flexibility

### Functional Variational Inference
- Directly approximate function space
- Avoid weight space pathologies
- Connection to Gaussian processes

## Applications

1. **Medical Diagnosis**: Uncertainty-aware predictions
2. **Autonomous Driving**: Safety-critical decisions
3. **Scientific Discovery**: Quantifying experimental uncertainty
4. **Active Learning**: Query selection based on uncertainty
5. **Robust Optimization**: Handling distributional shifts

## Code Example (PyTorch)

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class BayesianLinear(nn.Module):
    def __init__(self, in_features, out_features, prior_var=1.0):
        super().__init__()
        self.in_features = in_features
        self.out_features = out_features
        self.prior_var = prior_var
        
        # Weight parameters
        self.weight_mu = nn.Parameter(torch.zeros(out_features, in_features))
        self.weight_rho = nn.Parameter(torch.zeros(out_features, in_features))
        
        # Bias parameters
        self.bias_mu = nn.Parameter(torch.zeros(out_features))
        self.bias_rho = nn.Parameter(torch.zeros(out_features))
        
    def forward(self, x):
        # Sample weights
        weight_var = torch.log1p(torch.exp(self.weight_rho))
        weight = self.weight_mu + weight_var * torch.randn_like(weight_var)
        
        # Sample bias
        bias_var = torch.log1p(torch.exp(self.bias_rho))
        bias = self.bias_mu + bias_var * torch.randn_like(bias_var)
        
        return F.linear(x, weight, bias)
```

## References

- Blundell, C., et al. (2015). Weight uncertainty in neural networks.
- Gal, Y., & Ghahramani, Z. (2016). Dropout as a Bayesian approximation.
- Kingma, D. P., et al. (2015). Variational dropout and the local reparameterization trick.
