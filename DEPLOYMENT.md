# Deployment Instructions

This Jekyll academic website uses GitHub Actions to build and deploy the site with Jekyll Scholar support.

## Setup Instructions

### 1. Repository Settings
1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select:
   - **Source**: GitHub Actions
   - **Branch**: Keep as default (master)

### 2. GitHub Actions Workflow
The `.github/workflows/jekyll.yml` file is configured to:
- Use Ruby 2.6.10 for Jekyll Scholar compatibility
- Build the site with Jekyll Scholar (including all publications from BibTeX)
- Deploy automatically to GitHub Pages

### 3. Automatic Deployment
- Every push to the `master` branch triggers a new build and deployment
- The workflow builds the complete site including all publications from `_bibliography/publications.bib`
- Jekyll Scholar generates the publication pages with proper formatting and links

### 4. Local Development
For local development, use Ruby 2.6.x:

```bash
# Install Ruby 2.6.x (use rbenv or rvm)
rbenv install 2.6.10
rbenv local 2.6.10

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve
```

### 5. Adding Publications
1. Add new publications to `_bibliography/publications.bib`
2. Mark selected publications with `selected = {true}`
3. Commit and push - the site will automatically rebuild

### 6. Site Structure
- **Homepage**: Shows selected publications (marked with `selected = {true}`)
- **Publications Page**: Shows all publications grouped by year
- **Bibliography**: Automatically formatted using Jekyll Scholar

### 7. Key Features
- ✅ Full Jekyll Scholar support with GitHub Actions
- ✅ Automatic BibTeX processing and formatting
- ✅ Publication filtering and grouping
- ✅ PDF and code links
- ✅ Responsive design
- ✅ SEO optimization

### 8. Troubleshooting
- Check the **Actions** tab for build logs
- Ensure all BibTeX entries are properly formatted
- Verify Ruby 2.6.x compatibility for any new gems

The site will be available at: `https://trappmartin.github.io`
