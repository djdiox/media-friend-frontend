var m = require("mithril")

var MyComponent = require("../modules/main-component");
var root = document.body;
m.render(root, [
    m("main", [
        m("h1", { class: "title" }, "My first app"),
        m("button", "A button"),
    ])
])