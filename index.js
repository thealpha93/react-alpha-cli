#! /usr/bin/env node

const shell = require("shelljs");
const colors = require("colors");
const menu = require("./menu")
const fs = require("fs");

const templates = require("./templates/exports");

const folders = [
  "src/store",
  "src/store/auth",
  "src/components",
  "src/components/shared",
  "src/components/shared/DefaultLayout",
  "src/Router",
  "src/pages",
  "src/pages/Home",
  "src/pages/Login",
  "src/service",
  "src/utilities",
  "src/layouts",
];

const packages = [
  "axios",
  "prop-types",
  "react-redux",
  "react-router",
  "react-router-dom",
  "react-router-redux",
  "redux-saga",
  "bootstrap",
  "react-bootstrap"
];

const createApp = (appName) => {
  return new Promise((resolve, reject) => {
    if (appName) {
      shell.exec(`npx create-react-app ${appName}`, () => {
        console.log("Created react app");
        resolve(true);
      });
    } else {
      console.log("\nNo app name was provided".red);
      resolve(false);
    }
  });
};

const changeDirectory = (appName) => {
  return new Promise((resolve) => {
    shell.cd(appName);
    resolve();
  });
};

const createFolders = async () => {
  return new Promise((resolve) => {
    shell.exec(`mkdir ${folders.join(" ")}`, () => resolve());
  });
};

const installPackages = async () => {
  return new Promise((resolve) => {
    console.log("Installing packages".cyan);
    shell.exec(`npm i ${packages.join(" ")}`, () => resolve());
  });
};

const updateTemplates = async () => {
  return new Promise((resolve) => {
    let promises = [];
    Object.keys(templates).forEach((file, index) => {
      promises[index] = new Promise((res) => {
        fs.writeFile(file, templates[file], function (err) {
          if (err) {
            return console.log(err);
          }
          res();
        });
      });
    });
    Promise.all(promises).then(() => resolve());
  });
};

const run = async () => {
  const {appName, boilerPlate} = await menu()
  let success = await createApp(appName);
  if (!success) {
    console.log(
      "Something went wrong while trying to create a new React app using create-react-app"
        .red
    );
    return false;
  }
  if(boilerPlate === 'redux-saga') {
    await changeDirectory(appName);
    await createFolders();
    await installPackages();
    await updateTemplates();
    console.log("All done");
  }
};

run();
