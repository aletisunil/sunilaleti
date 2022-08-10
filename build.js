'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.green.bold('               Sunil Aleti'),
  work: chalk.white('Data Scientist'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('aleti_sunil'),
  blog: chalk.gray('https://dev.to/')+chalk.cyan('sunilaleti'),
  github: chalk.gray('https://github.com/') + chalk.cyan('aletisunil'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('sunilaleti'),
  instagram: chalk.gray('https://instagram.com/') + chalk.cyan('sunil_aleti'),
  web: chalk.cyan('https://sunilaleti.dev'),
  npx: chalk.red('npx') + ' ' + chalk.white('sunilaleti'),
  labelWork: chalk.white.bold('     Work:'),
  labelTwitter: chalk.white.bold('  Twitter:'),
  labelblog: chalk.white.bold('     Blog:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelLinkedIn: chalk.white.bold(' LinkedIn:'),
  labelInstagram: chalk.white.bold('Instagram:'),
  labelWeb: chalk.white.bold('      Web:'),
  labelCard: chalk.white.bold('     Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const blogging = `${data.labelblog}  ${data.blog}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const insta = `${data.labelInstagram}  ${data.instagram}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               blogging + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               insta + newline + // labelInstagram + data.instagram
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
