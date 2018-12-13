import { join, parse } from 'path'

import { mosaic } from 'mosaic-node-generator'
import fs from 'fs-extra'
import sharp from 'sharp'

const inputImagePath = join(__dirname, 'input.jpg')
const imagesDirectory = join(__dirname, 'images')
const tilesDirectory = join(__dirname, 'tiles')

try {
  sharp(inputImagePath)
    .normalize()
    .sharpen()
    .toFile('target.jpg')
} catch (err) {
  console.error(err)
}

// try {
//   fs.readdirSync(imagesDirectory)
//     .map(f => join(imagesDirectory, f))
//     .forEach(f =>
//       sharp(f)
//         .normalize()
//         .resize({
//           width: 200,
//           height: 200,
//           fit: sharp.fit.cover,
//           position: sharp.strategy.entropy,
//         })
//         .sharpen()
//         .toFile(join(tilesDirectory, parse(f).base))
//     )
// } catch (err) {
//   console.error(err)
// }

const options = {
  inputImagePath,
  tilesDirectory,
  cellWidth: 50,
  cellHeight: 50,
  columns: 100,
  rows: 100,
  thumbsDirectoryFromRead: join(__dirname, 'thumbnails_50'),
  thumbsDirectoryToWrite: null,
  enableConsoleLogging: true,
}

mosaic(
  options.inputImagePath,
  options.tilesDirectory,
  options.cellWidth,
  options.cellHeight,
  options.columns,
  options.rows,
  options.thumbsDirectoryFromRead,
  options.thumbsDirectoryToWrite,
  options.enableConsoleLogging
)
