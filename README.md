Composer UI Components

File Templates (Generators)
----------

To setup file generators you must:
- clone the repo
- step into the repo
- run `npm install`
- run `npm link`

After which you will have `gen` available on your path

__File__
`gen -n {component-name}`


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
