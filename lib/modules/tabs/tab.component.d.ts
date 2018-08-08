import { SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { IfTabActiveDirective } from './if-tab-active.directive';
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
export declare class TabComponent implements OnInit, OnChanges {
    /**
     * Css base class.
     */
    addBaseButtonCssClass: boolean;
    title: string;
    active: boolean;
    disabled: boolean;
    template: IfTabActiveDirective;
    activeClass: boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
