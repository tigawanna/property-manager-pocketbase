/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.name = "property_bills"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_BzlhII2` ON `property_bills` (\n  `year`,\n  `month`,\n  `shop`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat")

  collection.name = "bills"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_BzlhII2` ON `bills` (\n  `year`,\n  `month`,\n  `shop`\n)"
  ]

  return dao.saveCollection(collection)
})
