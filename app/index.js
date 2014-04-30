'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var DatadpGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Datadp generator.'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to continue?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.copy('package.json', 'package.json');
    this.copy('Gruntfile.js', 'Gruntfile.js');
      
    this.copy('index.html', 'index.html');
    this.directory('libs', 'libs');
    this.directory('resources', 'resources');
      
    console.log('=>  finish generating!');
  },

  projectfiles: function () {
  }
});

module.exports = DatadpGenerator;