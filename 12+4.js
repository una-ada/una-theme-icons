const fs = require('fs'),
  path = require('path'),
  sharp = require('sharp');
const a = [],
  d = [path.join(__dirname, '12px')];
(scan = p =>
  fs
    .readdirSync(p)
    .forEach(f =>
      fs.statSync(`${p}/${f}`).isDirectory()
        ? d.push(`${p}/${f}`) && scan(`${p}/${f}`)
        : f == '.DS_Store' || a.push(`${p}/${f}`)
    ))(d[0]);
d.forEach(
  p =>
    ((n = p.replace('12px', '12+4px')) && fs.existsSync(n)) || fs.mkdirSync(n)
);
a.forEach(i =>
  sharp(i)
    .extend({
      top: 2,
      bottom: 2,
      left: 2,
      right: 2,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toFile(i.replace('12px', '12+4px'))
    .then(_ =>
      console.log(`Successfully created ${i.replace('12px', '12+4px')}`)
    )
    .catch(e => console.error(`Could not process ${i}`, e))
);
