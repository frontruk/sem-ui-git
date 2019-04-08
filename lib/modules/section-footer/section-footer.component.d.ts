import { OnInit } from '@angular/core';
export declare type FooterImportanceLevel = '' | undefined;
export declare class SectionFooterComponent implements OnInit {
    /**
     * Css base class.
     */
    addBaseCssClass: boolean;
    /**
     * Bind to the host "small" CSS class.
     */
    styleAsSmall: boolean;
    /**
     * Button importance level in terms of primary/secondary/etc.
     */
    semuiImportance: FooterImportanceLevel;
    /**
     * Bind to the host "large" CSS class.
     */
    styleAsLarge: boolean;
    constructor();
    ngOnInit(): void;
    /**
     * Set component to be on dark or light.
     */
    private styleElementByImportanceLevel;
}
