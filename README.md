[![Build Status][travis-badge]][travis-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]
[![npm][npm-badge]][npm-badge-url]

## WebPack Assets Redirect Plugin

Redirect webpack assets to proper folders.

Examples:

```
new redirectAssetPathPlugin('../resources/node_modules/@angular/**/*.js', '../resources/node_modules/@angular', 'assets/js/angular'),
new redirectAssetPathPlugin('../resources/node_modules/ng2-cookies/**/*.js', '../resources/node_modules/ng2-cookies', 'assets/js/ng2-cookies'),
new redirectAssetPathPlugin('../resources/node_modules/ag-grid-ng2/**/*.js', '../resources/node_modules/ag-grid-ng2', 'assets/js/ag-grid-ng2'),
``` 

## Output
 
 ```
 Asset redirected [  ../resources/node_modules/@angular/**/*.js  ]  ..\resources\node_modules\@angular\common\bundles\common.umd.min.js  =>  assets\js\angular\common\bundles\common.umd.min.js 
 Asset redirected [  ../resources/node_modules/@angular/**/*.js  ]  ..\resources\node_modules\@angular\compiler\bundles\compiler.umd.min.js  =>  assets\js\angular\compiler\bundles\compiler.umd.min.js 
 Asset redirected [  ../resources/node_modules/@angular/**/*.js  ]  ..\resources\node_modules\@angular\core\bundles\core.umd.min.js  =>  assets\js\angular\core\bundles\core.umd.min.js 
 Asset redirected [  ../resources/node_modules/@angular/**/*.js  ]  ..\resources\node_modules\@angular\forms\bundles\forms.umd.min.js  =>  assets\js\angular\forms\bundles\forms.umd.min.js 
 Asset redirected [  ../resources/node_modules/@angular/**/*.js  ]  ..\resources\node_modules\@angular\http\bundles\http.umd.min.js  =>  assets\js\angular\http\bundles\http.umd.min.js 
 Asset redirected [  ../resources/node_modules/@angular/**/*.js  ]  ..\resources\node_modules\@angular\platform-browser-dynamic\bundles\platform-browser-dynamic.umd.min.js  =>  assets\js\angular\platform-browser-dynamic\bundles\platform-browser-dynamic.umd.min.js 
 Asset redirected [  ../resources/node_modules/@angular/**/*.js  ]  ..\resources\node_modules\@angular\platform-browser\bundles\platform-browser.umd.min.js  =>  assets\js\angular\platform-browser\bundles\platform-browser.umd.min.js 
 Asset redirected [  ../resources/node_modules/@angular/**/*.js  ]  ..\resources\node_modules\@angular\router\bundles\router.umd.min.js  =>  assets\js\angular\router\bundles\router.umd.min.js 
 Asset redirected [  ../resources/node_modules/ng2-cookies/**/*.js  ]  ..\resources\node_modules\ng2-cookies\cookie.js  =>  assets\js\ng2-cookies\cookie.js 
 Asset redirected [  ../resources/node_modules/ng2-cookies/**/*.js  ]  ..\resources\node_modules\ng2-cookies\index.js  =>  assets\js\ng2-cookies\index.js 
 Asset redirected [  ../resources/node_modules/ng2-cookies/**/*.js  ]  ..\resources\node_modules\ng2-cookies\ng2-cookies.js  =>  assets\js\ng2-cookies\ng2-cookies.js 
 Asset redirected [  ../resources/node_modules/ng2-cookies/**/*.js  ]  ..\resources\node_modules\ng2-cookies\src\services.js  =>  assets\js\ng2-cookies\src\services.js 
 Asset redirected [  ../resources/node_modules/ng2-cookies/**/*.js  ]  ..\resources\node_modules\ng2-cookies\src\services\cookie.js  =>  assets\js\ng2-cookies\src\services\cookie.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\agEditorComponent.js  =>  assets\js\ag-grid-ng2\dist\agEditorComponent.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\agFilterComponent.js  =>  assets\js\ag-grid-ng2\dist\agFilterComponent.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\agFrameworkComponent.js  =>  assets\js\ag-grid-ng2\dist\agFrameworkComponent.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\aggrid.module.js  =>  assets\js\ag-grid-ng2\dist\aggrid.module.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\agGridColumn.js  =>  assets\js\ag-grid-ng2\dist\agGridColumn.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\agGridNg2.js  =>  assets\js\ag-grid-ng2\dist\agGridNg2.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\agRendererComponent.js  =>  assets\js\ag-grid-ng2\dist\agRendererComponent.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\baseComponentFactory.js  =>  assets\js\ag-grid-ng2\dist\baseComponentFactory.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\ng2ComponentFactory.js  =>  assets\js\ag-grid-ng2\dist\ng2ComponentFactory.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\dist\ng2FrameworkFactory.js  =>  assets\js\ag-grid-ng2\dist\ng2FrameworkFactory.js 
 Asset redirected [  ../resources/node_modules/ag-grid-ng2/**/*.js  ]  ..\resources\node_modules\ag-grid-ng2\main.js  =>  assets\js\ag-grid-ng2\main.js 
 Asset deleted [  dummy.*  ]  dummy.bundle.js  =>  /dev/null 
 Asset deleted [  **/webpack.dummy*  ]  assets\main\ts\bundles\webpack.dummy.js  =>  /dev/null
```

[travis-badge]: https://travis-ci.org/k-paxian/asset-redirect-webpack-plugin.svg?branch=master
[travis-badge-url]: https://travis-ci.org/k-paxian/asset-redirect-webpack-plugin
[david-badge]: https://david-dm.org/asset-redirect-webpack-plugin.svg
[david-badge-url]: https://david-dm.org/asset-redirect-webpack-plugin
[david-dev-badge]: https://david-dm.org/asset-redirect-webpack-plugin/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/asset-redirect-webpack-plugin?type=dev
[npm-badge]: https://img.shields.io/npm/v/asset-redirect-webpack-plugin.svg
[npm-badge-url]: https://www.npmjs.com/package/asset-redirect-webpack-plugin
