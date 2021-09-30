import { DynamoDB, Endpoint } from "aws-sdk";
import { DataMapper } from "@aws/dynamodb-data-mapper";

import { DB_CONFIG as CONFIG } from "../../config/db_config";

const {
  REGION,
  ACCESS_KEY_ID,
  SECRET_ACCESS_KEY,
  ENDPOINT,
} = CONFIG.DATABASE_CONNECTION;

const dynamodb = new DynamoDB({
  endpoint: ENDPOINT,
  region: REGION,
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
});
const mapper = new DataMapper({
  client: dynamodb,
});

export { dynamodb as dbConnection, mapper };
