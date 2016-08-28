kibana-scripted-metric
=================================

Kibana 4.5 plugin/patch to add support for [Scripted Metric Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-scripted-metric-aggregation.html)

```json
{
    "query" : {
        "match_all" : {}
    },
    "aggs": {
        "profit": {
            "scripted_metric": {
                "init_script" : "_agg['transactions'] = []",
                "map_script" : "if (doc['type'].value == \"sale\") { _agg.transactions.add(doc['amount'].value) } else { _agg.transactions.add(-1 * doc['amount'].value) }", 
                "combine_script" : "profit = 0; for (t in _agg.transactions) { profit += t }; return profit",
                "reduce_script" : "profit = 0; for (a in _aggs) { profit += a }; return profit"
            }
        }
    }
}
```

Status
------

* Experimental and Brutal - Use at your OWN risk!


Installation
------------
#### Backup First!
```
tar cvfz /opt/kibana/src/ui-backup.tgz -C /opt/kibana/src/ui .
```

##### Install Patch
```bash
curl -O https://github.com/elasticfence/kibana-scripted-metric/files/441369/kibana-scripted-metric-4.5.0.tar.gz
tar zxvf ./kibana-scripted-metric-4.5.0.tar.gz -C /opt/kibana/src/ui/
rm -rf /opt/kibana/optimize/bundles
```

##### Build & Install Patch
```bash
cd /usr/src && git clone https://github.com/elasticfence/kibana-scripted-metric
cd kibana-scripted-metric && npm install && npm run package
tar zxvf ./kibana-scripted-metric-4.5.0.tar.gz -C /opt/kibana/src/ui/
rm -rf /opt/kibana/optimize/bundles
```

##### Remove / Restore
```bash
tar zxvf /opt/kibana/src/ui-backup.tgz -C /opt/kibana/src/ui
```
```
rm -rf /opt/kibana/optimize/bundles
```

Credit
-------
Based on discussion and code related to this thread: https://github.com/elastic/kibana/issues/2646 and patches from https://github.com/fabiangebert/kibana

License
-------
[MIT](/LICENSE)
