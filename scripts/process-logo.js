const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');

async function removeWhiteBackground(inputPath, outputPath) {
  if (path.resolve(inputPath) === path.resolve(outputPath)) {
    throw new Error('Input dan output harus berbeda.');
  }
  const { data, info } = await sharp(inputPath).ensureAlpha().raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) data[i + 3] = 0;
  }
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 10 }).png().toFile(outputPath);
}

module.exports = { removeWhiteBackground };

if (require.main === module) {
  const input = process.argv[2] ?? './public/p4i-logo.png';
  const output = process.argv[3] ?? './public/brand/p4i-logo-transparent.png';
  removeWhiteBackground(input, output).then(() => {
    console.log(`Logo diproses: ${output}`);
  }).catch((error) => {
    console.error(`Gagal memproses logo: ${error.message}`);
    process.exitCode = 1;
  });
}
