import { OnInit } from '@angular/core';
/**
 * Possible button importance levels.
 */
export declare type LabelImportanceLevel = 'small' | 'large' | undefined;
export declare type LabelTheme = 'light' | 'dark' | undefined;
export declare class LabelComponent implements OnInit {
    /**
     * Css base class.
     */
    addBaseCssClass: boolean;
    /**
     * Bind to the host "small" CSS class.
     */
    styleAsSmall: boolean;
    /**
     * Bind to the host "medium" CSS class.
     */
    styleAsMedium: boolean;
    /**
     * Bind to the host "large" CSS class.
     */
    styleAsLarge: boolean;
    /**
     * Bind to the host "large" CSS class.
     */
    styleAsFormLabel: boolean;
    /**
     * Button importance level in terms of primary/secondary/etc.
     */
    semuiImportance: LabelImportanceLevel;
    /**
     * Bind to the host "large" CSS class.
     */
    styleAsDark: boolean;
    /**
     * Bind to the host "large" CSS class.
     */
    styleAsLight: boolean;
    /**
     * Label theme in terms of light/dark.
     */
    semuiTheme: LabelTheme;
    ngOnInit(): void;
    /**
     * Set component to be on dark or light.
     */
    private setTheme(type);
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     */
    private styleElementByImportanceLevel(labelType);
}
