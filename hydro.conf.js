module.exports = function(hydro) {
  hydro.set({
    attach: global,
    plugins: [
      'hydro-chai',
      'hydro-file-suite',
      'hydro-tdd',
    ],
    formatter: 'hydro-doc',
    chai: {
      styles: [ 'assert', 'should' ],
      showStack: true,
      showDiff: true
    }
  });
}
