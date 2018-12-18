const fs = jest.genMockFromModule('fs');
let mockFiles = Object.create(null)

function __setMockFiles(newMockFiles) {
  console.log('new mock files', newMockFiles);
  mockFiles = newMockFiles
}

fs.readFileSync = (path) => {
  console.log('mocking fs.readFileSync!', path);
  return mockFiles[path]
}

fs.__setMockFiles = __setMockFiles

module.exports = fs