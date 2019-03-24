var connection = require('./connection');

module.exports = connection.Model.extend({
  tableName: 'users',
  idAttribute: "id"
});