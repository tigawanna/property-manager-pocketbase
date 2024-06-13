/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9otlvzvr3fep7h1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xv1x4tax",
    "name": "mode_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9otlvzvr3fep7h1")

  // remove
  collection.schema.removeField("xv1x4tax")

  return dao.saveCollection(collection)
})
