#!/bin/bash
CURRENT_DIR=$(pwd)
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
set -x

$ROOT_DIR/env/fixtures/flush_db.sh

# generates new fixtures from with Alice
cd $ROOT_DIR
php ${ROOT_DIR}/bin/console doc:schema:create
php ${ROOT_DIR}/bin/console h4cc_alice_fixtures:load:sets
cd $CURRENT_DIR

$ROOT_DIR/env/fixtures/export.sh
