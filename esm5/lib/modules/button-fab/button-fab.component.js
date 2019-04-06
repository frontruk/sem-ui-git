/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
/** @typedef {?} */
var CornerType;
export { CornerType };
/** @typedef {?} */
var ButtonImportanceLevel;
export { ButtonImportanceLevel };
/** @typedef {?} */
var ThemeImportanceLevel;
export { ThemeImportanceLevel };
var ButtonFabComponent = /** @class */ (function () {
    function ButtonFabComponent() {
    }
    /**
     * @return {?}
     */
    ButtonFabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addClasses(this.getClasses());
        this.styleElementTheme(this.semuiTheme);
    };
    /**
     * @return {?}
     */
    ButtonFabComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _classes = [];
        _classes.push(' sem-btn-fab');
        if (this.large !== undefined) {
            _classes.push('large');
        }
        if (this.small !== undefined) {
            _classes.push('small');
        }
        if (this.medium !== undefined) {
            _classes.push('medium');
        }
        if (this.semuiimportance === 'inverted') {
            _classes.push('inverted');
        }
        if (this.semuiimportance === 'primary') {
            _classes.push('primary');
        }
        if (this.semuiimportance === 'secondary') {
            _classes.push('secondary');
        }
        if (this.semuiimportance === 'medium') {
            _classes.push('medium');
        }
        if (this.semuiimportance === 'default_small') {
            _classes.push('default_small');
        }
        if (this.corner === 'none') {
            _classes.push('corner_none');
        }
        if (this.corner === 'right') {
            _classes.push('corner_right');
        }
        if (this.corner === 'left') {
            _classes.push('corner_left');
        }
        if (this.corner === 'top-left') {
            _classes.push('corner_top-left');
        }
        if (this.corner === 'top-right') {
            _classes.push('corner_top-right');
        }
        if (this.corner === 'bottom-right') {
            _classes.push('corner_bottom-right');
        }
        if (this.corner === 'bottom-left') {
            _classes.push('corner_bottom-left');
        }
        return _classes;
    };
    /**
     * @param {?} classes
     * @return {?}
     */
    ButtonFabComponent.prototype.addClasses = /**
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        var _this = this;
        /** @type {?} */
        var spacer = this.classes ? '' : '';
        /** @type {?} */
        var base = 'sem-btn-fab--';
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
    ButtonFabComponent.prototype.styleElementTheme = /**
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
    ButtonFabComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'button[sem-btn-fab]',
                    template: "\n    <ng-content></ng-content>\n  "
                },] },
    ];
    ButtonFabComponent.propDecorators = {
        large: [{ type: Input, args: ['large',] }],
        small: [{ type: Input, args: ['small',] }],
        medium: [{ type: Input, args: ['medium',] }],
        corner: [{ type: Input, args: ['corner',] }],
        semuiTheme: [{ type: Input, args: ['semui-theme',] }],
        semuiimportance: [{ type: Input, args: ['sem-importance',] }],
        classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
        styleAsLightTheme: [{ type: HostBinding, args: ['class.light',] }],
        styleAsDarkTheme: [{ type: HostBinding, args: ['class.dark',] }]
    };
    return ButtonFabComponent;
}());
export { ButtonFabComponent };
if (false) {
    /**
     * Button importance level in terms of primary/secondary/etc.
     * @type {?}
     */
    ButtonFabComponent.prototype.large;
    /** @type {?} */
    ButtonFabComponent.prototype.small;
    /** @type {?} */
    ButtonFabComponent.prototype.medium;
    /** @type {?} */
    ButtonFabComponent.prototype.corner;
    /** @type {?} */
    ButtonFabComponent.prototype.semuiTheme;
    /** @type {?} */
    ButtonFabComponent.prototype.semuiimportance;
    /** @type {?} */
    ButtonFabComponent.prototype.classes;
    /**
     * Bind to the host "light" CSS class.
     * @type {?}
     */
    ButtonFabComponent.prototype.styleAsLightTheme;
    /**
     * Bind to the host "dark" CSS class.
     * @type {?}
     */
    ButtonFabComponent.prototype.styleAsDarkTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbi1mYWIvYnV0dG9uLWZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFFWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lBd0NyQixxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7O1FBQ0UsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsRUFBRTtZQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsRUFBRTtZQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFFBQVEsRUFBRTtZQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLGVBQWUsRUFBRTtZQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxjQUFjLEVBQUU7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGFBQWEsRUFBRTtZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLFFBQVEsQ0FBQztLQUNqQjs7Ozs7SUFFRCx1Q0FBVTs7OztJQUFWLFVBQVcsT0FBaUI7UUFBNUIsaUJBVUM7O1FBVEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQ3RDLElBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFFLEtBQUs7WUFDNUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNmLEtBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7YUFDeEM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQzthQUNyQztTQUNGLENBQUMsQ0FBQztLQUNKOzs7OztJQUdPLDhDQUFpQjs7OztjQUFDLEtBQUs7UUFDN0IsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNYLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLE1BQU07WUFDUixRQUFRO1NBQ1Q7OztnQkFqSEosU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7b0JBRXJDLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7O3dCQU1FLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFRO3lCQUNkLEtBQUssU0FBQyxRQUFROzZCQUNkLEtBQUssU0FBQyxhQUFhO2tDQUNuQixLQUFLLFNBQUMsZ0JBQWdCOzBCQUN0QixXQUFXLFNBQUMsT0FBTyxjQUFHLEtBQUssU0FBQyxPQUFPO29DQUtuQyxXQUFXLFNBQUMsYUFBYTttQ0FNekIsV0FBVyxTQUFDLFlBQVk7OzZCQTVDM0I7O1NBc0JhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCB0eXBlIENvcm5lclR5cGUgPSAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgfCB1bmRlZmluZWQ7XHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkltcG9ydGFuY2VMZXZlbCA9ICdwcmltYXJ5JyB8ICdsaW5rLWJ1dHRvbicgfCAncm91bmQtYnV0dG9uJyB8ICdjb3JuZXItYnV0dG9uJyB8IHVuZGVmaW5lZDtcclxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdidXR0b25bc2VtLWJ0bi1mYWJdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkZhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG5cclxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZztcclxuICBASW5wdXQoJ3NtYWxsJykgc21hbGw6IHN0cmluZztcclxuICBASW5wdXQoJ21lZGl1bScpIG1lZGl1bTogc3RyaW5nO1xyXG4gIEBJbnB1dCgnY29ybmVyJykgY29ybmVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCdzZW11aS10aGVtZScpIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xyXG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW11aWltcG9ydGFuY2U6IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXHJcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc2VzKCkge1xyXG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcclxuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tYnRuLWZhYicpO1xyXG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWVkaXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdpbnZlcnRlZCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnaW52ZXJ0ZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ3NlY29uZGFyeScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdtZWRpdW0nKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnZGVmYXVsdF9zbWFsbCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZGVmYXVsdF9zbWFsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnbm9uZScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX25vbmUnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfcmlnaHQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9sZWZ0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICd0b3AtbGVmdCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3RvcC1sZWZ0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICd0b3AtcmlnaHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtcmlnaHQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2JvdHRvbS1yaWdodCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2JvdHRvbS1yaWdodCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnYm90dG9tLWxlZnQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tbGVmdCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9jbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcclxuICAgIGNvbnN0IGJhc2UgPSAnc2VtLWJ0bi1mYWItLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xyXG4gICAgc3dpdGNoICh0aGVtZSkge1xyXG4gICAgICBjYXNlICgnbGlnaHQnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2RhcmsnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19