const fs = require('fs');
function main() {
  const
    v = '17.0.0';
  fetch(`https://www.unicode.org/Public/${v}/emoji/emoji-test.txt`)
    .then(r => r.text())
    .then(t => fs.writeFileSync('emoji.json',
      JSON.stringify(t
        .split('\n')
        .reduce(
          (a, l) =>
            l.charAt(0) == '#'
              ? l.match('# subgroup: ')
                ? (a[Object.keys(a).at(-1)][l.split(': ')[1]] = []) && a
                : l.match('# group: ')
                  ? (a[l.split(': ')[1]] = {}) && a
                  : a
              : l.match(/^\s*$/g)
                ? a
                : (z => 
                  a[z][Object.keys(a[z]).at(-1)].push({
                    cldr: l.split(/E[0-9]+\.[0-9]+\s/)[1],
                    code: l.split(';')[0].match(/\w+/g).join('-'),
                    qual: l.split(/;|#/)[1].match(/[a-z\-]+/)[0],
                  }) && a
                )(Object.keys(a).at(-1)),
          {}
        )
      )
    ));
}
main();