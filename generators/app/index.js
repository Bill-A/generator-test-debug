"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  initializing() {
    this.log("...............................Inside Initializing");
  }

  async prompting() {
    this.log("...............................Inside Prompting");

    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the spectacular ${chalk.red(
          "generator-test-debug"
        )} generator!`
      )
    );
    const prompts = [
      {
        type: "input",
        name: "repoName",
        message: "Github Repo Name?"
      },
      {
        type: "input",
        name: "repoDescription",
        message: "A short description of the repository?"
      },
      {
        type: "input",
        name: "repoUsers",
        message:
          "Who will access this Github Repo (comma separated list of GitHub usernames)?"
      }
    ];

    const answers = await this.prompt(prompts);
    // To access answers later use this.answers.someAnswer;
    this.answers = answers;
  }

  configuring() {
    this.log("...............................Inside Configuring");
  }

  default() {
    this.log("...............................Inside Default");
  }

  _copyStaticFiles() {
    // _ makes it private in yeoman
    this.fs.copy(
      "generators/app/templates/dummyfile.txt",
      "generators/app/templates/copieddummyfile.txt"
    );
  }

  _copyStaticDirectory() {
    // _ makes it private in yeoman
    this.fs.copy(
      "/Users/bill/SoftwareProjects/Code/workspace_javascript/RandomQuotes/css",
      "generators/app/css"
    ); // Copies a directory
  }

  _copyTemplateAndFill() {
    this.fs.copyTpl(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("generators/app/repoData/github.json"),
      { name: this.answers.repoName, description: this.answers.repoDescription }
    );
  }

  _createSomeJson() {}

  _cleanup() {
    // _ makes it private in yeoman
    // this.fs.delete('generators/app/css/', { onlyDirectories: false, deep: 1 });

    this.fs.delete("generators/app/css/**", { onlyFiles: false, deep: 2 }); // Delete a dir does not
    // this.fs.delete('generators/app/templates/copieddummyfile.txt'); //delete a file works
  }

  writing() {
    this.log("...............................Inside Writing");

    this._cleanup();
    this._copyStaticFiles();
    this._copyStaticDirectory();
    this._copyTemplateAndFill();
  }

  conflicts() {
    this.log("...............................Inside Conflicts");
  }

  install() {
    this.log("...............................Inside Install");

    // This.installDependencies();
  }

  end() {
    this.log("...............................Inside End");
  }
};