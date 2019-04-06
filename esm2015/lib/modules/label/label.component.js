/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
/** @typedef {?} */
var LabelImportanceLevel;
export { LabelImportanceLevel };
/** @typedef {?} */
var LabelTheme;
export { LabelTheme };
export class LabelComponent {
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
        this.setTheme(this.semuiTheme);
    }
    /**
     * Set component to be on dark or light.
     * @param {?} type
     * @return {?}
     */
    setTheme(type) {
        switch (type) {
            case ('light'):
                this.styleAsDark = true;
                break;
            case ('dark'):
                this.styleAsLight = true;
                break;
            default:
        }
    }
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @param {?} labelType
     * @return {?}
     */
    styleElementByImportanceLevel(labelType) {
        switch (labelType) {
            case ('small'):
                this.styleAsSmall = true;
                break;
            case ('medium'):
                this.styleAsMedium = true;
                break;
            case ('large'):
                this.styleAsLarge = true;
                break;
            case ('form-label'):
                this.styleAsFormLabel = true;
            default:
        }
    }
}
LabelComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'label[semui-label]',
                template: `
    <ng-content></ng-content>
  `
            },] },
];
LabelComponent.propDecorators = {
    addBaseCssClass: [{ type: HostBinding, args: ['class.semui-label',] }],
    styleAsSmall: [{ type: HostBinding, args: ['class.small',] }],
    styleAsMedium: [{ type: HostBinding, args: ['class.medium',] }],
    styleAsLarge: [{ type: HostBinding, args: ['class.large',] }],
    styleAsFormLabel: [{ type: HostBinding, args: ['class.form-label',] }],
    semuiImportance: [{ type: Input, args: ['semui-importance',] }],
    styleAsDark: [{ type: HostBinding, args: ['class.dark',] }],
    styleAsLight: [{ type: HostBinding, args: ['class.light',] }],
    semuiTheme: [{ type: Input, args: ['semui-theme',] }]
};
if (false) {
    /**
     * Css base class.
     * @type {?}
     */
    LabelComponent.prototype.addBaseCssClass;
    /**
     * Bind to the host "small" CSS class.
     * @type {?}
     */
    LabelComponent.prototype.styleAsSmall;
    /**
     * Bind to the host "medium" CSS class.
     * @type {?}
     */
    LabelComponent.prototype.styleAsMedium;
    /**
     * Bind to the host "large" CSS class.
     * @type {?}
     */
    LabelComponent.prototype.styleAsLarge;
    /**
     * Bind to the host "large" CSS class.
     * @type {?}
     */
    LabelComponent.prototype.styleAsFormLabel;
    /**
     * Button importance level in terms of primary/secondary/etc.
     * @type {?}
     */
    LabelComponent.prototype.semuiImportance;
    /**
     * Bind to the host "large" CSS class.
     * @type {?}
     */
    LabelComponent.prototype.styleAsDark;
    /**
     * Bind to the host "large" CSS class.
     * @type {?}
     */
    LabelComponent.prototype.styleAsLight;
    /**
     * Label theme in terms of light/dark.
     * @type {?}
     */
    LabelComponent.prototype.semuiTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBa0J2QixNQUFNOzs7OzsrQkFLcUIsSUFBSTs7Ozs7SUFzRDdCLFFBQVE7UUFDTixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7SUFJTyxRQUFRLENBQUMsSUFBSTtRQUNuQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU07WUFDUixLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsUUFBUTtTQUNUOzs7Ozs7OztJQU1LLDZCQUE2QixDQUFDLFNBQVM7UUFFN0MsUUFBUSxTQUFTLEVBQUU7WUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE1BQU07WUFDUixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxDQUFDLFlBQVksQ0FBQztnQkFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUMvQixRQUFRO1NBQ1Q7Ozs7WUF6R0osU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Z0JBRXJDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7OEJBS0UsV0FBVyxTQUFDLG1CQUFtQjsyQkFNL0IsV0FBVyxTQUFDLGFBQWE7NEJBTXpCLFdBQVcsU0FBQyxjQUFjOzJCQU8xQixXQUFXLFNBQUMsYUFBYTsrQkFPekIsV0FBVyxTQUFDLGtCQUFrQjs4QkFNOUIsS0FBSyxTQUFDLGtCQUFrQjswQkFPeEIsV0FBVyxTQUFDLFlBQVk7MkJBTXhCLFdBQVcsU0FBQyxhQUFhO3lCQU96QixLQUFLLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMYWJlbEltcG9ydGFuY2VMZXZlbCA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBMYWJlbFRoZW1lID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2xhYmVsW3NlbXVpLWxhYmVsXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQ3NzIGJhc2UgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1sYWJlbCcpXHJcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcclxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibWVkaXVtXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWVkaXVtJylcclxuICBwdWJsaWMgc3R5bGVBc01lZGl1bTogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcclxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9ybS1sYWJlbCcpXHJcbiAgcHVibGljIHN0eWxlQXNGb3JtTGFiZWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cclxuICAgKi9cclxuICBASW5wdXQoJ3NlbXVpLWltcG9ydGFuY2UnKVxyXG4gIHB1YmxpYyBzZW11aUltcG9ydGFuY2U6IExhYmVsSW1wb3J0YW5jZUxldmVsO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXHJcbiAgcHVibGljIHN0eWxlQXNEYXJrOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodDogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIExhYmVsIHRoZW1lIGluIHRlcm1zIG9mIGxpZ2h0L2RhcmsuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS10aGVtZScpXHJcbiAgcHVibGljIHNlbXVpVGhlbWU6IExhYmVsVGhlbWU7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbCh0aGlzLnNlbXVpSW1wb3J0YW5jZSk7XHJcbiAgICB0aGlzLnNldFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldCBjb21wb25lbnQgdG8gYmUgb24gZGFyayBvciBsaWdodC5cclxuICAgKi9cclxuICBwcml2YXRlIHNldFRoZW1lKHR5cGUpIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICgnbGlnaHQnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2RhcmsnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldCBjb21wb25lbnQncyBwcm9wZXJ0aWVzIGJvdW5kIHRvXHJcbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cclxuICAgKi9cclxuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKGxhYmVsVHlwZSkge1xyXG5cclxuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ21lZGl1bScpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc01lZGl1bSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2Zvcm0tbGFiZWwnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNGb3JtTGFiZWwgPSB0cnVlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=