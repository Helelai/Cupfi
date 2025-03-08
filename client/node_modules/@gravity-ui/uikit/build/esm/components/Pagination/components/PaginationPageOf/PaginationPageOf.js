import { jsx as _jsx } from "react/jsx-runtime";
import { block } from "../../../utils/cn.js";
import i18n from "../../i18n/index.js";
import "./PaginationPageOf.css";
const b = block('pagination-page-of');
export const PaginationPageOf = ({ size, className }) => {
    return _jsx("div", { className: b({ size }, className), children: i18n('label_page-of') });
};
//# sourceMappingURL=PaginationPageOf.js.map
