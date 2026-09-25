const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const source = fs.readFileSync("script.js", "utf8");
const context = { window: {}, document: { querySelector: () => null, querySelectorAll: () => [] } };
vm.createContext(context);
vm.runInContext(source, context);

const model = context.window.DevCraftPresentation?.financialModel;
assert.ok(model, "financial model should be exposed for the presentation");
assert.equal(model.revenue.total, 234480);
assert.equal(model.costs.variable + model.costs.fixed, 201329);
assert.equal(model.revenue.total - model.costs.variable - model.costs.fixed, model.profit);
assert.equal(model.breakEvenRevenue, 198000);

console.log("financial model is internally consistent");
