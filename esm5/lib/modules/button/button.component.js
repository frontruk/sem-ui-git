/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, ViewEncapsulation, } from '@angular/core';
/** @typedef {?} */
var ThemeImportanceLevel;
export { ThemeImportanceLevel };
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        /**
         * Bind to the host "dark" CSS class.
         */
        this.styleAsActive = false;
    }
    /**
     * @param {?} btn
     * @return {?}
     */
    ButtonComponent.prototype.onClick = /**
     * @param {?} btn
     * @return {?}
     */
    function (btn) {
        this.styleAsActive = !this.styleAsActive;
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addClasses(this.getClasses());
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _classes = [];
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
    };
    /**
     * @param {?} classes
     * @return {?}
     */
    ButtonComponent.prototype.addClasses = /**
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        var _this = this;
        /** @type {?} */
        var spacer = this.classes ? '' : '';
        /** @type {?} */
        var base = 'sem-button--';
        classes.forEach(function (_class, index) {
            if (index === 0) {
                _this.classes += ' ' + spacer + base + _class;
            }
            else {
                _this.classes += ' ' + base + _class;
            }
        });
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'button[sem-button], div[sem-button]',
                    template: "\n    <ng-content></ng-content>\n  "
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
    return ButtonComponent;
}());
export { ButtonComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLXVpLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUVMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OzZCQXNCVyxLQUFLOzs7Ozs7SUFHSyxpQ0FBTzs7OztJQUFqRCxVQUFrRCxHQUFHO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzFDOzs7O0lBaUNELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFFLENBQUE7S0FDckM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7O1FBQ0UsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLGNBQWMsRUFBRTtZQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsRUFBRTtZQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxRQUFRLENBQUM7S0FDakI7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLE9BQWlCO1FBQTVCLGlCQVVDOztRQVRDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztRQUN0QyxJQUFNLElBQUksR0FBRyxjQUFjLENBQUM7UUFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1lBQzVCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZixLQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ3JDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7O2dCQXZHRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztvQkFFckMsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOzs7Z0NBS0UsV0FBVyxTQUFDLGNBQWM7MEJBSTFCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0NBT3ZDLFdBQVcsU0FBQyxhQUFhO21DQU16QixXQUFXLFNBQUMsWUFBWTs2QkFPeEIsS0FBSyxTQUFDLFdBQVc7d0JBR2pCLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxPQUFPO3VCQUNiLEtBQUssU0FBQyxNQUFNO3dCQUNaLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsVUFBVTsyQkFDaEIsS0FBSyxTQUFDLFVBQVU7Z0NBQ2hCLEtBQUssU0FBQyxnQkFBZ0I7MEJBQ3RCLFdBQVcsU0FBQyxPQUFPLGNBQUcsS0FBSyxTQUFDLE9BQU87OzBCQWhFdEM7O1NBeUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFBvc3NpYmxlIGJ1dHRvbiBpbXBvcnRhbmNlIGxldmVscy5cclxuICovXHJcblxyXG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW0tYnV0dG9uXSwgZGl2W3NlbS1idXR0b25dJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIHB1YmxpYyBzdHlsZUFzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKSBvbkNsaWNrKGJ0bikge1xyXG4gICAgdGhpcy5zdHlsZUFzQWN0aXZlID0gIXRoaXMuc3R5bGVBc0FjdGl2ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcclxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXHJcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW0tdGhlbWUnKVxyXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcclxuXHJcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdmdWxsJykgZnVsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnYmxvY2snKSBibG9jazogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnbGlua2J1dHRvbicpIGxpbmtidXR0b246IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2ljb25vbmx5JykgaWNvbm9ubHk6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc2VzKCl7XHJcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xyXG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idXR0b24nKTtcclxuICAgIGlmICh0aGlzLmJsb2NrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnYmxvY2snKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZ1bGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdmdWxsJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xhcmdlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaWNvbm9ubHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdpY29ub25seScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdsaW5rX3ByaW1hcnknKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xpbmtfcHJpbWFyeScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGlua2J1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xpbmsnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9jbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcclxuICAgIGNvbnN0IGJhc2UgPSAnc2VtLWJ1dHRvbi0tJztcclxuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgc3BhY2VyICsgYmFzZSArIF9jbGFzcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=