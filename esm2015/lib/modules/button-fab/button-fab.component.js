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
export class ButtonFabComponent {
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
    }
    /**
     * @param {?} classes
     * @return {?}
     */
    addClasses(classes) {
        /** @type {?} */
        const spacer = this.classes ? '' : '';
        /** @type {?} */
        const base = 'sem-btn-fab--';
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
ButtonFabComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'button[sem-btn-fab]',
                template: `
    <ng-content></ng-content>
  `
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbi1mYWIvYnV0dG9uLWZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFFWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBY3ZCLE1BQU07Ozs7SUEwQkosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFFLENBQUE7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN6Qzs7OztJQUVELFVBQVU7O1FBQ1IsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFB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SyxDQUFDLE1BQU0sQ0FBQztnQkFDWCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixLQUFLLENBQUM7WUFDUixRQUFRO1NBQ1Q7Ozs7WUFqSEosU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Z0JBRXJDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7b0JBTUUsS0FBSyxTQUFDLE9BQU87b0JBQ2IsS0FBSyxTQUFDLE9BQU87cUJBQ2IsS0FBSyxTQUFDLFFBQVE7cUJBQ2QsS0FBSyxTQUFDLFFBQVE7eUJBQ2QsS0FBSyxTQUFDLGFBQWE7OEJBQ25CLEtBQUssU0FBQyxnQkFBZ0I7c0JBQ3RCLFdBQVcsU0FBQyxPQUFPLGNBQUcsS0FBSyxTQUFDLE9BQU87Z0NBS25DLFdBQVcsU0FBQyxhQUFhOytCQU16QixXQUFXLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCB0eXBlIENvcm5lclR5cGUgPSAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgfCB1bmRlZmluZWQ7XG5leHBvcnQgdHlwZSBCdXR0b25JbXBvcnRhbmNlTGV2ZWwgPSAncHJpbWFyeScgfCAnbGluay1idXR0b24nIHwgJ3JvdW5kLWJ1dHRvbicgfCAnY29ybmVyLWJ1dHRvbicgfCB1bmRlZmluZWQ7XG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW0tYnRuLWZhYl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cblxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZztcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmc7XG4gIEBJbnB1dCgnbWVkaXVtJykgbWVkaXVtOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29ybmVyJykgY29ybmVyOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKSBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbXVpaW1wb3J0YW5jZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZztcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuXG4gIGdldENsYXNzZXMoKSB7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ0bi1mYWInKTtcbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZWRpdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2ludmVydGVkJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnaW52ZXJ0ZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdkZWZhdWx0X3NtYWxsJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGVmYXVsdF9zbWFsbCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdub25lJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX25vbmUnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAncmlnaHQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfcmlnaHQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnbGVmdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9sZWZ0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3RvcC1sZWZ0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3RvcC1sZWZ0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3RvcC1yaWdodCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtcmlnaHQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnYm90dG9tLXJpZ2h0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2JvdHRvbS1yaWdodCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdib3R0b20tbGVmdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tbGVmdCcpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idG4tZmFiLS0nO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==