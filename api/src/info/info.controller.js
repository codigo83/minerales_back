const Info = require('./info.model');

function find() {
    return Info.find({});
}

module.exports = {
    find
};