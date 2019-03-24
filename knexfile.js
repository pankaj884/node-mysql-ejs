// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
            host: 'localhost',
            user: 'root',
            password: "root",
            database: 'demo_db',
            charset: 'utf8'
        }
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};