# mongoimport --host mongo-seed-minerals-db --username ${MONGO_INITDB_ROOT_USERNAME} --password ${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase admin --db ${MONGO_INITDB_DATABASE} --collection ${MONGO_INITDB_COLLECTION_MINERALS} --type json --file ${PATH_FILES}/${FILE_MINERALS} --jsonArray --drop -v                                          
mongoimport --host mongo-seed-minerals-db --db ${MONGO_INITDB_DATABASE} --collection ${MONGO_INITDB_COLLECTION_MINERALS} --type json --file ${PATH_FILES}/${FILE_MINERALS} --jsonArray --drop -v                                          


# mongoimport --host mongo-seed-minerals-db --username ${MONGO_INITDB_ROOT_USERNAME} --password ${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase admin --db ${MONGO_INITDB_DATABASE} --collection ${MONGO_INITDB_COLLECTION_INFO} --type json --file ${PATH_FILES}/${FILE_INFO} --drop -v
mongoimport --host mongo-seed-minerals-db --db ${MONGO_INITDB_DATABASE} --collection ${MONGO_INITDB_COLLECTION_INFO} --type json --file ${PATH_FILES}/${FILE_INFO} --drop -v
