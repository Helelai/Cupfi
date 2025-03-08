import * as React from 'react';
import type { PrivateLayoutProviderProps } from "../layout/LayoutProvider/LayoutProvider.js";
import type { Direction, RealTheme, Theme } from "./types.js";
export interface ThemeProviderProps extends React.PropsWithChildren<{}> {
    theme?: Theme;
    systemLightTheme?: RealTheme;
    systemDarkTheme?: RealTheme;
    direction?: Direction;
    scoped?: boolean;
    rootClassName?: string;
    layout?: Omit<PrivateLayoutProviderProps, 'children'>;
}
export declare function ThemeProvider({ theme: themeProp, systemLightTheme: systemLightThemeProp, systemDarkTheme: systemDarkThemeProp, direction: directionProp, scoped: scopedProp, rootClassName, children, layout, }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace ThemeProvider {
    var displayName: string;
}
