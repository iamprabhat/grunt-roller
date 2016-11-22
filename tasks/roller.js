/*!
 * grunt-roller
 * From the Desk of Prabhat Kumar — CEO, Founder & Scientist.
 * ___________________________________________________________________________
 *
 * Rollup, Next-generation ES6 module bundler — http://rollupjs.org/.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ___________________________________________________________________________
 *
 * @date      : 18-Nov-2016
 * @license   : MIT
 * @require   : Node.js®
 * @require   : NPM
 * @require   : rollup
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of ES6 Build System/-- of "grunt-roller®".
 * ___________________________________________________________________________
 */

// Invoking strict mode.
///@purpose: Strict mode applies to entire scripts or to individual functions.
"use strict";

// To load required Node module.
///-----------------------------
var path        = require('path');

// To load required NPM modules.
///-----------------------------
var rollup      = require('rollup');
///Calling Promise method of Bluebird — is a fully featured promise library.
var Promise     = require('bluebird').Promise;
var chalk       = require('chalk');

// Default color defined.
///----------------------
var noop        = chalk.red;
var yeep        = chalk.green;

// ------------------------------------------------------------------------------------------------------------------------
// All Grunt Roller Operations Defined... |---------------------------------------------------| 18/Nov/2016 | SEED™ — Umeå.
// ------------------------------------------------------------------------------------------------------------------------

module.exports  = function(grunt) {
  
  grunt.registerMultiTask('roller', 'A smart grunt plugin for rollup — a next-generation ES6 module bundler.', function() {
    
    // Private scope variables.
    ///------------------------
    var done    = this.async();
    
    // options for ES6.
    ///----------------
    var options = this.options({
      banner    : null,
      external  : [],
      exports   : 'auto',
      format    : 'es',
      footer    : null,
      globals   : {},
      intro     : null,
      indent    : true,
      moduleId  : null,
      moduleName: null,
      useStrict : true,
      outro     : null,
      plugins   :[],
      sourceMap : false,
      sourceMapFile: null,
      sourceMapRelativePaths: false
    });
    
    var promises = this.files.map(function(f) {
      if (f.src.length === 0) {
        grunt.fail.warn(noop('There is no entry point specified.'));
      }
      var entry;
      if (f.src.length > 1) {
        entry = f.src;
        grunt.log.writeln(noop('Multiple entry points detected. Be sure to include [rollup-plugin-multi-entry] in plugins.'));
      } else {
        entry = f.src[0];
        if (!grunt.file.exists(entry)) {
          grunt.fail.warn(yeep('Entry point "' + entry + '" not found!'));
        }
      }
      var plugins = options.plugins;
      if (typeof plugins === 'function') {
        plugins = plugins();
      }
      // Rollup, Next-generation ES6 module bundler — http://rollupjs.org/.
      return rollup.rollup({
        entry         : entry,
        external      : options.external,
        plugins       : plugins,
        context       : options.context,
        moduleContext : options.moduleContext
      }).then(function(bundle) {
        var sourceMapFile = options.sourceMapFile;
        if (!sourceMapFile && options.sourceMapRelativePaths) {
          sourceMapFile = path.resolve(f.dest);
        }
        var result = bundle.generate({
          banner      : options.banner,
          exports     : options.exports,
          format      : options.format,
          footer      : options.footer,
          globals     : options.globals,
          intro       : options.intro,
          indent      : options.indent,
          moduleId    : options.moduleId,
          moduleName  : options.moduleName,
          useStrict   : options.useStrict,
          outro       : options.outro,
          sourceMap   : options.sourceMap,
          sourceMapFile: sourceMapFile
        });
        var code = result.code;
        if (options.sourceMap === true) {
          var sourceMapOutPath = f.dest + '.map';
          grunt.file.write(sourceMapOutPath, result.map.toString());
          code += "\n//# sourceMappingURL=" + path.basename(sourceMapOutPath);
        } else if (options.sourceMap === "inline") {
          code += "\n//# sourceMappingURL=" + result.map.toUrl();
        }
        grunt.file.write(f.dest, code);
      });
    });
