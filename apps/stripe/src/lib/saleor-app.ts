/* eslint-disable n/no-process-env */
import { APL } from "@saleor/app-sdk/APL";
import { DynamoAPL } from "@saleor/app-sdk/APL/dynamodb";
import { FileAPL } from "@saleor/app-sdk/APL/file";
import { UpstashAPL } from "@saleor/app-sdk/APL/upstash";
import { SaleorApp } from "@saleor/app-sdk/saleor-app";

import { dynamoMainTable } from "@/modules/dynamodb/dynamo-main-table";
import { env } from "./env";

export let apl: APL;

switch (env.APL) {
  case "dynamodb": {
    apl = DynamoAPL.create({
      table: dynamoMainTable,
    });
    break;
  }
  
  case "upstash": {
    apl = new UpstashAPL({
      restURL: process.env.UPSTASH_REDIS_REST_URL!,
      restToken: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
    break;
  }

  default: {
    apl = new FileAPL();
    break;
  }
}

export const saleorApp = new SaleorApp({
  apl,
});