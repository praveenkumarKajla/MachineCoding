export const DB_CONFIG = {
  DATABASE_CONNECTION: {
    ENDPOINT: process.env.DYNAMODB_ENDPOINT || "http://localhost:8000",
    REGION: process.env.AWS_REGION || "ap-south-1",
    ACCESS_KEY_ID: "fakeMyKeyId",
    SECRET_ACCESS_KEY: "fakeSecretAccessKey",
    API_VERSION: "2012-08-10",
    TABLE_NAME_PREFIX: `${process.env.TABLE_NAME_PREFIX || "dev"}_parkinglot_`,
  },
  TABLES: {},
};
