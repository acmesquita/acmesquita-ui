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
  padding: 18px 45px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 4px;
  border: ${(props) => props.outlined ? `2px solid ${props.theme.backgroundColor}` : 'none'};
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    background-color: ${(props) => props.outlined
    ? props.theme.backgroundColor
    : polished_1.lighten(0.03, props.theme.backgroundColor)};
  }
  :active:not(:disabled) {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    background-color: ${(props) => polished_1.darken(0.03, props.theme.backgroundColor)};
  }
`;
