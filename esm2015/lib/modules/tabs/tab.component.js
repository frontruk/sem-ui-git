/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLXVpLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvdGFicy90YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBZSxZQUFZLEVBQy9CLFdBQVcsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUF5QmpFLE1BQU0sT0FBTyxZQUFZO0lBcEJ6QjtRQXFCRTs7V0FFRzs7OztRQUdJLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUUzQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFLbkIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFPdEMsQ0FBQzs7OztJQUxDLFFBQVE7SUFDUixDQUFDOzs7OztJQUNELFdBQVcsQ0FBQyxPQUFzQjtJQUNsQyxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsV0FBVztpQkFDbkI7YUFDRjs7O29DQU1FLFdBQVcsU0FBQyxlQUFlO29CQUczQixLQUFLO3FCQUVMLEtBQUs7dUJBRUwsS0FBSzt1QkFFTCxZQUFZLFNBQUMsb0JBQW9COzBCQUVqQyxXQUFXLFNBQUMsY0FBYzs7Ozs7OztJQVgzQiw2Q0FDb0M7O0lBRXBDLDZCQUFvQjs7SUFFcEIsOEJBQXdCOztJQUV4QixnQ0FBMEI7O0lBRTFCLGdDQUFtRTs7SUFFbkUsbUNBQ29DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJZlRhYkFjdGl2ZURpcmVjdGl2ZSB9IGZyb20gJy4vaWYtdGFiLWFjdGl2ZS5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIFRPRE86IFJlbW92ZSBoaWRkZW4gd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODMxMCBpcyByZXNvbHZlZFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICpuZ0lmPVwidGVtcGxhdGU7IHRoZW4gdGVtcGxhdGVfY29udGFpbmVyIGVsc2UgY29udGVudF9jb250YWluZXJcIj48L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVfY29udGFpbmVyPlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZS50ZW1wbGF0ZVJlZlwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRfY29udGFpbmVyPlxyXG4gICAgICA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdzZW11aS10YWInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRlZmF1bHQnKVxyXG4gIHB1YmxpYyBhZGRCYXNlQnV0dG9uQ3NzQ2xhc3MgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChJZlRhYkFjdGl2ZURpcmVjdGl2ZSkgdGVtcGxhdGU6IElmVGFiQWN0aXZlRGlyZWN0aXZlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgcHVibGljIGFjdGl2ZUNsYXNzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==