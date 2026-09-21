const sharp = require('sharp');
const fs = require('fs');

async function removeWhiteBackground(inputPath, outputPath) {
  try {
    // Read the image
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Loop through pixels and make white ones transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // If the pixel is close to white, make it transparent
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0; // Set alpha to 0
      }
    }

    // Save the new image
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .trim({ threshold: 10 }) // trim the transparent edges
    .png()
    .toFile(outputPath);

    console.log('Logo processed successfully!');
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

const dir = './public/brand';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

removeWhiteBackground('./public/p4i-logo.png', './public/brand/p4i-logo-transparent.png');
