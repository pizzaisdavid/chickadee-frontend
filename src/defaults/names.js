
export const comboToNames = {
  // funny names
  'B#/v0': 'Bruce W.',
  '#R/ay': 'Ray',
  '#O/wg': 'Creamsicle',
  '#G/yb': 'Puggah',
  // family
  '#A/rg': 'Karen',
  '#R/yn': 'Karena',
  '#N/ry': 'Lisa',
  '#N/rn': 'Tim',
  // friends
  'y0/#W': 'Alex',
  '#O/gb': 'Austin',
  '#O/rb': 'Britney',
  'y0/#R': 'Christian',
  'w0/G#': 'Helen',
  '#O/av': 'Melissa',
  '#G/ar': 'Pat',
  '#O/rw': 'Peter',
  // professors
  '#G/aw': 'Andy',
  'g0/#Y': 'Hadi',
  '#A/yn': 'Jeff',
  '#Y/ap': 'John',
  '#A/yg': 'Mike',
  'y0/R#': 'Randy',
};

export function getDisplayNameFromBandCombo(bandCombo) {
  const name = comboToNames[bandCombo];
  if (name === undefined) {
    return '';
  }
  return name;
}
