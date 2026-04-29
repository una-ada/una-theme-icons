import { loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import paletteSwap from '@nkzw/palette-swap';
const
  cd /*CANDY*/ = '#bf3041', cv /*CHIVE*/ = '#555f47', cl /*CLAYS*/ = '#b57f7f',
  cc /*COCOA*/ = '#241714', cm /*CREAM*/ = '#e7e1cf', ct /*CUTIE*/ = '#ffb0b0',
  lt /*LOTUS*/ = '#e0c1bf', sy /*SHOYU*/ = '#46302a', wn /*WINES*/ = '#703d41',
  p     = t => (([a,b]) => `${a}-200d-${b}`     )(t[0].split`-`), // min. qual.
  q     = t => (([a,b]) => `${a}-200d-${b}-fe0f`)(t[0].split`-`), // full qual.
  namer = f => `../12px/emoji/${f}.png`,
  skin  = async i => {
    let
      [j, ...k] = i.split('-'),
      r = paletteSwap(await loadImage(namer(i)), new Map([
        ['1f3fb', new Map([[lt,cm]])],
        ['1f3fc', new Map([[lt,lt]])],
        ['1f3fd', new Map([[cl,wn], [lt,cl]])],
        ['1f3fe', new Map([[wn,sy], [lt,wn], [cl,sy], [ct,cl]])],
        ['1f3ff', new Map([[wn,cc], [lt,sy], [ct,wn], [cl,cc]])],
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
        ['1f3fb-1f3fc', new Map([[lt,cm], [cd,lt], [cv,wn]])],
        ['1f3fb-1f3fd', new Map([[lt,cm], [cd,cl], [cv,wn]])],
        ['1f3fb-1f3fe', new Map([[lt,cm], [cd,wn], [cv,cc]])],
        ['1f3fb-1f3ff', new Map([[lt,cm], [cd,sy], [cv,cc]])],
        ['1f3fc-1f3fb', new Map([[cd,cm], [cv,wn]])],
        ['1f3fc-1f3fd', new Map([[cd,cl], [cv,wn]])],
        ['1f3fc-1f3fe', new Map([[cd,wn], [cv,cc]])],
        ['1f3fc-1f3ff', new Map([[cd,sy], [cv,cc]])],
        ['1f3fd-1f3fb', new Map([[lt,cl], [cd,cm], [cv,wn]])],
        ['1f3fd-1f3fc', new Map([[lt,cl], [cd,lt], [cv,wn]])],
        ['1f3fd-1f3fe', new Map([[lt,cl], [cd,wn], [cv,cc]])],
        ['1f3fd-1f3ff', new Map([[lt,cl], [cd,sy], [cv,cc]])],
        ['1f3fe-1f3fb', new Map([[wn,cc], [lt,wn], [cd,cm], [cv,wn]])],
        ['1f3fe-1f3fc', new Map([[wn,cc], [lt,wn], [cd,lt], [cv,wn]])],
        ['1f3fe-1f3fd', new Map([[wn,cc], [lt,wn], [cd,cl], [cv,wn]])],
        ['1f3fe-1f3ff', new Map([[wn,cc], [lt,wn], [cd,sy], [cv,cc]])],
        ['1f3ff-1f3fb', new Map([[lt,sy], [wn,cc], [cd,cm], [cv,wn]])],
        ['1f3ff-1f3fc', new Map([[lt,sy], [wn,cc], [cd,lt], [cv,wn]])],
        ['1f3ff-1f3fd', new Map([[lt,sy], [wn,cc], [cd,cl], [cv,wn]])],
        ['1f3ff-1f3fe', new Map([[lt,sy], [wn,cc], [cd,wn], [cv,cc]])],
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
  // person
  '1f476','1f9d2','1f466','1f467','1f9d3','1f474','1f475',
  '1f9d1', p`1f9d1-1f9b0`, p`1f9d1-1f9b1`, p`1f9d1-1f9b3`, p`1f9d1-1f9b2`,
  '1f468', p`1f468-1f9b0`, p`1f468-1f9b1`, p`1f468-1f9b3`, p`1f468-1f9b2`,
  '1f469', p`1f469-1f9b0`, p`1f469-1f9b1`, p`1f469-1f9b3`, p`1f469-1f9b2`,
  '1f9d4', q`1f9d4-2642`,  q`1f9d4-2640`,  // beard
  '1f471', q`1f471-2640`,  q`1f471-2642`,  // blond hair
  // person-gesture
  '1f64d', q`1f64d-2642`,  q`1f64d-2640`,  // frowning
  '1f64e', q`1f64e-2642`,  q`1f64e-2640`,  // pouting
  '1f645', q`1f645-2642`,  q`1f645-2640`,  // gesturing no
  '1f646', q`1f646-2642`,  q`1f646-2640`,  // gesturing ok
  '1f481', q`1f481-2642`,  q`1f481-2640`,  // tipping hand
  '1f64b', q`1f64b-2642`,  q`1f64b-2640`,  // raising hand
  '1f9cf', q`1f9cf-2642`,  q`1f9cf-2640`,  // deaf
  '1f647', q`1f647-2642`,  q`1f647-2640`,  // bowing
  '1f926', q`1f926-2642`,  q`1f926-2640`,  // facepalming
  '1f937', q`1f937-2642`,  q`1f937-2640`,  // shrugging
  // person-role
  q`1f9d1-2695`,  q`1f468-2695`,  q`1f469-2695`,  // health worker
  p`1f9d1-1f393`, p`1f468-1f393`, p`1f469-1f393`, // student
  p`1f9d1-1f3eb`, p`1f468-1f3eb`, p`1f469-1f3eb`, // teacher
  q`1f9d1-2696`,  q`1f468-2696`,  q`1f469-2696`,  // judge
  p`1f9d1-1f33e`, p`1f468-1f33e`, p`1f469-1f33e`, // farmer
  p`1f9d1-1f373`, p`1f468-1f373`, p`1f469-1f373`, // cook
  p`1f9d1-1f527`, p`1f468-1f527`, p`1f469-1f527`, // mechanic
].forEach(skin);
[ // hands
  '1faf1-200d-1faf2'
].forEach(skins);