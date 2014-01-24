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
      plugins: [ 'chai-spies' ],
      showStack: true,
      showDiff: true,
      global: true
    }
  });
}
