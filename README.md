# kingshark386 hugo theme

kingshark386 is a 386/8bit/pixel theme for [Hugo](http://gohugo.io/). It's main style is a modified bootstrap stylesheets. See:
[https://github.com/kingshark8848/kingshark-386-style-bootstrap-theme](https://github.com/kingshark8848/kingshark-386-style-bootstrap-theme)

This theme is modified based on [`Vec` theme](https://github.com/IvanChou/hugo-theme-vec)

[Kingshark386 Demo](https://www.kingsharkworld.com/).

## Installation

You must have : 

1. 	Hugo installed
2. Project setup with hugo. Instructions on [hugo quickstart guide](https://gohugo.io/overview/quickstart/).
3. Cloned/Copy this repo in the themes folder.  
```sh
cd [project]/
git clone https://github.com/kingshark8848/kingshark386-hugo-theme.git themes/kingshark386
```
See the [official docs](http://gohugo.io/themes/installing) for more information.

## Configuration

You need to setup `[project_root]/config.toml`

If you need to display your personal profile in the home page, you also need to setup `[project_root]/data/profile.yml`. 

Some parameters are required, so the recommanded way is to copy config.toml and data/profile.yml from `exampleSite` folder of in the theme to your project, and do some modification.

Build using ```hugo server -D```  

To create a post use ```hugo new posts/post-title.md```

See Hugo.io's official documents for more info on how to create contents.

### Customize SCSS

If you want to customize the style, you can go to src to do some modification (such as some scss files), but please compile them to `static/` (you can use gulp, I have a simple gulp file here).  

### Enable TOC to your post

If you need show table of contents per-post, adding `toc: true` (YAML) or `toc = true` (TOML) in the front matter of your post.

TOC will be hidden when browser width is less than 920px.

### Enable Disqus to your post

1. Add your Disqus Shortname to the site config file;
2. You can enable Disqus per-post, by adding `comments: true` (YAML) or `comments = true` (TOML) in the front matter of your post. To disable it, you can either change the value to `false` or just not include `comments` variable and its value at all. 

### Enable Formspree to your page

If you need a form which allows guests to contact you by email, Formspree maybe a good choice.

Firstly, make sure you have already set a Email in the config.toml. And then add `formspree: true` (YAML) or `formspree = true` (TOML) in the front matter of your page.

## Build your site

Add `theme = "kingshark386"` to your `config.toml`, then

```
# Build
hugo

# Run a server
hugo server
```
OR

```
hugo -t kingshark386
hugo server -t kingshark386
```


## Design By

Xiao Wang(kingshark)

## License

MIT Link [todo]

