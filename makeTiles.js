import fs from 'fs-extra'
import sharp from 'sharp'

const options = {
  width: 200,
  height: 200,
  fit: sharp.fit.cover,
  position: sharp.strategy.entropy,
}

export default async function makeTiles(inputDir, outputDir) {
  try {
    fs.readdir(inputDir)
      .map(f => join(inputDir, f))
      .forEach(f =>
        sharp(f)
          .normalize()
          .resize(options)
          .sharpen()
          .toFile(join(outputDir, parse(f).base))
      )
  } catch (err) {
    console.error(err)
  }
}
