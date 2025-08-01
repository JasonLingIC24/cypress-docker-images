#!/usr/bin/node
const { spawn } = require('child_process')

const chromeVersion = process.argv.slice(2)[0]

if (!chromeVersion) {
  console.log('No Chrome for Testing version provided, skipping Chrome for Testing install')
  process.exit(0)
}

if (process.arch !== 'x64') {
  console.log(`Chrome for Testing only available for x64. Not currently available for architecture: ${process.arch}`)
  process.exit(0)
}

console.log('Installing Chrome for Testing version: ', chromeVersion)

// Insert logic here if needed to run a different install script based on chrome version.
const install = spawn(`${__dirname}/default.sh`, [chromeVersion], { stdio: 'inherit' })

install.on('error', function (error) {
  console.log('child process errored with ' + error.toString())
  process.exit(1)
})

install.on('exit', function (code) {
  console.log('child process exited with code ' + code.toString())
  process.exit(code)
})
