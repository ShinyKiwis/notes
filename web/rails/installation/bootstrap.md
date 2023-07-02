# Bootstrap 
## How to install 
Visit the link: [Bootstrap Ruby Gem](https://github.com/twbs/bootstrap-rubygem) 

1. Add to `Gemfile`

```bash
gem 'bootstrap'
```

2. Import to `app/assets/stylesheets/application.sass` (.scss if use SCSS syntax)
```bash
@import "bootstrap"
```
Can you this command to quickly change the name:
```bash
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.sass
```

3. Importmap pinning 
Following the instruction from the official github just work for the CSS not JavaScript part.

Now install the following gems:

```bash
gem "jquery-rails"
gem "sassc-rails"
```

In `config/initializers/assets.rb`

```bash
Rails.application.config.assets.precompile += %w( jquery.min.js jquery_ujs.js bootstrap.min.js popper.js )
```

In `config/importmap.r`

```bash
pin "jquery", to: "jquery.min.js", preload: true
pin "jquery_ujs", to: "jquery_ujs.js", preload: true
pin "popper", to: "popper.js", preload: true
pin "bootstrap", to: "bootstrap.min.js", preload: true
```

In `app/javascript/application`

```bash
import "jquery"
import "jquery_ujs"
import "popper"
import "bootstrap"
```
