# iZivi Symfony

## Installation / Setup for Development

Download and install Docker and docker-compose:

    https://www.docker.com

Download and install a Git client:

    e.g. https://www.sourcetreeapp.com/
    Check out the current version

Now fire up MariaDB and Izivi on the docker machine via the docker-compose tool:

    docker-compose up -d --build

Open http://localhost:3000:

    Open http://localhost:3000
    API: localhost:3001


## Using Docker & docker-compose

You can inspect the logs of Izivi and MariaDB by:

    docker-compose logs -f

Enter the izivi docker container as root in interactive mode (bash):

    docker exec -it izivi bash

Enter the izivi-frontend docker container as root in interactive mode (bash):

    docker exec -it izivi bash

For more infos visit docker.com


## Update

Update to last version

    git pull
    composer self-update
    composer update -v
    ./env/install_bundles.sh

If you have any problem remove vendor and install again

    rm -fR vendor

Update database

    docker exec -it izivi php app/console doctrine:migrations:migrate


## Bundles

There are Multiple Bundle Seperated by features:
    IZiviPlanningBundle Contains the entities


## Contributing

Please feel free to contribute issues, improvements and feedback.

For code contributions, [Symfony2 Coding Standards] are the way we want to go.

Please write in English and use the `doc` folders for documentation and proposals rather than Github wiki.

[Symfony2 Coding Standards]: http://symfony.com/doc/master/contributing/code/standards.html


## Development-Branches

The branches API and Frontend are gone. We switch now to feature branches. Every feature branch will be created from master. Here the steps to go.

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

    docker exec -it izivi ./env/run_tests.sh

Run a single test:

    docker exec -it izivi ./env/run_tests.sh --filter ActivitiesControllerTest::testGetActivitiesAction


## Building the Frontend

TODO


## Database Schema Management

Update Database Schema to the latest version:

    docker exec -it izivi php app/console doctrine:migrations:migrate

Migrate Database Schema to a specific version:

    docker exec -it izivi php app/console doctrine:migrations:migrate <version>

Generate new Empty Migration Class:

    docker exec -it izivi php app/console doctrine:migrations:generate

After changing the ORM schema, sometimes you need to clear the cache before it works:

    docker exec -it izivi php app/console cache:clear


## Fixtures

The fixtures are an example dataset that can be used while developing. But more important: the tests run against this database.

Load fixtures into the database:

    docker exec -it izivi ./env/fixtures/load.sh

When the database schema changed, you need to regenerate the fixtures. You can do this with the following command (may take a while):

    docker exec -it izivi ./env/db_generate_new_fixtures.sh

Then export the changes again and check in the new izivi.sql into git

    docker exec -it izivi ./env/fixtures/export.sh


## Deployment

### Deployment at SWO

Please see Documentation at: DiskStation:/intern/IT/11 Datenbank/Izivi/Dokumentationen/Betriebsdokumentation.docx

# Known Issues

## Using Docker with Docker for Windows/Mac

If you use the new Docker for Windows/Mac Tray thing, you'll have to make sure that this Repository as well as any other mounted volumes in docker-compose.yml are part of the `File Sharing` Tab of the tool. Else sync will not work.

We recommend using at least 2 CPU's and 4 GB of memory for your docker machine to make everything run smooth.
