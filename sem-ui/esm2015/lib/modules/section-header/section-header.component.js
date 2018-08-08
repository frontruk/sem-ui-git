/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
/** @typedef {?} */
var HeaderImportanceLevel;
export { HeaderImportanceLevel };
export class SectionHeaderComponent {
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
SectionHeaderComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'div[semui-section-header]',
                styles: [`.semui-header-section{padding:2% 2% 0;display:block}.semui-header-section.large{padding:3% 2% 0}.semui-header-section.small{padding:1% .5% 0}`],
                template: `
    <ng-content></ng-content>
  `
            },] },
];
/** @nocollapse */
SectionHeaderComponent.ctorParameters = () => [];
SectionHeaderComponent.propDecorators = {
    addBaseCssClass: [{ type: HostBinding, args: ['class.semui-header-section',] }],
    styleAsSmall: [{ type: HostBinding, args: ['class.small',] }],
    semuiImportance: [{ type: Input, args: ['semui-importance',] }],
    styleAsLarge: [{ type: HostBinding, args: ['class.large',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VtLXVpLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUVMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztBQWN2QixNQUFNO0lBeUJKOzs7OytCQXBCeUIsSUFBSTtLQW9CWjs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMxRDs7Ozs7O0lBSU8sNkJBQTZCLENBQUMsU0FBUztRQUM3QyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNSO2dCQUNFLEtBQUssQ0FBQztTQUNUOzs7O1lBckRKLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2dCQUVyQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxNQUFNLEVBQUUsQ0FBQywrSUFBK0ksQ0FBQztnQkFDekosUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7OzhCQUtFLFdBQVcsU0FBQyw0QkFBNEI7MkJBTXhDLFdBQVcsU0FBQyxhQUFhOzhCQU16QixLQUFLLFNBQUMsa0JBQWtCOzJCQU14QixXQUFXLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlICBIZWFkZXJJbXBvcnRhbmNlTGV2ZWwgPSAnJyB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXNlY3Rpb24taGVhZGVyXScsXG4gIHN0eWxlczogW2Auc2VtdWktaGVhZGVyLXNlY3Rpb257cGFkZGluZzoyJSAyJSAwO2Rpc3BsYXk6YmxvY2t9LnNlbXVpLWhlYWRlci1zZWN0aW9uLmxhcmdle3BhZGRpbmc6MyUgMiUgMH0uc2VtdWktaGVhZGVyLXNlY3Rpb24uc21hbGx7cGFkZGluZzoxJSAuNSUgMH1gXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbkhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDc3MgYmFzZSBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktaGVhZGVyLXNlY3Rpb24nKVxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzID0gdHJ1ZTtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNtYWxsXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXG4gIHB1YmxpYyBzdHlsZUFzU21hbGw6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXG4gIHB1YmxpYyBzZW11aUltcG9ydGFuY2U6IEhlYWRlckltcG9ydGFuY2VMZXZlbDtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXG4gIHB1YmxpYyBzdHlsZUFzTGFyZ2U6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xuICAgICAgY2FzZSAoJ3NtYWxsJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnbGFyZ2UnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19