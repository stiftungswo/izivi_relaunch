#!/bin/bash
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"
set -x

# loads fixtures from izivi.sql
mysql --host=mysql -u izivi -pizivi izivi < $ROOT_DIR/env/fixtures/izivi.sql
