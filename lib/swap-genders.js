import { readdirSync, renameSync } from 'fs';
var a = [],
    p  = `../12px/emoji/`,
    n = /264(0|2)\./g,
    s = [['1f466','1f467'],['1f468','1f469'],['1f474','1f475'],['2640','2642'],
         ['1f934','1f478'],['1f930','1fac3']],
    m = RegExp(`(${s.flat().join`|`})(-|.)`, 'g');
readdirSync(p).forEach(f =>
    f.match(m) &&
   !f.match(n) &&
    a.push(`${p}${f}`));
var b = a.map(v =>
    s.reduce(
      (f, [i, j]) => f.replace(
        RegExp(`(${i}|${j})`),
        $1 => $1 == i ? j : i
      ), v
    ) + '-temp');
a.forEach((v, i) => console.log(`- ${v} => ${b[i]}`) || renameSync(v, b[i]));
b.forEach( v     => renameSync(v, v.replace('-temp', '')));