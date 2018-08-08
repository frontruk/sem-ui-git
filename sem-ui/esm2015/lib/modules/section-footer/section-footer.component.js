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
                styles: [`.semui-footer-section{padding:0 2% 2%;display:block}.semui-footer-section.large{padding:0 2% 3%}.semui-footer-section.small{padding:0 .5% 1%}`],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VtLXVpLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUVMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztBQWN2QixNQUFNO0lBeUJKOzs7OytCQXBCeUIsSUFBSTtLQW9CWjs7OztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMxRDs7Ozs7O0lBSU8sNkJBQTZCLENBQUMsU0FBUztRQUM3QyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNSO2dCQUNFLEtBQUssQ0FBQztTQUNUOzs7O1lBckRKLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2dCQUVyQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxNQUFNLEVBQUUsQ0FBQywrSUFBK0ksQ0FBQztnQkFDekosUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7OzhCQUtFLFdBQVcsU0FBQyw0QkFBNEI7MkJBTXhDLFdBQVcsU0FBQyxhQUFhOzhCQU16QixLQUFLLFNBQUMsa0JBQWtCOzJCQU14QixXQUFXLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIEZvb3RlckltcG9ydGFuY2VMZXZlbCA9ICcnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktc2VjdGlvbi1mb290ZXJdJyxcbiAgc3R5bGVzOiBbYC5zZW11aS1mb290ZXItc2VjdGlvbntwYWRkaW5nOjAgMiUgMiU7ZGlzcGxheTpibG9ja30uc2VtdWktZm9vdGVyLXNlY3Rpb24ubGFyZ2V7cGFkZGluZzowIDIlIDMlfS5zZW11aS1mb290ZXItc2VjdGlvbi5zbWFsbHtwYWRkaW5nOjAgLjUlIDElfWBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb290ZXItc2VjdGlvbicpXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogRm9vdGVySW1wb3J0YW5jZUxldmVsO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXG4gICAqL1xuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKGxhYmVsVHlwZSkge1xuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XG4gICAgICBjYXNlICgnc21hbGwnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzU21hbGwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=