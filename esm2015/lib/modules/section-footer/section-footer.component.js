/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
/** @typedef {?} */
var FooterImportanceLevel;
export { FooterImportanceLevel };
export class SectionFooterComponent {
    constructor() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styleElementByImportanceLevel(this.semuiImportance);
    }
    /**
     * Set component to be on dark or light.
     * @param {?} labelType
     * @return {?}
     */
    styleElementByImportanceLevel(labelType) {
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
    }
}
SectionFooterComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'div[semui-section-footer]',
                template: `
    <ng-content></ng-content>
  `
            },] },
];
/** @nocollapse */
SectionFooterComponent.ctorParameters = () => [];
SectionFooterComponent.propDecorators = {
    addBaseCssClass: [{ type: HostBinding, args: ['class.semui-footer-section',] }],
    styleAsSmall: [{ type: HostBinding, args: ['class.small',] }],
    semuiImportance: [{ type: Input, args: ['semui-importance',] }],
    styleAsLarge: [{ type: HostBinding, args: ['class.large',] }]
};
if (false) {
    /**
     * Css base class.
     * @type {?}
     */
    SectionFooterComponent.prototype.addBaseCssClass;
    /**
     * Bind to the host "small" CSS class.
     * @type {?}
     */
    SectionFooterComponent.prototype.styleAsSmall;
    /**
     * Button importance level in terms of primary/secondary/etc.
     * @type {?}
     */
    SectionFooterComponent.prototype.semuiImportance;
    /**
     * Bind to the host "large" CSS class.
     * @type {?}
     */
    SectionFooterComponent.prototype.styleAsLarge;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zZWN0aW9uLWZvb3Rlci9zZWN0aW9uLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7O0FBYXZCLE1BQU07SUF5Qko7Ozs7K0JBcEJ5QixJQUFJO0tBb0JaOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzFEOzs7Ozs7SUFJTyw2QkFBNkIsQ0FBQyxTQUFTO1FBQzdDLFFBQVEsU0FBUyxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUOzs7O1lBcERKLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2dCQUVyQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7Ozs7OEJBS0UsV0FBVyxTQUFDLDRCQUE0QjsyQkFNeEMsV0FBVyxTQUFDLGFBQWE7OEJBTXpCLEtBQUssU0FBQyxrQkFBa0I7MkJBTXhCLFdBQVcsU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgRm9vdGVySW1wb3J0YW5jZUxldmVsID0gJycgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS1zZWN0aW9uLWZvb3Rlcl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbkZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQ3NzIGJhc2UgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb290ZXItc2VjdGlvbicpXHJcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcclxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcclxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBGb290ZXJJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcclxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcclxuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2xhcmdlJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=