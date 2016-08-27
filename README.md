kibana-scripted-metric
=================================

kibana plugin to add scripted metrics (experimental)


Status
------

* Unstable - Don't use this yet!


Installation
------------
##### Install
```bash
git clone https://github.com/lmangani/kibana-scripted-metric
cd kibana-scripted-metric && npm install && npm run build
/opt/kibana/bin/kibana plugin --install kibana-scripted-metric -u file://`pwd`/build/kibana_scripted_metric-0.0.1.zip
```

##### Uninstall
```bash
/opt/kibana/bin/kibana plugin --remove fieldformatter-bits
```

Credits
-------
Based on discussion and code related to this thread: https://github.com/elastic/kibana/issues/2646 
and patches from https://github.com/fabiangebert/kibana

License
-------
[MIT](/LICENSE)
