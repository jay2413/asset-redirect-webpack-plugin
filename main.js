var path = require('path');
var minimatch = require('minimatch');

const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
 Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  fg: {
    Black: "\x1b[30m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m",
    Magenta: "\x1b[35m",
    Cyan: "\x1b[36m",
   White: "\x1b[37m",
    Crimson: "\x1b[38m"
  },
  bg: {
    Black: "\x1b[40m",
    Red: "\x1b[41m",
    Green: "\x1b[42m",
    Yellow: "\x1b[43m",
    Blue: "\x1b[44m",
    Magenta: "\x1b[45m",
    Cyan: "\x1b[46m",
    White: "\x1b[47m",
    Crimson: "\x1b[48m"
  }
};

function redirectAssetPathPlugin(pattern, oldPathPrefix, newPathPrefix) {
  this.pattern = pattern || '*';
  this.newPathPrefix = newPathPrefix || '/dev/null';
  this.leftCutLength = oldPathPrefix ? oldPathPrefix.length || 0 : 0;

  this.isDeleteAsset = function (newPathPrefix) {
    var destination = newPathPrefix.toLowerCase();
    return destination == '/dev/null' || destination == 'nul' || destination == 'null';
  };

  this.consolidateSlashes = function (pathName) {
    if (!pathName)
        return pathName;
    return pathName.replace(/[\\/]/g, path.sep);
  };
}
redirectAssetPathPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    for (var filename in compilation.assets) {
      if (!minimatch(filename, this.pattern,
              {
                nocase:true,
                dot: true
              }
          ))
          continue;
      var asset = compilation.assets[filename];
      var fixedFilenameName = this.consolidateSlashes(this.newPathPrefix + filename.substr(this.leftCutLength));
      delete compilation.assets[filename];
      if (this.isDeleteAsset(this.newPathPrefix)) {
        console.log(colors.Reset, 'Asset deleted [', colors.fg.Blue, this.pattern, colors.Reset, ']', colors.fg.Yellow, filename, colors.Reset, '=>', colors.fg.Red, this.newPathPrefix, colors.Reset);
      } else {
        compilation.assets[fixedFilenameName] = asset;
        console.log(colors.Reset, 'Asset redirected [', colors.fg.Blue, this.pattern, colors.Reset, ']', colors.fg.Yellow, filename, colors.Reset, '=>', colors.fg.Green, fixedFilenameName, colors.Reset);
      }
    }
    callback();
  }.bind(this));
};

exports.redirectAssetPathPlugin = redirectAssetPathPlugin;