import { loadImage }      from 'canvas';
import { writeFileSync }  from 'fs';
import paletteSwap        from '@nkzw/palette-swap';
const
  p = t => (([a,b]) => `${a}-200d-${b}`     )(t[0].split`-`), // min. qual.
  q = t => (([a,b]) => `${a}-200d-${b}-fe0f`)(t[0].split`-`), // full qual.
  n = f => `../12px/emoji/${f}.png`,
  s = o => i => loadImage(n(i)).then(g => {
    let r = paletteSwap(g, o);
    for(let [v, c] of r){
      let [j, ...k] = i.split`-`,
          [l, ...m] = v.split`-`,
          f = [j, l, ...k, ...m].join`-`;
      console.log(`- ${f}.png`);
      writeFileSync(n(f), c.toBuffer());
    }
  }),
  lt=lotus='#e0c1bf',ct=cutie='#ffb0b0',cd=candy='#bf3041',kr=krmis='#2f141b',
  /*=empty='#xxxxxx*/cl=clays='#b57f7f',wn=wines='#703d41',/*=empty='#xxxxxx*/
  /*=empty='#xxxxxx*/bk=baked='#d68067',sy=shoyu='#46302a',cc=cocoa='#241714',
  cm=cream='#e7e1cf',rd=reeds='#dccca1',bs=bistr='#59523b',ol=olive='#2e2d1c',
  oz=ozone='#c1dabe',gp=grape='#9cb886',cv=chive='#555f47',tr=trees='#122114',
  /*=empty='#xxxxxx*/fm=foamy='#729a89',gr=grass='#264d39',/*=empty='#xxxxxx*/
  fr=frost='#d6f2f5',pl=plush='#a2c9cb',cr=coral='#145c62',rl=royal='#0e2d31',
  /*=empty='#xxxxxx*/st=stone='#8ba2bb',ac=acais='#345374',/*=empty='#xxxxxx*/
  fy=fairy='#e9dcf9',ll=lilac='#b2adcc',br=berry='#2a2858',nt=night='#181632',
  /*=empty='#xxxxxx*/mv=mauve='#b899b6',pr=perry='#634563',qn=queen='#200e20';

console.log('Palette swapping skin tone emoji...');
await Promise.all([ // hand(s)-*
  '1f44b','1f91a','1f590','270b', '1f596','1faf1','1faf2','1faf3','1faf4', 
  '1faf7','1faf8','1f44c','1f90c','1f90f','270c', '1f91e','1faf0','1f91f',
  '1f918','1f919','1f448','1f449','1f446','1f595','1f447','261d', '1faf5', 
  '1f44d','1f44e','270a', '1f44a','1f91b','1f91c','1f932','1f44f','1f64c',
  '1faf6','1f450','1f91d','1f64f','270d', '1f485','1f933','1f4aa','1f9b5',
  '1f9b6','1f442','1f9bb','1f443',
  // person
  '1f476','1f9d2','1f466','1f467','1f9d3','1f474','1f475',
  '1f9d1', p`1f9d1-1f9b0`, p`1f9d1-1f9b1`, p`1f9d1-1f9b2`, p`1f9d1-1f9b3`,
  '1f468', p`1f468-1f9b0`, p`1f468-1f9b1`, p`1f468-1f9b2`, p`1f468-1f9b3`,
  '1f469', p`1f469-1f9b0`, p`1f469-1f9b1`, p`1f469-1f9b2`, p`1f469-1f9b3`,
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
  p`1f9d1-1f3ed`, p`1f468-1f3ed`, p`1f469-1f3ed`, // factory worker
  p`1f9d1-1f4bc`, p`1f468-1f4bc`, p`1f469-1f4bc`, // office worker
  p`1f9d1-1f52c`, p`1f468-1f52c`, p`1f469-1f52c`, // scientist
  p`1f9d1-1f4bb`, p`1f468-1f4bb`, p`1f469-1f4bb`, // technologist
  p`1f9d1-1f3a4`, p`1f468-1f3a4`, p`1f469-1f3a4`, // singer
  p`1f9d1-1f3a8`, p`1f468-1f3a8`, p`1f469-1f3a8`, // artist
  q`1f9d1-2708`,  q`1f468-2708`,  q`1f469-2708`,  // pilot
  p`1f9d1-1f680`, p`1f468-1f680`, p`1f469-1f680`, // astronaut
  p`1f9d1-1f692`, p`1f468-1f692`, p`1f469-1f692`, // firefighter
   '1f46e',       q`1f46e-2642`,  q`1f46e-2640`,  // police officer
].map(s(new Map([
  ['1f3fb', new Map([                  [lt,cm]         ])],
  ['1f3fc', new Map([                  [lt,lt]         ])],
  ['1f3fd', new Map([[cl,wn],          [lt,cl]         ])],
  ['1f3fe', new Map([[cl,sy], [wn,sy], [lt,wn], [ct,cl]])],
  ['1f3ff', new Map([[cl,cc], [wn,cc], [lt,sy], [ct,wn]])],
]))))

console.log("Palette swapping multiple skin tone emoji...");
await Promise.all([ // hands
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