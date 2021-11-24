const Mineral = require('./minerals.model');

function find() {
    return Mineral.find({});
}

module.exports = {
    find
};