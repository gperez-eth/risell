# backend-service

This is the documentation for the **backend-service** module. First you will need some requirements to start running. See **Installation & Running**

Note: All the scripts are run with [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

# 🛠️ Installation & Running

- Download and install **Docker**
- Install **npm dependencies**
- Rename **copy.env** file to **.env** and configure your environment variables
- Use **docker-compose up** to start the containers

You are good to go... 🚀

# 🚛 Migrations

To start doing database migrations first is recommended to read the [**TypeORM**](https://typeorm.io/) documentation basics and understand how the Object–relational mapping works.

## How to run migration scripts
To run a migration script first you need to navigate to the desired service and then enter to the bash of the service.

    docker-compose exec <service-name> bash

Once you are inside the bash you can run scripts inside the service with bash, you can see all the scripts of the service in the scripts object inside **package.json**

### Generate
This script will generate a migration file with all the changes made on any entity file inside the entities folder.

    yarn migration:generate -- <migration-name>

### Run
This script will run all the created/generated migrations that are not in the migrations table of the database.

    yarn migration:run

### Revert
This script will revert all the changes made with the previous migration

    yarn migration:revert
