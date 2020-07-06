"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.body `
  height: 100%;
  width: 100%;
  background-color: #e3e3e3;
  min-width: 1366px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0;
    padding: 30px 50px;
    background-color: teal;

    color: #ffffff;

    ul, li {
      list-style: none;
    }
  }

  aside {
    background-color: burlywood;
    min-width: 300px;
    min-height: 90vh;

    li {
      padding: 30px;
      width: 100%;
      text-align: center;
      cursor: pointer;

      background-color: #437654;
      border: 0.5px solid green;
    }
  }

  main {
    display: flex;
    overflow: scroll;

    .content {
      padding: 30px 20px;
    }

  }

  footer {
    background-color: #d2b48e;
    color: white;
    height: 5vh;
    position: fixed;
    bottom: 0;
    width: 300px;
    text-align: center;
  }
`;
