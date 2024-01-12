module.exports = {
  database: {
    url: "mongodb+srv://xandermobutu:123caseTracker123@casetracker.gj52sqv.mongodb.net/caseTracker?retryWrites=true&w=majority",
  },
  port: process.env.PORT || 8000,
  jwt: {
    secret:
      "cc07c397fc3feddde506d2484929f428458748f70276fcf52c00294263d6ad57d9d9b53c8bdddf247d8fae9793c4d35d45ab56a2d9d9e40b1adb8239e4605d4e",
    expiresIn: "1d",
  },
};
