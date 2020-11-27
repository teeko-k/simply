const fs = require('fs')
const chalk = require('chalk')
const { exec } = require('child_process')

const currentPath = process.cwd()

const simply = function () {
  fs.writeFileSync(`${currentPath}/new-file.txt`, 'Hello from Simply!')
}

exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    return console.log(chalk.bgRed(chalk.black(` ${error} `)))
  }
  if (stderr) {
    return console.log(chalk.bgRed(chalk.black(` ${error} `)))
  }

  console.log(chalk.cyan(`output: ${stdout}`))
})

console.clear()
console.log(chalk.bgCyanBright(chalk.black(` file created at ${currentPath} `)))

module.exports = simply
