Composer UI Components
---------

#### Project Structure

Roughly speaking a component can be classified as being made up of four distinct pieces:

__A sass mixin.__
- This lives in `sass/mixins/{component-name}/{mixin-name}` and can be called to decorate a given CSS class with rules.

__A sass component.__
- This lives in `sass/components/{component-name}`. It contains given CSS classes such as `.btn` etc. Generally speaking a `sass` component will depend on a mixin.

__An angular module (directive)__
- This lives in `lib/{component-name}/index.js`. It contains specific JS behaviour. In general it will expose an angular module with a linked directive and/or controller.

__A bootstrap file__
- This lives in `./{component-name}`. It will allow a user to require `composer-components/{component-name}` within their application. It will require and expose the anugular module as well as requiring the built css.



Importing Components into your Project
-----------

There are multiple ways to import all/individual components into your application.

__1,__ Give me all the things:

You need to import the `gu-components` angular module.

``` js
import components from 'composer-components';
```

__2,__ I'm using angular but I only want some components:

You can import a module at a time

``` js
import {component-name} from 'composer-components/{component-name}';
```

This will also import the required CSS (using jspm). If you do not want this you should import as follows:

``` js
import {component-name} from 'composer-components/lib/{component-name}/index'
```

which comes CSS free.

__3,__ I'm not using angular but I want the CSS:

You will need to put `composer-components/sass` into your `includePaths`. You can then `@import "components/{component-name}"` in your main scss file.

__4,__ I've already got a bunch of CSS classes I can't change:

Every component within `sass/components` uses a mixin. Put `composer-components/sass` into your `includePaths` then you can `@import "mixins/{component-name}/{mixin-name}"`.


Getting started developing components
-----------
- Clone the repo
- Step inside the repo
- Run `npm install`
- Run `npm run watch`
- Generate a component structure with a file generator
- Get dev'in!


File Templates (Generators)
----------

To setup file generators you must:
- clone the repo
- step into the repo
- run `npm install`
- run `npm link`

After which you will have `gen` available on your path

__Mixin__
`gen new mixin -m {mixin-name} -c {component-name}`

This will generate a mixin within `sass/mixin/{component-name}/{mixin-name}.scss`

__Sass component__
`gen new sass -m {mixin-name} -c {component-name}`

This will generate a sass component within `sass/components/{component-name}.scss`
AND a mixin within `sass/mixins/{component-name}/{mixin-name}.scss`

__Angular directive__
`gen new directive -c {component-name}`
This will generate an angular module within `lib/{component-name}/index.js`
