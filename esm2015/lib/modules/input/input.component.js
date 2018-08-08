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
                template: `    
     <ng-content></ng-content>
  `,
                styles: [``]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsdUJBQXVCLEVBQzFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ3RDLE1BQU0sZUFBZSxDQUFDOzs7O0FBY3ZCLE1BQU07SUFxQkosaUJBQWlCOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7Ozs7O0lBS08sa0JBQWtCO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDOzs7O1lBNUNKLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2dCQUVyQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7OytCQUtFLFdBQVcsU0FBQyx3QkFBd0I7d0JBUXBDLEtBQUssU0FBQyxZQUFZO2lDQU1sQixXQUFXLFNBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAnZm9ybS1pbnB1dCcgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W3NlbXVpLWlucHV0XScsXG4gIHRlbXBsYXRlOiBgICAgIFxuICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBBbHdheXMgYXBwbHkgdGhlIGJhc2UgU2VtdWkgYnV0dG9uIGNzcyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXG4gIHByaXZhdGUgYWRkRm9ybUJhc2VDbGFzczogdHJ1ZTtcblxuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5IG9yIHNlY29uZGFyeS5cbiAgICogUHJpbWFyeSBzZXRzIGFzIHJvdW5kIGNvcm5lcnMgYW5kIHNoYXJwIGVkZ2UsIHNlY29uZGFyeSBpcyBhbGwgcm91bmRcbiAgICovXG4gIEBJbnB1dCgnc2VtdWktdHlwZScpXG4gIHB1YmxpYyBzZW11aVR5cGU6IElucHV0VHlwZTtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNlbXVpLWZvcm0taW5wdXRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvcm0taW5wdXQnKVxuICBwdWJsaWMgc2VtdWlUeXBlRm9ybUlucHV0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeVR5cGUoKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCdzIHByb3BlcnRpZXMgYm91bmQgdG9cbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cbiAgICovXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlUeXBlKCkge1xuXG4gICAgaWYgKCdmb3JtLWlucHV0JyA9PT0gdGhpcy5zZW11aVR5cGUpIHtcbiAgICAgIHRoaXMuc2VtdWlUeXBlRm9ybUlucHV0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxufVxuIl19