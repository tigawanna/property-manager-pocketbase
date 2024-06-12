/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ur1ivky21zygnv")

  collection.name = "property_tenants"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ur1ivky21zygnv")

  collection.name = "tenants"

  return dao.saveCollection(collection)
})
