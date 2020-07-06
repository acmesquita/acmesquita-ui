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
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
exports.Input = (_a) => {
    var { borderColor = '#7159c1', color = '#fff', value, width = 250, type = 'text' } = _a, props = __rest(_a, ["borderColor", "color", "value", "width", "type"]);
    return (react_1.default.createElement(styles_1.Container, Object.assign({ borderColor: borderColor, color: color, value: value, width: width, type: type }, props)));
};
