/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, ViewEncapsulation, Input } from '@angular/core';
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
     * @private
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsdUJBQXVCLEVBQzFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQ3RDLE1BQU0sZUFBZSxDQUFDO0FBV3ZCLE1BQU0sT0FBTyxjQUFjO0lBcUJ6QixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7OztJQUtPLGtCQUFrQjtRQUV4QixJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFFSCxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Z0JBRXJDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7OytCQUtFLFdBQVcsU0FBQyx3QkFBd0I7d0JBUXBDLEtBQUssU0FBQyxZQUFZO2lDQU1sQixXQUFXLFNBQUMsd0JBQXdCOzs7Ozs7OztJQWRyQywwQ0FDK0I7Ozs7OztJQU8vQixtQ0FDNEI7Ozs7O0lBSzVCLDRDQUNtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEhvc3RCaW5kaW5nLCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIElucHV0VHlwZSA9ICdmb3JtLWlucHV0JyB8IHVuZGVmaW5lZDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnaW5wdXRbc2VtdWktaW5wdXRdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQWx3YXlzIGFwcGx5IHRoZSBiYXNlIFNlbXVpIGJ1dHRvbiBjc3MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcclxuICBwcml2YXRlIGFkZEZvcm1CYXNlQ2xhc3M6IHRydWU7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5IG9yIHNlY29uZGFyeS5cclxuICAgKiBQcmltYXJ5IHNldHMgYXMgcm91bmQgY29ybmVycyBhbmQgc2hhcnAgZWRnZSwgc2Vjb25kYXJ5IGlzIGFsbCByb3VuZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktdHlwZScpXHJcbiAgcHVibGljIHNlbXVpVHlwZTogSW5wdXRUeXBlO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic2VtdWktZm9ybS1pbnB1dFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvcm0taW5wdXQnKVxyXG4gIHB1YmxpYyBzZW11aVR5cGVGb3JtSW5wdXQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeVR5cGUoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbXBvbmVudCdzIHByb3BlcnRpZXMgYm91bmQgdG9cclxuICAgKiB0aGUgaG9zdCBlbGVtZW50IENTUyBjbGFzc2VzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlUeXBlKCkge1xyXG5cclxuICAgIGlmICgnZm9ybS1pbnB1dCcgPT09IHRoaXMuc2VtdWlUeXBlKSB7XHJcbiAgICAgIHRoaXMuc2VtdWlUeXBlRm9ybUlucHV0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==