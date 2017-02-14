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

function RedirectAssetPlugin(rules) {
    this.rules = rules || [];

    this.isDeleteAsset = function (rule) {
        var destination = rule.to ? rule.to.toLowerCase() : null;
        return destination == '/dev/null' || destination == 'nul' || destination == 'null';
    };

    this.consolidateSlashes = function (pathName) {
        if (!pathName)
            return pathName;
        return pathName.replace(/[\\/]/g, path.sep);
    };

    this.redirectAsset = function (filename, compilation, rule, logging) {
        rule.to = rule.to || '/dev/null';
        rule.from = rule.from || '';
        if (rule.from instanceof RegExp)
            rule.from = new RegExp(rule.from.source.replace(/(\\\\)|(\/)/g, process.platform == 'win32' ? '\\\\' : '\/'));

        var asset = compilation.assets[filename];
        var fixedFilenameName = this.consolidateSlashes(filename.replace(rule.from, rule.to));
        var pattern = rule.glob ? rule.glob : rule.from;
        var patternColor = rule.glob ? colors.fg.Magenta : colors.fg.Blue;
        var resultColor = this.isDeleteAsset(rule) ? colors.fg.Red : colors.fg.Green;
        var operation = this.isDeleteAsset(rule) ? 'Deleted' : 'Redirected';
        var result = this.isDeleteAsset(rule) ? rule.to : fixedFilenameName;
        delete compilation.assets[filename];
        if (!this.isDeleteAsset(rule))
            compilation.assets[fixedFilenameName] = asset;
        if (logging === true)
            console.log('[', operation, patternColor, pattern, colors.Reset, ']', colors.fg.Yellow, filename, colors.Reset, '=>', resultColor, result, colors.Reset);
        return !this.isDeleteAsset(rule);
    };
}

RedirectAssetPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {

        var redirectedCount = 0;
        var deletedCount = 0;

        this.rules.forEach(function (rule) {
            for (var filename in compilation.assets) {
                if (rule.glob && !minimatch(filename, rule.glob,
                   {
                     nocase : true,
                        dot : true
                   }
                   ))
                   continue;
                if ((rule.from instanceof RegExp) && !rule.from.test(filename))
                   continue;
                this.redirectAsset(filename, compilation, rule, compiler.options.stats.assets) ? redirectedCount++ : deletedCount++;
            }
        }, this);

        console.log('[ RedirectAssetPlugin:', colors.fg.Green, redirectedCount, colors.Reset, 'asset(s) redirected',
                                             colors.fg.Red, deletedCount, colors.Reset, 'asset(s) deleted.', colors.Reset, ']');

        callback();
    }.bind(this));
};

module.exports = RedirectAssetPlugin;