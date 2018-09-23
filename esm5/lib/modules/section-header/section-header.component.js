/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
/** @typedef {?} */
var HeaderImportanceLevel;
export { HeaderImportanceLevel };
var SectionHeaderComponent = /** @class */ (function () {
    function SectionHeaderComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    /**
     * @return {?}
     */
    SectionHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleElementByImportanceLevel(this.semuiImportance);
    };
    /**
     * Set component to be on dark or light.
     * @param {?} labelType
     * @return {?}
     */
    SectionHeaderComponent.prototype.styleElementByImportanceLevel = /**
     * Set component to be on dark or light.
     * @param {?} labelType
     * @return {?}
     */
    function (labelType) {
        switch (labelType) {
            case ('small'):
                this.styleAsSmall = true;
                break;
            case ('large'):
                this.styleAsLarge = true;
                break;
            default:
                break;
        }
    };
    SectionHeaderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'div[semui-section-header]',
                    template: "\n    <ng-content></ng-content>\n  "
                },] },
    ];
    /** @nocollapse */
    SectionHeaderComponent.ctorParameters = function () { return []; };
    SectionHeaderComponent.propDecorators = {
        addBaseCssClass: [{ type: HostBinding, args: ['class.semui-header-section',] }],
        styleAsSmall: [{ type: HostBinding, args: ['class.small',] }],
        semuiImportance: [{ type: Input, args: ['semui-importance',] }],
        styleAsLarge: [{ type: HostBinding, args: ['class.large',] }]
    };
    return SectionHeaderComponent;
}());
export { SectionHeaderComponent };
if (false) {
    /**
     * Css base class.
     * @type {?}
     */
    SectionHeaderComponent.prototype.addBaseCssClass;
    /**
     * Bind to the host "small" CSS class.
     * @type {?}
     */
    SectionHeaderComponent.prototype.styleAsSmall;
    /**
     * Button importance level in terms of primary/secondary/etc.
     * @type {?}
     */
    SectionHeaderComponent.prototype.semuiImportance;
    /**
     * Bind to the host "large" CSS class.
     * @type {?}
     */
    SectionHeaderComponent.prototype.styleAsLarge;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7OztJQXNDckI7Ozs7K0JBcEJ5QixJQUFJO0tBb0JaOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDMUQ7Ozs7OztJQUlPLDhEQUE2Qjs7Ozs7Y0FBQyxTQUFTO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1I7Z0JBQ0UsS0FBSyxDQUFDO1NBQ1Q7OztnQkFwREosU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7b0JBRXJDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7Ozs7a0NBS0UsV0FBVyxTQUFDLDRCQUE0QjsrQkFNeEMsV0FBVyxTQUFDLGFBQWE7a0NBTXpCLEtBQUssU0FBQyxrQkFBa0I7K0JBTXhCLFdBQVcsU0FBQyxhQUFhOztpQ0ExQzVCOztTQW9CYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSAgSGVhZGVySW1wb3J0YW5jZUxldmVsID0gJycgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS1zZWN0aW9uLWhlYWRlcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1oZWFkZXItc2VjdGlvbicpXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogSGVhZGVySW1wb3J0YW5jZUxldmVsO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXG4gICAqL1xuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKGxhYmVsVHlwZSkge1xuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XG4gICAgICBjYXNlICgnc21hbGwnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzU21hbGwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=