# iZivi Backend Reference

## Bundles

There are Multiple Bundle Seperated by features:
    IZiviPlanningBundle Contains the entities


## Contributing

Please feel free to contribute issues, improvements and feedback.

For code contributions, [Symfony2 Coding Standards] are the way we want to go.

Please write in English and use the `doc` folders for documentation and proposals rather than Github wiki.

[Symfony2 Coding Standards]: http://symfony.com/doc/master/contributing/code/standards.html


## Run Test

Run tests:

    docker exec -it izivi ./env/run_tests.sh

Run a single test:

    docker exec -it izivi ./env/run_tests.sh --filter ActivitiesControllerTest::testGetActivitiesAction


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
