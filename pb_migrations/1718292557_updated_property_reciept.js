/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8idqd5zy0o1s6qg")

  collection.name = "property_reciepts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8idqd5zy0o1s6qg")

  collection.name = "property_reciept"

  return dao.saveCollection(collection)
})
