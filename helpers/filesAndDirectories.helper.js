const { readdir } = require('fs/promises')
const path = require('path')
const fs = require('fs')

module.exports = {

  findFilesByExtension: async (dir, ext) => {
      const matchedFiles = []

      const files = await readdir(dir)

      for (const file of files) {
          // Method 1:
          if (file.endsWith(`.${ext}`)) {
              matchedFiles.push(file);
          }
      }

      return matchedFiles
  },
  
  listFolders: async (dir) => {
    return fs.readdirSync(dir)
  }

}
