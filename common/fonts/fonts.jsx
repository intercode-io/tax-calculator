import localFonts from '@next/font/local';

const eUkraineRegular = localFonts({src: './eUkraine/e-Ukraine-Regular.otf'});
const eUkraineMedium = localFonts({src: './eUkraine/e-Ukraine-Medium.otf'});

const eUkraineFont = {
    Regular: eUkraineRegular,
    Medium: eUkraineMedium,
}


const codecColdRegular = localFonts({src: './CodeCold/CodecCold-Regular.woff2'})
const codecColdBold = localFonts({src: './CodeCold/CodecCold-Bold.woff2'})


const codecColdFont = {
    Regular: codecColdRegular,
    Bold: codecColdBold,
}

module.exports = {
    codecColdFont,
    eUkraineFont
}