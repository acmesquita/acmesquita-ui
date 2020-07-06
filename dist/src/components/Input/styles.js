"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.input `
  padding: 4px;
  border: none;
  border-bottom: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  background: transparent;

  font-size: 16px;
  color: ${({ color }) => color};
  width: ${({ width }) => width}px;

  &:disabled {
    cursor: no-drop;
    opacity: 0.8;
  }
`;
