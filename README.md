# H.E.A.T. 2027 Annual Conference Website

Static single-page conference website for GitHub Pages.

## How to update content

Most updates live in:

```text
assets/js/site-data.js
```

Edit this file to update:

- Registration link
- Abstract submission link
- Instagram link
- Program events
- Featured experiences
- Research page text
- Speakers
- Executive board names, titles, schools, biographies, emails, and photos
- Gallery photos and captions

## Images

- Logo: `assets/img/heat27-logo.png`
- Executive board headshots: `assets/img/board/`
- Gallery photos: `assets/img/gallery/`

To add a gallery photo, place the image in `assets/img/gallery/` and add it to the `GALLERY` array in `assets/js/site-data.js`.

To update a board member, replace their image file or change their `image`, `biography`, and `email` fields in `assets/js/site-data.js`.

## GitHub Pages

Upload the full folder contents to a GitHub repository. In GitHub, go to Settings → Pages, then publish from the main branch root.
