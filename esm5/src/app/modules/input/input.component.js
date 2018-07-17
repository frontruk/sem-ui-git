/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
     * @return {?}
     */
    InputComponent.prototype.styleElementByType = /**
     * Set component's properties bound to
     * the host element CSS classes.
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
                    template: "    \n     <ng-content></ng-content>\n  ",
                    styles: [".sem--corner ._top{border-radius:50% 0 50% 50%;background-clip:padding-box}"]
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    InputComponent.propDecorators = {
        "addFormBaseClass": [{ type: HostBinding, args: ['class.semui-form-input',] },],
        "semuiType": [{ type: Input, args: ['semui-type',] },],
        "semuiTypeFormInput": [{ type: HostBinding, args: ['class.semui-form-input',] },],
    };
    return InputComponent;
}());
export { InputComponent };
function InputComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    InputComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    InputComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    InputComponent.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW1ibGVyLWNvbXBvbmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBVSx1QkFBdUIsRUFDMUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFDdEMsTUFBTSxlQUFlLENBQUM7O0lBbUNyQjtLQUFpQjs7OztJQUVqQixpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7Ozs7O0lBS08sMkNBQWtCOzs7Ozs7UUFFeEIsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7OztnQkE1Q0osU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7b0JBRXJDLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwwQ0FFVDtvQkFDRCxNQUFNLEVBQUUsQ0FBQyw2RUFBNkUsQ0FBQztpQkFDeEY7Ozs7O3FDQUtFLFdBQVcsU0FBQyx3QkFBd0I7OEJBUXBDLEtBQUssU0FBQyxZQUFZO3VDQU1sQixXQUFXLFNBQUMsd0JBQXdCOzt5QkFuQ3ZDOztTQWlCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAnZm9ybS1pbnB1dCcgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W3NlbXVpLWlucHV0XScsXG4gIHRlbXBsYXRlOiBgICAgIFxuICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIHN0eWxlczogW2Auc2VtLS1jb3JuZXIgLl90b3B7Ym9yZGVyLXJhZGl1czo1MCUgMCA1MCUgNTAlO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveH1gXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBBbHdheXMgYXBwbHkgdGhlIGJhc2UgU2VtdWkgYnV0dG9uIGNzcyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXG4gIHByaXZhdGUgYWRkRm9ybUJhc2VDbGFzczogdHJ1ZTtcblxuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5IG9yIHNlY29uZGFyeS5cbiAgICogUHJpbWFyeSBzZXRzIGFzIHJvdW5kIGNvcm5lcnMgYW5kIHNoYXJwIGVkZ2UsIHNlY29uZGFyeSBpcyBhbGwgcm91bmRcbiAgICovXG4gIEBJbnB1dCgnc2VtdWktdHlwZScpXG4gIHB1YmxpYyBzZW11aVR5cGU6IElucHV0VHlwZTtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNlbXVpLWZvcm0taW5wdXRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvcm0taW5wdXQnKVxuICBwdWJsaWMgc2VtdWlUeXBlRm9ybUlucHV0OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeVR5cGUoKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCdzIHByb3BlcnRpZXMgYm91bmQgdG9cbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cbiAgICovXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlUeXBlKCkge1xuXG4gICAgaWYgKCdmb3JtLWlucHV0JyA9PT0gdGhpcy5zZW11aVR5cGUpIHtcbiAgICAgIHRoaXMuc2VtdWlUeXBlRm9ybUlucHV0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxufVxuIl19