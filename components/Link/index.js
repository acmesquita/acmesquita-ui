"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
// import { Container } from './styles';
exports.Link = ({ children }) => {
    const LinkStyle = styled_components_1.default.a `
    text-decoration: none;
  `;
    return react_1.default.createElement(LinkStyle, { href: "" }, children);
};
