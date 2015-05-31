# weebly-wobbly

a theme for weebly hackathon

## usage
run `npm install`

### adding themes
to add a new theme add a new stylus file under `./stylus/`

e.g. `./stylus/new_theme.styl`

to compile it run `npm run stylus` from the root of this project

This will generate a `./stylus/new_theme.css` file

add an import in `main_style.css` like

    @import url(stylus/new_theme.css);

near the top after the *variables* section

### development server

run `npm run development`

This will watch any `.styl` files in the project and regenerate css on file
save.

### Publishing

Assuming you have the [weeblybundler gem](http://themehack.weebly.com/weebly-bundler-gem.html)
installed

run `weeblybundle theme /Path/To/Theme/Folder --publish`
