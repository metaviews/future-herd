---
layout: layouts/knowledge.njk
tags: ["knowledge"]
eleventyExcludeFromCollections: false

# Required
title: "Knowledge Title"
date: YYYY-MM-DD
abstract: "One sentence abstract for listings and previews."

# Strongly recommended
subtitle: "Optional subtitle that clarifies scope or format."
themes:
  - Theme 1
  - Theme 2
  - Theme 3

# Visuals
image: "/assets/img/knowledge/your-image.png"
imageAlt: "Descriptive alt text for the image"

# Optional display/credit
imageCaption: "Optional caption or credit."

# Optional cross-linking to episodes (use slugs that exist)
relatedEpisodes:
  - episode-XXX
  - episode-YYY

# Optional structured links (render as a reference list)
links:
  - title: "Primary source / official page"
    url: "https://example.com"
  - title: "Supporting reference"
    url: "https://example.org"

# Optional metadata (useful for filtering later)
kind: "policy-brief" # e.g. concept, framework, pattern, signal, policy-brief, glossary, tool, case-study
status: "draft"      # e.g. draft, working, published
---
## Overview

One or two short paragraphs:
- What is this knowledge entry?
- Why does it matter now?

## Core idea

State the core claim in plain language. If there’s a “big idea,” name it.

## Key points
- Point 1 (crisp, concrete)
- Point 2
- Point 3

## Implications
- Implication for policy / institutions
- Implication for producers / practitioners
- Implication for research / innovation

## Open questions
- Question 1
- Question 2
- Question 3

## References

{% if links %}
- Related links:
{% for item in links %}
  - [{{ item.title }}]({{ item.url }})
{% endfor %}
{% endif %}
