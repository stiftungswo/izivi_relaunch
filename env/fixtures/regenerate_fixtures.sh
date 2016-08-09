#!/bin/bash

# generates new fixtures from with Alice and saves them into izivi.sql

cd /vagrant
mysql -u izivi -pizivi -e "DROP DATABASE izivi; CREATE DATABASE izivi;"
php app/console doctrine:schema:create
php app/console h4cc_alice_fixtures:load:sets
mysqldump -u izivi -pizivi izivi > /vagrant/env/fixtures/izivi.sql