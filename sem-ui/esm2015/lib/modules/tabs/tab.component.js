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
        // console.log('on',  this.active)
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // console.log('cccc', changes, this.active)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3RhYnMvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQWUsWUFBWSxFQUMvQixXQUFXLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBeUJqRSxNQUFNOzs7OztxQ0FNMkIsSUFBSTtxQkFFbEIsRUFBRTtzQkFFRCxLQUFLO3dCQUVILEtBQUs7MkJBS0ssS0FBSzs7Ozs7SUFNbkMsUUFBUTs7S0FFUDs7Ozs7SUFDRCxXQUFXLENBQUMsT0FBc0I7O0tBRWpDOzs7WUFoREYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjs7O29DQU1FLFdBQVcsU0FBQyxlQUFlO29CQUczQixLQUFLO3FCQUVMLEtBQUs7dUJBRUwsS0FBSzt1QkFFTCxZQUFZLFNBQUMsb0JBQW9COzBCQUVqQyxXQUFXLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogVE9ETzogUmVtb3ZlIGhpZGRlbiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MzEwIGlzIHJlc29sdmVkXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJ0ZW1wbGF0ZTsgdGhlbiB0ZW1wbGF0ZV9jb250YWluZXIgZWxzZSBjb250ZW50X2NvbnRhaW5lclwiPjwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVfY29udGFpbmVyPlxuICAgICAgPGRpdiAqbmdJZj1cImFjdGl2ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlLnRlbXBsYXRlUmVmXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudF9jb250YWluZXI+XG4gICAgICA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdzZW11aS10YWInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXN7XG4gIC8qKlxuICAgKiBDc3MgYmFzZSBjbGFzcy5cbiAgICovXG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kZWZhdWx0JylcbiAgcHVibGljIGFkZEJhc2VCdXR0b25Dc3NDbGFzcyA9IHRydWU7XG5cbiAgQElucHV0KCkgdGl0bGUgPSAnJztcblxuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoSWZUYWJBY3RpdmVEaXJlY3RpdmUpIHRlbXBsYXRlOiBJZlRhYkFjdGl2ZURpcmVjdGl2ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBhY3RpdmVDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIEBJbnB1dCgnYWN0aXZlJylcbiAgLy8gc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAvLyAgIHRoaXMuYWN0aXZlQ2xhc3MgPSB2YWx1ZTtcbiAgLy8gfVxuICBuZ09uSW5pdCgpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbicsICB0aGlzLmFjdGl2ZSlcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NjY2MnLCBjaGFuZ2VzLCB0aGlzLmFjdGl2ZSlcbiAgfVxuXG59XG4iXX0=