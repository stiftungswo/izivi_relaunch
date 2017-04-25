#!/bin/bash
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
set -x

$ROOT_DIR/env/fixtures/flush_db.sh
php ${ROOT_DIR}/bin/console doc:schema:create
$ROOT_DIR/env/fixtures/load.sh
