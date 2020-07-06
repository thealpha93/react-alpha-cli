#! /usr/bin/env node

const shell = require('shelljs')
const colors = require('colors')
const fs = require('fs')

const appName = process.argv[2]
const appDirectory = `${process.cwd()}/${appName}`

const createApp = () => {
	return new Promise( (resolve, reject) => {
		if(appName){
			shell.exec(`npx create-react-app ${appName}`, () => {
				console.log('Created react app')
				resolve(true)
			})
		} else {
			console.log('\nNo app name was provided'.red)
			console.log("\nProvide an app name in the following format: ")
			console.log("\ncreate-react-redux-router-app ", "app-name\n".cyan)
			resolve(false)
		}
	})
}

const changeDirectory = () => {
	return new Promise( resolve => {
		console.log('changing directory')
		shell.cd(appName)
		resolve()
		console.log('changed directory')
		console.log(shell.pwd())
	})
}

const createFolders = async () => {
	return new Promise( resolve => {
		shell.exec('mkdir store components Router pages services utilities layouts', () => resolve())
	})
}

const run = async () => {
	let success = await createApp()
	if(!success){
		console.log('Something went wrong while trying to create a new React app using create-react-app'. red)
		return false
	}
	await changeDirectory()
	await createFolders()
	// await installPackages()
	// await updateTemplates()
	console.log('All done')
}

run()
