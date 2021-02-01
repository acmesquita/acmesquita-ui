"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
exports.Page = () => {
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement("nav", null,
            react_1.default.createElement("h1", null, "Logo"),
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "Link"))),
        react_1.default.createElement("main", null,
            react_1.default.createElement("aside", null,
                react_1.default.createElement("ul", null,
                    react_1.default.createElement("li", null, "Link"),
                    react_1.default.createElement("li", null, "Link"),
                    react_1.default.createElement("li", null, "Link"),
                    react_1.default.createElement("li", null, "Link")),
                react_1.default.createElement("footer", null, "Criado em 2020")),
            react_1.default.createElement("div", { className: "content" },
                react_1.default.createElement("p", null, "Conte\u00FAdo")))));
};
