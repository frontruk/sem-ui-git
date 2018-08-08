/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, HostBinding } from '@angular/core';
import { IfTabActiveDirective } from './if-tab-active.directive';
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        /**
         * Css base class.
         */
        this.addBaseButtonCssClass = true;
        this.title = '';
        this.active = false;
        this.disabled = false;
        this.activeClass = false;
    }
    // @Input('active')
    // set active(value: boolean) {
    //   this.activeClass = value;
    // }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('on',  this.active)
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TabComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // console.log('cccc', changes, this.active)
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'div[semui-tab]',
                    template: "\n    <div *ngIf=\"template; then template_container else content_container\"></div>\n    <ng-template #template_container>\n      <div *ngIf=\"active\">\n        <ng-container [ngTemplateOutlet]=\"template.templateRef\"></ng-container>\n      </div>\n    </ng-template>\n    <ng-template #content_container>\n      <div [hidden]=\"!active\">\n        <ng-content></ng-content>\n      </div>\n    </ng-template>\n  ",
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
    return TabComponent;
}());
export { TabComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLXVpLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdGFicy90YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBZSxZQUFZLEVBQy9CLFdBQVcsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztxQ0ErQmhDLElBQUk7cUJBRWxCLEVBQUU7c0JBRUQsS0FBSzt3QkFFSCxLQUFLOzJCQUtLLEtBQUs7O0lBRW5DLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLElBQUk7Ozs7SUFDSiwrQkFBUTs7O0lBQVI7O0tBRUM7Ozs7O0lBQ0Qsa0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztLQUVqQzs7Z0JBaERGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGlhQVlUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsV0FBVztxQkFDbkI7aUJBQ0Y7Ozt3Q0FNRSxXQUFXLFNBQUMsZUFBZTt3QkFHM0IsS0FBSzt5QkFFTCxLQUFLOzJCQUVMLEtBQUs7MkJBRUwsWUFBWSxTQUFDLG9CQUFvQjs4QkFFakMsV0FBVyxTQUFDLGNBQWM7O3VCQTdDN0I7O1NBNkJhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZlRhYkFjdGl2ZURpcmVjdGl2ZSB9IGZyb20gJy4vaWYtdGFiLWFjdGl2ZS5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIFRPRE86IFJlbW92ZSBoaWRkZW4gd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODMxMCBpcyByZXNvbHZlZFxuICovXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS10YWJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwidGVtcGxhdGU7IHRoZW4gdGVtcGxhdGVfY29udGFpbmVyIGVsc2UgY29udGVudF9jb250YWluZXJcIj48L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI3RlbXBsYXRlX2NvbnRhaW5lcj5cbiAgICAgIDxkaXYgKm5nSWY9XCJhY3RpdmVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZS50ZW1wbGF0ZVJlZlwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRfY29udGFpbmVyPlxuICAgICAgPGRpdiBbaGlkZGVuXT1cIiFhY3RpdmVcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnc2VtdWktdGFiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2Vze1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGVmYXVsdCcpXG4gIHB1YmxpYyBhZGRCYXNlQnV0dG9uQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG5cbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkKElmVGFiQWN0aXZlRGlyZWN0aXZlKSB0ZW1wbGF0ZTogSWZUYWJBY3RpdmVEaXJlY3RpdmU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgYWN0aXZlQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBASW5wdXQoJ2FjdGl2ZScpXG4gIC8vIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgLy8gICB0aGlzLmFjdGl2ZUNsYXNzID0gdmFsdWU7XG4gIC8vIH1cbiAgbmdPbkluaXQoKXtcbiAgICAvLyBjb25zb2xlLmxvZygnb24nLCAgdGhpcy5hY3RpdmUpXG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjY2NjJywgY2hhbmdlcywgdGhpcy5hY3RpdmUpXG4gIH1cblxufVxuIl19