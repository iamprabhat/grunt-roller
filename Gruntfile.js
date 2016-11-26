#!/usr/bin/env node


/*!
 * grunt-roller
 * From the Desk of Prabhat Kumar — CEO, Founder & Scientist.
 * ___________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
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
 * @require   : grunt-cli
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "grunt-roller®".
 * ___________________________________________________________________________
 */

// "disallowMultipleSpaces": {"allowEOLComments": true}
// "disallowSemicolons": false
// "requireSemicolons": true
// "requireSpaceAfterLineComment": { "allExcept": ["#", "="] }

// global __dirname: true
// global require: true

//# Usage: $ node -v
//# Usage: $ npm -v
//# Usage: $ grunt -version

// Invoking strict mode.
// @purpose: Strict mode applies to entire scripts or to individual functions.
"use strict";

// To load required NPM modules.
// -----------------------------
var chalk = require('chalk');
var plugin = require('./test/plugin');

// Default color defined.
// ----------------------
var noop = chalk.red;
var yeep = chalk.green;
var okay = chalk.blue;

// ----------------------------------------------------------------------------------------------------------
// All Grunt Operations Defined... |--------------------------------------------| 22/Nov/2016 | SEED™ — Umeå.
// ----------------------------------------------------------------------------------------------------------

module.exports = function(grunt) {
  
  // Force use of Unix newlines.
  grunt.util.linefeed = '\n';
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Project configuration for -//grunt-roller//- |---------------------------| 22/Nov/2016 | SEED™ — Umeå.
  //                  		 Copyright © 2016, Prabhat Kumar, All rights reserved.
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // 1. time-grunt ——> $ npm install time-grunt --save-dev
  // -----------------------------------------------------
  // Display the elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);
  
  // 2. load-grunt-tasks ——> $ npm install load-grunt-tasks --save-dev
  // -----------------------------------------------------------------
  // Load multiple grunt tasks using globbing patterns.
  require('load-grunt-tasks')(grunt, {
    scope: ['devDependencies', 'dependencies']
  });
  
  // Grunt Project Configuration.
  // ----------------------------
  grunt.initConfig({
    
    /* grunt-notify --> $ npm install grunt-notify --save-dev */
    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5, // maximum number of notifications from [jshint] output.
        title: "Grunt Roller", // defaults to the name in [package.json].
        success: false, // whether successful grunt executions should be notified automatically.
        duration: 4 // the duration of notification in seconds, for `notify-send only.
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        node: true,
        strict: true,
        sub: true,
        undef: true
      },
      ignore_warning: {
        options: {
          '-W015': true // [L24:C9] W015: Expected '}' to have an indentation at 11 instead at 9.
        }
      },
      all: [
        './Gruntfile.js',
        './tasks/*.js',
        '<%= nodeunit.tests %>',
        '!node_modules/**/*.js' // ignores node_modules.
      ]
    },
    jscs: {
      src: './Gruntfile.js',
      options: {
        config: '.jscsrc',
        fix: true, // Autofix code style violations when possible.
        requireCurlyBraces: ['if']
      }
    },
