"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonTheme = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const styled_components_1 = require("styled-components");
const theme_1 = require("./theme");
exports.ButtonTheme = (_a) => {
    var { children, outlined = false } = _a, props = __rest(_a, ["children", "outlined"]);
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.theme },
        react_1.default.createElement(styles_1.Container, Object.assign({ outlined: outlined }, props), children)));
};
