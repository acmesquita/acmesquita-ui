"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const react_1 = __importDefault(require("react"));
// import { Container } from './styles';
exports.Link = ({ children }) => {
    return react_1.default.createElement("a", { href: "" }, children);
};
