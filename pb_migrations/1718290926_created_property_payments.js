/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9otlvzvr3fep7h1",
    "created": "2024-06-13 15:02:06.514Z",
    "updated": "2024-06-13 15:02:06.514Z",
    "name": "property_payments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ikldgvhc",
        "name": "amount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "e3etqpod",
        "name": "mode",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "mpesa",
            "bank"
          ]
        }
      },
      {
        "system": false,
        "id": "dkgjtfwu",
        "name": "shop",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "zb1etrv0i3olw5p",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9otlvzvr3fep7h1");

  return dao.deleteCollection(collection);
})
