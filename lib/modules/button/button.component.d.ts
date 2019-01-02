import { OnInit } from '@angular/core';
/**
 * Possible button importance levels.
 */
export declare type ThemeImportanceLevel = 'light' | 'dark' | undefined;
export declare class ButtonComponent implements OnInit {
    /**
     * Bind to the host "dark" CSS class.
     */
    styleAsActive: boolean;
    onClick(btn: any): void;
    /**
     * Bind to the host "light" CSS class.
     */
    styleAsLightTheme: boolean;
    /**
     * Bind to the host "dark" CSS class.
     */
    styleAsDarkTheme: boolean;
    /**
     * Button importance level in terms of primary/secondary/etc.
     */
    semuiTheme: ThemeImportanceLevel;
    large: string | undefined;
    small: string | undefined;
    full: string | undefined;
    block: string | undefined;
    linkbutton: string | undefined;
    disabled: string | undefined;
    icononly: string | undefined;
    semImportance: string | undefined;
    classes: string | undefined;
    ngOnInit(): void;
    getClasses(): any[];
    addClasses(classes: string[]): void;
}
