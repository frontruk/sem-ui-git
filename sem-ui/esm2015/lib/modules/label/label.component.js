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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VtLXVpLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvbGFiZWwvbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUVMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQWtCdkIsTUFBTTs7Ozs7K0JBS3FCLElBQUk7Ozs7O0lBc0Q3QixRQUFRO1FBQ04sSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNoQzs7Ozs7O0lBSU8sUUFBUSxDQUFDLElBQUk7UUFDbkIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNSLFFBQVE7U0FDVDs7Ozs7Ozs7SUFNSyw2QkFBNkIsQ0FBQyxTQUFTO1FBRTdDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDYixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDLFlBQVksQ0FBQztnQkFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUMvQixRQUFRO1NBQ1Q7Ozs7WUF6R0osU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Z0JBRXJDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7OEJBS0UsV0FBVyxTQUFDLG1CQUFtQjsyQkFNL0IsV0FBVyxTQUFDLGFBQWE7NEJBTXpCLFdBQVcsU0FBQyxjQUFjOzJCQU8xQixXQUFXLFNBQUMsYUFBYTsrQkFPekIsV0FBVyxTQUFDLGtCQUFrQjs4QkFNOUIsS0FBSyxTQUFDLGtCQUFrQjswQkFPeEIsV0FBVyxTQUFDLFlBQVk7MkJBTXhCLFdBQVcsU0FBQyxhQUFhO3lCQU96QixLQUFLLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxuICovXG5leHBvcnQgdHlwZSBMYWJlbEltcG9ydGFuY2VMZXZlbCA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgTGFiZWxUaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XG5cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbGFiZWxbc2VtdWktbGFiZWxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWxhYmVsJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc21hbGwnKVxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibWVkaXVtXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tZWRpdW0nKVxuICBwdWJsaWMgc3R5bGVBc01lZGl1bTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvcm0tbGFiZWwnKVxuICBwdWJsaWMgc3R5bGVBc0Zvcm1MYWJlbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogTGFiZWxJbXBvcnRhbmNlTGV2ZWw7XG5cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodDogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBMYWJlbCB0aGVtZSBpbiB0ZXJtcyBvZiBsaWdodC9kYXJrLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBMYWJlbFRoZW1lO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xuICAgIHRoaXMuc2V0VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRUaGVtZSh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFyayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xuICAgKiB0aGUgaG9zdCBlbGVtZW50IENTUyBjbGFzc2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcblxuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XG4gICAgICBjYXNlICgnc21hbGwnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzU21hbGwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdtZWRpdW0nKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTWVkaXVtID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnbGFyZ2UnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdmb3JtLWxhYmVsJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0Zvcm1MYWJlbCA9IHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuIl19