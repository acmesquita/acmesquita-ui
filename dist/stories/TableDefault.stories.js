"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const src_1 = require("../src");
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
react_2.storiesOf('TableDefault', module)
    .add('default', () => (react_1.default.createElement(src_1.TableDefault, null,
    react_1.default.createElement(src_1.TableHeaderDefault, null,
        react_1.default.createElement(src_1.TableCellDefault, null, "Dessert (100g serving)"),
        react_1.default.createElement(src_1.TableCellDefault, { align: "right" }, "Calories"),
        react_1.default.createElement(src_1.TableCellDefault, { align: "right" }, "Fat\u00A0(g)"),
        react_1.default.createElement(src_1.TableCellDefault, { align: "right" }, "Carbs\u00A0(g)"),
        react_1.default.createElement(src_1.TableCellDefault, { align: "right" }, "Protein\u00A0(g)")),
    react_1.default.createElement(src_1.TableBodyDefault, null, rows.map((row) => (react_1.default.createElement(src_1.TableRowDefault, { key: row.name },
        react_1.default.createElement(src_1.TableCellDefault, { component: "th", scope: "row" }, row.name),
        react_1.default.createElement(src_1.TableCellDefault, { align: "right" }, row.calories),
        react_1.default.createElement(src_1.TableCellDefault, { align: "right" }, row.fat),
        react_1.default.createElement(src_1.TableCellDefault, { align: "right" }, row.carbs),
        react_1.default.createElement(src_1.TableCellDefault, { align: "right" }, row.protein))))))));
