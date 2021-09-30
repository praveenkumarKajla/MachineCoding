/* eslint dot-notation: off */
/* eslint no-restricted-syntax: off */

import models from "@models/all";

import { mapper } from "./connection";

export async function ensureTablesExist(): Promise<void> {
  for await (const model of models) {
    console.log("chcecking",model)
    try {
      await mapper
        .ensureTableExists(model, {
          readCapacityUnits: 5,
          writeCapacityUnits: 5,
          ...((model["global_secondary_indices"]) && { indexOptions: model["global_secondary_indices"] }),
        });
    } catch (e) {
      console.log(e.message, model);
    }
  }
}
