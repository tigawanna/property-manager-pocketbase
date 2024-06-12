/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wm4hxo3d8smngmu")

  collection.name = "property_staff"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wm4hxo3d8smngmu")

  collection.name = "staff"

  return dao.saveCollection(collection)
})
