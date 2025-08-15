---
layout: note
title: "BibTeX Presentation Highlighting Guide"
date: 2024-01-22
category: "documentation"
tags: ["bibtex", "publications", "highlighting"]
summary: "How to mark papers with oral or spotlight presentations in your BibTeX file to enable automatic highlighting with acceptance rates."
---

This website automatically highlights publications that were presented as orals or spotlights at conferences, displaying them with special visual styling and acceptance rates.

## BibTeX Fields

To enable presentation highlighting, add these fields to your BibTeX entries:

### Required Field

```bibtex
presentation = {oral}        % For oral presentations
presentation = {spotlight}   % For spotlight presentations
```

### Optional Field

```bibtex
acceptance_rate = {3.5}     % Acceptance rate as percentage (without % symbol)
```

## Complete Example

```bibtex
@inproceedings{smith2024neurips,
  title={Advanced Neural Network Architectures},
  author={Smith, Jane and Doe, John},
  booktitle={Advances in Neural Information Processing Systems},
  year={2024},
  venue={Neural Information Processing Systems (NeurIPS)},
  type={Conference},
  presentation={oral},
  acceptance_rate={0.8},
  doi={10.1234/neurips2024.example},
  abstract={This paper presents novel approaches...},
  keywords={neural networks, deep learning},
  selected={true}
}
```

## Visual Styling

### Oral Presentations

**Publications Page:**
- **Background**: Light orange/amber background (`bg-warning bg-opacity-10`)
- **Border**: Orange/amber border (`border-warning`)
- **Badge**: Yellow badge with microphone icon and acceptance rate
- **Format**: `🎤 Oral (0.8%)`

**Selected Publications (Index Page):**
- **Left border**: Thick orange/amber stripe (`border-start border-warning border-3`)
- **Badge**: Compact yellow badge with microphone icon

### Spotlight Presentations

**Publications Page:**
- **Background**: Light blue background (`bg-info bg-opacity-10`)
- **Border**: Blue border (`border-info`)
- **Badge**: Blue badge with star icon and acceptance rate
- **Format**: `⭐ Spotlight (3.5%)`

**Selected Publications (Index Page):**
- **Left border**: Thick blue stripe (`border-start border-info border-3`)
- **Badge**: Compact blue badge with star icon

### Regular Publications

- **Background**: White background
- **Border**: Standard gray border
- **No special badges**: Only publication type badge shown

## Acceptance Rate Display

### Format Options

```bibtex
% Percentage with decimal
acceptance_rate = {3.5}    % Displays as "(3.5%)"

% Percentage less than 1%
acceptance_rate = {0.8}    % Displays as "(0.8%)"

% Whole number percentage
acceptance_rate = {5}      % Displays as "(5%)"
```

### Display Rules

- **With acceptance rate**: Badge shows `Oral (3.5%)` or `Spotlight (0.8%)`
- **Without acceptance rate**: Badge shows only `Oral` or `Spotlight`
- **Not shown**: If neither `oral` nor `spotlight` presentation type

## Conference Examples

### Top-Tier ML Conferences

```bibtex
% NeurIPS Oral (very selective)
presentation = {oral}
acceptance_rate = {0.8}

% ICML Spotlight (selective)
presentation = {spotlight}
acceptance_rate = {3.5}

% ICLR Oral (highly selective)
presentation = {oral}
acceptance_rate = {1.2}
```

### Common Acceptance Rates

- **Oral presentations**: Typically 0.5% - 2%
- **Spotlight presentations**: Typically 2% - 5%
- **Poster presentations**: Typically 20% - 30% (no highlighting)

## Best Practices

### 1. Consistent Naming
Use exactly `oral` or `spotlight` (lowercase) for the presentation field.

### 2. Accurate Rates
- Use official conference acceptance rates
- Include decimal places when available
- Don't include the `%` symbol in the field

### 3. Selective Highlighting
Only highlight truly prestigious presentation types:
- **Oral**: Top 1-2% of submissions
- **Spotlight**: Top 3-5% of submissions
- **Poster**: Regular acceptance (no highlighting)

### 4. Documentation
Consider adding a note about what the acceptance rates represent:
```bibtex
note = {Oral presentation acceptance rate for this conference}
```

## Technical Implementation

The highlighting system works through:

1. **BibTeX parsing**: Jekyll-Scholar reads the `presentation` and `acceptance_rate` fields
2. **Template logic**: Liquid conditionals in `_layouts/bib.html` and `_layouts/selected_bib.html`
3. **Bootstrap classes**: Uses Bootstrap's color utilities for consistent styling
4. **Font Awesome icons**: Microphone for orals, star for spotlights

## Troubleshooting

### Common Issues

1. **No highlighting**: Check that `presentation = {oral}` or `presentation = {spotlight}` is exactly as shown
2. **Missing icons**: Ensure Font Awesome is loaded (should be automatic)
3. **Styling issues**: Verify Bootstrap classes are available

### Testing

After adding presentation fields:
1. Run `bundle exec jekyll build`
2. Check the publications page for background highlighting
3. Verify badges show correct acceptance rates
4. Check selected publications on index page for border highlighting

This system makes it easy to showcase your most prestigious publications while maintaining a clean, professional appearance!
