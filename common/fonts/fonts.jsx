import localFonts from '@next/font/local';

const eUkraineRegular = localFonts({src: './eUkraine/e-Ukraine-Regular.otf'});
const eUkraineMedium = localFonts({src: './eUkraine/e-Ukraine-Medium.otf'});

const eUkraineFont = {
    Regular: eUkraineRegular,
    Medium: eUkraineMedium,
}


const codecColdRegular = localFonts({src: './CodeCold/CodecCold-Regular.woff2'})

const codecColdFont = {
    Regular: codecColdRegular,
}

module.exports = {
    codecColdFont,
    eUkraineFont
}