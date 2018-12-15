const Application = require("./lib/Application");

const App = new Application();
App.listen().catch((err) => console.log(err))
module.exports = App;
