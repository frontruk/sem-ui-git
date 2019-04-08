/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
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
     */
    /**
     * Set component to be on dark or light.
     * @private
     * @param {?} type
     * @return {?}
     */
    LabelComponent.prototype.setTheme = /**
     * Set component to be on dark or light.
     * @private
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
     */
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
     * @param {?} labelType
     * @return {?}
     */
    LabelComponent.prototype.styleElementByImportanceLevel = /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQUE7Ozs7UUFjUyxvQkFBZSxHQUFHLElBQUksQ0FBQztJQTZGaEMsQ0FBQzs7OztJQXZDQyxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRDs7T0FFRzs7Ozs7OztJQUNLLGlDQUFROzs7Ozs7SUFBaEIsVUFBaUIsSUFBSTtRQUNuQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU07WUFDUixLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsUUFBUTtTQUNUO0lBQ0gsQ0FBQztJQUNEOzs7T0FHRzs7Ozs7Ozs7SUFDSyxzREFBNkI7Ozs7Ozs7SUFBckMsVUFBc0MsU0FBUztRQUU3QyxRQUFRLFNBQVMsRUFBRTtZQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDYixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsTUFBTTtZQUNSLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLENBQUMsWUFBWSxDQUFDO2dCQUNqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLFFBQVE7U0FDVDtJQUNILENBQUM7O2dCQTFHRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztvQkFFckMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOzs7a0NBS0UsV0FBVyxTQUFDLG1CQUFtQjsrQkFNL0IsV0FBVyxTQUFDLGFBQWE7Z0NBTXpCLFdBQVcsU0FBQyxjQUFjOytCQU8xQixXQUFXLFNBQUMsYUFBYTttQ0FPekIsV0FBVyxTQUFDLGtCQUFrQjtrQ0FNOUIsS0FBSyxTQUFDLGtCQUFrQjs4QkFPeEIsV0FBVyxTQUFDLFlBQVk7K0JBTXhCLFdBQVcsU0FBQyxhQUFhOzZCQU96QixLQUFLLFNBQUMsYUFBYTs7SUEwQ3RCLHFCQUFDO0NBQUEsQUEzR0QsSUEyR0M7U0FsR1ksY0FBYzs7Ozs7O0lBSXpCLHlDQUM4Qjs7Ozs7SUFLOUIsc0NBQzZCOzs7OztJQUs3Qix1Q0FDOEI7Ozs7O0lBTTlCLHNDQUM2Qjs7Ozs7SUFNN0IsMENBQ2lDOzs7OztJQUtqQyx5Q0FDNkM7Ozs7O0lBTTdDLHFDQUM0Qjs7Ozs7SUFLNUIsc0NBQzZCOzs7OztJQU03QixvQ0FDOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGFiZWxJbXBvcnRhbmNlTGV2ZWwgPSAnc21hbGwnIHwgJ2xhcmdlJyB8IHVuZGVmaW5lZDtcclxuZXhwb3J0IHR5cGUgTGFiZWxUaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdsYWJlbFtzZW11aS1sYWJlbF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktbGFiZWwnKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXHJcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcIm1lZGl1bVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1lZGl1bScpXHJcbiAgcHVibGljIHN0eWxlQXNNZWRpdW06IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXHJcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvcm0tbGFiZWwnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRm9ybUxhYmVsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcclxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBMYWJlbEltcG9ydGFuY2VMZXZlbDtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRGFyazogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBMYWJlbCB0aGVtZSBpbiB0ZXJtcyBvZiBsaWdodC9kYXJrLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKVxyXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBMYWJlbFRoZW1lO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xyXG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRUaGVtZSh0eXBlKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFyayA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xyXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgQ1NTIGNsYXNzZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcclxuXHJcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xyXG4gICAgICBjYXNlICgnc21hbGwnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdtZWRpdW0nKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNNZWRpdW0gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnbGFyZ2UnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdmb3JtLWxhYmVsJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRm9ybUxhYmVsID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19