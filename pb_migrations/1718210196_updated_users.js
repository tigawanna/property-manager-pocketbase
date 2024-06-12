/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lf223s601n8i87n")

  collection.name = "property_users"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lf223s601n8i87n")

  collection.name = "users"

  return dao.saveCollection(collection)
})
