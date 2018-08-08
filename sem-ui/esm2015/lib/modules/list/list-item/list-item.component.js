/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, HostBinding } from '@angular/core';
/** @typedef {?} */
var ThemeImportanceLevel;
export { ThemeImportanceLevel };
export class ListItemComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addClasses(this.getClasses());
        this.styleElementTheme(this.semuiTheme);
    }
    /**
     * @param {?} classes
     * @return {?}
     */
    addClasses(classes) {
        /** @type {?} */
        const spacer = this.classes ? '' : '';
        /** @type {?} */
        const base = ' sem-li--';
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
     * @return {?}
     */
    getClasses() {
        /** @type {?} */
        const _classes = [];
        _classes.push(' sem-li');
        if (this.semImportance === 'default') {
            _classes.push('default');
        }
        if (this.semImportance === 'primary') {
            _classes.push('primary');
        }
        if (this.semImportance === 'secondary') {
            _classes.push('secondary');
        }
        if (this.semImportance === 'tertiary') {
            _classes.push('tertiary');
        }
        if (this.semImportance === 'danger') {
            _classes.push('danger');
        }
        return _classes;
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
ListItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: '[semui-list-item]',
                template: `<ng-content></ng-content>
`
            },] },
];
/** @nocollapse */
ListItemComponent.ctorParameters = () => [];
ListItemComponent.propDecorators = {
    item: [{ type: Input }],
    semuiTheme: [{ type: Input, args: ['sem-theme',] }],
    semImportance: [{ type: Input, args: ['sem-importance',] }],
    classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
    styleAsLightTheme: [{ type: HostBinding, args: ['class.sem-li-light',] }],
    styleAsDarkTheme: [{ type: HostBinding, args: ['class.sem-li-dark',] }]
};
if (false) {
    /** @type {?} */
    ListItemComponent.prototype.item;
    /** @type {?} */
    ListItemComponent.prototype.semuiTheme;
    /** @type {?} */
    ListItemComponent.prototype.semImportance;
    /** @type {?} */
    ListItemComponent.prototype.classes;
    /**
     * Bind to the host "light" CSS class.
     * @type {?}
     */
    ListItemComponent.prototype.styleAsLightTheme;
    /**
     * Bind to the host "dark" CSS class.
     * @type {?}
     */
    ListItemComponent.prototype.styleAsDarkTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2xpc3QvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQVUsdUJBQXVCLEVBQzFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQ3RDLE1BQU0sZUFBZSxDQUFDOzs7O0FBbUJ2QixNQUFNO0lBbUJKO0tBQ0M7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUUsQ0FBQTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDOzs7OztJQUdELFVBQVUsQ0FBQyxPQUFpQjs7UUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1FBQ3RDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ3hDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQzthQUNyQztTQUNGLENBQUMsQ0FBQztLQUNKOzs7O0lBQ0QsVUFBVTs7UUFDUixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUNqQjs7Ozs7SUFDTyxpQkFBaUIsQ0FBQyxLQUFLO1FBQzdCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsS0FBSyxDQUFDO1lBQ1IsUUFBUTtTQUNUOzs7O1lBNUVKLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2dCQUVyQyxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Q0FDWDthQUNBOzs7OzttQkFFRSxLQUFLO3lCQUNMLEtBQUssU0FBQyxXQUFXOzRCQUVqQixLQUFLLFNBQUMsZ0JBQWdCO3NCQUN0QixXQUFXLFNBQUMsT0FBTyxjQUFHLEtBQUssU0FBQyxPQUFPO2dDQUtuQyxXQUFXLFNBQUMsb0JBQW9COytCQU1oQyxXQUFXLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdEl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2xpc3QtdHlwZSc7XG5cbi8qKlxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxuICovXG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9XG4gICAgJ2xpZ2h0J1xuICB8ICdkYXJrJ1xuICB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWxpc3QtaXRlbV0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBMaXN0SXRlbVR5cGU7XG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcbiAgcHVibGljIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZztcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW0tbGktbGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW0tbGktZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG5cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJyBzZW0tbGktLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXRDbGFzc2VzKCkge1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1saScpO1xuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdkZWZhdWx0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGVmYXVsdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3NlY29uZGFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAndGVydGlhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCd0ZXJ0aWFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnZGFuZ2VyJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGFuZ2VyJyk7XG4gICAgfVxuICAgIHJldHVybiBfY2xhc3NlcztcbiAgfVxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKSB7XG4gICAgc3dpdGNoICh0aGVtZSkge1xuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdkYXJrJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cbn1cbiJdfQ==