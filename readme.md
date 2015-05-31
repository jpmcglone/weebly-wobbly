# weebly-wobbly

a theme for weebly hackathon

## usage
run `npm install`

### adding themes
to add a new theme add a new directory under `./themes/`

e.g. `./themes/newTheme/`

Add a stylus file

e.g. `./themes/newTheme/newTheme.styl`

to compile all styl files run `npm run stylus` from the root of this project

This will generate a `./themes/newTheme/newTheme.css` file

add an import in `main_style.css` like

    @import url(themes/newTheme/newTheme.css);

near the top after the *variables* section

### development server

run `npm run development`

This will watch any `.styl` files in the project and regenerate css on file
save.

### Publishing

Assuming you have the [weeblybundler gem](http://themehack.weebly.com/weebly-bundler-gem.html)
installed

run `weeblybundle theme . --publish`
