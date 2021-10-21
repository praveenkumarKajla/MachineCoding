export const SERVER_CONFIG = {
  HOST: process.env.SERVER_CONFIG_HOST || "0.0.0.0",
  PORT: +(process.env.SERVER_CONFIG_PORT || 80),
  BASE_URL: process.env.SERVER_BASE_URL || "/",
  API_VERSION: process.env.SERVER_API_VERSION || "v1/",
  ENV: process.env.ENVIRONMENT || "dev",
  SECRET_PASSWORD: process.env.SECRET_PASSWORD || "password-should-be-32-characters",
};
