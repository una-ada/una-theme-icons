import { loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import paletteSwap from '@nkzw/palette-swap';
const
  lotus = '#e0c1bf',
  clays = '#b57f7f',
  wines = '#703d41',
  shoyu = '#46302a',
  cocoa = '#241714',
  cream = '#e7e1cf',
  candy = '#bf3041',
  chive = '#555f47',
  namer = f => `../12px/emoji/${f}.png`,
  skin  = async i => {
    let
      [j, ...k] = i.split('-'),
      r = paletteSwap(await loadImage(namer(i)), new Map([
        ['1f3fb', new Map([[lotus, cream]])],
        ['1f3fc', new Map([[lotus, lotus]])],
        ['1f3fd', new Map([[lotus, clays]])],
        ['1f3fe', new Map([[lotus, shoyu], [wines, cocoa]])],
        ['1f3ff', new Map([[lotus, cocoa], [wines, shoyu]])],
      ]));
    for(let [variant, canvas] of r){
      console.log(`- ${[j,variant,...k].join('-')}.png`);
      writeFileSync(namer(`${[j,variant,...k].join('-')}`), canvas.toBuffer());
    }
  },
  skins = async i => {
    let
      [j, ...k] = i.split('-'),
      r = paletteSwap(await loadImage(namer(i)), new Map([
        ['1f3fb-1f3fc',new Map([[lotus,cream],[candy,lotus],[chive,wines]])],
        ['1f3fb-1f3fd',new Map([[lotus,cream],[candy,clays],[chive,wines]])],
        ['1f3fb-1f3fe',new Map([[lotus,cream],[candy,shoyu],[chive,cocoa]])],
        ['1f3fb-1f3ff',new Map([[lotus,cream],[candy,cocoa],[chive,shoyu]])],
        ['1f3fc-1f3fb',new Map([[candy,cream],[chive,wines]])],
        ['1f3fc-1f3fd',new Map([[candy,clays],[chive,wines]])],
        ['1f3fc-1f3fe',new Map([[candy,shoyu],[chive,cocoa]])],
        ['1f3fc-1f3ff',new Map([[candy,cocoa],[chive,shoyu]])],
        ['1f3fd-1f3fb',new Map([[lotus,clays],[candy,cream],[chive,wines]])],
        ['1f3fd-1f3fc',new Map([[lotus,clays],[candy,lotus],[chive,wines]])],
        ['1f3fd-1f3fe',new Map([[lotus,clays],[candy,shoyu],[chive,cocoa]])],
        ['1f3fd-1f3ff',new Map([[lotus,clays],[candy,cocoa],[chive,shoyu]])],
        ['1f3fe-1f3fb',new Map([
                  [lotus,shoyu],[wines,cocoa],[candy,cream],[chive,wines]])],
        ['1f3fe-1f3fc',new Map([
                  [lotus,shoyu],[wines,cocoa],[candy,lotus],[chive,wines]])],
        ['1f3fe-1f3fd',new Map([
                  [lotus,shoyu],[wines,cocoa],[candy,clays],[chive,wines]])],
        ['1f3fe-1f3ff',new Map([
                  [lotus,shoyu],[wines,cocoa],[candy,cocoa],[chive,shoyu]])],
        ['1f3ff-1f3fb',new Map([
                  [lotus,cocoa],[wines,shoyu],[candy,cream],[chive,wines]])],
        ['1f3ff-1f3fc',new Map([
                  [lotus,cocoa],[wines,shoyu],[candy,lotus],[chive,wines]])],
        ['1f3ff-1f3fd',new Map([
                  [lotus,cocoa],[wines,shoyu],[candy,clays],[chive,wines]])],
        ['1f3ff-1f3fe',new Map([
                  [lotus,cocoa],[wines,shoyu],[candy,shoyu],[chive,cocoa]])],
      ]));
    for(let [variant, canvas] of r){
      let [l, m] = variant.split('-');
      console.log(`- ${[j,l,...k,m].join('-')}.png`);
      writeFileSync(namer(`${[j,l,...k,m].join('-')}`), canvas.toBuffer());
    }
  }
console.log('Palette swapping modified emoji...');
[ // hand-fingers-open
  '1f44b','1f91a','1f590','270b', '1f596','1faf1','1faf2','1faf3','1faf4', 
  '1faf7','1faf8',
  // hand-fingers-partial
  '1f44c','1f90c','1f90f','270c', '1f91e','1faf0','1f91f','1f918','1f919',
  // hand-singe-finger
  '1f448','1f449','1f446','1f595','1f447','261d', '1faf5',
  // hand-fingers-closed
  '1f44d','1f44e','270a', '1f44a','1f91b','1f91c','1f932',
  // hands
  '1f44f','1f64c','1faf6','1f450','1f91d','1f64f',
].forEach(skin);
[ // hands
  '1faf1-200d-1faf2'
].forEach(skins);