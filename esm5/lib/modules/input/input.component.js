/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, ViewEncapsulation, Input } from '@angular/core';
var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleElementByType();
    };
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     */
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
     * @return {?}
     */
    InputComponent.prototype.styleElementByType = /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
     * @return {?}
     */
    function () {
        if ('form-input' === this.semuiType) {
            this.semuiTypeFormInput = true;
        }
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'input[semui-input]',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    InputComponent.propDecorators = {
        addFormBaseClass: [{ type: HostBinding, args: ['class.semui-form-input',] }],
        semuiType: [{ type: Input, args: ['semui-type',] }],
        semuiTypeFormInput: [{ type: HostBinding, args: ['class.semui-form-input',] }]
    };
    return InputComponent;
}());
export { InputComponent };
if (false) {
    /**
     * Always apply the base Semui button css class.
     * @type {?}
     * @private
     */
    InputComponent.prototype.addFormBaseClass;
    /**
     * Button importance level in terms of primary or secondary.
     * Primary sets as round corners and sharp edge, secondary is all round
     * @type {?}
     */
    InputComponent.prototype.semuiType;
    /**
     * Bind to the host "semui-form-input" CSS class.
     * @type {?}
     */
    InputComponent.prototype.semuiTypeFormInput;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsdUJBQXVCLEVBQzFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ3RDLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBNEJFO0lBQWdCLENBQUM7Ozs7SUFFakIsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNEOzs7T0FHRzs7Ozs7OztJQUNLLDJDQUFrQjs7Ozs7O0lBQTFCO1FBRUUsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0lBRUgsQ0FBQzs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O29CQUVyQyxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7Ozs7bUNBS0UsV0FBVyxTQUFDLHdCQUF3Qjs0QkFRcEMsS0FBSyxTQUFDLFlBQVk7cUNBTWxCLFdBQVcsU0FBQyx3QkFBd0I7O0lBbUJ2QyxxQkFBQztDQUFBLEFBNUNELElBNENDO1NBckNZLGNBQWM7Ozs7Ozs7SUFJekIsMENBQytCOzs7Ozs7SUFPL0IsbUNBQzRCOzs7OztJQUs1Qiw0Q0FDbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAnZm9ybS1pbnB1dCcgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2lucHV0W3NlbXVpLWlucHV0XScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBTZW11aSBidXR0b24gY3NzIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXHJcbiAgcHJpdmF0ZSBhZGRGb3JtQmFzZUNsYXNzOiB0cnVlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeSBvciBzZWNvbmRhcnkuXHJcbiAgICogUHJpbWFyeSBzZXRzIGFzIHJvdW5kIGNvcm5lcnMgYW5kIHNoYXJwIGVkZ2UsIHNlY29uZGFyeSBpcyBhbGwgcm91bmRcclxuICAgKi9cclxuICBASW5wdXQoJ3NlbXVpLXR5cGUnKVxyXG4gIHB1YmxpYyBzZW11aVR5cGU6IElucHV0VHlwZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNlbXVpLWZvcm0taW5wdXRcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcclxuICBwdWJsaWMgc2VtdWlUeXBlRm9ybUlucHV0OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlUeXBlKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldCBjb21wb25lbnQncyBwcm9wZXJ0aWVzIGJvdW5kIHRvXHJcbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cclxuICAgKi9cclxuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5VHlwZSgpIHtcclxuXHJcbiAgICBpZiAoJ2Zvcm0taW5wdXQnID09PSB0aGlzLnNlbXVpVHlwZSkge1xyXG4gICAgICB0aGlzLnNlbXVpVHlwZUZvcm1JbnB1dCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0=