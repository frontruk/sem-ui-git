/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
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
        classes.forEach((/**
         * @param {?} _class
         * @param {?} index
         * @return {?}
         */
        (_class, index) => {
            if (index === 0) {
                this.classes += spacer + base + _class;
            }
            else {
                this.classes += ' ' + base + _class;
            }
        }));
    }
    /**
     * @private
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWZhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2J1dHRvbi1mYWIvYnV0dG9uLWZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFFWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBY3ZCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUEwQjdCLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELFVBQVU7O2NBQ0YsUUFBUSxHQUFHLEVBQUU7UUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxFQUFFO1lBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0I7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVyxFQUFFO1lBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUSxFQUFFO1lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssZUFBZSxFQUFFO1lBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGNBQWMsRUFBRTtZQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssYUFBYSxFQUFFO1lBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWlCOztjQUNwQixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFOztjQUMvQixJQUFJLEdBQUcsZUFBZTtRQUM1QixPQUFPLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFHTyxpQkFBaUIsQ0FBQyxLQUFLO1FBQzdCLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDWCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1lBQ1IsUUFBUTtTQUNUO0lBQ0gsQ0FBQzs7O1lBbEhGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2dCQUVyQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7O29CQU1FLEtBQUssU0FBQyxPQUFPO29CQUNiLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxRQUFRO3FCQUNkLEtBQUssU0FBQyxRQUFRO3lCQUNkLEtBQUssU0FBQyxhQUFhOzhCQUNuQixLQUFLLFNBQUMsZ0JBQWdCO3NCQUN0QixXQUFXLFNBQUMsT0FBTyxjQUFHLEtBQUssU0FBQyxPQUFPO2dDQUtuQyxXQUFXLFNBQUMsYUFBYTsrQkFNekIsV0FBVyxTQUFDLFlBQVk7Ozs7Ozs7SUFqQnpCLG1DQUE4Qjs7SUFDOUIsbUNBQThCOztJQUM5QixvQ0FBZ0M7O0lBQ2hDLG9DQUFnQzs7SUFDaEMsd0NBQXVEOztJQUN2RCw2Q0FBaUQ7O0lBQ2pELHFDQUFzRDs7Ozs7SUFLdEQsK0NBQ2tDOzs7OztJQUtsQyw4Q0FDaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5leHBvcnQgdHlwZSBDb3JuZXJUeXBlID0gJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBCdXR0b25JbXBvcnRhbmNlTGV2ZWwgPSAncHJpbWFyeScgfCAnbGluay1idXR0b24nIHwgJ3JvdW5kLWJ1dHRvbicgfCAnY29ybmVyLWJ1dHRvbicgfCB1bmRlZmluZWQ7XHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnV0dG9uW3NlbS1idG4tZmFiXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25GYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cclxuICAgKi9cclxuXHJcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdtZWRpdW0nKSBtZWRpdW06IHN0cmluZztcclxuICBASW5wdXQoJ2Nvcm5lcicpIGNvcm5lcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKSBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcclxuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtdWlpbXBvcnRhbmNlOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcclxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXHJcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NlcygpIHtcclxuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XHJcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ0bi1mYWInKTtcclxuICAgIGlmICh0aGlzLmxhcmdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbGFyZ2UnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNtYWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1lZGl1bSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnaW52ZXJ0ZWQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2ludmVydGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnbWVkaXVtJykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdtZWRpdW0nKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHRfc21hbGwnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHRfc21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ub25lJyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdyaWdodCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3JpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdsZWZ0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfbGVmdCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAndG9wLWxlZnQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtbGVmdCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAndG9wLXJpZ2h0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfdG9wLXJpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdib3R0b20tcmlnaHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tcmlnaHQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2JvdHRvbS1sZWZ0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfYm90dG9tLWxlZnQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idG4tZmFiLS0nO1xyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKXtcclxuICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==