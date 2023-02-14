import localFonts from '@next/font/local';

const eUkraineRegular = localFonts({src: './eUkraine/e-Ukraine-Regular.otf'});
const eUkraineBold = localFonts({src: './eUkraine/e-Ukraine-Bold.otf'});
const eUkraineLight = localFonts({src: './eUkraine/e-Ukraine-Light.otf'});
const eUkraineMedium = localFonts({src: './eUkraine/e-Ukraine-Medium.otf'});
const eUkraineThin = localFonts({src: './eUkraine/e-Ukraine-Thin.otf'});
const eUkraineUltraLight = localFonts({src: './eUkraine/e-Ukraine-UltraLight.otf'});

export const eUkraineFont = {
    Regular: eUkraineRegular,
    Bold: eUkraineBold,
    Light: eUkraineLight,
    Medium: eUkraineMedium,
    Thin: eUkraineThin,
    UltraLight: eUkraineUltraLight
}


const codeColdLight = localFonts({src: './CodeCold/CodecCold-Light.ttf'})

export const codecColdFont = {
    Light: codeColdLight
}