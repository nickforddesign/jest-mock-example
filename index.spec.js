const files = {
  'example.ejs': `<div>test</div>`,
  'css/style.css': '* { color: red; }'
}

jest.mock('fs')

beforeEach(() => {
  require('fs').__setMockFiles(files);
});

test('example mock', () => {
  const { file, css } = require('./index')
  expect(file).toBe(`<div>test</div>`)
  expect(css).toBe(`* { color: red; }`)
})