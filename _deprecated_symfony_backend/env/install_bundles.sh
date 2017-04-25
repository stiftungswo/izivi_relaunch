#!/bin/bash
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
set -x

php ${ROOT_DIR}/bin/console assetic:dump
php ${ROOT_DIR}/bin/console asset:install --symlink
