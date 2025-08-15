---
layout: note
title: "LaTeX Usage Guide for This Website"
date: 2024-01-21
category: "documentation"
tags: ["latex", "documentation", "mathematics"]
summary: "Complete guide on how to use LaTeX mathematical expressions in technical notes and content on this Jekyll website."
---

This website supports LaTeX mathematical expressions using **MathJax 3**, allowing you to write beautiful mathematical content in your technical notes and pages.

## Basic LaTeX Syntax

### Inline Mathematics

Use single dollar signs `$...$` or `\(...\)` for inline math expressions:

- `$x = y + z$` renders as: $x = y + z$
- `The equation $E = mc^2$` renders as: The equation $E = mc^2$
- `\(a^2 + b^2 = c^2\)` renders as: \(a^2 + b^2 = c^2\)

### Display Mathematics

Use double dollar signs `$$...$$` or `\[...\]` for centered display equations:

```latex
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

Renders as:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

## Common Mathematical Expressions

### Fractions

```latex
$\frac{a}{b}$ or $\frac{numerator}{denominator}$
```

Examples:
- $\frac{1}{2}$ 
- $\frac{x^2 + 1}{x - 1}$

### Superscripts and Subscripts

```latex
$x^2$, $x_i$, $x^{2n+1}$, $x_{i,j}$
```

Examples:
- $x^2$ (superscript)
- $x_i$ (subscript)
- $x^{2n+1}$ (complex superscript)
- $x_{i,j}$ (complex subscript)

### Greek Letters

Common Greek letters used in mathematics:

- Alpha: $\alpha$, $\Alpha$ (`\alpha`, `\Alpha`)
- Beta: $\beta$, $\Beta$ (`\beta`, `\Beta`)
- Gamma: $\gamma$, $\Gamma$ (`\gamma`, `\Gamma`)
- Delta: $\delta$, $\Delta$ (`\delta`, `\Delta`)
- Epsilon: $\epsilon$, $\varepsilon$ (`\epsilon`, `\varepsilon`)
- Theta: $\theta$, $\Theta$ (`\theta`, `\Theta`)
- Lambda: $\lambda$, $\Lambda$ (`\lambda`, `\Lambda`)
- Mu: $\mu$ (`\mu`)
- Pi: $\pi$, $\Pi$ (`\pi`, `\Pi`)
- Sigma: $\sigma$, $\Sigma$ (`\sigma`, `\Sigma`)
- Phi: $\phi$, $\Phi$ (`\phi`, `\Phi`)
- Omega: $\omega$, $\Omega$ (`\omega`, `\Omega`)

### Mathematical Operators

```latex
$\sum_{i=1}^{n}$, $\prod_{i=1}^{n}$, $\int_{a}^{b}$, $\lim_{x \to \infty}$
```

Examples:
- $\sum_{i=1}^{n} x_i$ (summation)
- $\prod_{i=1}^{n} x_i$ (product)
- $\int_{a}^{b} f(x) dx$ (integral)
- $\lim_{x \to \infty} f(x)$ (limit)

### Matrices and Arrays

```latex
$$\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}$$
```

Renders as:

$$\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}$$

Other matrix types:
- `\begin{pmatrix}...\end{pmatrix}` for parentheses: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$
- `\begin{vmatrix}...\end{vmatrix}` for determinants: $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$

### Probability and Statistics

Common notation for probability and statistics:

- Probability: $P(X = x)$, $P(A \cap B)$, $P(A | B)$
- Expectation: $E[X]$, $\mathbb{E}[X]$
- Variance: $\text{Var}(X)$, $\sigma^2$
- Distributions: $X \sim \mathcal{N}(\mu, \sigma^2)$, $Y \sim \text{Bernoulli}(p)$

### Calculus

```latex
$\frac{d}{dx}$, $\frac{\partial}{\partial x}$, $\nabla$
```

Examples:
- $\frac{d}{dx} f(x)$ (derivative)
- $\frac{\partial f}{\partial x}$ (partial derivative)
- $\nabla f$ (gradient)
- $\frac{d^2}{dx^2} f(x)$ (second derivative)

## Advanced Features

### Aligned Equations

```latex
$$\begin{align}
f(x) &= ax^2 + bx + c \\
&= a(x + \frac{b}{2a})^2 + c - \frac{b^2}{4a}
\end{align}$$
```

Renders as:

$$\begin{align}
f(x) &= ax^2 + bx + c \\
&= a(x + \frac{b}{2a})^2 + c - \frac{b^2}{4a}
\end{align}$$

### Cases

```latex
$$f(x) = \begin{cases}
1 & \text{if } x > 0 \\
0 & \text{if } x = 0 \\
-1 & \text{if } x < 0
\end{cases}$$
```

Renders as:

$$f(x) = \begin{cases}
1 & \text{if } x > 0 \\
0 & \text{if } x = 0 \\
-1 & \text{if } x < 0
\end{cases}$$

### Custom Commands

You can define custom commands for frequently used expressions:

```latex
$$\newcommand{\R}{\mathbb{R}}$$
$$\newcommand{\norm}[1]{\left\lVert#1\right\rVert}$$
```

Then use them:
- $x \in \R^n$ (real numbers)
- $\norm{x}$ (norm of x)

## Machine Learning Specific Notation

### Neural Networks

```latex
$$h_{\theta}(x) = \sigma(\theta^T x + b)$$
$$\mathcal{L}(\theta) = \frac{1}{m} \sum_{i=1}^m \ell(h_{\theta}(x^{(i)}), y^{(i)})$$
```

Renders as:
$$h_{\theta}(x) = \sigma(\theta^T x + b)$$
$$\mathcal{L}(\theta) = \frac{1}{m} \sum_{i=1}^m \ell(h_{\theta}(x^{(i)}), y^{(i)})$$

### Optimization

```latex
$$\theta^* = \arg\min_{\theta} \mathcal{L}(\theta)$$
$$\theta_{t+1} = \theta_t - \alpha \nabla_{\theta} \mathcal{L}(\theta_t)$$
```

Renders as:
$$\theta^* = \arg\min_{\theta} \mathcal{L}(\theta)$$
$$\theta_{t+1} = \theta_t - \alpha \nabla_{\theta} \mathcal{L}(\theta_t)$$

## Best Practices

### 1. Consistent Notation
- Use consistent symbols throughout your document
- Define variables when first introduced
- Use standard mathematical conventions

### 2. Readable Spacing
- Use `\,` for thin space: $\int f(x) \, dx$
- Use `\quad` for medium space in equations
- Use `\qquad` for larger spacing

### 3. Proper Text in Math Mode
- Use `\text{...}` for normal text: $P(\text{success}) = 0.8$
- Use `\mathrm{...}` for upright math text: $\mathrm{d}x$

### 4. Escaping Special Characters
If you need to use special characters outside of math mode, escape them:
- `\$` for literal dollar sign
- `\_` for literal underscore in text

## Troubleshooting

### Common Issues

1. **Equations not rendering**: Check for unmatched dollar signs or brackets
2. **Syntax errors**: Ensure proper LaTeX syntax (use online LaTeX validators)
3. **Conflicting markdown**: Some markdown processors may interfere with LaTeX

### Testing Equations

You can test your LaTeX equations online before adding them to your notes:
- [LaTeX Live Editor](https://www.latex-live.com/)
- [MathJax Demo](https://www.mathjax.org/#demo)

## Examples in Technical Notes

This website's technical notes contain many examples of LaTeX usage:

1. **Probability Theory Fundamentals**: Extensive use of probability notation
2. **Gradient Descent Variants**: Optimization algorithms with mathematical formulations
3. **Bayesian Neural Networks**: Advanced probability and neural network notation

Feel free to explore these notes for more examples and inspiration for your own mathematical content!

## Configuration Details

This website uses **MathJax 3** with the following configuration:
- Inline delimiters: `$...$` and `\(...\)`
- Display delimiters: `$$...$$` and `\[...\]`
- TeX input with CommonHTML output
- Automatic equation numbering disabled (can be enabled if needed)

The LaTeX rendering is styled to match the website's gray color scheme and responsive design.
