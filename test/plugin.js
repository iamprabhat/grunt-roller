/*!
 * —————————————
 * grunt-roller®
 * —————————————
 * A smart grunt plugin for rollup — a next-generation ES6 module bundler.
 * Copyright © 2006 - 2016, Prabhat Kumar, All rights reserved.
 * Copyright © 2014 - 2016, Sequømics Corporation, All rights reserved.
 * Released under the MIT license (https://opensource.org/licenses/MIT).
 */
"use strict";
module.exports = function plugin() {
  var counter = 0;
  return {
    banner: function() {
      counter += 1;
      return '// ' + counter;
    }
  };
};
