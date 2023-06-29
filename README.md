### Adding a post

Add your post to `/public/posts` in markdown format. 

If you are referencing an image in your posts, reference it as though you were navigating from the base of public, rather than from a path relative to your post.

### Todo

- ~~Extract YAML Front Matter from Markdown posts to determine title, brief, tags, category~~
- ~~Display the Markdown without the YAML Front Matter~~
- ~~Improve the styling of the Markdown~~
- ~~Custom Font(s)~~ See src/index.css for @font-face examples to add more custom fonts
- Add about page content
- Logo smaller, and as an image always as part of navbar; takes you home
- ~~Color Palette~~
- Later: Tags? Improve index.json? -> This would best be added as a feature to [indexify](https://github.com/klm127/vite-plugin-indexify). Indexify should be able to take a custom function which could then do some remark parsing of yaml front matter and add tags to the index.json


# Random Notes
- Posts
  - Use tags
  - General tags being "News", "Events", "Notes"

__note__ - may have to work out extracting yaml front matter for the index.jsons in vite-plugin-indexify

- Members may create their own pages. Encourage hidden easter eggs!
- "Join the club"
- "About the club"
- Home page (Host links to member's pages; Summary of club)

- Navbar
  - Locked at top of screen
  - Small height? (10% of page height)
  - Contains name and logo
  - About club link
  - Join club link

- Fun easter eggs ideas
  - Windows 98 looking app (Not functional, just fun)