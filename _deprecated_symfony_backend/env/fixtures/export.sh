#!/bin/bash
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"
set -x

# dumps data to zivi.sql so it can be used as fixtures
mysqldump --host=mysql -u izivi -pizivi izivi > $ROOT_DIR/env/fixtures/izivi.sql
