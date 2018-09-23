/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, ViewEncapsulation, Input } from '@angular/core';
/** @typedef {?} */
var InputType;
export { InputType };
export class InputComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styleElementByType();
    }
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @return {?}
     */
    styleElementByType() {
        if ('form-input' === this.semuiType) {
            this.semuiTypeFormInput = true;
        }
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'input[semui-input]',
                template: `<ng-content></ng-content>`
            },] },
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    addFormBaseClass: [{ type: HostBinding, args: ['class.semui-form-input',] }],
    semuiType: [{ type: Input, args: ['semui-type',] }],
    semuiTypeFormInput: [{ type: HostBinding, args: ['class.semui-form-input',] }]
};
if (false) {
    /**
     * Always apply the base Semui button css class.
     * @type {?}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsdUJBQXVCLEVBQzFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ3RDLE1BQU0sZUFBZSxDQUFDOzs7O0FBV3ZCLE1BQU07SUFxQkosaUJBQWlCOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7Ozs7O0lBS08sa0JBQWtCO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDOzs7O1lBekNKLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2dCQUVyQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7OzsrQkFLRSxXQUFXLFNBQUMsd0JBQXdCO3dCQVFwQyxLQUFLLFNBQUMsWUFBWTtpQ0FNbEIsV0FBVyxTQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgSW5wdXRUeXBlID0gJ2Zvcm0taW5wdXQnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpbnB1dFtzZW11aS1pbnB1dF0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBTZW11aSBidXR0b24gY3NzIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcbiAgcHJpdmF0ZSBhZGRGb3JtQmFzZUNsYXNzOiB0cnVlO1xuXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkgb3Igc2Vjb25kYXJ5LlxuICAgKiBQcmltYXJ5IHNldHMgYXMgcm91bmQgY29ybmVycyBhbmQgc2hhcnAgZWRnZSwgc2Vjb25kYXJ5IGlzIGFsbCByb3VuZFxuICAgKi9cbiAgQElucHV0KCdzZW11aS10eXBlJylcbiAgcHVibGljIHNlbXVpVHlwZTogSW5wdXRUeXBlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic2VtdWktZm9ybS1pbnB1dFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXG4gIHB1YmxpYyBzZW11aVR5cGVGb3JtSW5wdXQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5VHlwZSgpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xuICAgKiB0aGUgaG9zdCBlbGVtZW50IENTUyBjbGFzc2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeVR5cGUoKSB7XG5cbiAgICBpZiAoJ2Zvcm0taW5wdXQnID09PSB0aGlzLnNlbXVpVHlwZSkge1xuICAgICAgdGhpcy5zZW11aVR5cGVGb3JtSW5wdXQgPSB0cnVlO1xuICAgIH1cblxuICB9XG59XG4iXX0=