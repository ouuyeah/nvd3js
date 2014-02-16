Package.describe({
  summary: 'Nvd3.org charts with Meteor, updated version.'
});

Package.on_use(function (api) {
  api.use('d3', 'client');

  api.add_files('lib/nv.d3.min.js', 'client');
  api.add_files('lib/nv.d3.css', 'client');
});