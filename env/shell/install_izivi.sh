#!/bin/bash

# => This script should run as user "vagrant"

cd /vagrant

# copy config files
/bin/cp /vagrant/app/config/parameters.yml.dist /vagrant/app/config/parameters.yml
/bin/cp /vagrant/web/.htaccess_dev /vagrant/web/.htaccess

# install dependencies
php /usr/local/bin/composer.phar install

# prepare database
mysql -u izivi -pizivi -e "DROP DATABASE IF EXISTS izivi; CREATE DATABASE izivi;"
php app/console doctrine:schema:create
mysql -u izivi -pizivi izivi < env/fixtures/izivi.sql

# prepare assets
php app/console assetic:dump
php bin/console asset:install --symlink
