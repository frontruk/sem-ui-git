import { OnInit } from '@angular/core';
export declare type ThemeImportanceLevel = 'light' | 'dark' | undefined;
export declare class ListComponent implements OnInit {
    semuiTheme: ThemeImportanceLevel;
    classes: string;
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
    addClasses(classes: string[]): void;
    getClasses(): any[];
    private styleElementTheme;
}
