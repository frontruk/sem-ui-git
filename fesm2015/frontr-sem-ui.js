import { Injectable, ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, HostListener, ContentChild, TemplateRef, NgModule, Output, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, ViewChild, Directive, ContentChildren, defineInjectable } from '@angular/core';
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ListItemComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        _classes.push(' sem-ul');
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        const close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter(() => this.isOpened), filter(event => {
            return this.isClickedOutside(overlayOriginEl, this.dialog, event);
        }), tap((data) => {
            this.changeState(false);
        }));
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
     * @param {?} isOpened
     * @return {?}
     */
    changeState(isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    }
    /**
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const modules = [
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
class TabComponent {
    constructor() {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return tabs.findIndex(tab => tab.active);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        /** @type {?} */
        const actives = this.tabs.filter(t => t.active);
        if (actives.length > 1) {
            console.error(`Multiple active tabs set 'active'`);
        }
        else if (!actives.length && tabs.length) {
            tabs[0].active = true;
            console.log('tabs[0].active', tabs[0].active);
        }
    }
    /**
     * @param {?} activeTab
     * @return {?}
     */
    tabClicked(activeTab) {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        tabs.forEach(tab => tab.active = false);
        activeTab.active = true;
        console.log('activeTab.active', activeTab, activeTab.active);
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
        console.log('clicked');
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .pipe(debounceTime(100), filter(() => this.isOpened), filter((event) => {
            this.dialog.nativeElement.parentNode.style.top = '0';
            return this.isClickedOutside(overlayOriginEl, this.dialog, event);
        }), tap((data) => {
            this.changeState(false);
        }));
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
        if (changes["isOpened"].currentValue) {
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
     * @param {?} isOpened
     * @return {?}
     */
    changeState(isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    }
    /**
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.activeid = changes["activeid"].currentValue;
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SemUiService, SemUiComponent, SemUiModule, SemUiButtonModule, SemUiButtonDndModule, SemUiButtonFabModule, SemUiCardModule, SemUiFormFieldModule, SemUiFormSelectModule, IconRowModule, SemUiIconsListModule, SemUiInputModule, SemUiLabelModule, SemUiListModule, SemUiOverlayDialogModule, SemUiOverlayVerticalModule, SemUiSectionFooterModule, SemUiSectionHeaderModule, SwitchRowModule, SemUiTabsModule, SemUiThumbnailLargeModule, TitleMarqueeModule, ToggleRowModule, SemUiButtonDndComponent as ɵz, ButtonFabComponent as ɵc, ButtonComponent as ɵb, CardComponent as ɵo, SemUiFontSizesComponent as ɵx, SemUiFontSizesModule as ɵw, SemUiFontSizesItemComponent as ɵy, FormFieldComponent as ɵv, FormOptionsComponent as ɵj, FormSelectComponent as ɵi, IconRowComponent as ɵba, IconsListComponent as ɵl, InputComponent as ɵp, LabelComponent as ɵh, ListItemComponent as ɵf, ListComponent as ɵg, MaterialManifestModule as ɵa, OverlayDialogComponent as ɵq, OverlayVerticalComponent as ɵr, RainDropComponent as ɵe, SemUiRainDropModule as ɵd, SectionFooterComponent as ɵn, SectionHeaderComponent as ɵm, SwitchRowComponent as ɵbb, IfTabActiveDirective as ɵt, TabComponent as ɵs, TabsComponent as ɵu, ThumbnailLargeComponent as ɵk, TitleMarqueeComponent as ɵbc, ToggleRowComponent as ɵbd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS11aS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL3NlbS11aS5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9jYXJkL2NhcmQubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xpc3QvbGlzdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGFiZWwvbGFiZWwubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2Zvcm0tc2VsZWN0L2Zvcm0tb3B0aW9ucy9mb3JtLW9wdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RodW1ibmFpbC1sYXJnZS90aHVtYm5haWwtbGFyZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvcmFpbi1kcm9wL3JhaW4tZHJvcC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWZvb3Rlci9zZWN0aW9uLWZvb3Rlci5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaW5wdXQvaW5wdXQubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL3RhYi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbi1yb3cvaWNvbi1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pY29uLXJvdy9pY29uLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VtLXVpJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHNlbS11aSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW11aS1idXR0b24tZG5kXSwgZGl2W3NlbXVpLWJ1dHRvbi1kbmRdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3hzbWFsbCcpIHhzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3NtYWxsJykgc21hbGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdmdWxsJykgZnVsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbWVkaXVtJykgbWVkaXVtOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblxuXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcbiAgcHVibGljIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xuXG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW1JbXBvcnRhbmNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG5cbiAgZ2V0Q2xhc3Nlcygpe1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idXR0b24tZG5kICcpO1xuICAgIGlmICh0aGlzLmJsb2NrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZ1bGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZWRpdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNtYWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnhzbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCd4c21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWJ1dHRvbi1kbmQtLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSkge1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tZG5kLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2VtVWlCdXR0b25EbmRDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTZW1VaUJ1dHRvbkRuZENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRG5kTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIGJ1dHRvbiBpbXBvcnRhbmNlIGxldmVscy5cbiAqL1xuXG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW0tYnV0dG9uXSwgZGl2W3NlbS1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgb25DbGljayhidG4pIHtcbiAgICB0aGlzLnN0eWxlQXNBY3RpdmUgPSAhdGhpcy5zdHlsZUFzQWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW0tdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG5cbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2Z1bGwnKSBmdWxsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnYmxvY2snKSBibG9jazogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2xpbmtidXR0b24nKSBsaW5rYnV0dG9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnZGlzYWJsZWQnKSBkaXNhYmxlZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2ljb25vbmx5JykgaWNvbm9ubHk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuXG4gIGdldENsYXNzZXMoKXtcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tYnV0dG9uJyk7XG4gICAgaWYgKHRoaXMuYmxvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnYmxvY2snKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnVsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdmdWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhcmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xhcmdlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNtYWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaWNvbm9ubHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnaWNvbm9ubHknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdsaW5rX3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rX3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlua2J1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XG4gICAgY29uc3QgYmFzZSA9ICdzZW0tYnV0dG9uLS0nO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCdXR0b25Db21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCdXR0b25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbXVpLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgY2FyZCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FyZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUNhcmRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0SXRlbVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvbGlzdC10eXBlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID1cbiAgICAnbGlnaHQnXG4gIHwgJ2RhcmsnXG4gIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbc2VtdWktbGlzdC1pdGVtXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IExpc3RJdGVtVHlwZTtcbiAgQElucHV0KCdzZW0tdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW1JbXBvcnRhbmNlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cblxuXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xuICAgIGNvbnN0IGJhc2UgPSAnIHNlbS1saS0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldENsYXNzZXMoKSB7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWxpJyk7XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkZWZhdWx0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgncHJpbWFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICd0ZXJ0aWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3RlcnRpYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdkYW5nZXInKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkYW5nZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpIHtcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9XG4gICAgJ2xpZ2h0J1xuICB8ICdkYXJrJ1xuICB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWxpc3RdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJbbGlzdC1pdGVtXVwiPjwvbmctY29udGVudD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcbiAgcHVibGljIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZztcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW0tdWwtbGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW0tdWwtZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG5cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJyBzZW0tdWwtLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXRDbGFzc2VzKCkge1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS11bCcpO1xuICAgIHJldHVybiBfY2xhc3NlcztcbiAgfVxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKXtcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTGlzdEl0ZW1Db21wb25lbnQsIExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGlzdEl0ZW1Db21wb25lbnQsIExpc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUxpc3RNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIGJ1dHRvbiBpbXBvcnRhbmNlIGxldmVscy5cbiAqL1xuZXhwb3J0IHR5cGUgTGFiZWxJbXBvcnRhbmNlTGV2ZWwgPSAnc21hbGwnIHwgJ2xhcmdlJyB8IHVuZGVmaW5lZDtcbmV4cG9ydCB0eXBlIExhYmVsVGhlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2xhYmVsW3NlbXVpLWxhYmVsXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1sYWJlbCcpXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcIm1lZGl1bVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWVkaXVtJylcbiAgcHVibGljIHN0eWxlQXNNZWRpdW06IGJvb2xlYW47XG5cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXG4gIHB1YmxpYyBzdHlsZUFzTGFyZ2U6IGJvb2xlYW47XG5cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb3JtLWxhYmVsJylcbiAgcHVibGljIHN0eWxlQXNGb3JtTGFiZWw6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXG4gIHB1YmxpYyBzZW11aUltcG9ydGFuY2U6IExhYmVsSW1wb3J0YW5jZUxldmVsO1xuXG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFyazogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHQ6IGJvb2xlYW47XG5cblxuICAvKipcbiAgICogTGFiZWwgdGhlbWUgaW4gdGVybXMgb2YgbGlnaHQvZGFyay5cbiAgICovXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogTGFiZWxUaGVtZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcbiAgICB0aGlzLnNldFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgdG8gYmUgb24gZGFyayBvciBsaWdodC5cbiAgICovXG4gIHByaXZhdGUgc2V0VGhlbWUodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmsgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdkYXJrJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCdzIHByb3BlcnRpZXMgYm91bmQgdG9cbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cbiAgICovXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XG5cbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xuICAgICAgY2FzZSAoJ3NtYWxsJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnbWVkaXVtJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc01lZGl1bSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2xhcmdlJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZm9ybS1sYWJlbCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNGb3JtTGFiZWwgPSB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTGFiZWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGFiZWxDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpTGFiZWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZWxlY3Rbc2VtdWktZm9ybS1zZWxlY3RdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcblxufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VsZWN0Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBSdWJpeCBidXR0b24gY3NzIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1zZWxlY3QnKVxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzOiB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnb3B0aW9uW3NlbXVpLWZvcm0tb3B0aW9uc10nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBBbHdheXMgYXBwbHkgdGhlIGJhc2UgUnViaXggYnV0dG9uIGNzcyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktb3B0aW9uJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzczogdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybU9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tb3B0aW9ucy9mb3JtLW9wdGlvbnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3JtU2VsZWN0Q29tcG9uZW50LCBGb3JtT3B0aW9uc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6W0Zvcm1TZWxlY3RDb21wb25lbnQsIEZvcm1PcHRpb25zQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvcm1TZWxlY3RNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdmaWd1cmVbc2VtdWktdGh1bWJuYWlsXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NhcmQtaW1hZ2VdXCI+PC9uZy1jb250ZW50PlxuXG48bmctY29udGVudCBzZWxlY3Q9XCJbc2VtLXNlY3Rpb24tZm9vdGVyXVwiPjwvbmctY29udGVudD5cblxuXG5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFRodW1ibmFpbExhcmdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS10aHVtYm5haWwnKVxuICBwdWJsaWMgYWRkQmFzZUJ1dHRvbkNzc0NsYXNzID0gdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaHVtYm5haWxMYXJnZUNvbXBvbmVudCB9IGZyb20gJy4vdGh1bWJuYWlsLWxhcmdlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGh1bWJuYWlsTGFyZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGh1bWJuYWlsTGFyZ2VDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbXVpLWljb25zLWxpc3QnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEljb25zTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb25zTGlzdENvbXBvbmVudCB9IGZyb20gJy4vaWNvbnMtbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ljb25zTGlzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtJY29uc0xpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpSWNvbnNMaXN0TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbXVpLXJhaW4tZHJvcCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmFpbkRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSYWluRHJvcENvbXBvbmVudCB9IGZyb20gJy4vcmFpbi1kcm9wLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmFpbkRyb3BDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUmFpbkRyb3BDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpUmFpbkRyb3BNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSAgSGVhZGVySW1wb3J0YW5jZUxldmVsID0gJycgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS1zZWN0aW9uLWhlYWRlcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1oZWFkZXItc2VjdGlvbicpXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogSGVhZGVySW1wb3J0YW5jZUxldmVsO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXG4gICAqL1xuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKGxhYmVsVHlwZSkge1xuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XG4gICAgICBjYXNlICgnc21hbGwnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzU21hbGwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24taGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VjdGlvbkhlYWRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWN0aW9uSGVhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBGb290ZXJJbXBvcnRhbmNlTGV2ZWwgPSAnJyB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXNlY3Rpb24tZm9vdGVyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvb3Rlci1zZWN0aW9uJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc21hbGwnKVxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbXVpLWltcG9ydGFuY2UnKVxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBGb290ZXJJbXBvcnRhbmNlTGV2ZWw7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGFyZ2UnKVxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbCh0aGlzLnNlbXVpSW1wb3J0YW5jZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgdG8gYmUgb24gZGFyayBvciBsaWdodC5cbiAgICovXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XG4gICAgc3dpdGNoIChsYWJlbFR5cGUpIHtcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2xhcmdlJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VjdGlvbkZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi1mb290ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZWN0aW9uRm9vdGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlY3Rpb25Gb290ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpU2VjdGlvbkZvb3Rlck1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgSW5wdXRUeXBlID0gJ2Zvcm0taW5wdXQnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpbnB1dFtzZW11aS1pbnB1dF0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBTZW11aSBidXR0b24gY3NzIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcbiAgcHJpdmF0ZSBhZGRGb3JtQmFzZUNsYXNzOiB0cnVlO1xuXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkgb3Igc2Vjb25kYXJ5LlxuICAgKiBQcmltYXJ5IHNldHMgYXMgcm91bmQgY29ybmVycyBhbmQgc2hhcnAgZWRnZSwgc2Vjb25kYXJ5IGlzIGFsbCByb3VuZFxuICAgKi9cbiAgQElucHV0KCdzZW11aS10eXBlJylcbiAgcHVibGljIHNlbXVpVHlwZTogSW5wdXRUeXBlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic2VtdWktZm9ybS1pbnB1dFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXG4gIHB1YmxpYyBzZW11aVR5cGVGb3JtSW5wdXQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5VHlwZSgpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xuICAgKiB0aGUgaG9zdCBlbGVtZW50IENTUyBjbGFzc2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeVR5cGUoKSB7XG5cbiAgICBpZiAoJ2Zvcm0taW5wdXQnID09PSB0aGlzLnNlbXVpVHlwZSkge1xuICAgICAgdGhpcy5zZW11aVR5cGVGb3JtSW5wdXQgPSB0cnVlO1xuICAgIH1cblxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtJbnB1dENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpSW5wdXRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsXG4gIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDZGtPdmVybGF5T3JpZ2luLFxuICBPdmVybGF5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRhcCAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycyc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50Jztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGVcbiAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXG4gICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlbmVkXCJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIm92ZXJsYXlXaWR0aFwiXG4gICAgKGRldGFjaCk9XCJjb25uZWN0ZWRPdmVybGF5RGV0YWNoKClcIlxuICA+XG4gICAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3ZlcmxheS10aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyAgT25EZXN0cm95LCBPbkluaXQgIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIEBJbnB1dCgpIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIEBJbnB1dCgpIGlzT3BlbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG92ZXJsYXlXaWR0aDogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY7XG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAvL1xuICAvLyBvdmVybGF5T2Zmc2V0WDtcbiAgLy8gT3ZlcmxheUhlaWdodDtcbiAgLy8gc2Nyb2xsU3RyYXRlZ3k7XG4gIC8vIHBvc2l0aW9ucztcbiAgLy8gYmFja2Ryb3BDbGFzcztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIC8vICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xuICAgIC8vICAgdGhpcy5vdmVybGF5T2Zmc2V0WCA9IDA7XG4gICAgLy8gICB0aGlzLk92ZXJsYXlIZWlnaHQgPSAnMTAwJSc7XG4gICAgLy8gICB0aGlzLnBvc2l0aW9ucyAgPSBbXG4gICAgLy8gICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgIC8vICAgICAgIHtvcmlnaW5ZOiAnY2VudGVyJywgb3JpZ2luWDogJ2VuZCd9LFxuICAgIC8vICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxuICAgIC8vICAgICApXG4gICAgLy8gICBdO1xuICAgIC8vICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG5cblxuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblxuXG4gICAgY29uc3QgY2xvc2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc09wZW5lZCksXG4gICAgICAgIGZpbHRlcihldmVudCA9PiB7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgdGhpcy5kaWFsb2csIGV2ZW50KVxuICAgICAgICB9KSxcbiAgICAgICAgdGFwKCAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIGNsb3NlJC5zdWJzY3JpYmUoKTtcbiAgfVxuICBjb25uZWN0ZWRPdmVybGF5RGV0YWNoKCkge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShpc09wZW5lZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuZWQgPSBpc09wZW5lZDtcbiAgICBpc09wZW5lZCA/IHRoaXMub3Blbi5lbWl0KCkgOiB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIGRpYWxvZywgZXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIShvdmVybGF5T3JpZ2luRWwuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSB8fCBkaWFsb2cubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudFsndGFyZ2V0J10pKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE9ic2VydmVyc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTY3JvbGxEaXNwYXRjaE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgQ2RrU3RlcHBlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgLy8gQ0RLXG4gIEExMXlNb2R1bGUsXG4gIEJpZGlNb2R1bGUsXG4gIE9ic2VydmVyc01vZHVsZSxcbiAgT3ZlcmxheU1vZHVsZSxcbiAgUGxhdGZvcm1Nb2R1bGUsXG4gIFBvcnRhbE1vZHVsZSxcbiAgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsXG4gIENka1N0ZXBwZXJNb2R1bGUsXG4gIENka1RhYmxlTW9kdWxlLFxuXVxuXG5cbkBOZ01vZHVsZSh7XG4gIC8vIGltcG9ydHM6IFtcbiAgLy8gICBDb21tb25Nb2R1bGUsXG4gIC8vICAgLi4ubW9kdWxlc1xuICAvLyBdLFxuICAvLyBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbIC4uLm1vZHVsZXMgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUgfSBmcm9tICcuLi9tYXRlcmlhbC1tYW5pZmVzdC9tYXRlcmlhbC1tYW5pZmVzdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW092ZXJsYXlEaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiAgW092ZXJsYXlEaWFsb2dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpT3ZlcmxheURpYWxvZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neElmVGFiQWN0aXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWZUYWJBY3RpdmVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBUT0RPOiBSZW1vdmUgaGlkZGVuIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgzMTAgaXMgcmVzb2x2ZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFiXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cInRlbXBsYXRlOyB0aGVuIHRlbXBsYXRlX2NvbnRhaW5lciBlbHNlIGNvbnRlbnRfY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZV9jb250YWluZXI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiYWN0aXZlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGUudGVtcGxhdGVSZWZcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50X2NvbnRhaW5lcj5cbiAgICAgIDxkaXYgW2hpZGRlbl09XCIhYWN0aXZlXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3NlbXVpLXRhYidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBDc3MgYmFzZSBjbGFzcy5cbiAgICovXG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kZWZhdWx0JylcbiAgcHVibGljIGFkZEJhc2VCdXR0b25Dc3NDbGFzcyA9IHRydWU7XG5cbiAgQElucHV0KCkgdGl0bGUgPSAnJztcblxuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoSWZUYWJBY3RpdmVEaXJlY3RpdmUpIHRlbXBsYXRlOiBJZlRhYkFjdGl2ZURpcmVjdGl2ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBhY3RpdmVDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCl7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEV2ZW50RW1pdHRlcixcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyQ29udGVudEluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS10YWJzXScsXG4gIHRlbXBsYXRlOiBgPHNlY3Rpb25cbiAgW2NsYXNzLnRhYnMtdmVydGljYWxdPVwidmVydGljYWxcIlxuICBbY2xhc3MudGFicy1ob3Jpem9udGFsXT1cIiF2ZXJ0aWNhbFwiXG4gIFtjbGFzcy5zd2lwZV09XCJzd2lwZVwiXG4+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dUYWJzICYmIHZlcnRpY2FsXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYnMtaGVhZGVyXVwiPjwvbmctY29udGVudD5cblxuICAgIDx1bFxuICAgICAgY2xhc3M9XCJzZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWxcIlxuICAgICAgW2NsYXNzLnRhYnMtdmVydGljYWxdPVwidmVydGljYWxcIj5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxuICAgICAgICBjbGFzcz1cInNlbXVpLXRhYlwiXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwidGFicy0tYnV0dG9uXCJcbiAgICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2tlZCh0YWIpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCI+XG4gICAgICAgICAge3t0YWIudGl0bGV9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cblxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dWxcblxuICAgICpuZ0lmPVwiIXZlcnRpY2FsICYmIHNob3dUYWJzXCJcbiAgICBzZW11aS1saXN0XG4gICAgY2xhc3M9XCJzZW11aS10YWJzLWxpc3QgbGlzdC1yZXNldFwiXG4gICAgW2NsYXNzLnRhYnMtaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIj5cbiAgICA8bGlcbiAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiXG4gICAgICBzZW11aS1saXN0LWl0ZW1cbiAgICAgIGxpc3QtaXRlbVxuICAgICAgc2VtLWltcG9ydGFuY2U9XCJ0ZXJ0aWFyeVwiXG4gICAgICBjbGFzcz1cImNvcm5lcl90b3AgXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuYWN0aXZlXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIChjbGljayk9XCJ0YWJDbGlja2VkKHRhYilcIlxuICAgICAgICBbZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCI+XG4gICAgICAgIHt7dGFiLnRpdGxlfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gIDwvdWw+XG5cbiAgPGRpdiBjbGFzcz1cInRhYi1uYXZcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFiLW5hdl1cIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2VtdWktdGFiLWNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnc2VtdWktdGFicydcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIHNob3dUYWJzOiBib29sZWFuO1xuICBASW5wdXQoKSB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc3dpcGU6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xuXG4gIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmFjdGl2ZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgY29uc3QgYWN0aXZlcyA9IHRoaXMudGFicy5maWx0ZXIodCA9PiB0LmFjdGl2ZSk7XG5cbiAgICBpZihhY3RpdmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE11bHRpcGxlIGFjdGl2ZSB0YWJzIHNldCAnYWN0aXZlJ2ApO1xuICAgIH0gZWxzZSBpZighYWN0aXZlcy5sZW5ndGggJiYgdGFicy5sZW5ndGgpIHtcbiAgICAgIHRhYnNbMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCd0YWJzWzBdLmFjdGl2ZScsIHRhYnNbMF0uYWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICB0YWJDbGlja2VkKGFjdGl2ZVRhYik6IHZvaWQge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWN0aXZlID0gZmFsc2UpO1xuICAgIGFjdGl2ZVRhYi5hY3RpdmUgPSB0cnVlO1xuXG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZVRhYi5hY3RpdmUnLCBhY3RpdmVUYWIsIGFjdGl2ZVRhYi5hY3RpdmUpXG5cbiAgICB0aGlzLnNlbGVjdC5lbWl0KGFjdGl2ZVRhYik7XG4gIH1cblxuICBtb3ZlKG9mZnNldDogbnVtYmVyKSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7IGkgPCB0YWJzLmxlbmd0aCAmJiBpID49IDA7IGkgKz0gb2Zmc2V0KSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzW2ldO1xuICAgICAgaWYgKHRhYiAmJiAhdGFiLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMudGFiQ2xpY2tlZCh0YWJzW2ldKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgIHRoaXMubW92ZSgxKTtcbiAgfVxuXG4gIHByZXYoKTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlKC0xKTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGFicy90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB9IGZyb20gJy4uL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUxpc3RNb2R1bGUgfSBmcm9tICcuLi9saXN0L2xpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnQsIElmVGFiQWN0aXZlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1RhYkNvbXBvbmVudCwgVGFic0NvbXBvbmVudCwgSWZUYWJBY3RpdmVEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNlbVVpTGlzdE1vZHVsZSxcbiAgICBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVRhYnNNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktZm9ybS1maWVsZF0nLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwYWRkaW5nOjE1cHh9YF0sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWxhYmVsXVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1wcmVmaXhdXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWlucHV0XVwiPjwvbmctY29udGVudD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWZpZWxkJylcbiAgcHVibGljIGFkZEJhc2VDbGFzczogdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZmllbGQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3JtRmllbGRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRm9ybUZpZWxkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvcm1GaWVsZE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCB0eXBlIENvcm5lclR5cGUgPSAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgfCB1bmRlZmluZWQ7XG5leHBvcnQgdHlwZSBCdXR0b25JbXBvcnRhbmNlTGV2ZWwgPSAncHJpbWFyeScgfCAnbGluay1idXR0b24nIHwgJ3JvdW5kLWJ1dHRvbicgfCAnY29ybmVyLWJ1dHRvbicgfCB1bmRlZmluZWQ7XG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW0tYnRuLWZhYl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cblxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZztcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmc7XG4gIEBJbnB1dCgnbWVkaXVtJykgbWVkaXVtOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29ybmVyJykgY29ybmVyOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKSBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbXVpaW1wb3J0YW5jZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZztcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuXG4gIGdldENsYXNzZXMoKSB7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ0bi1mYWInKTtcbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZWRpdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2ludmVydGVkJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnaW52ZXJ0ZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdkZWZhdWx0X3NtYWxsJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGVmYXVsdF9zbWFsbCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdub25lJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX25vbmUnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAncmlnaHQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfcmlnaHQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnbGVmdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9sZWZ0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3RvcC1sZWZ0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3RvcC1sZWZ0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3RvcC1yaWdodCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtcmlnaHQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnYm90dG9tLXJpZ2h0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2JvdHRvbS1yaWdodCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdib3R0b20tbGVmdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tbGVmdCcpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idG4tZmFiLS0nO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnV0dG9uRmFiQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tZmFiLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQnV0dG9uRmFiQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0J1dHRvbkZhYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25GYWJNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsXG4gIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIENka092ZXJsYXlPcmlnaW4sXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIE92ZXJsYXlcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS12ZXJ0aWNhbCcsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5lZFwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cInBvc2l0aW9uc1wiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5U2Nyb2xsU3RyYXRlZ3ldPVwic2Nyb2xsU3RyYXRlZ3lcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhlaWdodF09XCJPdmVybGF5SGVpZ2h0XCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCIzMjBcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIjMwMFwiXG4gIChkZXRhY2gpPVwiY29ubmVjdGVkT3ZlcmxheURldGFjaCgpXCJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cInJlUG9zaXRpb24oJGV2ZW50KVwiXG4+XG4gIDxkaXYgI2RpYWxvZyByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbD1cIkRpYWxvZ1wiIGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci1mdWxsXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRMb2FkZWRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW292ZXJsYXktdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50IGltcGxlbWVudHMgIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXN7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nJykgZGlhbG9nOiBFbGVtZW50UmVmO1xuXG5cbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgb3ZlcmxheU9mZnNldFg7XG4gIE92ZXJsYXlIZWlnaHQ7XG4gIHNjcm9sbFN0cmF0ZWd5O1xuICBwb3NpdGlvbnM7XG4gIGJhY2tkcm9wQ2xhc3M7XG5cbiAgY29udGVudExvYWRlZCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xuICAgIHRoaXMub3ZlcmxheU9mZnNldFggPSAwO1xuICAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcbiAgICB0aGlzLnBvc2l0aW9ucyAgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXG4gICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxuICAgICAgKVxuICAgIF07XG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgY29uc3Qgb3ZlcmxheU9yaWdpbkVsID0gdGhpcy5vdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaXNPcGVuZWQpLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIHRoaXMuZGlhbG9nLCBldmVudCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YXAoIChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGNsb3NlJC5zdWJzY3JpYmUoKTtcblxuIH1cbiAgY29ubmVjdGVkT3ZlcmxheURldGFjaCgpIHtcbiAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xuICAgIGlmKGNoYW5nZXMuaXNPcGVuZWQuY3VycmVudFZhbHVlKXtcbiAgICAgIHRoaXMuY29udGVudExvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJlUG9zaXRpb24oaXRlbSl7XG4gICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcbiAgfVxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xuICAgIGlzT3BlbmVkID8gdGhpcy5vcGVuLmVtaXQoKSA6IHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBpc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgZGlhbG9nLCBldmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW092ZXJsYXlWZXJ0aWNhbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPdmVybGF5VmVydGljYWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpT3ZlcmxheVZlcnRpY2FsTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgQ29udGVudENoaWxkLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXNdJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VtLXVsLWljb24tbGlzdCBzZW0tdWxcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5cblxuXG48dWwgY2xhc3M9XCJidWxsZXQtaW5saW5lbGlzdCBwNFwiPlxuICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG48L3VsPlxuYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBhY3RpdmVpZDogbnVtYmVyO1xuXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZGF0YVNvdXJjZTogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgb3BlbmVkUGFyZW50OiBhbnkgPSBudWxsO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsZXZlbHM6IEFycmF5PE9iamVjdD4gPSBbXG4gICAge251bTogMCwgbmFtZTogJzEnfSxcbiAgICB7bnVtOiAxLCBuYW1lOiAnMid9XG4gIF07XG4gIHNlbGVjdGVkTGV2ZWwgPSB0aGlzLmxldmVsc1swXTtcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGFyZSBlbmFibGVkJylcbiAgICB0aGlzLmFjdGl2ZWlkID0gY2hhbmdlcy5hY3RpdmVpZC5jdXJyZW50VmFsdWU7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9udC1zaXplcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tzZW11aS1mb250LXNpemVzLWl0ZW1dJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXG4gIGNsYXNzPVwic2VtLWxpXCJcbiAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XG4gIDxuZy1jb250ZW50ICBzZWxlY3Q9XCJbbmF2bGlua11cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXZcbiAgKm5nSWY9XCJpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gXCJcbiAgY2xhc3M9XCJibG9ja1wiXG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLS1ib2R5XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3NpemUtc2VsZWN0b3JdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtUmVmOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgcHJpdmF0ZSBpbmRleFJlZiA9IC0xO1xuICBASW5wdXQoKSBwcml2YXRlIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgQElucHV0KCkgcHVibGljIGdyb3VwSWQ6IG51bWJlcjtcbiAgQElucHV0KCkgcHVibGljIGFjdGl2ZWlkOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBhY3RpdmVpZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNlbVVpRm9udFNpemVzQ29tcG9uZW50LFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtSW5kZXgoKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkSXRlbUluZGV4KCkge1xuICAgIGNvbnNvbGUubG9nKCdtdXMgYmUgY2FsbCBoZXJlJyk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5pbmRleFJlZikge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmdldEl0ZW1BdEluZGV4KCk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKHZhbHVlKSB7XG4gICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtID0gdmFsdWU7XG4gICAgY29uc29sZS5sb2coJ25ldyBvbmUnLCAgIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSk7XG4gIH1cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbVJlZjtcbiAgICBpZiAodGhpcy5pdGVtUmVmID09PSB0aGlzLnNlbGVjdGVkSXRlbSl7XG4gICAgICBjb25zb2xlLmxvZygndHJ1ZScpXG4gICAgICAvLyAgdGhpcy5zdHlsZUFzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xuICAgIC8vIHRoaXMuYWN0aXZlaWRDaGFuZ2UuZW1pdCh0aGlzLmdyb3VwSWQpO1xuICB9XG5cbiAgZ2V0IHBhcmVudExpc3QoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZGF0YVNvdXJjZTtcbiAgfVxuICBwcml2YXRlIGdldEl0ZW1BdEluZGV4KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFyZW50TGlzdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gdGhpcy5wYXJlbnRMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRMaXN0W3RoaXMuc2VsZWN0ZWRJbmRleF07XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnR9IGZyb20gJy4vc2VtLWZvbnQtc2l6ZXMtaXRlbS9zZW0tZm9udC1zaXplcy1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbVVpRm9udFNpemVzQ29tcG9uZW50fSBmcm9tICcuL2ZvbnQtc2l6ZXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VtVWlGb250U2l6ZXNDb21wb25lbnQsIFNlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZW1VaUZvbnRTaXplc0NvbXBvbmVudCwgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU2VtVWlDb21wb25lbnQgfSBmcm9tICcuL3NlbS11aS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25EbmRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUNhcmRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUxpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvbGlzdC9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUxhYmVsTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUZvcm1TZWxlY3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpVGh1bWJuYWlsTGFyZ2VNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvdGh1bWJuYWlsLWxhcmdlL3RodW1ibmFpbC1sYXJnZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlJY29uc0xpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaVJhaW5Ecm9wTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NlY3Rpb24tZm9vdGVyL3NlY3Rpb24tZm9vdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUlucHV0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2lucHV0L2lucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaU92ZXJsYXlEaWFsb2dNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpVGFic01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy90YWJzL3RhYnMubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25GYWJNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaU92ZXJsYXlWZXJ0aWNhbE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9vdmVybGF5LXZlcnRpY2FsL292ZXJsYXktdmVydGljYWwubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2ZvbnQtc2l6ZXMvZm9udC1zaXplcy5tb2R1bGUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9tYXRlcmlhbC1tYW5pZmVzdC9tYXRlcmlhbC1tYW5pZmVzdC5tb2R1bGUnO1xuXG5jb25zdCBVSU1PRFVMRVMgPSBbXG4gIE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUsXG4gIFNlbVVpQnV0dG9uTW9kdWxlLFxuICBTZW1VaUJ1dHRvbkZhYk1vZHVsZSxcbiAgU2VtVWlSYWluRHJvcE1vZHVsZSxcbiAgU2VtVWlMaXN0TW9kdWxlLFxuICBTZW1VaUxhYmVsTW9kdWxlLFxuICBTZW1VaUZvcm1TZWxlY3RNb2R1bGUsXG4gIFNlbVVpVGh1bWJuYWlsTGFyZ2VNb2R1bGUsXG4gIFNlbVVpSWNvbnNMaXN0TW9kdWxlLFxuICBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUsXG4gIFNlbVVpU2VjdGlvbkZvb3Rlck1vZHVsZSxcbiAgU2VtVWlDYXJkTW9kdWxlLFxuICBTZW1VaUlucHV0TW9kdWxlLFxuICBTZW1VaU92ZXJsYXlEaWFsb2dNb2R1bGUsXG4gIFNlbVVpT3ZlcmxheVZlcnRpY2FsTW9kdWxlLFxuICBTZW1VaVRhYnNNb2R1bGUsXG4gIFNlbVVpRm9ybUZpZWxkTW9kdWxlLFxuICBTZW1VaUZvbnRTaXplc01vZHVsZSxcbiAgU2VtVWlCdXR0b25EbmRNb2R1bGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgVUlNT0RVTEVTLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlbVVpQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlbVVpQ29tcG9uZW50LCBVSU1PRFVMRVNdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktaWNvbi1yb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgaWNvbi1yb3cgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJY29uUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWNvblJvd0NvbXBvbmVudCB9IGZyb20gJy4vaWNvbi1yb3cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtJY29uUm93Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ljb25Sb3dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEljb25Sb3dNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS1zd2l0Y2gtcm93JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHN3aXRjaC1yb3cgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTd2l0Y2hSb3dDb21wb25lbnQgfSBmcm9tICcuL3N3aXRjaC1yb3cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTd2l0Y2hSb3dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3dpdGNoUm93Q29tcG9uZW50XSxcblxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hSb3dNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS10aXRsZS1tYXJxdWVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHRpdGxlLW1hcnF1ZWUgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUaXRsZU1hcnF1ZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaXRsZU1hcnF1ZWVDb21wb25lbnQgfSBmcm9tICcuL3RpdGxlLW1hcnF1ZWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUaXRsZU1hcnF1ZWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGl0bGVNYXJxdWVlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUaXRsZU1hcnF1ZWVNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS10b2dnbGUtcm93JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHRvZ2dsZS1yb3cgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUb2dnbGVSb3dDb21wb25lbnQgfSBmcm9tICcuL3RvZ2dsZS1yb3cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2dnbGVSb3dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG9nZ2xlUm93Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVSb3dNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEO0lBK0RFOzs7OzZCQWxDZ0MsS0FBSztLQWtDcEI7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFFLENBQUE7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN6Qzs7OztJQUVELFVBQVU7O1FBQ1IsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7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