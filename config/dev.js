const IP_ADDRESS = process.env.IP_ADDRESS || '172.20.0.7';
const PORT_MONGO = process.env.PORT_MONGO || '27017';
const COLLECTION = process.env.COLLECTION || 'minerals';
const DATABASE = process.env.COLLECTION || 'mineralsdb';

module.exports = {
    conection_mongo: `mongodb://${IP_ADDRESS}:${PORT_MONGO}/${COLLECTION}`
};