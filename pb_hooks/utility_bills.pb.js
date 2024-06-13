// @ts-check
/// <reference path="../pb_data/types.d.ts" />
routerAdd(
  "GET",
  "/custom_property_bills",
  (c) => {
    try {
      function isParamEmpty(param, default_value) {
        if (param === "" || param === undefined || param === null) {
          return default_value;
        }
        return param;
      }
      const result = arrayOf(
        new DynamicModel({
          shop_id: "",
          curr_bill_id: "",
          prev_bill_id: "",
          shop_number: "",
          shop_name: "",
          curr_year: "",
          curr_month: "",
          prev_year: "",
          prev_month: "",
          list_order: "",
          current_elec: "",
          previous_elec: "",
          elec_diff: "",
          current_water: "",
          previous_water: "",
          water_diff: "",
        })
      );

      $app
        ?.dao()
        ?.db()
        ?.newQuery(
          `
SELECT
sh.id as shop_id,
IFNULL(curr.id,"blank") as curr_bill_id,
IFNULL(prev.id,"blank") as prev_bill_id,

sh.shop_number as shop_number,
te.username as shop_name,
sh."order" as list_order,

IFNULL(curr.month,0) as curr_month,
IFNULL(prev.month,0) as prev_month,
IFNULL(curr.year,0) as curr_year,
IFNULL(prev.year,0) as prev_year,


IFNULL(curr.elec_readings,0) as current_elec,
IFNULL(prev.elec_readings,0) as previous_elec,
IFNULL((curr.elec_readings - prev.elec_readings),0) elec_diff,
IFNULL(curr.water_readings,0) as current_water,
IFNULL(prev.water_readings,0) as previous_water,
IFNULL((curr.water_readings - prev.water_readings),0)water_diff



FROM property_shops sh
LEFT JOIN property_bills as curr
ON curr.shop = sh.id AND curr.month = {:curr_month} AND curr.year = {:curr_year}
LEFT JOIN property_bills as prev
ON prev.shop = sh.id AND prev.month = {:prev_month} AND prev.year = {:prev_year}
LEFT JOIN property_tenants te
ON te.id = sh.tenant
WHERE sh.is_vacant = false
ORDER BY sh."order";
      `
        )
        ?.bind({
          curr_year: isParamEmpty(c.queryParam("curr_year"),new Date().getFullYear()),
          curr_month: isParamEmpty(c.queryParam("curr_month"),new Date().getMonth()),
          prev_year: isParamEmpty(c.queryParam("prev_year"),new Date().getFullYear()),
          prev_month: isParamEmpty(c.queryParam("prev_month"),new Date().getMonth()-1),
        })
        ?.all(result); // throw an error on db failure

      // if (result.length > 0) {
      //   console.log(result[0]);
      // }

      return c.json(200, { result });
    } catch (e) {
      return c.json(500, {
        error: ` Error getting custom_property_bills : ${e.message}`,
      });
    }
  } /* optional middlewares */
);

// http://127.0.0.1:8090/custom_property_bills?curr_year=2023&prev_year=2023&curr_month=10&prev_month=10
//  parametes requered
// curr_year: c.queryParam("curr_year") : current year
// prev_year: c.queryParam("prev_year") : previous year
// curr_month: c.queryParam("curr_month") : current month
// prev_month: c.queryParam("prev_month") : previous month
