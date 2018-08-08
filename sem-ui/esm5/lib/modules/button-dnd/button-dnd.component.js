/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
/** @typedef {?} */
var ThemeImportanceLevel;
export { ThemeImportanceLevel };
var SemUiButtonDndComponent = /** @class */ (function () {
    function SemUiButtonDndComponent() {
        /**
         * Bind to the host "dark" CSS class.
         */
        this.styleAsActive = false;
    }
    /**
     * @return {?}
     */
    SemUiButtonDndComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addClasses(this.getClasses());
        this.styleElementTheme(this.semuiTheme);
    };
    /**
     * @return {?}
     */
    SemUiButtonDndComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _classes = [];
        _classes.push(' sem-button-dnd ');
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
        if (this.semImportance === 'primary') {
            _classes.push('primary');
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
    SemUiButtonDndComponent.prototype.addClasses = /**
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        var _this = this;
        /** @type {?} */
        var spacer = this.classes ? '' : '';
        /** @type {?} */
        var base = ' sem-button-dnd--';
        classes.forEach(function (_class, index) {
            if (index === 0) {
                _this.classes += spacer + base + _class;
            }
            else {
                _this.classes += ' ' + base + _class;
            }
        });
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    SemUiButtonDndComponent.prototype.styleElementTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        switch (theme) {
            case ('light'):
                this.styleAsLightTheme = true;
                break;
            case ('dark'):
                this.styleAsDarkTheme = true;
                break;
            default:
        }
    };
    SemUiButtonDndComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'button[semui-button-dnd], div[semui-button-dnd]',
                    template: "<ng-content></ng-content>\n",
                    styles: [".sem-button-dnd{height:70px;width:70px;margin:5px}"]
                },] },
    ];
    /** @nocollapse */
    SemUiButtonDndComponent.ctorParameters = function () { return []; };
    SemUiButtonDndComponent.propDecorators = {
        styleAsActive: [{ type: HostBinding, args: ['class.active',] }],
        large: [{ type: Input, args: ['large',] }],
        small: [{ type: Input, args: ['small',] }],
        full: [{ type: Input, args: ['full',] }],
        block: [{ type: Input, args: ['block',] }],
        disabled: [{ type: Input, args: ['disabled',] }],
        semuiTheme: [{ type: Input, args: ['sem-theme',] }],
        semImportance: [{ type: Input, args: ['sem-importance',] }],
        classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
        styleAsLightTheme: [{ type: HostBinding, args: ['class.light',] }],
        styleAsDarkTheme: [{ type: HostBinding, args: ['class.dark',] }]
    };
    return SemUiButtonDndComponent;
}());
export { SemUiButtonDndComponent };
if (false) {
    /**
     * Bind to the host "dark" CSS class.
     * @type {?}
     */
    SemUiButtonDndComponent.prototype.styleAsActive;
    /** @type {?} */
    SemUiButtonDndComponent.prototype.large;
    /** @type {?} */
    SemUiButtonDndComponent.prototype.small;
    /** @type {?} */
    SemUiButtonDndComponent.prototype.full;
    /** @type {?} */
    SemUiButtonDndComponent.prototype.block;
    /** @type {?} */
    SemUiButtonDndComponent.prototype.disabled;
    /**
     * Button importance level in terms of primary/secondary/etc.
     * @type {?}
     */
    SemUiButtonDndComponent.prototype.semuiTheme;
    /** @type {?} */
    SemUiButtonDndComponent.prototype.semImportance;
    /** @type {?} */
    SemUiButtonDndComponent.prototype.classes;
    /**
     * Bind to the host "light" CSS class.
     * @type {?}
     */
    SemUiButtonDndComponent.prototype.styleAsLightTheme;
    /**
     * Bind to the host "dark" CSS class.
     * @type {?}
     */
    SemUiButtonDndComponent.prototype.styleAsDarkTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWRuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9idXR0b24tZG5kL2J1dHRvbi1kbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUVMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFvRHJCOzs7OzZCQTdCZ0MsS0FBSztLQTZCcEI7Ozs7SUFFakIsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUUsQ0FBQTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsNENBQVU7OztJQUFWOztRQUNFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUI7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO0tBQ2pCOzs7OztJQUVELDRDQUFVOzs7O0lBQVYsVUFBVyxPQUFpQjtRQUE1QixpQkFVQzs7UUFUQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7UUFDdEMsSUFBTSxJQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ3hDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQzthQUNyQztTQUNGLENBQUMsQ0FBQztLQUNKOzs7OztJQUdPLG1EQUFpQjs7OztjQUFDLEtBQUs7UUFDN0IsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDOUIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDWCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixLQUFLLENBQUM7WUFDUixRQUFRO1NBQ1Q7OztnQkFuR0osU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7b0JBRXJDLFFBQVEsRUFBRSxpREFBaUQ7b0JBQzNELFFBQVEsRUFBRSw2QkFDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxvREFBb0QsQ0FBQztpQkFDL0Q7Ozs7O2dDQUtFLFdBQVcsU0FBQyxjQUFjO3dCQUcxQixLQUFLLFNBQUMsT0FBTzt3QkFDYixLQUFLLFNBQUMsT0FBTzt1QkFDYixLQUFLLFNBQUMsTUFBTTt3QkFDWixLQUFLLFNBQUMsT0FBTzsyQkFDYixLQUFLLFNBQUMsVUFBVTs2QkFLaEIsS0FBSyxTQUFDLFdBQVc7Z0NBR2pCLEtBQUssU0FBQyxnQkFBZ0I7MEJBQ3RCLFdBQVcsU0FBQyxPQUFPLGNBQUcsS0FBSyxTQUFDLE9BQU87b0NBS25DLFdBQVcsU0FBQyxhQUFhO21DQU16QixXQUFXLFNBQUMsWUFBWTs7a0NBeEQzQjs7U0F5QmEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW11aS1idXR0b24tZG5kXSwgZGl2W3NlbXVpLWJ1dHRvbi1kbmRdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgLnNlbS1idXR0b24tZG5ke2hlaWdodDo3MHB4O3dpZHRoOjcwcHg7bWFyZ2luOjVweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUJ1dHRvbkRuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgcHVibGljIHN0eWxlQXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdibG9jaycpIGJsb2NrOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnZGlzYWJsZWQnKSBkaXNhYmxlZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcblxuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuXG4gIGdldENsYXNzZXMoKXtcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tYnV0dG9uLWRuZCAnKTtcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdibG9jaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Z1bGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGFyZ2UnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWJ1dHRvbi1kbmQtLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSkge1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iXX0=