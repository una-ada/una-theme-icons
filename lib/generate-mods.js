import { loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import paletteSwap from '@nkzw/palette-swap';
const
  candy = '#bf3041',
  chive = '#555f47',
  clays = '#b57f7f',
  cocoa = '#241714',
  cream = '#e7e1cf',
  cutie = '#ffb0b0',
  lotus = '#e0c1bf',
  shoyu = '#46302a',
  wines = '#703d41',
  namer = f => `../12px/emoji/${f}.png`,
  skin  = async i => {
    let
      [j, ...k] = i.split('-'),
      r = paletteSwap(await loadImage(namer(i)), new Map([
        ['1f3fb', new Map([[lotus,cream]])],
        ['1f3fc', new Map([[lotus,lotus]])],
        ['1f3fd', new Map([[lotus,clays]])],
        ['1f3fe', new Map([[wines,shoyu], [lotus,wines], [clays,shoyu],
                           [cutie, clays]])],
        ['1f3ff', new Map([[wines,cocoa], [lotus,shoyu], [cutie,wines],
                           [clays,cocoa]])],
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
        ['1f3fb-1f3fc', new Map([[lotus,cream], [candy,lotus], [chive,wines]])],
        ['1f3fb-1f3fd', new Map([[lotus,cream], [candy,clays], [chive,wines]])],
        ['1f3fb-1f3fe', new Map([[lotus,cream], [candy,wines], [chive,cocoa]])],
        ['1f3fb-1f3ff', new Map([[lotus,cream], [candy,shoyu], [chive,cocoa]])],
        ['1f3fc-1f3fb', new Map([[candy,cream], [chive,wines]])],
        ['1f3fc-1f3fd', new Map([[candy,clays], [chive,wines]])],
        ['1f3fc-1f3fe', new Map([[candy,wines], [chive,cocoa]])],
        ['1f3fc-1f3ff', new Map([[candy,shoyu], [chive,cocoa]])],
        ['1f3fd-1f3fb', new Map([[lotus,clays], [candy,cream], [chive,wines]])],
        ['1f3fd-1f3fc', new Map([[lotus,clays], [candy,lotus], [chive,wines]])],
        ['1f3fd-1f3fe', new Map([[lotus,clays], [candy,wines], [chive,cocoa]])],
        ['1f3fd-1f3ff', new Map([[lotus,clays], [candy,shoyu], [chive,cocoa]])],
        ['1f3fe-1f3fb', new Map([[wines,cocoa], [lotus,wines], [candy,cream], 
                                 [chive,wines]])],
        ['1f3fe-1f3fc', new Map([[wines,cocoa], [lotus,wines], [candy,lotus], 
                                 [chive,wines]])],
        ['1f3fe-1f3fd', new Map([[wines,cocoa], [lotus,wines], [candy,clays], 
                                 [chive,wines]])],
        ['1f3fe-1f3ff', new Map([[wines,cocoa], [lotus,wines], [candy,shoyu], 
                                 [chive,cocoa]])],
        ['1f3ff-1f3fb', new Map([[lotus,shoyu], [wines,cocoa], [candy,cream], 
                                 [chive,wines]])],
        ['1f3ff-1f3fc', new Map([[lotus,shoyu], [wines,cocoa], [candy,lotus], 
                                 [chive,wines]])],
        ['1f3ff-1f3fd', new Map([[lotus,shoyu], [wines,cocoa], [candy,clays], 
                                 [chive,wines]])],
        ['1f3ff-1f3fe', new Map([[lotus,shoyu], [wines,cocoa], [candy,wines], 
                                 [chive,cocoa]])],
      ]));
    for(let [variant, canvas] of r){
      let [l, m] = variant.split('-');
      console.log(`- ${[j,l,...k,m].join('-')}.png`);
      writeFileSync(namer(`${[j,l,...k,m].join('-')}`), canvas.toBuffer());
    }
  }
console.log('Palette swapping modified emoji...');
[ // hand(s)-*
  '1f44b','1f91a','1f590','270b', '1f596','1faf1','1faf2','1faf3','1faf4', 
  '1faf7','1faf8','1f44c','1f90c','1f90f','270c', '1f91e','1faf0','1f91f',
  '1f918','1f919','1f448','1f449','1f446','1f595','1f447','261d', '1faf5', 
  '1f44d','1f44e','270a', '1f44a','1f91b','1f91c','1f932','1f44f','1f64c',
  '1faf6','1f450','1f91d','1f64f','270d', '1f485','1f933','1f4aa','1f9b5',
  '1f9b6','1f442','1f9bb','1f443',
  // person-*
  '1f476','1f9d2','1f466','1f467','1f9d3','1f474','1f475',
  '1f9d4','1f9d4-200d-2642-fe0f', '1f9d4-200d-2640-fe0f',
  '1f468','1f468-200d-1f9b0',     '1f468-200d-1f9b1',
          '1f468-200d-1f9b3',     '1f468-200d-1f9b2',
  '1f469','1f469-200d-1f9b0',     '1f469-200d-1f9b1',
          '1f469-200d-1f9b3',     '1f469-200d-1f9b2',
  '1f9d1','1f9d1-200d-1f9b0',     '1f9d1-200d-1f9b1',
          '1f9d1-200d-1f9b3',     '1f9d1-200d-1f9b2',
  '1f471','1f471-200d-2640-fe0f', '1f471-200d-2642-fe0f',
  '1f64d','1f64d-200d-2642-fe0f', '1f64d-200d-2640-fe0f',
  '1f64e','1f64e-200d-2642-fe0f', '1f64e-200d-2640-fe0f',
  '1f645','1f645-200d-2642-fe0f', '1f645-200d-2640-fe0f',
  '1f646','1f646-200d-2642-fe0f', '1f646-200d-2640-fe0f',
  '1f481','1f481-200d-2642-fe0f', '1f481-200d-2640-fe0f',
  '1f64b','1f64b-200d-2642-fe0f', '1f64b-200d-2640-fe0f',
  '1f9cf','1f9cf-200d-2642-fe0f', '1f9cf-200d-2640-fe0f',
  '1f647','1f647-200d-2642-fe0f', '1f647-200d-2640-fe0f',
  '1f926','1f926-200d-2642-fe0f', '1f926-200d-2640-fe0f',
  '1f937','1f937-200d-2642-fe0f', '1f937-200d-2640-fe0f',
].forEach(skin);
[ // hands
  '1faf1-200d-1faf2'
].forEach(skins);