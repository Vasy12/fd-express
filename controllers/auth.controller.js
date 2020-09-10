const _ = require('lodash');
const db = {
  users: {
    usersCount: 0,

    create(data) {
      this.usersCount++;
      this[this.usersCount] = {
        id: this.usersCount,
        ...data,
      };
      return this[this.usersCount];
    },
  },
};

module.exports.signUpUser = function (req, res, next) {
  const { body } = req;
  try {
    const createdUser = db.users.create(body);
    const preparedUser = _.omit(createdUser, ['password']);

    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(preparedUser));
  } catch (e) {
    next(e);
  }
};

module.exports.login = () => {};
