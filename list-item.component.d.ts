import { OnInit } from '@angular/core';
import { ListItemType } from '../../../models/list-type';
/**
 * Possible button importance levels.
 */
export declare type ThemeImportanceLevel = 'light' | 'dark' | undefined;
export declare class ListItemComponent implements OnInit {
    item: ListItemType;
    semuiTheme: ThemeImportanceLevel;
    semImportance: string;
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
    private styleElementTheme(theme);
}
