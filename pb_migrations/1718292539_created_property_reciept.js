/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8idqd5zy0o1s6qg",
    "created": "2024-06-13 15:28:59.566Z",
    "updated": "2024-06-13 15:28:59.566Z",
    "name": "property_reciept",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ywbwkdog",
        "name": "receipt_number",
        "type": "number",
        "required": true,
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
        "id": "zjdhay9u",
        "name": "payments",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "9otlvzvr3fep7h1",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "tvqfda3b",
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
  const collection = dao.findCollectionByNameOrId("8idqd5zy0o1s6qg");

  return dao.deleteCollection(collection);
})
