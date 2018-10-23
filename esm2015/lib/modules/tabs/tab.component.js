/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, HostBinding } from '@angular/core';
import { IfTabActiveDirective } from './if-tab-active.directive';
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
export class TabComponent {
    constructor() {
        /**
         * Css base class.
         */
        this.addBaseButtonCssClass = true;
        this.title = '';
        this.active = false;
        this.disabled = false;
        this.activeClass = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'div[semui-tab]',
                template: `
    <div *ngIf="template; then template_container else content_container"></div>
    <ng-template #template_container>
      <div *ngIf="active">
        <ng-container [ngTemplateOutlet]="template.templateRef"></ng-container>
      </div>
    </ng-template>
    <ng-template #content_container>
      <div [hidden]="!active">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                host: {
                    class: 'semui-tab'
                }
            },] },
];
TabComponent.propDecorators = {
    addBaseButtonCssClass: [{ type: HostBinding, args: ['class.default',] }],
    title: [{ type: Input }],
    active: [{ type: Input }],
    disabled: [{ type: Input }],
    template: [{ type: ContentChild, args: [IfTabActiveDirective,] }],
    activeClass: [{ type: HostBinding, args: ['class.active',] }]
};
if (false) {
    /**
     * Css base class.
     * @type {?}
     */
    TabComponent.prototype.addBaseButtonCssClass;
    /** @type {?} */
    TabComponent.prototype.title;
    /** @type {?} */
    TabComponent.prototype.active;
    /** @type {?} */
    TabComponent.prototype.disabled;
    /** @type {?} */
    TabComponent.prototype.template;
    /** @type {?} */
    TabComponent.prototype.activeClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLXVpLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdGFicy90YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBZSxZQUFZLEVBQy9CLFdBQVcsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUF5QmpFLE1BQU07Ozs7O3FDQU0yQixJQUFJO3FCQUVsQixFQUFFO3NCQUVELEtBQUs7d0JBRUgsS0FBSzsyQkFLSyxLQUFLOzs7OztJQUVuQyxRQUFRO0tBQ1A7Ozs7O0lBQ0QsV0FBVyxDQUFDLE9BQXNCO0tBQ2pDOzs7WUExQ0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjs7O29DQU1FLFdBQVcsU0FBQyxlQUFlO29CQUczQixLQUFLO3FCQUVMLEtBQUs7dUJBRUwsS0FBSzt1QkFFTCxZQUFZLFNBQUMsb0JBQW9COzBCQUVqQyxXQUFXLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogVE9ETzogUmVtb3ZlIGhpZGRlbiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MzEwIGlzIHJlc29sdmVkXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJ0ZW1wbGF0ZTsgdGhlbiB0ZW1wbGF0ZV9jb250YWluZXIgZWxzZSBjb250ZW50X2NvbnRhaW5lclwiPjwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVfY29udGFpbmVyPlxuICAgICAgPGRpdiAqbmdJZj1cImFjdGl2ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlLnRlbXBsYXRlUmVmXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudF9jb250YWluZXI+XG4gICAgICA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdzZW11aS10YWInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGVmYXVsdCcpXG4gIHB1YmxpYyBhZGRCYXNlQnV0dG9uQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG5cbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkKElmVGFiQWN0aXZlRGlyZWN0aXZlKSB0ZW1wbGF0ZTogSWZUYWJBY3RpdmVEaXJlY3RpdmU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgYWN0aXZlQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpe1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgfVxuXG59XG4iXX0=