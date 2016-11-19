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
