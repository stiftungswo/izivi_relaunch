#!/bin/bash
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"
set -x

# drops the izivi database
mysql --host=mysql -u root -e "DROP DATABASE IF EXISTS izivi; CREATE DATABASE izivi;"
mysql --host=mysql -u root -e "GRANT all privileges on izivi.* to izivi@'%' IDENTIFIED BY 'izivi';"
mysql --host=mysql -u root -e "FLUSH PRIVILEGES;"
