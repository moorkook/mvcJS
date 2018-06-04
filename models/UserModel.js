const Model = require('./model.js')
class UserModel extends Model {
  constructor() {
    super();
    this.data = require('../data/users.js');
  }
  getAllUsers() {
    return this.data;
  }
  getUserByName(name) {
    for (var i = 0; i < this.data.length; i++) {
      if(this.data[i].name == name) {
        return this.data[i];
      }
    }
    return {
      message: "error"
    };
  }
}
module.exports = new UserModel();
