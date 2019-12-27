
const pkg = require('./package.json')

exports.plugin = {
  name: pkg.name,
  register: require('./lib/change-answers'),
  once: true,
  pkg
}
