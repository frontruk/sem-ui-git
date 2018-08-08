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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBa0J2QixNQUFNOzs7OzsrQkFLcUIsSUFBSTs7Ozs7SUFzRDdCLFFBQVE7UUFDTixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7SUFJTyxRQUFRLENBQUMsSUFBSTtRQUNuQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1IsUUFBUTtTQUNUOzs7Ozs7OztJQU1LLDZCQUE2QixDQUFDLFNBQVM7UUFFN0MsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixLQUFLLENBQUM7WUFDUixLQUFLLENBQUMsUUFBUSxDQUFDO2dCQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixLQUFLLENBQUM7WUFDUixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixLQUFLLENBQUM7WUFDUixLQUFLLENBQUMsWUFBWSxDQUFDO2dCQUNqQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLFFBQVE7U0FDVDs7OztZQXpHSixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztnQkFFckMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs4QkFLRSxXQUFXLFNBQUMsbUJBQW1COzJCQU0vQixXQUFXLFNBQUMsYUFBYTs0QkFNekIsV0FBVyxTQUFDLGNBQWM7MkJBTzFCLFdBQVcsU0FBQyxhQUFhOytCQU96QixXQUFXLFNBQUMsa0JBQWtCOzhCQU05QixLQUFLLFNBQUMsa0JBQWtCOzBCQU94QixXQUFXLFNBQUMsWUFBWTsyQkFNeEIsV0FBVyxTQUFDLGFBQWE7eUJBT3pCLEtBQUssU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cbmV4cG9ydCB0eXBlIExhYmVsSW1wb3J0YW5jZUxldmVsID0gJ3NtYWxsJyB8ICdsYXJnZScgfCB1bmRlZmluZWQ7XG5leHBvcnQgdHlwZSBMYWJlbFRoZW1lID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcblxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdsYWJlbFtzZW11aS1sYWJlbF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDc3MgYmFzZSBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktbGFiZWwnKVxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzID0gdHJ1ZTtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNtYWxsXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXG4gIHB1YmxpYyBzdHlsZUFzU21hbGw6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJtZWRpdW1cIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1lZGl1bScpXG4gIHB1YmxpYyBzdHlsZUFzTWVkaXVtOiBib29sZWFuO1xuXG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGFyZ2UnKVxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xuXG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9ybS1sYWJlbCcpXG4gIHB1YmxpYyBzdHlsZUFzRm9ybUxhYmVsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbXVpLWltcG9ydGFuY2UnKVxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBMYWJlbEltcG9ydGFuY2VMZXZlbDtcblxuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0Rhcms6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0OiBib29sZWFuO1xuXG5cbiAgLyoqXG4gICAqIExhYmVsIHRoZW1lIGluIHRlcm1zIG9mIGxpZ2h0L2RhcmsuXG4gICAqL1xuICBASW5wdXQoJ3NlbXVpLXRoZW1lJylcbiAgcHVibGljIHNlbXVpVGhlbWU6IExhYmVsVGhlbWU7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbCh0aGlzLnNlbXVpSW1wb3J0YW5jZSk7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXG4gICAqL1xuICBwcml2YXRlIHNldFRoZW1lKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQncyBwcm9wZXJ0aWVzIGJvdW5kIHRvXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgQ1NTIGNsYXNzZXMuXG4gICAqL1xuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKGxhYmVsVHlwZSkge1xuXG4gICAgc3dpdGNoIChsYWJlbFR5cGUpIHtcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ21lZGl1bScpOlxuICAgICAgICB0aGlzLnN0eWxlQXNNZWRpdW0gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2Zvcm0tbGFiZWwnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRm9ybUxhYmVsID0gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iXX0=