"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableDefault = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Table_1 = __importDefault(require("@material-ui/core/Table"));
const TableContainer_1 = __importDefault(require("@material-ui/core/TableContainer"));
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const useStyles = styles_1.makeStyles({
    table: {
        minWidth: 650,
    },
});
exports.TableDefault = ({ children }) => {
    const classes = useStyles();
    return (react_1.default.createElement(TableContainer_1.default, { component: Paper_1.default },
        react_1.default.createElement(Table_1.default, { className: classes.table, "aria-label": "simple table" }, children)));
};
