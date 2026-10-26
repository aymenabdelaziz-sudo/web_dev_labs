### (a) Why does the form need `multipart/form-data`?
Because the form includes a file upload control (`<input type="file">`) to attach a CV.

### (b) Which attributes make *Save draft* behave differently?
- `formnovalidate`: Disables browser-side form validation, allowing submission even if required fields (like specialty) are empty.
- `formaction="https://httpbin.org/anything"`: Overrides the form's default `action` attribute (`https://httpbin.org/post`), directing the submission to a different server.

### (c) Why does the video have two `<source>` elements?
To ensure cross-browser compatibility. Different web browsers support different video codecs and file containers (`.webm` vs. `.mp4`). The browser evaluates the `<source>` tags from top to bottom and plays the first format it supports.

### (d) Your Lighthouse score:
- **Accessibility Score:** 94