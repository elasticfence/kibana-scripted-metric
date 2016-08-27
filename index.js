module.exports = function (kibana) {
  return new kibana.Plugin({
    id: 'kibana-scripted-metric',
    name: 'kibana-scripted-metric',
    uiExports: {
      aggTypes: ['plugins/kibana-scripted-metric/scripted-metric']
    }
  });
};
