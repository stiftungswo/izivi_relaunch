#!/bin/sh

# print commands (-x)
set -x

# install useful helper packages
yum -y install vim vim-enhanced curl unzip wget git openssh-server

# install apache/mysql server
yum -y install httpd mariadb mariadb-server

# install php
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
yum -y install php56w php56w-pear php56w-mbstring php56w-intl php56w-xml php56w-pecl-xdebug php56w-pecl-apcu php56w-process php56w-gd php56w-mcrypt php-phpunit-PHPUnit php56w-phpdbg php56w-pdo php56w-mysql

# disable firewall for development
systemctl disable firewalld
systemctl stop firewalld

# disable SELinux for development
setenforce 0
sed -i 's/^SELINUX=.*/SELINUX=disabled/g' /etc/sysconfig/selinux
sed -i 's/^SELINUX=.*/SELINUX=disabled/g' /etc/selinux/config

# TODO: sshd config

# configure mysql/maria
service mariadb start
mysql -u root -e "CREATE DATABASE IF NOT EXISTS izivi;"
mysql -u root -e "GRANT all privileges on izivi.* to izivi@'localhost' IDENTIFIED BY 'izivi';"
mysql -u root -e "FLUSH PRIVILEGES;"
service mariadb restart

# configure httpd
/bin/cp /vagrant/env/config/izivi.conf /etc/httpd/conf.d/izivi.conf
/bin/cp /vagrant/env/config/izivi.ini /etc/php.d/izivi.ini
service httpd start

# install xdebug
yum install php56w-devel php56w-pear
yum install gcc gcc-c++ autoconf automake
pecl install Xdebug
service httpd restart

# install npm
yum -y install nodejs npm
npm install -g npm

# configure autostart on boot
sudo systemctl enable httpd.service
sudo systemctl enable mariadb.service

# install composer
if [ -f /usr/local/bin/composer.phar ]; then
    php /usr/local/bin/composer.phar selfupdate
else
    curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/
fi

# Install izivi (we need to run this as vagrant user)
/bin/su - vagrant -c "chmod +x /vagrant/env/shell/install_izivi.sh" # make install_izivi.sh executable
/bin/su - vagrant -c "/vagrant/env/shell/install_izivi.sh"

# make cache and logs folder writable
HTTPDUSER=`ps aux | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1`
sudo setfacl -R -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX /vagrant/var/cache /vagrant/var/logs
sudo setfacl -dR -m u:"$HTTPDUSER":rwX -m u:`whoami`:rwX /vagrant/var/cache /vagrant/var/logs
