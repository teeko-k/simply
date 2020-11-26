const fs = require('fs')
const chalk = require('chalk')

const currentPath = process.cwd()

const simply = fs.writeFileSync(
  `${currentPath}/new-file.txt`,
  'Hello from Simply!'
)

console.clear()
console.log(chalk.bgCyanBright(chalk.black(` file created at ${currentPath} `)))

module.exports = simply
