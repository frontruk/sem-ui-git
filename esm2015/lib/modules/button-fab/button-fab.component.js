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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbi1mYWIvYnV0dG9uLWZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFFWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBY3ZCLE1BQU07Ozs7SUEwQkosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFFLENBQUE7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN6Qzs7OztJQUVELFVBQVU7O1FBQ1IsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFVBQVUsRUFBRTtZQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLFNBQVMsRUFBRTtZQUN0QyxRQUFRLENBQUMsSUFBSSxD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QUFDLE9BQU8sY0FBRyxLQUFLLFNBQUMsT0FBTztnQ0FLbkMsV0FBVyxTQUFDLGFBQWE7K0JBTXpCLFdBQVcsU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZXhwb3J0IHR5cGUgQ29ybmVyVHlwZSA9ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JyB8IHVuZGVmaW5lZDtcclxuZXhwb3J0IHR5cGUgQnV0dG9uSW1wb3J0YW5jZUxldmVsID0gJ3ByaW1hcnknIHwgJ2xpbmstYnV0dG9uJyB8ICdyb3VuZC1idXR0b24nIHwgJ2Nvcm5lci1idXR0b24nIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW0tYnRuLWZhYl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uRmFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcblxyXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgnbWVkaXVtJykgbWVkaXVtOiBzdHJpbmc7XHJcbiAgQElucHV0KCdjb3JuZXInKSBjb3JuZXI6IHN0cmluZztcclxuICBASW5wdXQoJ3NlbXVpLXRoZW1lJykgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbXVpaW1wb3J0YW5jZTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzZXMoKSB7XHJcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xyXG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idG4tZmFiJyk7XHJcbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xhcmdlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tZWRpdW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdtZWRpdW0nKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2ludmVydGVkJykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdpbnZlcnRlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgncHJpbWFyeScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ21lZGl1bScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdkZWZhdWx0X3NtYWxsJykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkZWZhdWx0X3NtYWxsJyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdub25lJykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfbm9uZScpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAncmlnaHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9yaWdodCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnbGVmdCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2xlZnQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3RvcC1sZWZ0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfdG9wLWxlZnQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3RvcC1yaWdodCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3RvcC1yaWdodCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnYm90dG9tLXJpZ2h0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfYm90dG9tLXJpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdib3R0b20tbGVmdCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2JvdHRvbS1sZWZ0Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX2NsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xyXG4gICAgY29uc3QgYmFzZSA9ICdzZW0tYnRuLWZhYi0tJztcclxuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSl7XHJcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XHJcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnZGFyaycpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=