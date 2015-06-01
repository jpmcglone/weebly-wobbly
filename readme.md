# weebly-wobbly

a theme for weebly hackathon

## usage
run `npm install`

### adding themes
To add a new theme follow this directory structure

    themes/
      newTheme/         - place theme under `/themes`
        fontFile.ttf
        newTheme.js     - core font logic (audio, dom manipulations, etc.)
        image.jpg
        newTheme.styl   - styling
        music.ogg

This project uses the Stylus preprocessor to generate our css files.

Make sure to register the stylesheet

    // ./main_style.css
    @import url(themes/newTheme/newTheme.css);

Then register the logic

    // ./short-header.html
    <script type="text/javascript" src="/files/theme/themes/newTheme/newTheme.js"></script>

Add a clause in the `changeCssHere` method inside `./twitter-puller.js`

### development server

run `npm run development`

This will watch any `.styl` files in the project and regenerate css on file
save.

### Publishing

Assuming you have the [weeblybundler gem](http://themehack.weebly.com/weebly-bundler-gem.html)
installed

`npm run deploy`

### TODO

- configure npm task for offline development

## License

The MIT License (MIT)

Copyright (c) <2015> <Harry, JP, Katie, Michael>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
