// Update with your config settings.
//knex init

module.exports = {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "newuser",
      password: "",
      database: "knex_todolist_db",
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
};


