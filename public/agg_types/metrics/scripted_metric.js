import _ from 'lodash';
import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import RegistryFieldFormatsProvider from 'ui/registry/field_formats';
import StringEditorProvider from 'ui/agg_types/controls/string.html';

export default function AggTypeMetricScriptedMetricProvider(Private) {
  
    // KBN 5
    let MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);
    let fieldFormats = Private(RegistryFieldFormatsProvider);
    let stringEditor = Private(StringEditorProvider);

    return new MetricAggType({
      name: 'scripted_metric',
      title: 'Scripted Metric',
      makeLabel: function (aggConfig) {
        return aggConfig.params.field.displayName;
      },
      getFormat: function () {
        return fieldFormats.getDefaultInstance('number') || fieldFormats.getDefaultInstance('percent');
      },
      supportsOrderBy: false,
      params: [
        {
          name: 'init_script',
          editor: stringEditor,
          default: ''
        }, {
          name: 'map_script',
          editor: stringEditor,
          default: ''
        }, {
          name: 'combine_script',
          editor: stringEditor,
          default: ''
        }, {
          name: 'reduce_script',
          editor: stringEditor,
          default: ''
        }, {
          name: 'kibana_display_name',
          editor: stringEditor,
          default: 'Scripted Metric'
        }
      ]
    });
};
