#!/bin/bash

# drops the izivi database and loads fixtures from izivi.sql

cd /vagrant
mysql -u izivi -pizivi -e "DROP DATABASE izivi; CREATE DATABASE izivi;"
mysql -u izivi -pizivi izivi < /vagrant/env/fixtures/izivi.sql
