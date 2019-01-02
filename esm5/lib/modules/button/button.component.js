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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtLXVpLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUVMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OzZCQXNCVyxLQUFLOzs7Ozs7SUFHSyxpQ0FBTzs7OztJQUFqRCxVQUFrRCxHQUFHO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzFDOzs7O0lBaUNELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFFLENBQUE7S0FDckM7Ozs7SUFFRCxvQ0FBVTs7O0lBQVY7O1FBQ0UsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQjtRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMvQjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUI7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO0tBQ2pCOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxPQUFpQjtRQUE1QixpQkFVQzs7UUFUQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7UUFDdEMsSUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztZQUM1QixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7YUFDOUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ3JDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7O2dCQXZHRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztvQkFFckMsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsUUFBUSxFQUFFLHFDQUVUO2lCQUNGOzs7Z0NBS0UsV0FBVyxTQUFDLGNBQWM7MEJBSTFCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0NBT3ZDLFdBQVcsU0FBQyxhQUFhO21DQU16QixXQUFXLFNBQUMsWUFBWTs2QkFPeEIsS0FBSyxTQUFDLFdBQVc7d0JBR2pCLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxPQUFPO3VCQUNiLEtBQUssU0FBQyxNQUFNO3dCQUNaLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsVUFBVTsyQkFDaEIsS0FBSyxTQUFDLFVBQVU7Z0NBQ2hCLEtBQUssU0FBQyxnQkFBZ0I7MEJBQ3RCLFdBQVcsU0FBQyxPQUFPLGNBQUcsS0FBSyxTQUFDLE9BQU87OzBCQWhFdEM7O1NBeUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxuICovXG5cbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW3NlbS1idXR0b25dLCBkaXZbc2VtLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBzdHlsZUFzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKSBvbkNsaWNrKGJ0bikge1xuICAgIHRoaXMuc3R5bGVBc0FjdGl2ZSA9ICF0aGlzLnN0eWxlQXNBY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcblxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdibG9jaycpIGJsb2NrOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbGlua2J1dHRvbicpIGxpbmtidXR0b246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnaWNvbm9ubHknKSBpY29ub25seTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gIH1cblxuICBnZXRDbGFzc2VzKCl7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ1dHRvbicpO1xuICAgIGlmICh0aGlzLmJsb2NrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZ1bGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmljb25vbmx5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2ljb25vbmx5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgncHJpbWFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnbGlua19wcmltYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGlua19wcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxpbmtidXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGluaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XG4gICAgfVxuICAgIHJldHVybiBfY2xhc3NlcztcbiAgfVxuXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xuICAgIGNvbnN0IGJhc2UgPSAnc2VtLWJ1dHRvbi0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG5cbn1cbiJdfQ==