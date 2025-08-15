#!/usr/bin/env ruby

require 'json'

# Simple BibTeX parser for GitHub Pages compatibility
def parse_bibtex_file(file_path)
  publications = []
  
  File.read(file_path).scan(/@(\w+)\{([^,]+),\s*(.*?)\n\}/m) do |type, key, content|
    next if type == 'comment'
    
    pub = {
      'type' => type,
      'key' => key,
      'year' => extract_field(content, 'year'),
      'title' => clean_field(extract_field(content, 'title')),
      'author' => clean_field(extract_field(content, 'author')),
      'booktitle' => clean_field(extract_field(content, 'booktitle')),
      'journal' => clean_field(extract_field(content, 'journal')),
      'venue' => clean_field(extract_field(content, 'venue')),
      'pages' => extract_field(content, 'pages'),
      'volume' => extract_field(content, 'volume'),
      'number' => extract_field(content, 'number'),
      'publisher' => clean_field(extract_field(content, 'publisher')),
      'pdf' => extract_field(content, 'pdf'),
      'code' => extract_field(content, 'code'),
      'abstract' => clean_field(extract_field(content, 'abstract')),
      'keywords' => extract_field(content, 'keywords'),
      'doi' => extract_field(content, 'doi'),
      'url' => extract_field(content, 'url'),
      'selected' => extract_field(content, 'selected') == 'true',
      'presentation' => extract_field(content, 'presentation'),
      'acceptance_rate' => extract_field(content, 'acceptance_rate')
    }
    
    # Clean up empty fields
    pub.reject! { |k, v| v.nil? || v.empty? }
    
    publications << pub
  end
  
  # Sort by year (descending)
  publications.sort_by { |pub| -(pub['year'].to_i) }
end

def extract_field(content, field_name)
  # Match field = {content} or field = "content"
  match = content.match(/#{field_name}\s*=\s*[{"](.*?)["}](?:,|\s*$)/m)
  return match[1].strip if match
  nil
end

def clean_field(text)
  return nil if text.nil?
  
  # Remove LaTeX commands and clean up text
  text.gsub(/\\[a-zA-Z]+\{([^}]*)\}/, '\1')  # Remove \command{text}
      .gsub(/\\[a-zA-Z]+/, '')               # Remove \command
      .gsub(/\{([^}]*)\}/, '\1')             # Remove {text}
      .gsub(/--/, '–')                       # Convert -- to en-dash
      .gsub(/\s+/, ' ')                      # Normalize whitespace
      .strip
end

# Parse the BibTeX file
bib_file = '_bibliography/publications.bib'
if File.exist?(bib_file)
  publications = parse_bibtex_file(bib_file)
  
  # Write to JSON file
  json_file = '_data/publications.json'
  File.write(json_file, JSON.pretty_generate(publications))
  
  puts "Converted #{publications.length} publications from #{bib_file} to #{json_file}"
else
  puts "Error: #{bib_file} not found"
  exit 1
end
