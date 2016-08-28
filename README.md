kibana-scripted-metric
=================================

Kibana 5.0 plugin/patch to add scripted metric aggregation type


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
curl -O https://github.com/lmangani/kibana-scripted-metric/files/441314/kibana-scripted-metric-5.0.0.tar.gz
tar zxvf ./kibana-scripted-metric-5.0.0.tar.gz -C /opt/kibana/src/ui/
rm -rf /opt/kibana/optimize/bundles
```

##### Build & Install Patch
```bash
cd /usr/src && git clone https://github.com/lmangani/kibana-scripted-metric
cd kibana-scripted-metric && npm install && npm run package
tar zxvf ./kibana-scripted-metric-latest.tar.gz -C /opt/kibana/src/ui/
```
```
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
