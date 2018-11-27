import { OnInit } from '@angular/core';
export declare type CornerType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined;
export declare type ButtonImportanceLevel = 'primary' | 'link-button' | 'round-button' | 'corner-button' | undefined;
export declare type ThemeImportanceLevel = 'light' | 'dark' | undefined;
export declare class ButtonFabComponent implements OnInit {
    /**
     * Button importance level in terms of primary/secondary/etc.
     */
    large: string;
    small: string;
    medium: string;
    corner: string;
    semuiTheme: ThemeImportanceLevel;
    semuiimportance: string;
    classes: string;
    /**
     * Bind to the host "light" CSS class.
     */
    styleAsLightTheme: boolean;
    /**
     * Bind to the host "dark" CSS class.
     */
    styleAsDarkTheme: boolean;
    ngOnInit(): void;
    getClasses(): any[];
    addClasses(classes: string[]): void;
    private styleElementTheme(theme);
}
