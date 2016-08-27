import _ from 'lodash';

module.exports = function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      visTypes: ['plugins/kibana-scripted-metric/scripted-metric']
    }
  });
};
