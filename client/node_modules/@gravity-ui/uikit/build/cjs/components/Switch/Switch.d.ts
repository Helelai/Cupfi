import * as React from 'react';
import type { ControlLabelSize } from "../ControlLabel/index.js";
import type { ControlProps, DOMProps, QAProps } from "../types.js";
import "./Switch.css";
export type SwitchSize = ControlLabelSize;
export interface SwitchProps extends ControlProps, DOMProps, QAProps {
    size?: SwitchSize;
    content?: React.ReactNode;
    children?: React.ReactNode;
    title?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLLabelElement>>;
