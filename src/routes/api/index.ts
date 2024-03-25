const Router = require("express");

const auth = require("./auth.ts");

export default () => {
  const app = Router();
  auth(app);
  return app;
};


