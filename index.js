import { join, parse } from 'path'

import { mosaic } from 'mosaic-node-generator'
import fs from 'fs-extra'
import sharp from 'sharp'

import makeTiles from './makeTiles'

const inputImagePath = join(__dirname, 'input.jpg')
const tilesDirectory = join(__dirname, 'tiles')
const target = 'target.jpg'

try {
  sharp(inputImagePath)
    .normalize()
    .sharpen()
    .toFile(target)
} catch (err) {
  console.error(err)
}

// makeTiles(inputImagePath, tilesDirectory)

const options = {
  inputImagePath: inputImagePath,
  tilesDirectory: tilesDirectory,
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
