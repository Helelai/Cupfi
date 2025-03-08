'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { DropdownMenu } from "../../DropdownMenu/index.js";
import { block } from "../../utils/cn.js";
import { BreadcrumbsButton } from "./BreadcrumbsButton.js";
import i18n from "./i18n/index.js";
const b = block('breadcrumbs-legacy');
export function BreadcrumbsMore({ popupStyle, popupPlacement, items }) {
    return (_jsx(DropdownMenu, { items: items, popupProps: {
            className: b('popup', {
                staircase: popupStyle === 'staircase',
            }),
            placement: popupPlacement,
        }, renderSwitcher: ({ onClick }) => (_jsx(BreadcrumbsButton, { title: i18n('label_more'), onClick: onClick, children: "..." })) }));
}
BreadcrumbsMore.displayName = 'Breadcrumbs.More';
//# sourceMappingURL=BreadcrumbsMore.js.map
