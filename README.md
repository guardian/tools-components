Composer UI Components

Configuration
-------------
All config for BOTH `js` and `scss` are kept in `./config`.
These json files are parsed into scss variables so can be shared easily.
DO NOT add nested variables as ONLY top level keys are parsed.

Generators
----------

To setup file generators you must:
- clone the repo
- step into the repo
- run `npm install`
- run `npm link`

After which you will have `gen` available on your path

__File__
`gen -n {component-name}`
