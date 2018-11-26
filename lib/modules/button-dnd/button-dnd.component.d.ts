import { OnInit } from '@angular/core';
/**
 * Possible button importance levels.
 */
export declare type ThemeImportanceLevel = 'light' | 'dark' | undefined;
export declare class SemUiButtonDndComponent implements OnInit {
    /**
     * Bind to the host "dark" CSS class.
     */
    styleAsActive: boolean;
    large: string | undefined;
    xsmall: string | undefined;
    small: string | undefined;
    full: string | undefined;
    block: string | undefined;
    disabled: string | undefined;
    medium: string | undefined;
    /**
     * Button importance level in terms of primary/secondary/etc.
     */
    semuiTheme: ThemeImportanceLevel;
    semImportance: string | undefined;
    classes: string | undefined;
    /**
     * Bind to the host "light" CSS class.
     */
    styleAsLightTheme: boolean;
    /**
     * Bind to the host "dark" CSS class.
     */
    styleAsDarkTheme: boolean;
    constructor();
    ngOnInit(): void;
    getClasses(): any[];
    addClasses(classes: string[]): void;
    private styleElementTheme(theme);
}
