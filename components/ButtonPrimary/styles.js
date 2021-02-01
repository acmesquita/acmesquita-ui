"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const polished_1 = require("polished");
exports.Container = styled_components_1.default.button `
  background-color: ${(props) => props.outlined ? 'transparent' : props.theme.backgroundColor};
  color: ${props => polished_1.readableColor(props.theme.color, '#fff', '#19181f')};
  padding: 32px 81px;
  text-transform: uppercase;
  font-weight: 400;
  border: 0.98px solid #394CE3;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 16.41px;
`;
