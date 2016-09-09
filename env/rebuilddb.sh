#!/bin/bash
set -x
SCRIPT=$(realpath ${BASH_SOURCE[0]})
SCRIPT_PATH=$(dirname ${SCRIPT})
APP_ROOT=$(realpath ${SCRIPT_PATH}/..)

php ${APP_ROOT}/bin/console doc:data:drop --force
php ${APP_ROOT}/bin/console doc:data:create
php ${APP_ROOT}/bin/console doc:schema:create
php ${APP_ROOT}/bin/console doc:fix:load -n
