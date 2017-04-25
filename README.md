# iZivi

A tool to plan zivi employments

## General Purpose

The project's purpose is enable planning of zivis, when they start their employment and when they finish.

## Demo

See the Vagrant VM in env Folder

## Installation

### Windows

Download and install VirtualBox:

	https://www.virtualbox.org/
	
Download and install Cygwin:

	https://cygwin.com/
	In the package selection of the setup, search rsync and add it
	
Modify the hosts file:

	In C:\Windows\System32\drivers\etc\hosts add the line
	192.168.50.51 izivi.test.local
	
Download and install a Git client:

	e.g. https://www.sourcetreeapp.com/
	Check out the current version
	
Start the virtual machine via the cygwin terminal:

	cd /cygdrive/c/Users/YourName/Dime/env
	vagrant up

### OSX

Generally the same steps as for Windows:

  * Install VirtualBox, Vagrant and Dartium
  * run "vagrant up" in the env/ folder
  * Open in Dartium: http://izivi.test.local
  
Default Vagrant File Sync on OSX is very slow, you may want to use rsync or nfs to speed things up
	
## Update

Update to last version

    git pull
    git submodule update
    php composer.phar self-update
    php composer.phar update -v
    app/console assetic:dump
    app/console assets:install --symlink

If you have any problem remove vendor and install again

    rm -fR vendor

Update database

    app/console doctrine:migrations:migrate

## Bundles

There are Multiple Bundle Seperated by features:
    IZiviPlanningBundle Contains the entities
    FrontendBundle The Javascript GUI

## Contributing

Please feel free to contribute issues, improvements and feedback.

For code contributions, [Symfony2 Coding Standards] are the way we want to go.

Please write in English and use the `doc` folders for documentation and proposals rather than Github wiki.

[Symfony2 Coding Standards]: http://symfony.com/doc/master/contributing/code/standards.html

## Development-Branches

Create remote feature branch:

    git pull origin master
    git push origin ISSUENO-and-a-short-description
    git checkout -t ISSUENO-and-a-short-description

or for short bugfixing create only a local branch:

    git pull origin master
    git checkout -b ISSUENO-and-a-short-description

keep up to date with the master (not sure with this - have to test it):

    git fetch origin master
    git rebase orgin/master

if your work is done, merge back to master:

    git checkout master
    git fetch
    git rebase
    git merge ISSUENO-and-a-short-description

Finally remove remote feature branch:

    git push origin :ISSUENO-and-a-short-description

and the local branch too:

    git branch -d ISSUENO-and-a-short-description

## Run Test

Run tests:

    phpunit -c app/

Run a single test:

    phpunit -c app/ --filter {Controller}::{test-method}

## Database Schema Management

Update Database Schema to the latest version:

    php app/console doctrine:migrations:migrate

Migrate Database Schema to a specific version:

    php app/console doctrine:migrations:migrate <version>

Generate new Empty Migration Class:

    php app/console doctrine:migrations:generate

## Fixtures

The fixtures are an example dataset that can be used while developing. But more important: the tests run against this database.

Load fixtures into the database:

    /vagrant/env/fixtures/load_fixtures.sh

When the database schema changed, you need to regenerate the fixtures. You can do this with the following command:

    cd /vagrant/env/fixtures/ && ./regenerate_fixtures.sh

Then export the changes again and check in the new dime.sql into git

    cd /vagrant/env/fixtures/ && ./export_fixtures.sh 
