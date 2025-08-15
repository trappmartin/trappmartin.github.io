# Personal Website of Martin Trapp

## Quick Start

### Prerequisites

- Ruby 2.6 (to be competable with )
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
- Add news items in `data/news.json`

#### Academic Service
- Edit `service.html` to update your service activities

### Styling
- Main stylesheet: `assets/css/main.css`
- Bootstrap variables can be customized
- Color scheme uses CSS custom properties for easy theming

### Pages
- **Home**: `index.html` - Landing page with profile and highlights
- **Biography**: `biography.html` - Short and long biography
- **Publications**: `publications.html` - List of academic papers
- **Service**: `service.html` - Academic and professional service
- **Contact**: `contact.html` - Contact information

## Contributing

This template is designed to be easily customizable. Feel free to:
- Modify the design and layout
- Add new features and sections
- Improve accessibility and performance
- Share your improvements with the community

## License

This template is provided as-is for academic and personal use. Feel free to modify and distribute according to your needs.

## Credits

- Built with [Jekyll](https://jekyllrb.com/)
- Styled with [Bootstrap 5](https://getbootstrap.com/)
- Icons from [FontAwesome](https://fontawesome.com/)
- Font from [FontSquirrel](https://www.fontsquirrel.com/)

## License
See [License](LICENSE) file.