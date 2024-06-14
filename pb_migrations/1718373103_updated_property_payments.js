/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5sv12jaz4qppns")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8tb7phog",
    "name": "by",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wm4hxo3d8smngmu",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h5sv12jaz4qppns")

  // remove
  collection.schema.removeField("8tb7phog")

  return dao.saveCollection(collection)
})
