# Academic Jekyll Website

A professional Jekyll website template designed for academics, featuring Bootstrap 5 for responsive design and modern UI components.

## Features

- **Responsive Design**: Built with Bootstrap 5 for mobile-first responsive design
- **Academic Focus**: Tailored for researchers and academics with dedicated sections for:
  - Publications with filtering and detailed pages
  - Academic service and professional activities
  - Research highlights and news updates
  - Contact information and office hours
- **SEO Optimized**: Includes Jekyll SEO tag and sitemap generation
- **Modern UI**: Clean, professional design with Bootstrap icons
- **BibTeX Integration**: Publications managed through standard BibTeX files using jekyll-scholar
- **Contact Form**: Interactive contact form with validation

## Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Bundler gem
- Git

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd jekyll
   ```

3. Install dependencies:
   ```bash
   bundle install
   ```

4. Build and serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

5. Open your browser and navigate to `http://localhost:4000`

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title, description, and URL
- Author information and contact details
- Social media links
- Navigation menu items

### Content Management

#### Profile Information
- Update author details in `_config.yml`
- Replace `assets/images/profile.jpg` with your photo

#### Publications
- Publications are managed through BibTeX in `_bibliography/publications.bib`
- Simply add new entries to the BibTeX file with standard academic format
- Supports DOI, PDF links, code repositories, and other metadata
- Publications are automatically formatted and sorted by year

#### News and Updates
- Add news items in `_news/` directory
- Files are automatically sorted by date

#### Research Highlights
- Add research areas in `_research/` directory
- Include title, description, and icon information

#### Academic Service
- Edit `service.html` to update your service activities
- Organized by categories (editorial, conferences, organizations, etc.)

### Styling

- Main stylesheet: `assets/css/main.css`
- Bootstrap variables can be customized
- Color scheme uses CSS custom properties for easy theming

### Pages

- **Home**: `index.html` - Landing page with profile and highlights
- **Publications**: `publications.html` - Filterable list of academic papers
- **Service**: `service.html` - Academic and professional service
- **Contact**: `contact.html` - Contact form and information

## Deployment

### GitHub Pages

1. Push your site to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)

### Other Platforms

The site can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Traditional web hosting

Build the site for production:
```bash
bundle exec jekyll build
```

The generated site will be in the `_site` directory.

## Customization Tips

### Adding New Pages

1. Create a new HTML or Markdown file
2. Add front matter with layout and title
3. Update navigation in `_layouts/default.html`

### Modifying the Contact Form

The contact form is currently set up for demonstration. To make it functional:
1. Choose a form processing service (Formspree, Netlify Forms, etc.)
2. Update the form action in `contact.html`
3. Configure any necessary API keys or settings

### SEO and Analytics

- SEO tags are included via `jekyll-seo-tag` plugin
- Add Google Analytics by including tracking code in `_layouts/default.html`
- Update social media meta tags in `_config.yml`

## File Structure

```
├── _config.yml           # Site configuration
├── _layouts/             # Page templates
│   ├── default.html      # Main layout with navigation
│   ├── page.html         # Standard page layout
│   └── publication.html  # Publication detail layout
├── _bibliography/        # BibTeX files for publications
├── _news/                # News and updates
├── _research/            # Research highlights
├── assets/
│   ├── css/main.css      # Custom styles
│   └── images/           # Images and media
├── index.html            # Home page
├── publications.html     # Publications listing
├── service.html          # Academic service
├── contact.html          # Contact page
├── Gemfile               # Ruby dependencies
└── README.md            # This file
```

## Contributing

This template is designed to be easily customizable. Feel free to:
- Modify the design and layout
- Add new features and sections
- Improve accessibility and performance
- Share your improvements with the community

## License

This template is provided as-is for academic and personal use. Feel free to modify and distribute according to your needs.

## Support

For questions about Jekyll:
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Jekyll GitHub Repository](https://github.com/jekyll/jekyll)

For Bootstrap questions:
- [Bootstrap Documentation](https://getbootstrap.com/docs/)

## Credits

- Built with [Jekyll](https://jekyllrb.com/)
- Styled with [Bootstrap 5](https://getbootstrap.com/)
- Icons from [Bootstrap Icons](https://icons.getbootstrap.com/)
