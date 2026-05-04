import { loadImage }      from 'canvas';
import { writeFileSync }  from 'fs';
import paletteSwap        from '@nkzw/palette-swap';
import emoji              from './emoji.json' with { type: 'json' };
const
  e = Object.keys(emoji).reduce((a,i) => Object.keys(emoji[i]).reduce((b,j) =>
      emoji[i][j].reduce((c, k) =>
        k.qual == 'fully-qualified' ? c.set(k.code.toLowerCase(), [
          ['child',  'kit'  ], ['girl',  'kitten'], ['boy',  'puppy'],
          ['person', 'fox'  ], ['woman', 'cat'   ], ['man',  'dog'  ],
          ['people', 'foxes'], ['women', 'cats'  ], ['men',  'dogs' ],
          ['skullcap','gua pi mao']
        ].reduce((d, [i, j]) => d.replaceAll(i, j), k.cldr)) : c,
      b), a), new Map()),
  /*
   * Functions p and q are tagged templates:
   *  - p adds a ZWJ:               1f469-1f692 => 1f469-200d-1f692
   *  - q adds a ZWJ and selector:  1f46e-2642  => 1f46e-200d-2642-fe0f
   * Functions w, x, y, and z are more convenient forms:
   *  - w genders qualified emoji (gendered person + zwj + input): 
   *    1f680 => p`1f9d1-1f680`, p`1f468-1f680`, p`1f469-1f680`
   *  - x genders unqualified emoji (w with presentation selector)
   *    2708  => q`1f9d1-2708`,  q`1f468-2708`,  q`1f469-2708`
   *  - y is for emoji gendered by symbols (2640, 2642) rather than their base
   *    1f46e => 1f46e,          q`1f46e-2640`,  q`1f46e-2642`
   *  - z is like y but when the base emoji requires the variation selector
   *    1f575 => 1f575, 1f575-fe0f-200d-2640-fe0f, 1f575-fe0f-200d-2642-fe0f
  */
  p = t => (([a,b]) => `${a}-200d-${b}`     )(t[0].split`-`),
  q = t => (([a,b]) => `${a}-200d-${b}-fe0f`)(t[0].split`-`),
  w = t => ['1f9d1', '1f468', '1f469'].map(i => `${i}-200d-${t}`),
  x = t => ['1f9d1', '1f468', '1f469'].map(i => `${i}-200d-${t}-fe0f`),
  y = t => [t[0], ...['2640', '2642' ].map(i => `${t}-200d-${i}-fe0f`)],
  z = t => [t[0], ...['2640', '2642' ].map(i => `${t}-fe0f-200d-${i}-fe0f`)],
  n = f => `../12px/emoji/${f}.png`,
  s = o => i => loadImage(n(i)).then(g => {
    let r = paletteSwap(g, o);
    for(let [v, c] of r){
      let [j, ...k] = i.split`-`,
          [l, ...m] = v.split`-`;
      k.length > 1 && k[0] == 'fe0f' && k.shift();
      let f = [j, l, ...k, ...m].join`-`;
      console.log(`...${f} (${e.get(f)})`);
      writeFileSync(n(f), c.toBuffer());
    }
  }),
  lt = '#e0c1bf', ct = '#ffb0b0', cd = '#bf3041', kr = '#2f141b',
                  cl = '#b57f7f', wn = '#703d41',
                  bk = '#d68067', sy = '#46302a', cc = '#241714',
  cm = '#e7e1cf', rd = '#dccca1', bs = '#59523b', ol = '#2e2d1c',
  oz = '#c1dabe', gp = '#9cb886', cv = '#555f47', tr = '#122114',
                  fm = '#729a89', gr = '#264d39',
  fr = '#d6f2f5', pl = '#a2c9cb', cr = '#145c62', rl = '#0e2d31',
                  st = '#8ba2bb', ac = '#345374',
  fy = '#e9dcf9', ll = '#b2adcc', br = '#2a2858', nt = '#181632',
                  mv = '#b899b6', pr = '#634563', qn = '#200e20';

