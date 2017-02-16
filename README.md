[![Build Status][travis-badge]][travis-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]
[![npm][npm-badge]][npm-badge-url]

## WebPack Assets Redirect Plugin

Route/Redirect webpack assets to proper folders.
Runs all emitted webpack assets through a set of rewrite path rules to prepare a perfect assets folder structure for production build.

## Usage

```
var RedirectAssetPlugin = require('asset-redirect-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

{ 
 
  plugins: [ 
 
    new CopyWebpackPlugin([{
      from: 'node_modules/@angular/**/*.umd.min.js'
    }], {
      ignore: [
        '**/upgrade/**/*',
        '**/*-upgrade*',
        '**/platform-server/**/*'
      ]
    }), 
 
    new RedirectAssetPlugin([
      {
        from: /dummy.*/
      },
      {
        glob: 'app/**/*',
        to: 'assets/main/ts/'
      },
      {
        from: /\.\.\\resources\\assets/,
        to: 'assets'
      },
      {
        from: /\.\.\\resources\\node_modules\\@angular/,
        to: 'assets/js/angular'
      }
    ])
 
  ] 
}
```


## Output
 
```
[ Deleted  /dummy.*/  ]  dummy.bundle.js  =>  /dev/null
[ Redirected  app/**/*  ]  app/account-select/account-select.component.html  =>  assets/main/ts/app/account-select/account-select.component.html
[ Redirected  app/**/*  ]  app/app.component.html  =>  assets/main/ts/app/app.component.html
[ Redirected  app/**/*  ]  app/layout-panel/layout-panel.component.html  =>  assets/main/ts/app/layout-panel/layout-panel.component.html
[ Redirected  app/**/*  ]  app/results/results.html  =>  assets/main/ts/app/results/results.html
[ Redirected  app/**/*  ]  app/search-panel/search-panel.html  =>  assets/main/ts/app/search-panel/search-panel.html
[ Redirected  app/**/*  ]  app/account-select/account-select.component.css  =>  assets/main/ts/app/account-select/account-select.component.css
[ Redirected  app/**/*  ]  app/app.component.css  =>  assets/main/ts/app/app.component.css
[ Redirected  app/**/*  ]  app/bs3-date-picker/bs3-datepicker.css  =>  assets/main/ts/app/bs3-date-picker/bs3-datepicker.css
[ Redirected  app/**/*  ]  app/grid/columnFilterEditors/multi-filter.css  =>  assets/main/ts/app/grid/columnFilterEditors/multi-filter.css
[ Redirected  app/**/*  ]  app/grid/grid-simple/grid-simple.component.css  =>  assets/main/ts/app/grid/grid-simple/grid-simple.component.css
[ Redirected  app/**/*  ]  app/layout-panel/layout-panel.component.css  =>  assets/main/ts/app/layout-panel/layout-panel.component.css
[ Redirected  app/**/*  ]  app/results/results.css  =>  assets/main/ts/app/results/results.css
[ Redirected  app/**/*  ]  app/search-panel/search-panel.css  =>  assets/main/ts/app/search-panel/search-panel.css
[ Redirected  /\.\.\/resources\/assets/  ]  ../resources/assets/scss/styles-root.css  =>  assets/scss/styles-root.css
[ Redirected  /\.\.\/resources\/assets/  ]  ../resources/assets/css/autobahn-light.css  =>  assets/css/autobahn-light.css
[ Redirected  /assets\/scss/  ]  assets/scss/styles-root.css  =>  assets/css/styles-root.css
[ Redirected  /\.\.\/resources\/node_modules\/@angular/  ]  ../resources/node_modules/@angular/common/bundles/common.umd.min.js  =>  assets/js/angular/common/bundles/common.umd.min.js
[ Redirected  /\.\.\/resources\/node_modules\/@angular/  ]  ../resources/node_modules/@angular/compiler/bundles/compiler.umd.min.js  =>  assets/js/angular/compiler/bundles/compiler.umd.min.js
[ Redirected  /\.\.\/resources\/node_modules\/@angular/  ]  ../resources/node_modules/@angular/core/bundles/core.umd.min.js  =>  assets/js/angular/core/bundles/core.umd.min.js
[ Redirected  /\.\.\/resources\/node_modules\/@angular/  ]  ../resources/node_modules/@angular/forms/bundles/forms.umd.min.js  =>  assets/js/angular/forms/bundles/forms.umd.min.js
[ Redirected  /\.\.\/resources\/node_modules\/@angular/  ]  ../resources/node_modules/@angular/http/bundles/http.umd.min.js  =>  assets/js/angular/http/bundles/http.umd.min.js
[ Redirected  /\.\.\/resources\/node_modules\/@angular/  ]  ../resources/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js  =>  assets/js/angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js
[ Redirected  /\.\.\/resources\/node_modules\/@angular/  ]  ../resources/node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js  =>  assets/js/angular/platform-browser/bundles/platform-browser.umd.min.js
[ Redirected  /\.\.\/resources\/node_modules\/@angular/  ]  ../resources/node_modules/@angular/router/bundles/router.umd.min.js  =>  assets/js/angular/router/bundles/router.umd.min.js
[ RedirectAssetPlugin:  23  asset(s) redirected  1  asset(s) deleted.  ]
```

[travis-badge]: https://travis-ci.org/k-paxian/asset-redirect-webpack-plugin.svg?branch=master
[travis-badge-url]: https://travis-ci.org/k-paxian/asset-redirect-webpack-plugin
[david-badge]: https://david-dm.org/k-paxian/asset-redirect-webpack-plugin.svg
[david-badge-url]: https://david-dm.org/k-paxian/asset-redirect-webpack-plugin
[david-dev-badge]: https://david-dm.org/k-paxian/asset-redirect-webpack-plugin/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/k-paxian/asset-redirect-webpack-plugin?type=dev
[npm-badge]: https://img.shields.io/npm/v/asset-redirect-webpack-plugin.svg
[npm-badge-url]: https://www.npmjs.com/package/asset-redirect-webpack-plugin
