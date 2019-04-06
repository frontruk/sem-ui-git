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
var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleElementByImportanceLevel(this.semuiImportance);
        this.setTheme(this.semuiTheme);
    };
    /**
     * Set component to be on dark or light.
     * @param {?} type
     * @return {?}
     */
    LabelComponent.prototype.setTheme = /**
     * Set component to be on dark or light.
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case ('light'):
                this.styleAsDark = true;
                break;
            case ('dark'):
                this.styleAsLight = true;
                break;
            default:
        }
    };
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @param {?} labelType
     * @return {?}
     */
    LabelComponent.prototype.styleElementByImportanceLevel = /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @param {?} labelType
     * @return {?}
     */
    function (labelType) {
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
    };
    LabelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'label[semui-label]',
                    template: "\n    <ng-content></ng-content>\n  "
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
    return LabelComponent;
}());
export { LabelComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7K0JBdUJJLElBQUk7Ozs7O0lBc0Q3QixpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7SUFJTyxpQ0FBUTs7Ozs7Y0FBQyxJQUFJO1FBQ25CLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTTtZQUNSLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixRQUFRO1NBQ1Q7Ozs7Ozs7O0lBTUssc0RBQTZCOzs7Ozs7Y0FBQyxTQUFTO1FBRTdDLFFBQVEsU0FBUyxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLENBQUMsUUFBUSxDQUFDO2dCQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixNQUFNO1lBQ1IsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsUUFBUTtTQUNUOzs7Z0JBekdKLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O29CQUVyQyxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUscUNBRVQ7aUJBQ0Y7OztrQ0FLRSxXQUFXLFNBQUMsbUJBQW1COytCQU0vQixXQUFXLFNBQUMsYUFBYTtnQ0FNekIsV0FBVyxTQUFDLGNBQWM7K0JBTzFCLFdBQVcsU0FBQyxhQUFhO21DQU96QixXQUFXLFNBQUMsa0JBQWtCO2tDQU05QixLQUFLLFNBQUMsa0JBQWtCOzhCQU94QixXQUFXLFNBQUMsWUFBWTsrQkFNeEIsV0FBVyxTQUFDLGFBQWE7NkJBT3pCLEtBQUssU0FBQyxhQUFhOzt5QkFqRnRCOztTQXlCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFBvc3NpYmxlIGJ1dHRvbiBpbXBvcnRhbmNlIGxldmVscy5cclxuICovXHJcbmV4cG9ydCB0eXBlIExhYmVsSW1wb3J0YW5jZUxldmVsID0gJ3NtYWxsJyB8ICdsYXJnZScgfCB1bmRlZmluZWQ7XHJcbmV4cG9ydCB0eXBlIExhYmVsVGhlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnbGFiZWxbc2VtdWktbGFiZWxdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBDc3MgYmFzZSBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWxhYmVsJylcclxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNtYWxsXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc21hbGwnKVxyXG4gIHB1YmxpYyBzdHlsZUFzU21hbGw6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJtZWRpdW1cIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tZWRpdW0nKVxyXG4gIHB1YmxpYyBzdHlsZUFzTWVkaXVtOiBib29sZWFuO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGFyZ2UnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGFyZ2U6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb3JtLWxhYmVsJylcclxuICBwdWJsaWMgc3R5bGVBc0Zvcm1MYWJlbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXHJcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogTGFiZWxJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0Rhcms6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcclxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0OiBib29sZWFuO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogTGFiZWwgdGhlbWUgaW4gdGVybXMgb2YgbGlnaHQvZGFyay5cclxuICAgKi9cclxuICBASW5wdXQoJ3NlbXVpLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogTGFiZWxUaGVtZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcclxuICAgIHRoaXMuc2V0VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0VGhlbWUodHlwZSkge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmsgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnZGFyaycpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbXBvbmVudCdzIHByb3BlcnRpZXMgYm91bmQgdG9cclxuICAgKiB0aGUgaG9zdCBlbGVtZW50IENTUyBjbGFzc2VzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XHJcblxyXG4gICAgc3dpdGNoIChsYWJlbFR5cGUpIHtcclxuICAgICAgY2FzZSAoJ3NtYWxsJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzU21hbGwgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnbWVkaXVtJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTWVkaXVtID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2xhcmdlJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnZm9ybS1sYWJlbCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0Zvcm1MYWJlbCA9IHRydWU7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==