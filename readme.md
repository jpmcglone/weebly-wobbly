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