console.log('Palette swapping skin tone emoji...');
await Promise.all([
  // hand(s)-*
   '1f44b', '1f91a', '1f590', '270b',  '1f596', '1faf1', '1faf2', '1faf3',
   '1faf4', '1faf7', '1faf8', '1f44c', '1f90c', '1f90f', '270c',  '1f91e',
   '1faf0', '1f91f', '1f918', '1f919', '1f448', '1f449', '1f446', '1f595',
   '1f447', '261d',  '1faf5', '1f44d', '1f44e', '270a',  '1f44a', '1f91b',
   '1f91c', '1f932', '1f44f', '1f64c', '1faf6', '1f450', '1f91d', '1f64f',
   '270d',  '1f485', '1f933', '1f4aa', '1f9b5', '1f9b6', '1f442', '1f9bb',
   '1f443',
  // person
   '1f476', '1f9d2', '1f466', '1f467', '1f9d3', '1f474', '1f475', '1f9d1',
   '1f468', '1f469',w`1f9b0`,w`1f9b1`,w`1f9b2`,w`1f9b3`,y`1f9d4`,y`1f471`,
  // person-gesture
  y`1f64d`,y`1f64e`,y`1f645`,y`1f646`,y`1f481`,y`1f64b`,y`1f9cf`,y`1f647`,
  y`1f926`,y`1f937`,
  // person-role
  x`2695`, w`1f393`,w`1f3eb`,x`2696`, w`1f33e`,w`1f373`,w`1f527`,w`1f3ed`,
  w`1f4bc`,w`1f52c`,w`1f4bb`,w`1f3a4`,w`1f3a8`,x`2708`, w`1f680`,w`1f692`,
  y`1f46e`,z`1f575`,y`1f482`, '1f977',y`1f477`, '1fac5', '1f934', '1f478',
  y`1f473`, '1f472', '1f9d5',y`1f935`,y`1f470`, '1fac4', '1fac3', '1f930',
   '1f931',w`1f37c`,
].flat().map(s(new Map([
  ['1f3fb', new Map([                  [lt,cm]         ])],
  ['1f3fc', new Map([                  [lt,lt]         ])],
  ['1f3fd', new Map([[cl,wn],          [lt,cl]         ])],
  ['1f3fe', new Map([[cl,sy], [wn,sy], [lt,wn], [ct,cl]])],
  ['1f3ff', new Map([[cl,cc], [wn,cc], [lt,sy], [ct,wn]])],
]))));

console.log("Palette swapping multiple skin tone emoji...");
await Promise.all([
  // hands
  p`1faf1-1faf2`
].map(s(new Map([
  ['1f3fb-1f3fc', new Map([         [lt,cm], [cd,lt], [cv,wn]])],
  ['1f3fb-1f3fd', new Map([         [lt,cm], [cd,cl], [cv,wn]])],
  ['1f3fb-1f3fe', new Map([         [lt,cm], [cd,wn], [cv,cc]])],
  ['1f3fb-1f3ff', new Map([         [lt,cm], [cd,sy], [cv,cc]])],
  ['1f3fc-1f3fb', new Map([                  [cd,cm], [cv,wn]])],
  ['1f3fc-1f3fd', new Map([                  [cd,cl], [cv,wn]])],
  ['1f3fc-1f3fe', new Map([                  [cd,wn], [cv,cc]])],
  ['1f3fc-1f3ff', new Map([                  [cd,sy], [cv,cc]])],
  ['1f3fd-1f3fb', new Map([         [lt,cl], [cd,cm], [cv,wn]])],
  ['1f3fd-1f3fc', new Map([         [lt,cl], [cd,lt], [cv,wn]])],
  ['1f3fd-1f3fe', new Map([         [lt,cl], [cd,wn], [cv,cc]])],
  ['1f3fd-1f3ff', new Map([         [lt,cl], [cd,sy], [cv,cc]])],
  ['1f3fe-1f3fb', new Map([[wn,cc], [lt,wn], [cd,cm], [cv,wn]])],
  ['1f3fe-1f3fc', new Map([[wn,cc], [lt,wn], [cd,lt], [cv,wn]])],
  ['1f3fe-1f3fd', new Map([[wn,cc], [lt,wn], [cd,cl], [cv,wn]])],
  ['1f3fe-1f3ff', new Map([[wn,cc], [lt,wn], [cd,sy], [cv,cc]])],
  ['1f3ff-1f3fb', new Map([[wn,cc], [lt,sy], [cd,cm], [cv,wn]])],
  ['1f3ff-1f3fc', new Map([[wn,cc], [lt,sy], [cd,lt], [cv,wn]])],
  ['1f3ff-1f3fd', new Map([[wn,cc], [lt,sy], [cd,cl], [cv,wn]])],
  ['1f3ff-1f3fe', new Map([[wn,cc], [lt,sy], [cd,wn], [cv,cc]])],
]))));

console.log("Completed.")