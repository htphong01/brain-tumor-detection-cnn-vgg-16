const bcrypt = require('bcrypt');

const hash = (str) => {
  const saltRounds = 10;
  return bcrypt.hashSync(str, saltRounds);
}

const compare = (old, hash) => {
  return bcrypt.compareSync(old, hash);
};

module.exports = {
  hash,
  compare
}