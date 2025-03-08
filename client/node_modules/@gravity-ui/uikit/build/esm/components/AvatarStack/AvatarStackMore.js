import { jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { DEFAULT_AVATAR_SIZE } from "../Avatar/index.js";
import { block } from "../utils/cn.js";
import i18n from "./i18n/index.js";
const b = block('avatar-stack');
/**
 * Badge for displaying count of remaining avatars
 */
export const AvatarStackMore = React.forwardRef(({ className, count, 'aria-label': ariaLabel, borderColor = 'var(--g-color-line-generic-solid)', size = DEFAULT_AVATAR_SIZE, }, ref) => (_jsxs("div", { ref: ref, className: b('more', { size, 'has-border': Boolean(borderColor) }, className), "aria-label": ariaLabel || i18n('more', { count }), style: { borderColor }, children: ["+", count] })));
AvatarStackMore.displayName = 'AvatarStack.More';
//# sourceMappingURL=AvatarStackMore.js.map
