import { Injectable, Component, Input, ContentChild, ChangeDetectionStrategy, TemplateRef, HostBinding, ViewEncapsulation, NgModule, Directive, HostListener, Output, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, ViewChild, ContentChildren, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiService {
    constructor() { }
}
SemUiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
SemUiService.ctorParameters = () => [];
/** @nocollapse */ SemUiService.ngInjectableDef = defineInjectable({ factory: function SemUiService_Factory() { return new SemUiService(); }, token: SemUiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SemUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sem-ui',
                template: `
    <p>
      sem-ui works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
SemUiComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiButtonDndComponent {
    constructor() {
        /**
         * Bind to the host "dark" CSS class.
         */
        this.styleAsActive = false;
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
        if (this.medium !== undefined) {
            _classes.push('medium');
        }
        if (this.small !== undefined) {
            _classes.push('small');
        }
        if (this.xsmall !== undefined) {
            _classes.push('xsmall');
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
    }
    /**
     * @param {?} classes
     * @return {?}
     */
    addClasses(classes) {
        /** @type {?} */
        const spacer = this.classes ? '' : '';
        /** @type {?} */
        const base = ' sem-button-dnd--';
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
SemUiButtonDndComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'button[semui-button-dnd], div[semui-button-dnd]',
                template: `<ng-content></ng-content>
`
            },] },
];
/** @nocollapse */
SemUiButtonDndComponent.ctorParameters = () => [];
SemUiButtonDndComponent.propDecorators = {
    styleAsActive: [{ type: HostBinding, args: ['class.active',] }],
    large: [{ type: Input, args: ['large',] }],
    xsmall: [{ type: Input, args: ['xsmall',] }],
    small: [{ type: Input, args: ['small',] }],
    full: [{ type: Input, args: ['full',] }],
    block: [{ type: Input, args: ['block',] }],
    disabled: [{ type: Input, args: ['disabled',] }],
    medium: [{ type: Input, args: ['medium',] }],
    semuiTheme: [{ type: Input, args: ['sem-theme',] }],
    semImportance: [{ type: Input, args: ['sem-importance',] }],
    classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
    styleAsLightTheme: [{ type: HostBinding, args: ['class.light',] }],
    styleAsDarkTheme: [{ type: HostBinding, args: ['class.dark',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiButtonDndModule {
}
SemUiButtonDndModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SemUiButtonDndComponent,
                ],
                exports: [
                    SemUiButtonDndComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
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
        classes.forEach((/**
         * @param {?} _class
         * @param {?} index
         * @return {?}
         */
        (_class, index) => {
            if (index === 0) {
                this.classes += ' ' + spacer + base + _class;
            }
            else {
                this.classes += ' ' + base + _class;
            }
        }));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiButtonModule {
}
SemUiButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    ButtonComponent,
                ],
                exports: [
                    ButtonComponent,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'semui-card',
                template: `
    <p>
      card works!
    </p>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
CardComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiCardModule {
}
SemUiCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [CardComponent],
                exports: [CardComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListItemComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addClasses(this.getClasses());
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
        classes.forEach((/**
         * @param {?} _class
         * @param {?} index
         * @return {?}
         */
        (_class, index) => {
            if (index === 0) {
                this.classes += ' ' + spacer + base + _class;
            }
            else {
                this.classes += ' ' + base + _class;
            }
        }));
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
        if (this.semImportance === 'inverted') {
            _classes.push('inverted');
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
ListItemComponent.propDecorators = {
    item: [{ type: Input }],
    semImportance: [{ type: Input, args: ['sem-importance',] }],
    classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
    semuiTheme: [{ type: Input, args: ['sem-theme',] }],
    styleAsLightTheme: [{ type: HostBinding, args: ['class.sem-li-light',] }],
    styleAsDarkTheme: [{ type: HostBinding, args: ['class.sem-li-dark',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListComponent {
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
        const base = ' sem-ul--';
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
     * @return {?}
     */
    getClasses() {
        /** @type {?} */
        const _classes = [];
        _classes.push(' sem-ul');
        return _classes;
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
ListComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: '[semui-list]',
                template: `<ng-content select="[list-item]"></ng-content>
`
            },] },
];
/** @nocollapse */
ListComponent.ctorParameters = () => [];
ListComponent.propDecorators = {
    semuiTheme: [{ type: Input, args: ['sem-theme',] }],
    classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
    styleAsLightTheme: [{ type: HostBinding, args: ['class.sem-ul-light',] }],
    styleAsDarkTheme: [{ type: HostBinding, args: ['class.sem-ul-dark',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiListModule {
}
SemUiListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ListItemComponent, ListComponent],
                exports: [ListItemComponent, ListComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LabelComponent {
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
        this.setTheme(this.semuiTheme);
    }
    /**
     * Set component to be on dark or light.
     * @private
     * @param {?} type
     * @return {?}
     */
    setTheme(type) {
        switch (type) {
            case ('light'):
                this.styleAsDark = true;
                break;
            case ('dark'):
                this.styleAsLight = true;
                break;
            default:
        }
    }
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
     * @param {?} labelType
     * @return {?}
     */
    styleElementByImportanceLevel(labelType) {
        switch (labelType) {
            case ('small'):
                this.styleAsSmall = true;
                break;
            case ('medium'):
                this.styleAsMedium = true;
                break;
            case ('large'):
                this.styleAsLarge = true;
                break;
            case ('form-label'):
                this.styleAsFormLabel = true;
            default:
        }
    }
}
LabelComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'label[semui-label]',
                template: `
    <ng-content></ng-content>
  `
            },] },
];
LabelComponent.propDecorators = {
    addBaseCssClass: [{ type: HostBinding, args: ['class.semui-label',] }],
    styleAsSmall: [{ type: HostBinding, args: ['class.small',] }],
    styleAsMedium: [{ type: HostBinding, args: ['class.medium',] }],
    styleAsLarge: [{ type: HostBinding, args: ['class.large',] }],
    styleAsFormLabel: [{ type: HostBinding, args: ['class.form-label',] }],
    semuiImportance: [{ type: Input, args: ['semui-importance',] }],
    styleAsDark: [{ type: HostBinding, args: ['class.dark',] }],
    styleAsLight: [{ type: HostBinding, args: ['class.light',] }],
    semuiTheme: [{ type: Input, args: ['semui-theme',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiLabelModule {
}
SemUiLabelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [LabelComponent],
                exports: [LabelComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormSelectComponent {
    constructor() { }
}
FormSelectComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'select[semui-form-select]',
                template: `
      <ng-content></ng-content>
  `,
            },] },
];
/** @nocollapse */
FormSelectComponent.ctorParameters = () => [];
FormSelectComponent.propDecorators = {
    addBaseCssClass: [{ type: HostBinding, args: ['class.semui-select',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormOptionsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FormOptionsComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'option[semui-form-options]',
                template: `<ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
FormOptionsComponent.ctorParameters = () => [];
FormOptionsComponent.propDecorators = {
    addBaseCssClass: [{ type: HostBinding, args: ['class.semui-option',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiFormSelectModule {
}
SemUiFormSelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [FormSelectComponent, FormOptionsComponent],
                exports: [FormSelectComponent, FormOptionsComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThumbnailLargeComponent {
    constructor() {
        /**
         * Css base class.
         */
        this.addBaseButtonCssClass = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ThumbnailLargeComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'figure[semui-thumbnail]',
                template: `<ng-content select="[card-image]"></ng-content>

<ng-content select="[sem-section-footer]"></ng-content>



`,
            },] },
];
/** @nocollapse */
ThumbnailLargeComponent.ctorParameters = () => [];
ThumbnailLargeComponent.propDecorators = {
    addBaseButtonCssClass: [{ type: HostBinding, args: ['class.semui-thumbnail',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiThumbnailLargeModule {
}
SemUiThumbnailLargeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ThumbnailLargeComponent],
                exports: [ThumbnailLargeComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconsListComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
IconsListComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'semui-icons-list',
                template: ``,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
IconsListComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiIconsListModule {
}
SemUiIconsListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [IconsListComponent],
                exports: [IconsListComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RainDropComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RainDropComponent.decorators = [
    { type: Component, args: [{
                selector: 'semui-rain-drop',
                template: ``,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
RainDropComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiRainDropModule {
}
SemUiRainDropModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [RainDropComponent],
                exports: [RainDropComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SectionHeaderComponent {
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
     * @private
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
SectionHeaderComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'div[semui-section-header]',
                template: `
    <ng-content></ng-content>
  `
            },] },
];
/** @nocollapse */
SectionHeaderComponent.ctorParameters = () => [];
SectionHeaderComponent.propDecorators = {
    addBaseCssClass: [{ type: HostBinding, args: ['class.semui-header-section',] }],
    styleAsSmall: [{ type: HostBinding, args: ['class.small',] }],
    semuiImportance: [{ type: Input, args: ['semui-importance',] }],
    styleAsLarge: [{ type: HostBinding, args: ['class.large',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiSectionHeaderModule {
}
SemUiSectionHeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SectionHeaderComponent],
                exports: [SectionHeaderComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SectionFooterComponent {
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
     * @private
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiSectionFooterModule {
}
SemUiSectionFooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SectionFooterComponent],
                exports: [SectionFooterComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.styleElementByType();
    }
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
     * @return {?}
     */
    styleElementByType() {
        if ('form-input' === this.semuiType) {
            this.semuiTypeFormInput = true;
        }
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'input[semui-input]',
                template: `<ng-content></ng-content>`
            },] },
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    addFormBaseClass: [{ type: HostBinding, args: ['class.semui-form-input',] }],
    semuiType: [{ type: Input, args: ['semui-type',] }],
    semuiTypeFormInput: [{ type: HostBinding, args: ['class.semui-form-input',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiInputModule {
}
SemUiInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [InputComponent],
                exports: [InputComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { debounceTime } from 'rxjs/internal/operators';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/do';
class OverlayDialogComponent {
    /**
     * @param {?} overlay
     * @param {?} changeDetectorRef
     */
    constructor(overlay, changeDetectorRef) {
        this.overlay = overlay;
        this.changeDetectorRef = changeDetectorRef;
        this.isOpened = false;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.destroy$ = new Subject();
    }
    //
    // overlayOffsetX;
    // OverlayHeight;
    // scrollStrategy;
    // positions;
    // backdropClass;
    /**
     * @return {?}
     */
    ngOnInit() {
        //   this.backdropClass = 'cdkOverlayFullHeight'
        //   this.overlayOffsetX = 0;
        //   this.OverlayHeight = '100%';
        //   this.positions  = [
        //     new ConnectionPositionPair(
        //       {originY: 'center', originX: 'end'},
        //       {overlayX: 'start', overlayY: 'top'}
        //     )
        //   ];
        //   this.scrollStrategy = this.overlay.scrollStrategies.block();
        //   this.backdropClass = 'cdkOverlayFullHeight'
        //   this.overlayOffsetX = 0;
        //   this.OverlayHeight = '100%';
        //   this.positions  = [
        //     new ConnectionPositionPair(
        //       {originY: 'center', originX: 'end'},
        //       {overlayX: 'start', overlayY: 'top'}
        //     )
        //   ];
        //   this.scrollStrategy = this.overlay.scrollStrategies.block();
        /** @type {?} */
        const overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        const close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter((/**
         * @return {?}
         */
        () => this.isOpened)), filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            return this.isClickedOutside(overlayOriginEl, this.dialog, event);
        })), tap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.changeState(false);
        })));
        close$.subscribe();
    }
    /**
     * @return {?}
     */
    connectedOverlayDetach() {
        this.changeState(false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
    }
    /**
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    changeState(isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    isClickedOutside(overlayOriginEl, dialog, event) {
        return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
    }
}
OverlayDialogComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'semui-overlay-dialog',
                template: ` <ng-template
    cdkConnectedOverlay
    [cdkConnectedOverlayOrigin]="overlayOrigin"
    [cdkConnectedOverlayOpen]="isOpened"
    [cdkConnectedOverlayMinWidth]="overlayWidth"
    (detach)="connectedOverlayDetach()"
  >
    <div #dialog role="dialog" aria-label="Dialog" class="dialog-container">
      <ng-content select="[overlay-title]"></ng-content>
      <ng-content></ng-content>
    </div>
  </ng-template>
`
            },] },
];
/** @nocollapse */
OverlayDialogComponent.ctorParameters = () => [
    { type: Overlay },
    { type: ChangeDetectorRef }
];
OverlayDialogComponent.propDecorators = {
    overlayOrigin: [{ type: Input }],
    isOpened: [{ type: Input }],
    overlayWidth: [{ type: Input }],
    close: [{ type: Output }],
    open: [{ type: Output }],
    dialog: [{ type: ViewChild, args: ['dialog',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const modules = [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
];
class MaterialManifestModule {
}
MaterialManifestModule.decorators = [
    { type: NgModule, args: [{
                // imports: [
                //   CommonModule,
                //   ...modules
                // ],
                // declarations: [],
                exports: [...modules]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiOverlayDialogModule {
}
SemUiOverlayDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MaterialManifestModule,
                ],
                declarations: [OverlayDialogComponent],
                exports: [OverlayDialogComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IfTabActiveDirective {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
IfTabActiveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxIfTabActive]'
            },] },
];
/** @nocollapse */
IfTabActiveDirective.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
class TabComponent {
    constructor() {
        /**
         * Css base class.
         */
        /**
         * Css base class.
         */
        this.addBaseButtonCssClass = true;
        this.title = '';
        this.active = false;
        this.disabled = false;
        this.activeClass = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'div[semui-tab]',
                template: `
    <div *ngIf="template; then template_container else content_container"></div>
    <ng-template #template_container>
      <div *ngIf="active">
        <ng-container [ngTemplateOutlet]="template.templateRef"></ng-container>
      </div>
    </ng-template>
    <ng-template #content_container>
      <div [hidden]="!active">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                host: {
                    class: 'semui-tab'
                }
            },] },
];
TabComponent.propDecorators = {
    addBaseButtonCssClass: [{ type: HostBinding, args: ['class.default',] }],
    title: [{ type: Input }],
    active: [{ type: Input }],
    disabled: [{ type: Input }],
    template: [{ type: ContentChild, args: [IfTabActiveDirective,] }],
    activeClass: [{ type: HostBinding, args: ['class.active',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsComponent {
    constructor() {
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get index() {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        return tabs.findIndex((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.active));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        /** @type {?} */
        const actives = this.tabs.filter((/**
         * @param {?} t
         * @return {?}
         */
        t => t.active));
        if (actives.length > 1) {
            console.error(`Multiple active tabs set 'active'`);
        }
        else if (!actives.length && tabs.length) {
            tabs[0].active = true;
        }
    }
    /**
     * @param {?} activeTab
     * @return {?}
     */
    tabClicked(activeTab) {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.active = false));
        activeTab.active = true;
        this.select.emit(activeTab);
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    move(offset) {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        for (let i = this.index + offset; i < tabs.length && i >= 0; i += offset) {
            /** @type {?} */
            const tab = tabs[i];
            if (tab && !tab.disabled) {
                this.tabClicked(tabs[i]);
                return;
            }
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.move(1);
    }
    /**
     * @return {?}
     */
    prev() {
        this.move(-1);
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'div[semui-tabs]',
                template: `<section
  [class.tabs-vertical]="vertical"
  [class.tabs-horizontal]="!vertical"
  [class.swipe]="swipe"
>

  <ng-container *ngIf="showTabs && vertical">
    <ng-content select="[tabs-header]"></ng-content>

    <ul
      class="semui-tabs--navlist_horizontal"
      [class.tabs-vertical]="vertical">
      <li
        *ngFor="let tab of tabs"
        class="semui-tab"
        [class.disabled]="tab.disabled"
        [class.active]="tab.active">
        <button
          class="tabs--button"
          (click)="tabClicked(tab)"
          [disabled]="tab.disabled">
          {{tab.title}}
        </button>
      </li>
    </ul>

  </ng-container>

  <ul

    *ngIf="!vertical && showTabs"
    semui-list
    class="semui-tabs-list list-reset"
    [class.tabs-horizontal]="!vertical">
    <li
      *ngFor="let tab of tabs"
      semui-list-item
      list-item
      sem-importance="tertiary"
      class="corner_top "
      [class.disabled]="tab.disabled"
      [class.active]="tab.active">
      <button
        (click)="tabClicked(tab)"
        [disabled]="tab.disabled">
        {{tab.title}}
      </button>
    </li>
  </ul>

  <div class="tab-nav">
    <ng-content select="[tab-nav]"></ng-content>
  </div>
  <div class="semui-tab-content">
    <ng-content></ng-content>
  </div>
</section>
`,
                host: {
                    class: 'semui-tabs'
                },
                encapsulation: ViewEncapsulation.None
            },] },
];
TabsComponent.propDecorators = {
    showTabs: [{ type: Input }],
    vertical: [{ type: Input }],
    swipe: [{ type: Input }],
    select: [{ type: Output }],
    tabs: [{ type: ContentChildren, args: [TabComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiTabsModule {
}
SemUiTabsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TabComponent,
                    TabsComponent, IfTabActiveDirective
                ],
                exports: [TabComponent, TabsComponent, IfTabActiveDirective],
                imports: [
                    CommonModule,
                    SemUiListModule,
                    SemUiSectionHeaderModule
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormFieldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FormFieldComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                // tslint:disable-next-line:component-selector
                selector: 'div[semui-form-field]',
                styles: [`:host{display:block;padding:15px}`],
                template: `<ng-content select="[field-label]"></ng-content>
<ng-content select="[field-prefix]"></ng-content>
<ng-content select="[field-input]"></ng-content>
`
            },] },
];
/** @nocollapse */
FormFieldComponent.ctorParameters = () => [];
FormFieldComponent.propDecorators = {
    addBaseClass: [{ type: HostBinding, args: ['class.semui-form-field',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiFormFieldModule {
}
SemUiFormFieldModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [FormFieldComponent],
                exports: [FormFieldComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonFabComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiButtonFabModule {
}
SemUiButtonFabModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ButtonFabComponent],
                exports: [ButtonFabComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OverlayVerticalComponent {
    /**
     * @param {?} overlay
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(overlay, changeDetectorRef, renderer) {
        this.overlay = overlay;
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.isOpened = false;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.destroy$ = new Subject();
        this.contentLoaded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.backdropClass = 'cdkOverlayFullHeight';
        this.overlayOffsetX = 0;
        this.OverlayHeight = '100%';
        this.positions = [
            new ConnectionPositionPair({ originY: 'center', originX: 'end' }, { overlayX: 'start', overlayY: 'top' })
        ];
        this.scrollStrategy = this.overlay.scrollStrategies.block();
        /** @type {?} */
        const overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        const close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter((/**
         * @return {?}
         */
        () => this.isOpened)), filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.dialog.nativeElement.parentNode.style.top = '0';
            return this.isClickedOutside(overlayOriginEl, this.dialog, event);
        })), tap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.changeState(false);
        })));
        close$.subscribe();
    }
    /**
     * @return {?}
     */
    connectedOverlayDetach() {
        this.changeState(false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.isOpened.currentValue) {
            this.contentLoaded = true;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    rePosition(item) {
        this.dialog.nativeElement.parentNode.style.top = '0';
    }
    /**
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    changeState(isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    isClickedOutside(overlayOriginEl, dialog, event) {
        return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
    }
}
OverlayVerticalComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'semui-overlay-vertical',
                template: `<ng-template
  cdkConnectedOverlay
  [cdkConnectedOverlayOrigin]="overlayOrigin"
  [cdkConnectedOverlayOpen]="isOpened"
  [cdkConnectedOverlayPositions]="positions"
  [cdkConnectedOverlayScrollStrategy]="scrollStrategy"
  [cdkConnectedOverlayHeight]="OverlayHeight"
  [cdkConnectedOverlayWidth]="320"
  [cdkConnectedOverlayMinWidth]="300"
  (detach)="connectedOverlayDetach()"
  (positionChange)="rePosition($event)"
>
  <div #dialog role="dialog" aria-label="Dialog" class="dialog-container-full">
    <ng-container *ngIf="contentLoaded">
        <ng-content select="[overlay-title]"></ng-content>
        <ng-content></ng-content>
    </ng-container>
  </div>
</ng-template>
`
            },] },
];
/** @nocollapse */
OverlayVerticalComponent.ctorParameters = () => [
    { type: Overlay },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
OverlayVerticalComponent.propDecorators = {
    overlayOrigin: [{ type: Input }],
    isOpened: [{ type: Input }],
    close: [{ type: Output }],
    open: [{ type: Output }],
    dialog: [{ type: ViewChild, args: ['dialog',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiOverlayVerticalModule {
}
SemUiOverlayVerticalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MaterialManifestModule
                ],
                declarations: [OverlayVerticalComponent],
                exports: [OverlayVerticalComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiFontSizesComponent {
    constructor() {
        this.dataSource = null;
        this.selectedItem = {};
        this.openedParent = null;
        this.levels = [
            { num: 0, name: '1' },
            { num: 1, name: '2' }
        ];
        this.selectedLevel = this.levels[0];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log('changes are enabled');
        this.activeid = changes.activeid.currentValue;
    }
}
SemUiFontSizesComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[semui-font-sizes]',
                template: `<div class="sem-ul-icon-list sem-ul">
  <ng-content></ng-content>
</div>



<ul class="bullet-inlinelist p4">
  <li class="active">
    <div class="select">
      <select type="number" [(ngModel)]="selectedLevel">
        <option *ngFor="let level of levels" [ngValue]="level">{{level.name}}</option>
      </select>
    </div>
  </li>
  <li>
    <div class="select">
      <select type="number" [(ngModel)]="selectedLevel">
        <option *ngFor="let level of levels" [ngValue]="level">{{level.name}}</option>
      </select>
    </div>
  </li>
  <li>
    <div class="select">
      <select type="number" [(ngModel)]="selectedLevel">
        <option *ngFor="let level of levels" [ngValue]="level">{{level.name}}</option>
      </select>
    </div>
  </li>
  <li>
    <div class="select">
      <select type="number" [(ngModel)]="selectedLevel">
        <option *ngFor="let level of levels" [ngValue]="level">{{level.name}}</option>
      </select>
    </div>
  </li>
</ul>
`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SemUiFontSizesComponent.ctorParameters = () => [];
SemUiFontSizesComponent.propDecorators = {
    activeid: [{ type: Input }],
    template: [{ type: ContentChild, args: [TemplateRef,] }],
    dataSource: [{ type: Input }],
    selectedItem: [{ type: Input }],
    openedParent: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiFontSizesItemComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} parent
     */
    constructor(element, renderer, parent) {
        this.element = element;
        this.renderer = renderer;
        this.parent = parent;
        this.itemRef = {};
        this.indexRef = -1;
        this.selectedIndex = -1;
        this.activeidChange = new EventEmitter();
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setSelectedItemIndex();
    }
    /**
     * @return {?}
     */
    setSelectedItemIndex() {
        console.log('mus be call here');
        if (this.selectedIndex === this.indexRef) {
            this.selectedItem = this.getItemAtIndex();
        }
    }
    /**
     * @return {?}
     */
    get selectedItem() {
        return this.parent.selectedItem;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedItem(value) {
        this.parent.selectedItem = value;
        console.log('new one', this.parent.selectedItem);
    }
    /**
     * @return {?}
     */
    toggle() {
        this.selectedItem = this.itemRef;
        if (this.itemRef === this.selectedItem) {
            console.log('true');
            //  this.styleAsActive = true;
        }
        this.change.emit(this.parent.selectedItem);
        // this.activeidChange.emit(this.groupId);
    }
    /**
     * @return {?}
     */
    get parentList() {
        return this.parent.dataSource;
    }
    /**
     * @private
     * @return {?}
     */
    getItemAtIndex() {
        if (this.parentList === null) {
            return -1;
        }
        if (this.selectedIndex > this.parentList.length - 1) {
            return -1;
        }
        if (this.selectedIndex > -1) {
            return this.parentList[this.selectedIndex];
        }
        return -1;
    }
}
SemUiFontSizesItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[semui-font-sizes-item]',
                template: `<div
  [ngClass]="{ 'active' : itemRef === selectedItem }"
  class="sem-li"
  (click)="toggle()">
  <ng-content  select="[navlink]"></ng-content>
</div>
<div
  *ngIf="itemRef === selectedItem "
  class="block"
  [ngClass]="{ 'active' : itemRef === selectedItem }"
>
  <div class="dialog-container--body">
    <ng-content select="[size-selector]"></ng-content>
  </div>
</div>


`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SemUiFontSizesItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SemUiFontSizesComponent }
];
SemUiFontSizesItemComponent.propDecorators = {
    itemRef: [{ type: Input }],
    indexRef: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    groupId: [{ type: Input }],
    activeid: [{ type: Input }],
    activeidChange: [{ type: Output }],
    change: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SemUiFontSizesModule {
}
SemUiFontSizesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                ],
                declarations: [SemUiFontSizesComponent, SemUiFontSizesItemComponent],
                exports: [SemUiFontSizesComponent, SemUiFontSizesItemComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const UIMODULES = [
    MaterialManifestModule,
    SemUiButtonModule,
    SemUiButtonFabModule,
    SemUiRainDropModule,
    SemUiListModule,
    SemUiLabelModule,
    SemUiFormSelectModule,
    SemUiThumbnailLargeModule,
    SemUiIconsListModule,
    SemUiSectionHeaderModule,
    SemUiSectionFooterModule,
    SemUiCardModule,
    SemUiInputModule,
    SemUiOverlayDialogModule,
    SemUiOverlayVerticalModule,
    SemUiTabsModule,
    SemUiFormFieldModule,
    SemUiFontSizesModule,
    SemUiButtonDndModule,
];
class SemUiModule {
}
SemUiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    UIMODULES,
                    FormsModule
                ],
                declarations: [SemUiComponent],
                exports: [SemUiComponent, UIMODULES]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconRowComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
IconRowComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'semui-icon-row',
                template: `
    <p>
      icon-row works!
    </p>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
IconRowComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IconRowModule {
}
IconRowModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [IconRowComponent],
                exports: [IconRowComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SwitchRowComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SwitchRowComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'semui-switch-row',
                template: `
    <p>
      switch-row works!
    </p>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SwitchRowComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SwitchRowModule {
}
SwitchRowModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SwitchRowComponent],
                exports: [SwitchRowComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TitleMarqueeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TitleMarqueeComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'semui-title-marquee',
                template: `
    <p>
      title-marquee works!
    </p>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
TitleMarqueeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TitleMarqueeModule {
}
TitleMarqueeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [TitleMarqueeComponent],
                exports: [TitleMarqueeComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleRowComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ToggleRowComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'semui-toggle-row',
                template: `
    <p>
      toggle-row works!
    </p>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
ToggleRowComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleRowModule {
}
ToggleRowModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ToggleRowComponent],
                exports: [ToggleRowComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SemUiService, SemUiComponent, SemUiModule, SemUiButtonModule, SemUiButtonDndModule, SemUiButtonFabModule, SemUiCardModule, SemUiFormFieldModule, SemUiFormSelectModule, IconRowModule, SemUiIconsListModule, SemUiInputModule, SemUiLabelModule, SemUiListModule, SemUiOverlayDialogModule, SemUiOverlayVerticalModule, SemUiSectionFooterModule, SemUiSectionHeaderModule, SwitchRowModule, SemUiTabsModule, SemUiThumbnailLargeModule, TitleMarqueeModule, ToggleRowModule, SemUiButtonDndComponent as ɵz, ButtonFabComponent as ɵc, ButtonComponent as ɵb, CardComponent as ɵo, SemUiFontSizesComponent as ɵx, SemUiFontSizesModule as ɵw, SemUiFontSizesItemComponent as ɵy, FormFieldComponent as ɵv, FormOptionsComponent as ɵj, FormSelectComponent as ɵi, IconRowComponent as ɵba, IconsListComponent as ɵl, InputComponent as ɵp, LabelComponent as ɵh, ListItemComponent as ɵf, ListComponent as ɵg, MaterialManifestModule as ɵa, OverlayDialogComponent as ɵq, OverlayVerticalComponent as ɵr, RainDropComponent as ɵe, SemUiRainDropModule as ɵd, SectionFooterComponent as ɵn, SectionHeaderComponent as ɵm, SwitchRowComponent as ɵbb, IfTabActiveDirective as ɵt, TabComponent as ɵs, TabsComponent as ɵu, ThumbnailLargeComponent as ɵk, TitleMarqueeComponent as ɵbc, ToggleRowComponent as ɵbd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS11aS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL3NlbS11aS5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9jYXJkL2NhcmQubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xpc3QvbGlzdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGFiZWwvbGFiZWwubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2Zvcm0tc2VsZWN0L2Zvcm0tb3B0aW9ucy9mb3JtLW9wdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RodW1ibmFpbC1sYXJnZS90aHVtYm5haWwtbGFyZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvcmFpbi1kcm9wL3JhaW4tZHJvcC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWZvb3Rlci9zZWN0aW9uLWZvb3Rlci5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaW5wdXQvaW5wdXQubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL3RhYi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbi1yb3cvaWNvbi1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pY29uLXJvdy9pY29uLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc2VtLXVpJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIHNlbS11aSB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW11aS1idXR0b24tZG5kXSwgZGl2W3NlbXVpLWJ1dHRvbi1kbmRdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25EbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ3hzbWFsbCcpIHhzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ21lZGl1bScpIG1lZGl1bTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW0tdGhlbWUnKVxyXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcclxuXHJcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzZXMoKXtcclxuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XHJcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ1dHRvbi1kbmQgJyk7XHJcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWVkaXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54c21hbGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCd4c21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gX2NsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xyXG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWJ1dHRvbi1kbmQtLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpIHtcclxuICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2VtVWlCdXR0b25EbmRDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1kbmQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2VtVWlCdXR0b25EbmRDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdidXR0b25bc2VtLWJ1dHRvbl0sIGRpdltzZW0tYnV0dG9uXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgb25DbGljayhidG4pIHtcclxuICAgIHRoaXMuc3R5bGVBc0FjdGl2ZSA9ICF0aGlzLnN0eWxlQXNBY3RpdmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2xpbmtidXR0b24nKSBsaW5rYnV0dG9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdpY29ub25seScpIGljb25vbmx5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3Nlcygpe1xyXG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcclxuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tYnV0dG9uJyk7XHJcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmljb25vbmx5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnaWNvbm9ubHknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnbGlua19wcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rX3ByaW1hcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpbmtidXR0b24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idXR0b24tLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUJ1dHRvbk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlbXVpLWNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgY2FyZCB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ2FyZENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NhcmRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUNhcmRNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmdcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2xpc3QtdHlwZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPVxyXG4gICAgJ2xpZ2h0J1xyXG4gIHwgJ2RhcmsnXHJcbiAgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tzZW11aS1saXN0LWl0ZW1dJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IExpc3RJdGVtVHlwZTtcclxuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXHJcbiAgfVxyXG5cclxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xyXG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWxpLS0nO1xyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzZXMoKSB7XHJcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xyXG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1saScpO1xyXG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdpbnZlcnRlZCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnaW52ZXJ0ZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICd0ZXJ0aWFyeScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgndGVydGlhcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdkYW5nZXInKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RhbmdlcicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9jbGFzc2VzO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID1cclxuICAgICdsaWdodCdcclxuICB8ICdkYXJrJ1xyXG4gIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbc2VtdWktbGlzdF0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2xpc3QtaXRlbV1cIj48L25nLWNvbnRlbnQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJyBzZW0tdWwtLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRDbGFzc2VzKCkge1xyXG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcclxuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tdWwnKTtcclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSl7XHJcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XHJcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnZGFyaycpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xpc3RJdGVtQ29tcG9uZW50LCBMaXN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTGlzdEl0ZW1Db21wb25lbnQsIExpc3RDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlMaXN0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGFiZWxJbXBvcnRhbmNlTGV2ZWwgPSAnc21hbGwnIHwgJ2xhcmdlJyB8IHVuZGVmaW5lZDtcclxuZXhwb3J0IHR5cGUgTGFiZWxUaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdsYWJlbFtzZW11aS1sYWJlbF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktbGFiZWwnKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXHJcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcIm1lZGl1bVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1lZGl1bScpXHJcbiAgcHVibGljIHN0eWxlQXNNZWRpdW06IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXHJcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvcm0tbGFiZWwnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRm9ybUxhYmVsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcclxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBMYWJlbEltcG9ydGFuY2VMZXZlbDtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRGFyazogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBMYWJlbCB0aGVtZSBpbiB0ZXJtcyBvZiBsaWdodC9kYXJrLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKVxyXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBMYWJlbFRoZW1lO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xyXG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRUaGVtZSh0eXBlKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFyayA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xyXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgQ1NTIGNsYXNzZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcclxuXHJcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xyXG4gICAgICBjYXNlICgnc21hbGwnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdtZWRpdW0nKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNNZWRpdW0gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnbGFyZ2UnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdmb3JtLWxhYmVsJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRm9ybUxhYmVsID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGFiZWxDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtMYWJlbENvbXBvbmVudF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlMYWJlbE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZWxlY3Rbc2VtdWktZm9ybS1zZWxlY3RdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VsZWN0Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBBbHdheXMgYXBwbHkgdGhlIGJhc2UgUnViaXggYnV0dG9uIGNzcyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLXNlbGVjdCcpXHJcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzczogdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnb3B0aW9uW3NlbXVpLWZvcm0tb3B0aW9uc10nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQWx3YXlzIGFwcGx5IHRoZSBiYXNlIFJ1Yml4IGJ1dHRvbiBjc3MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1vcHRpb24nKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3M6IHRydWU7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1PcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLW9wdGlvbnMvZm9ybS1vcHRpb25zLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRm9ybVNlbGVjdENvbXBvbmVudCwgRm9ybU9wdGlvbnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6W0Zvcm1TZWxlY3RDb21wb25lbnQsIEZvcm1PcHRpb25zQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb3JtU2VsZWN0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2ZpZ3VyZVtzZW11aS10aHVtYm5haWxdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltjYXJkLWltYWdlXVwiPjwvbmctY29udGVudD5cclxuXHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIltzZW0tc2VjdGlvbi1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuXHJcblxyXG5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGh1bWJuYWlsTGFyZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktdGh1bWJuYWlsJylcclxuICBwdWJsaWMgYWRkQmFzZUJ1dHRvbkNzc0NsYXNzID0gdHJ1ZTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsTGFyZ2VDb21wb25lbnQgfSBmcm9tICcuL3RodW1ibmFpbC1sYXJnZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RodW1ibmFpbExhcmdlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVGh1bWJuYWlsTGFyZ2VDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZW11aS1pY29ucy1saXN0JyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25zTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSWNvbnNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9pY29ucy1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSWNvbnNMaXN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSWNvbnNMaXN0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlJY29uc0xpc3RNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZW11aS1yYWluLWRyb3AnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFpbkRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJhaW5Ecm9wQ29tcG9uZW50IH0gZnJvbSAnLi9yYWluLWRyb3AuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtSYWluRHJvcENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1JhaW5Ecm9wQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlSYWluRHJvcE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgIEhlYWRlckltcG9ydGFuY2VMZXZlbCA9ICcnIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktc2VjdGlvbi1oZWFkZXJdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktaGVhZGVyLXNlY3Rpb24nKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXHJcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXHJcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogSGVhZGVySW1wb3J0YW5jZUxldmVsO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXHJcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XHJcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xyXG4gICAgICBjYXNlICgnc21hbGwnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtTZWN0aW9uSGVhZGVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2VjdGlvbkhlYWRlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgRm9vdGVySW1wb3J0YW5jZUxldmVsID0gJycgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS1zZWN0aW9uLWZvb3Rlcl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbkZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQ3NzIGJhc2UgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb290ZXItc2VjdGlvbicpXHJcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcclxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcclxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBGb290ZXJJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcclxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcclxuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2xhcmdlJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTZWN0aW9uRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLWZvb3Rlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlY3Rpb25Gb290ZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTZWN0aW9uRm9vdGVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAnZm9ybS1pbnB1dCcgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2lucHV0W3NlbXVpLWlucHV0XScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBTZW11aSBidXR0b24gY3NzIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXHJcbiAgcHJpdmF0ZSBhZGRGb3JtQmFzZUNsYXNzOiB0cnVlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeSBvciBzZWNvbmRhcnkuXHJcbiAgICogUHJpbWFyeSBzZXRzIGFzIHJvdW5kIGNvcm5lcnMgYW5kIHNoYXJwIGVkZ2UsIHNlY29uZGFyeSBpcyBhbGwgcm91bmRcclxuICAgKi9cclxuICBASW5wdXQoJ3NlbXVpLXR5cGUnKVxyXG4gIHB1YmxpYyBzZW11aVR5cGU6IElucHV0VHlwZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNlbXVpLWZvcm0taW5wdXRcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcclxuICBwdWJsaWMgc2VtdWlUeXBlRm9ybUlucHV0OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlUeXBlKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldCBjb21wb25lbnQncyBwcm9wZXJ0aWVzIGJvdW5kIHRvXHJcbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cclxuICAgKi9cclxuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5VHlwZSgpIHtcclxuXHJcbiAgICBpZiAoJ2Zvcm0taW5wdXQnID09PSB0aGlzLnNlbXVpVHlwZSkge1xyXG4gICAgICB0aGlzLnNlbXVpVHlwZUZvcm1JbnB1dCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuL2lucHV0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtJbnB1dENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUlucHV0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcclxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcclxuICBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDZGtPdmVybGF5T3JpZ2luLFxyXG4gIE92ZXJsYXlcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdzZW11aS1vdmVybGF5LWRpYWxvZycsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlXHJcbiAgICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCJcclxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5lZFwiXHJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIm92ZXJsYXlXaWR0aFwiXHJcbiAgICAoZGV0YWNoKT1cImNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKVwiXHJcbiAgPlxyXG4gICAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LXRpdGxlXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3ZlcmxheURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzICBPbkRlc3Ryb3ksIE9uSW5pdCAge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBASW5wdXQoKSBpc09wZW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlXaWR0aDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAvL1xyXG4gIC8vIG92ZXJsYXlPZmZzZXRYO1xyXG4gIC8vIE92ZXJsYXlIZWlnaHQ7XHJcbiAgLy8gc2Nyb2xsU3RyYXRlZ3k7XHJcbiAgLy8gcG9zaXRpb25zO1xyXG4gIC8vIGJhY2tkcm9wQ2xhc3M7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8vICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xyXG4gICAgLy8gICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcclxuICAgIC8vICAgdGhpcy5PdmVybGF5SGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgLy8gICB0aGlzLnBvc2l0aW9ucyAgPSBbXHJcbiAgICAvLyAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAvLyAgICAgICB7b3JpZ2luWTogJ2NlbnRlcicsIG9yaWdpblg6ICdlbmQnfSxcclxuICAgIC8vICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxyXG4gICAgLy8gICAgIClcclxuICAgIC8vICAgXTtcclxuICAgIC8vICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbmVkKSxcclxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFwKCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgY2xvc2UkLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuICBjb25uZWN0ZWRPdmVybGF5RGV0YWNoKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gaXNPcGVuZWQ7XHJcbiAgICBpc09wZW5lZCA/IHRoaXMub3Blbi5lbWl0KCkgOiB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIGRpYWxvZywgZXZlbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IFNjcm9sbERpc3BhdGNoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcbmltcG9ydCB7IENka1N0ZXBwZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XHJcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSBbXHJcbiAgLy8gQ0RLXHJcbiAgQTExeU1vZHVsZSxcclxuICBCaWRpTW9kdWxlLFxyXG4gIE9ic2VydmVyc01vZHVsZSxcclxuICBPdmVybGF5TW9kdWxlLFxyXG4gIFBsYXRmb3JtTW9kdWxlLFxyXG4gIFBvcnRhbE1vZHVsZSxcclxuICBTY3JvbGxEaXNwYXRjaE1vZHVsZSxcclxuICBDZGtTdGVwcGVyTW9kdWxlLFxyXG4gIENka1RhYmxlTW9kdWxlLFxyXG5dXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAvLyBpbXBvcnRzOiBbXHJcbiAgLy8gICBDb21tb25Nb2R1bGUsXHJcbiAgLy8gICAuLi5tb2R1bGVzXHJcbiAgLy8gXSxcclxuICAvLyBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGV4cG9ydHM6IFsgLi4ubW9kdWxlcyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIHtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPdmVybGF5RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW092ZXJsYXlEaWFsb2dDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6ICBbT3ZlcmxheURpYWxvZ0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpT3ZlcmxheURpYWxvZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4SWZUYWJBY3RpdmVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSWZUYWJBY3RpdmVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogVE9ETzogUmVtb3ZlIGhpZGRlbiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MzEwIGlzIHJlc29sdmVkXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFiXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgKm5nSWY9XCJ0ZW1wbGF0ZTsgdGhlbiB0ZW1wbGF0ZV9jb250YWluZXIgZWxzZSBjb250ZW50X2NvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZV9jb250YWluZXI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJhY3RpdmVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlLnRlbXBsYXRlUmVmXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudF9jb250YWluZXI+XHJcbiAgICAgIDxkaXYgW2hpZGRlbl09XCIhYWN0aXZlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ3NlbXVpLXRhYidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgLyoqXHJcbiAgICogQ3NzIGJhc2UgY2xhc3MuXHJcbiAgICovXHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGVmYXVsdCcpXHJcbiAgcHVibGljIGFkZEJhc2VCdXR0b25Dc3NDbGFzcyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBAQ29udGVudENoaWxkKElmVGFiQWN0aXZlRGlyZWN0aXZlKSB0ZW1wbGF0ZTogSWZUYWJBY3RpdmVEaXJlY3RpdmU7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBwdWJsaWMgYWN0aXZlQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyQ29udGVudEluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYnNdJyxcclxuICB0ZW1wbGF0ZTogYDxzZWN0aW9uXHJcbiAgW2NsYXNzLnRhYnMtdmVydGljYWxdPVwidmVydGljYWxcIlxyXG4gIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCJcclxuICBbY2xhc3Muc3dpcGVdPVwic3dpcGVcIlxyXG4+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VGFicyAmJiB2ZXJ0aWNhbFwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYnMtaGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICA8dWxcclxuICAgICAgY2xhc3M9XCJzZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWxcIlxyXG4gICAgICBbY2xhc3MudGFicy12ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICA8bGlcclxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxyXG4gICAgICAgIGNsYXNzPVwic2VtdWktdGFiXCJcclxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cInRhYnMtLWJ1dHRvblwiXHJcbiAgICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2tlZCh0YWIpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cclxuICAgICAgICAgIHt7dGFiLnRpdGxlfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8dWxcclxuXHJcbiAgICAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiBzaG93VGFic1wiXHJcbiAgICBzZW11aS1saXN0XHJcbiAgICBjbGFzcz1cInNlbXVpLXRhYnMtbGlzdCBsaXN0LXJlc2V0XCJcclxuICAgIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCI+XHJcbiAgICA8bGlcclxuICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcclxuICAgICAgc2VtdWktbGlzdC1pdGVtXHJcbiAgICAgIGxpc3QtaXRlbVxyXG4gICAgICBzZW0taW1wb3J0YW5jZT1cInRlcnRpYXJ5XCJcclxuICAgICAgY2xhc3M9XCJjb3JuZXJfdG9wIFwiXHJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIChjbGljayk9XCJ0YWJDbGlja2VkKHRhYilcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cclxuICAgICAgICB7e3RhYi50aXRsZX19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwidGFiLW5hdlwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYi1uYXZdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzZW11aS10YWItY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbmAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdzZW11aS10YWJzJ1xyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBJbnB1dCgpIHNob3dUYWJzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHZlcnRpY2FsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcclxuXHJcbiAgZ2V0IGluZGV4KCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IGFjdGl2ZXMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdC5hY3RpdmUpO1xyXG5cclxuICAgIGlmKGFjdGl2ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBNdWx0aXBsZSBhY3RpdmUgdGFicyBzZXQgJ2FjdGl2ZSdgKTtcclxuICAgIH0gZWxzZSBpZighYWN0aXZlcy5sZW5ndGggJiYgdGFicy5sZW5ndGgpIHtcclxuICAgICAgdGFic1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFiQ2xpY2tlZChhY3RpdmVUYWIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG5cclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgIGFjdGl2ZVRhYi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0LmVtaXQoYWN0aXZlVGFiKTtcclxuICB9XHJcblxyXG4gIG1vdmUob2Zmc2V0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7IGkgPCB0YWJzLmxlbmd0aCAmJiBpID49IDA7IGkgKz0gb2Zmc2V0KSB7XHJcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNbaV07XHJcbiAgICAgIGlmICh0YWIgJiYgIXRhYi5kaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMudGFiQ2xpY2tlZCh0YWJzW2ldKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vdmUoMSk7XHJcbiAgfVxyXG5cclxuICBwcmV2KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb3ZlKC0xKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzL3RhYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlIH0gZnJvbSAnLi4vc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVGFiQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCwgSWZUYWJBY3RpdmVEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtUYWJDb21wb25lbnQsIFRhYnNDb21wb25lbnQsIElmVGFiQWN0aXZlRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBTZW1VaUxpc3RNb2R1bGUsXHJcbiAgICBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaVRhYnNNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLWZvcm0tZmllbGRdJyxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwYWRkaW5nOjE1cHh9YF0sXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtbGFiZWxdXCI+PC9uZy1jb250ZW50PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtcHJlZml4XVwiPjwvbmctY29udGVudD5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWlucHV0XVwiPjwvbmctY29udGVudD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvcm0tZmllbGQnKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ2xhc3M6IHRydWU7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0Zvcm1GaWVsZENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0Zvcm1GaWVsZENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpRm9ybUZpZWxkTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5leHBvcnQgdHlwZSBDb3JuZXJUeXBlID0gJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBCdXR0b25JbXBvcnRhbmNlTGV2ZWwgPSAncHJpbWFyeScgfCAnbGluay1idXR0b24nIHwgJ3JvdW5kLWJ1dHRvbicgfCAnY29ybmVyLWJ1dHRvbicgfCB1bmRlZmluZWQ7XHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnV0dG9uW3NlbS1idG4tZmFiXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25GYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cclxuICAgKi9cclxuXHJcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdtZWRpdW0nKSBtZWRpdW06IHN0cmluZztcclxuICBASW5wdXQoJ2Nvcm5lcicpIGNvcm5lcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKSBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcclxuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtdWlpbXBvcnRhbmNlOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcclxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXHJcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NlcygpIHtcclxuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XHJcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ0bi1mYWInKTtcclxuICAgIGlmICh0aGlzLmxhcmdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbGFyZ2UnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNtYWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1lZGl1bSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnaW52ZXJ0ZWQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2ludmVydGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnbWVkaXVtJykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdtZWRpdW0nKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHRfc21hbGwnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHRfc21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ub25lJyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdyaWdodCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3JpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdsZWZ0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfbGVmdCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAndG9wLWxlZnQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtbGVmdCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAndG9wLXJpZ2h0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfdG9wLXJpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdib3R0b20tcmlnaHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tcmlnaHQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2JvdHRvbS1sZWZ0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfYm90dG9tLWxlZnQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idG4tZmFiLS0nO1xyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKXtcclxuICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJ1dHRvbkZhYkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLWZhYi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0J1dHRvbkZhYkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0J1dHRvbkZhYkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRmFiTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LFxyXG4gIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG4gIE92ZXJsYXlcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbi8vIGltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YXAgIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS12ZXJ0aWNhbCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGVcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlbmVkXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5U2Nyb2xsU3RyYXRlZ3ldPVwic2Nyb2xsU3RyYXRlZ3lcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGVpZ2h0XT1cIk92ZXJsYXlIZWlnaHRcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwiMzIwXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIjMwMFwiXHJcbiAgKGRldGFjaCk9XCJjb25uZWN0ZWRPdmVybGF5RGV0YWNoKClcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJyZVBvc2l0aW9uKCRldmVudClcIlxyXG4+XHJcbiAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLWZ1bGxcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50TG9hZGVkXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW292ZXJsYXktdGl0bGVdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5VmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyAgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlc3tcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHt9XHJcblxyXG4gIEBJbnB1dCgpIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY7XHJcblxyXG5cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgb3ZlcmxheU9mZnNldFg7XHJcbiAgT3ZlcmxheUhlaWdodDtcclxuICBzY3JvbGxTdHJhdGVneTtcclxuICBwb3NpdGlvbnM7XHJcbiAgYmFja2Ryb3BDbGFzcztcclxuXHJcbiAgY29udGVudExvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xhc3MgPSAnY2RrT3ZlcmxheUZ1bGxIZWlnaHQnXHJcbiAgICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcclxuICAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcclxuICAgIHRoaXMucG9zaXRpb25zICA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXHJcbiAgICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9XHJcbiAgICAgIClcclxuICAgIF07XHJcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgY2xvc2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc09wZW5lZCksXHJcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRhcCggKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICBjbG9zZSQuc3Vic2NyaWJlKCk7XHJcblxyXG4gfVxyXG4gIGNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKSB7XHJcbiAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xyXG4gICAgaWYoY2hhbmdlcy5pc09wZW5lZC5jdXJyZW50VmFsdWUpe1xyXG4gICAgICB0aGlzLmNvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZVBvc2l0aW9uKGl0ZW0pe1xyXG4gICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcclxuICB9XHJcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShpc09wZW5lZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xyXG4gICAgaXNPcGVuZWQgPyB0aGlzLm9wZW4uZW1pdCgpIDogdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBwcml2YXRlIGlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCBkaWFsb2csIGV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIShvdmVybGF5T3JpZ2luRWwuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSB8fCBkaWFsb2cubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudFsndGFyZ2V0J10pKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE92ZXJsYXlWZXJ0aWNhbENvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlPdmVybGF5VmVydGljYWxNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFNpbXBsZUNoYW5nZXMsIElucHV0LCBDb250ZW50Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXNdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZW0tdWwtaWNvbi1saXN0IHNlbS11bFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjx1bCBjbGFzcz1cImJ1bGxldC1pbmxpbmVsaXN0IHA0XCI+XHJcbiAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4gIDxsaT5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cclxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbiAgPGxpPlxyXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxyXG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9saT5cclxuICA8bGk+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgYWN0aXZlaWQ6IG51bWJlcjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZilcclxuICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRhdGFTb3VyY2U6IGFueSA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0ge307XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG9wZW5lZFBhcmVudDogYW55ID0gbnVsbDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGxldmVsczogQXJyYXk8T2JqZWN0PiA9IFtcclxuICAgIHtudW06IDAsIG5hbWU6ICcxJ30sXHJcbiAgICB7bnVtOiAxLCBuYW1lOiAnMid9XHJcbiAgXTtcclxuICBzZWxlY3RlZExldmVsID0gdGhpcy5sZXZlbHNbMF07XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ2NoYW5nZXMgYXJlIGVuYWJsZWQnKVxyXG4gICAgdGhpcy5hY3RpdmVpZCA9IGNoYW5nZXMuYWN0aXZlaWQuY3VycmVudFZhbHVlO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9udC1zaXplcy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXMtaXRlbV0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdlxyXG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXHJcbiAgY2xhc3M9XCJzZW0tbGlcIlxyXG4gIChjbGljayk9XCJ0b2dnbGUoKVwiPlxyXG4gIDxuZy1jb250ZW50ICBzZWxlY3Q9XCJbbmF2bGlua11cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2XHJcbiAgKm5nSWY9XCJpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gXCJcclxuICBjbGFzcz1cImJsb2NrXCJcclxuICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIH1cIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250YWluZXItLWJvZHlcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzaXplLXNlbGVjdG9yXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbVJlZjogYW55ID0ge307XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBpbmRleFJlZiA9IC0xO1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBncm91cElkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIGFjdGl2ZWlkOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIGFjdGl2ZWlkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBhcmVudDogU2VtVWlGb250U2l6ZXNDb21wb25lbnQsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldFNlbGVjdGVkSXRlbUluZGV4KCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZEl0ZW1JbmRleCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdtdXMgYmUgY2FsbCBoZXJlJyk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0aGlzLmluZGV4UmVmKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRJdGVtQXRJbmRleCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbTtcclxuICB9XHJcbiAgc2V0IHNlbGVjdGVkSXRlbSh2YWx1ZSkge1xyXG4gICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygnbmV3IG9uZScsICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtUmVmO1xyXG4gICAgaWYgKHRoaXMuaXRlbVJlZiA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pe1xyXG4gICAgICBjb25zb2xlLmxvZygndHJ1ZScpXHJcbiAgICAgIC8vICB0aGlzLnN0eWxlQXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgLy8gdGhpcy5hY3RpdmVpZENoYW5nZS5lbWl0KHRoaXMuZ3JvdXBJZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFyZW50TGlzdCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmRhdGFTb3VyY2U7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SXRlbUF0SW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnBhcmVudExpc3QgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IHRoaXMucGFyZW50TGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAtMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRMaXN0W3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnR9IGZyb20gJy4vc2VtLWZvbnQtc2l6ZXMtaXRlbS9zZW0tZm9udC1zaXplcy1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VtVWlGb250U2l6ZXNDb21wb25lbnR9IGZyb20gJy4vZm9udC1zaXplcy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlbVVpRm9udFNpemVzQ29tcG9uZW50LCBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTZW1VaUZvbnRTaXplc0NvbXBvbmVudCwgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgU2VtVWlDb21wb25lbnQgfSBmcm9tICcuL3NlbS11aS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24tZG5kL2J1dHRvbi1kbmQubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlCdXR0b25Nb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUNhcmRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpTGlzdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9saXN0L2xpc3QubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlMYWJlbE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9sYWJlbC9sYWJlbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUZvcm1TZWxlY3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpSWNvbnNMaXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaVJhaW5Ecm9wTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpU2VjdGlvbkZvb3Rlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uLWZvb3Rlci9zZWN0aW9uLWZvb3Rlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUlucHV0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2lucHV0L2lucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpT3ZlcmxheURpYWxvZ01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaVRhYnNNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkZhYk1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24tZmFiL2J1dHRvbi1mYWIubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlPdmVybGF5VmVydGljYWxNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2ZvbnQtc2l6ZXMvZm9udC1zaXplcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZSc7XHJcblxyXG5jb25zdCBVSU1PRFVMRVMgPSBbXHJcbiAgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSxcclxuICBTZW1VaUJ1dHRvbk1vZHVsZSxcclxuICBTZW1VaUJ1dHRvbkZhYk1vZHVsZSxcclxuICBTZW1VaVJhaW5Ecm9wTW9kdWxlLFxyXG4gIFNlbVVpTGlzdE1vZHVsZSxcclxuICBTZW1VaUxhYmVsTW9kdWxlLFxyXG4gIFNlbVVpRm9ybVNlbGVjdE1vZHVsZSxcclxuICBTZW1VaVRodW1ibmFpbExhcmdlTW9kdWxlLFxyXG4gIFNlbVVpSWNvbnNMaXN0TW9kdWxlLFxyXG4gIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSxcclxuICBTZW1VaVNlY3Rpb25Gb290ZXJNb2R1bGUsXHJcbiAgU2VtVWlDYXJkTW9kdWxlLFxyXG4gIFNlbVVpSW5wdXRNb2R1bGUsXHJcbiAgU2VtVWlPdmVybGF5RGlhbG9nTW9kdWxlLFxyXG4gIFNlbVVpT3ZlcmxheVZlcnRpY2FsTW9kdWxlLFxyXG4gIFNlbVVpVGFic01vZHVsZSxcclxuICBTZW1VaUZvcm1GaWVsZE1vZHVsZSxcclxuICBTZW1VaUZvbnRTaXplc01vZHVsZSxcclxuICBTZW1VaUJ1dHRvbkRuZE1vZHVsZSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgVUlNT0RVTEVTLFxyXG4gICAgRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlbVVpQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2VtVWlDb21wb25lbnQsIFVJTU9EVUxFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NlbXVpLWljb24tcm93JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIGljb24tcm93IHdvcmtzIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25Sb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEljb25Sb3dDb21wb25lbnQgfSBmcm9tICcuL2ljb24tcm93LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSWNvblJvd0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0ljb25Sb3dDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uUm93TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NlbXVpLXN3aXRjaC1yb3cnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgc3dpdGNoLXJvdyB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTd2l0Y2hSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFN3aXRjaFJvd0NvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoLXJvdy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1N3aXRjaFJvd0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1N3aXRjaFJvd0NvbXBvbmVudF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dpdGNoUm93TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NlbXVpLXRpdGxlLW1hcnF1ZWUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgdGl0bGUtbWFycXVlZSB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaXRsZU1hcnF1ZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRpdGxlTWFycXVlZUNvbXBvbmVudCB9IGZyb20gJy4vdGl0bGUtbWFycXVlZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RpdGxlTWFycXVlZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RpdGxlTWFycXVlZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlTWFycXVlZU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZW11aS10b2dnbGUtcm93JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIHRvZ2dsZS1yb3cgd29ya3MhXHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUb2dnbGVSb3dDb21wb25lbnQgfSBmcm9tICcuL3RvZ2dsZS1yb3cuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb2dnbGVSb3dDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUb2dnbGVSb3dDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVSb3dNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFLYSxZQUFZO0lBRXZCLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pELE1BV2EsY0FBYztJQUV6QixpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZELE1Bd0JhLHVCQUF1QjtJQXVDbEM7Ozs7UUFsQ08sa0JBQWEsR0FBWSxLQUFLLENBQUM7S0FrQ3JCOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxVQUFVOztjQUNGLFFBQVEsR0FBRyxFQUFFO1FBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLFFBQVEs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