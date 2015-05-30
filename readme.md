# weebly-wobbly

a theme for weebly hackathon

## usage
run `npm install`

### adding themes
to add a new theme add a new stylus file under `./stylus/`

e.g. `./stylus/new_theme.styl`

to compile it run `npm run stylus` from the root of this project
this will generate a `./stylus/new_theme.css` file

add an import in `main_style.css` like

    @import url(stylus/8-bit.css);

near the top after the *variables* section
