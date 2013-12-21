module.exports = function(hydro) {
  hydro.set({
    attach: global,
    plugins: [
      'hydro-chai',
      'hydro-file-suite',
      'hydro-minimal',
    ],
    formatter: 'hydro-doc',
    chai: {
      style: [ 'should' ],
      showStack: true,
      showDiff: true
    }
  });
}
