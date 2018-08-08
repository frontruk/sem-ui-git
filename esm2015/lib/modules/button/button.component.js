/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, ViewEncapsulation, } from '@angular/core';
/** @typedef {?} */
var ThemeImportanceLevel;
export { ThemeImportanceLevel };
export class ButtonComponent {
    constructor() {
        /**
         * Bind to the host "dark" CSS class.
         */
        this.styleAsActive = false;
    }
    /**
     * @param {?} btn
     * @return {?}
     */
    onClick(btn) {
        this.styleAsActive = !this.styleAsActive;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addClasses(this.getClasses());
        this.styleElementTheme(this.semuiTheme);
    }
    /**
     * @return {?}
     */
    getClasses() {
        /** @type {?} */
        const _classes = [];
        _classes.push(' sem-button');
        if (this.block !== undefined) {
            _classes.push('block');
        }
        if (this.full !== undefined) {
            _classes.push('full');
        }
        if (this.large !== undefined) {
            _classes.push('large');
        }
        if (this.small !== undefined) {
            _classes.push('small');
        }
        if (this.disabled !== undefined) {
            _classes.push('disabled');
        }
        if (this.icononly !== undefined) {
            _classes.push('icononly');
        }
        if (this.semImportance === 'primary') {
            _classes.push('primary');
        }
        if (this.semImportance === 'link_primary') {
            _classes.push('link_primary');
        }
        if (this.linkbutton !== undefined) {
            _classes.push('link');
        }
        if (this.semImportance === 'secondary') {
            _classes.push('secondary');
        }
        return _classes;
    }
    /**
     * @param {?} classes
     * @return {?}
     */
    addClasses(classes) {
        /** @type {?} */
        const spacer = this.classes ? '' : '';
        /** @type {?} */
        const base = 'sem-button--';
        classes.forEach((_class, index) => {
            if (index === 0) {
                this.classes += spacer + base + _class;
            }
            else {
                this.classes += ' ' + base + _class;
            }
        });
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    styleElementTheme(theme) {
        switch (theme) {
            case ('light'):
                this.styleAsLightTheme = true;
                break;
            case ('dark'):
                this.styleAsDarkTheme = true;
                break;
            default:
        }
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'button[sem-button], div[sem-button]',
                template: `
    <ng-content></ng-content>
  `
            },] },
];
ButtonComponent.propDecorators = {
    styleAsActive: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }],
    styleAsLightTheme: [{ type: HostBinding, args: ['class.light',] }],
    styleAsDarkTheme: [{ type: HostBinding, args: ['class.dark',] }],
    semuiTheme: [{ type: Input, args: ['sem-theme',] }],
    large: [{ type: Input, args: ['large',] }],
    small: [{ type: Input, args: ['small',] }],
    full: [{ type: Input, args: ['full',] }],
    block: [{ type: Input, args: ['block',] }],
    linkbutton: [{ type: Input, args: ['linkbutton',] }],
    disabled: [{ type: Input, args: ['disabled',] }],
    icononly: [{ type: Input, args: ['icononly',] }],
    semImportance: [{ type: Input, args: ['sem-importance',] }],
    classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }]
};
if (false) {
    /**
     * Bind to the host "dark" CSS class.
     * @type {?}
     */
    ButtonComponent.prototype.styleAsActive;
    /**
     * Bind to the host "light" CSS class.
     * @type {?}
     */
    ButtonComponent.prototype.styleAsLightTheme;
    /**
     * Bind to the host "dark" CSS class.
     * @type {?}
     */
    ButtonComponent.prototype.styleAsDarkTheme;
    /**
     * Button importance level in terms of primary/secondary/etc.
     * @type {?}
     */
    ButtonComponent.prototype.semuiTheme;
    /** @type {?} */
    ButtonComponent.prototype.large;
    /** @type {?} */
    ButtonComponent.prototype.small;
    /** @type {?} */
    ButtonComponent.prototype.full;
    /** @type {?} */
    ButtonComponent.prototype.block;
    /** @type {?} */
    ButtonComponent.prototype.linkbutton;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.icononly;
    /** @type {?} */
    ButtonComponent.prototype.semImportance;
    /** @type {?} */
    ButtonComponent.prototype.classes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7Ozs7QUFpQnZCLE1BQU07Ozs7OzZCQUs0QixLQUFLOzs7Ozs7SUFHSyxPQUFPLENBQUMsR0FBRztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMxQzs7OztJQWlDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUUsQ0FBQTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsVUFBVTs7UUFDUixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxF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QVk7dUJBQ2xCLEtBQUssU0FBQyxVQUFVO3VCQUNoQixLQUFLLFNBQUMsVUFBVTs0QkFDaEIsS0FBSyxTQUFDLGdCQUFnQjtzQkFDdEIsV0FBVyxTQUFDLE9BQU8sY0FBRyxLQUFLLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bc2VtLWJ1dHRvbl0sIGRpdltzZW0tYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgcHVibGljIHN0eWxlQXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pIG9uQ2xpY2soYnRuKSB7XG4gICAgdGhpcy5zdHlsZUFzQWN0aXZlID0gIXRoaXMuc3R5bGVBc0FjdGl2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xuXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcbiAgcHVibGljIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xuXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3NtYWxsJykgc21hbGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdmdWxsJykgZnVsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdsaW5rYnV0dG9uJykgbGlua2J1dHRvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdpY29ub25seScpIGljb25vbmx5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW1JbXBvcnRhbmNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cblxuICBnZXRDbGFzc2VzKCl7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ1dHRvbicpO1xuICAgIGlmICh0aGlzLmJsb2NrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZ1bGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmljb25vbmx5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2ljb25vbmx5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgncHJpbWFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnbGlua19wcmltYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGlua19wcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxpbmtidXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGluaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XG4gICAgfVxuICAgIHJldHVybiBfY2xhc3NlcztcbiAgfVxuXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xuICAgIGNvbnN0IGJhc2UgPSAnc2VtLWJ1dHRvbi0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKXtcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG59XG4iXX0=