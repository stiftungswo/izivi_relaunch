#!/bin/bash
set -x

/vagrant/env/fixtures/load_fixtures.sh

phpunit -c /vagrant/bin/

# with coverage:
#phpunit -c /vagrant/app/ --coverage-html /vagrant/test-coverage
