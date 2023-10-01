const zipFolder = require('zip-folder')
const { resolve } = require('path')

const rootPath = resolve(__dirname, '..', '..')

const zipDistFolder = async () => {
  return zipFolder(resolve(rootPath, 'dist'), resolve(rootPath, 'dist.zip'), (err) => {
    if (err) {
      return console.log('Error when archiving dist folder.')
    }
  })
}

module.exports = zipDistFolder
