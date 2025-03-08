"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaletteGrid = usePaletteGrid;
const useFocusWithin_1 = require("../../hooks/useFocusWithin/useFocusWithin.js");
const useDirection_1 = require("../theme/useDirection.js");
function usePaletteGrid(props) {
    const direction = (0, useDirection_1.useDirection)();
    const { focusWithinProps } = (0, useFocusWithin_1.useFocusWithin)({
        onFocusWithin: (event) => props.onFocus?.(event),
        onBlurWithin: (event) => props.onBlur?.(event),
    });
    const whenFocused = props.whenFocused;
    const base = {
        role: 'grid',
        'aria-disabled': props.disabled,
        'aria-readonly': props.disabled,
        tabIndex: whenFocused ? -1 : 0,
        ...focusWithinProps,
    };
    if (!whenFocused) {
        return base;
    }
    return {
        ...base,
        onKeyDown: (event) => {
            if (event.code === 'ArrowRight') {
                event.preventDefault();
                if (direction === 'ltr') {
                    whenFocused.nextItem();
                }
                else {
                    whenFocused.previousItem();
                }
            }
            else if (event.code === 'ArrowLeft') {
                event.preventDefault();
                if (direction === 'ltr') {
                    whenFocused.previousItem();
                }
                else {
                    whenFocused.nextItem();
                }
            }
            else if (event.code === 'ArrowDown') {
                event.preventDefault();
                whenFocused.nextRow();
            }
            else if (event.code === 'ArrowUp') {
                event.preventDefault();
                whenFocused.previousRow();
            }
            else if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                whenFocused.selectItem();
            }
        },
    };
}
//# sourceMappingURL=hooks.js.map
