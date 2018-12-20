global.window = global;
global.assert = require('chai').assert;
require('../src/eight');
require('./eight.spec.js');
