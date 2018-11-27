import { Injectable, ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, HostListener, ContentChild, TemplateRef, NgModule, Output, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, ViewChild, Directive, ContentChildren, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { __spread } from 'tslib';
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
var SemUiService = /** @class */ (function () {
    function SemUiService() {
    }
    SemUiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    SemUiService.ctorParameters = function () { return []; };
    /** @nocollapse */ SemUiService.ngInjectableDef = defineInjectable({ factory: function SemUiService_Factory() { return new SemUiService(); }, token: SemUiService, providedIn: "root" });
    return SemUiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiComponent = /** @class */ (function () {
    function SemUiComponent() {
    }
    /**
     * @return {?}
     */
    SemUiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SemUiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-sem-ui',
                    template: "\n    <p>\n      sem-ui works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    SemUiComponent.ctorParameters = function () { return []; };
    return SemUiComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                    template: "<ng-content></ng-content>\n"
                },] },
    ];
    /** @nocollapse */
    SemUiButtonDndComponent.ctorParameters = function () { return []; };
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
    return SemUiButtonDndComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiButtonDndModule = /** @class */ (function () {
    function SemUiButtonDndModule() {
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
    return SemUiButtonDndModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        this.styleElementTheme(this.semuiTheme);
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
    ButtonComponent.prototype.styleElementTheme = /**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiButtonModule = /** @class */ (function () {
    function SemUiButtonModule() {
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
    return SemUiButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'semui-card',
                    template: "\n    <p>\n      card works!\n    </p>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    return CardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiCardModule = /** @class */ (function () {
    function SemUiCardModule() {
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
    return SemUiCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
    }
    /**
     * @return {?}
     */
    ListItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addClasses(this.getClasses());
        this.styleElementTheme(this.semuiTheme);
    };
    /**
     * @param {?} classes
     * @return {?}
     */
    ListItemComponent.prototype.addClasses = /**
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        var _this = this;
        /** @type {?} */
        var spacer = this.classes ? '' : '';
        /** @type {?} */
        var base = ' sem-li--';
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
     * @return {?}
     */
    ListItemComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _classes = [];
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
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    ListItemComponent.prototype.styleElementTheme = /**
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
    ListItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: '[semui-list-item]',
                    template: "<ng-content></ng-content>\n"
                },] },
    ];
    /** @nocollapse */
    ListItemComponent.ctorParameters = function () { return []; };
    ListItemComponent.propDecorators = {
        item: [{ type: Input }],
        semuiTheme: [{ type: Input, args: ['sem-theme',] }],
        semImportance: [{ type: Input, args: ['sem-importance',] }],
        classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
        styleAsLightTheme: [{ type: HostBinding, args: ['class.sem-li-light',] }],
        styleAsDarkTheme: [{ type: HostBinding, args: ['class.sem-li-dark',] }]
    };
    return ListItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    /**
     * @return {?}
     */
    ListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.addClasses(this.getClasses());
        this.styleElementTheme(this.semuiTheme);
    };
    /**
     * @param {?} classes
     * @return {?}
     */
    ListComponent.prototype.addClasses = /**
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        var _this = this;
        /** @type {?} */
        var spacer = this.classes ? '' : '';
        /** @type {?} */
        var base = ' sem-ul--';
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
     * @return {?}
     */
    ListComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _classes = [];
        _classes.push(' sem-ul');
        return _classes;
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    ListComponent.prototype.styleElementTheme = /**
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
    ListComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: '[semui-list]',
                    template: "<ng-content select=\"[list-item]\"></ng-content>\n"
                },] },
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return []; };
    ListComponent.propDecorators = {
        semuiTheme: [{ type: Input, args: ['sem-theme',] }],
        classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
        styleAsLightTheme: [{ type: HostBinding, args: ['class.sem-ul-light',] }],
        styleAsDarkTheme: [{ type: HostBinding, args: ['class.sem-ul-dark',] }]
    };
    return ListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiListModule = /** @class */ (function () {
    function SemUiListModule() {
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
    return SemUiListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleElementByImportanceLevel(this.semuiImportance);
        this.setTheme(this.semuiTheme);
    };
    /**
     * Set component to be on dark or light.
     * @param {?} type
     * @return {?}
     */
    LabelComponent.prototype.setTheme = /**
     * Set component to be on dark or light.
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case ('light'):
                this.styleAsDark = true;
                break;
            case ('dark'):
                this.styleAsLight = true;
                break;
            default:
        }
    };
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @param {?} labelType
     * @return {?}
     */
    LabelComponent.prototype.styleElementByImportanceLevel = /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @param {?} labelType
     * @return {?}
     */
    function (labelType) {
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
    };
    LabelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'label[semui-label]',
                    template: "\n    <ng-content></ng-content>\n  "
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
    return LabelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiLabelModule = /** @class */ (function () {
    function SemUiLabelModule() {
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
    return SemUiLabelModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormSelectComponent = /** @class */ (function () {
    function FormSelectComponent() {
    }
    FormSelectComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'select[semui-form-select]',
                    template: "\n      <ng-content></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    FormSelectComponent.ctorParameters = function () { return []; };
    FormSelectComponent.propDecorators = {
        addBaseCssClass: [{ type: HostBinding, args: ['class.semui-select',] }]
    };
    return FormSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormOptionsComponent = /** @class */ (function () {
    function FormOptionsComponent() {
    }
    /**
     * @return {?}
     */
    FormOptionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FormOptionsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'option[semui-form-options]',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    FormOptionsComponent.ctorParameters = function () { return []; };
    FormOptionsComponent.propDecorators = {
        addBaseCssClass: [{ type: HostBinding, args: ['class.semui-option',] }]
    };
    return FormOptionsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiFormSelectModule = /** @class */ (function () {
    function SemUiFormSelectModule() {
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
    return SemUiFormSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ThumbnailLargeComponent = /** @class */ (function () {
    function ThumbnailLargeComponent() {
        /**
         * Css base class.
         */
        this.addBaseButtonCssClass = true;
    }
    /**
     * @return {?}
     */
    ThumbnailLargeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ThumbnailLargeComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'figure[semui-thumbnail]',
                    template: "<ng-content select=\"[card-image]\"></ng-content>\n\n<ng-content select=\"[sem-section-footer]\"></ng-content>\n\n\n\n",
                },] },
    ];
    /** @nocollapse */
    ThumbnailLargeComponent.ctorParameters = function () { return []; };
    ThumbnailLargeComponent.propDecorators = {
        addBaseButtonCssClass: [{ type: HostBinding, args: ['class.semui-thumbnail',] }]
    };
    return ThumbnailLargeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiThumbnailLargeModule = /** @class */ (function () {
    function SemUiThumbnailLargeModule() {
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
    return SemUiThumbnailLargeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconsListComponent = /** @class */ (function () {
    function IconsListComponent() {
    }
    /**
     * @return {?}
     */
    IconsListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    IconsListComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'semui-icons-list',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    IconsListComponent.ctorParameters = function () { return []; };
    return IconsListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiIconsListModule = /** @class */ (function () {
    function SemUiIconsListModule() {
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
    return SemUiIconsListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RainDropComponent = /** @class */ (function () {
    function RainDropComponent() {
    }
    /**
     * @return {?}
     */
    RainDropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    RainDropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'semui-rain-drop',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    RainDropComponent.ctorParameters = function () { return []; };
    return RainDropComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiRainDropModule = /** @class */ (function () {
    function SemUiRainDropModule() {
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
    return SemUiRainDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SectionHeaderComponent = /** @class */ (function () {
    function SectionHeaderComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    /**
     * @return {?}
     */
    SectionHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleElementByImportanceLevel(this.semuiImportance);
    };
    /**
     * Set component to be on dark or light.
     * @param {?} labelType
     * @return {?}
     */
    SectionHeaderComponent.prototype.styleElementByImportanceLevel = /**
     * Set component to be on dark or light.
     * @param {?} labelType
     * @return {?}
     */
    function (labelType) {
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
    };
    SectionHeaderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'div[semui-section-header]',
                    template: "\n    <ng-content></ng-content>\n  "
                },] },
    ];
    /** @nocollapse */
    SectionHeaderComponent.ctorParameters = function () { return []; };
    SectionHeaderComponent.propDecorators = {
        addBaseCssClass: [{ type: HostBinding, args: ['class.semui-header-section',] }],
        styleAsSmall: [{ type: HostBinding, args: ['class.small',] }],
        semuiImportance: [{ type: Input, args: ['semui-importance',] }],
        styleAsLarge: [{ type: HostBinding, args: ['class.large',] }]
    };
    return SectionHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiSectionHeaderModule = /** @class */ (function () {
    function SemUiSectionHeaderModule() {
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
    return SemUiSectionHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SectionFooterComponent = /** @class */ (function () {
    function SectionFooterComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    /**
     * @return {?}
     */
    SectionFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleElementByImportanceLevel(this.semuiImportance);
    };
    /**
     * Set component to be on dark or light.
     * @param {?} labelType
     * @return {?}
     */
    SectionFooterComponent.prototype.styleElementByImportanceLevel = /**
     * Set component to be on dark or light.
     * @param {?} labelType
     * @return {?}
     */
    function (labelType) {
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
    };
    SectionFooterComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'div[semui-section-footer]',
                    template: "\n    <ng-content></ng-content>\n  "
                },] },
    ];
    /** @nocollapse */
    SectionFooterComponent.ctorParameters = function () { return []; };
    SectionFooterComponent.propDecorators = {
        addBaseCssClass: [{ type: HostBinding, args: ['class.semui-footer-section',] }],
        styleAsSmall: [{ type: HostBinding, args: ['class.small',] }],
        semuiImportance: [{ type: Input, args: ['semui-importance',] }],
        styleAsLarge: [{ type: HostBinding, args: ['class.large',] }]
    };
    return SectionFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiSectionFooterModule = /** @class */ (function () {
    function SemUiSectionFooterModule() {
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
    return SemUiSectionFooterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.styleElementByType();
    };
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @return {?}
     */
    InputComponent.prototype.styleElementByType = /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @return {?}
     */
    function () {
        if ('form-input' === this.semuiType) {
            this.semuiTypeFormInput = true;
        }
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'input[semui-input]',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    InputComponent.propDecorators = {
        addFormBaseClass: [{ type: HostBinding, args: ['class.semui-form-input',] }],
        semuiType: [{ type: Input, args: ['semui-type',] }],
        semuiTypeFormInput: [{ type: HostBinding, args: ['class.semui-form-input',] }]
    };
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiInputModule = /** @class */ (function () {
    function SemUiInputModule() {
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
    return SemUiInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OverlayDialogComponent = /** @class */ (function () {
    function OverlayDialogComponent(overlay, changeDetectorRef) {
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
    OverlayDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        var close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter(function () { return _this.isOpened; }), filter(function (event) {
            return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
        }), tap(function (data) {
            _this.changeState(false);
        }));
        close$.subscribe();
    };
    /**
     * @return {?}
     */
    OverlayDialogComponent.prototype.connectedOverlayDetach = /**
     * @return {?}
     */
    function () {
        this.changeState(false);
    };
    /**
     * @return {?}
     */
    OverlayDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
    };
    /**
     * @param {?} isOpened
     * @return {?}
     */
    OverlayDialogComponent.prototype.changeState = /**
     * @param {?} isOpened
     * @return {?}
     */
    function (isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    OverlayDialogComponent.prototype.isClickedOutside = /**
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    function (overlayOriginEl, dialog, event) {
        return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
    };
    OverlayDialogComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'semui-overlay-dialog',
                    template: " <ng-template\n    cdkConnectedOverlay\n    [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n    [cdkConnectedOverlayOpen]=\"isOpened\"\n    [cdkConnectedOverlayMinWidth]=\"overlayWidth\"\n    (detach)=\"connectedOverlayDetach()\"\n  >\n    <div #dialog role=\"dialog\" aria-label=\"Dialog\" class=\"dialog-container\">\n      <ng-content select=\"[overlay-title]\"></ng-content>\n      <ng-content></ng-content>\n    </div>\n  </ng-template>\n"
                },] },
    ];
    /** @nocollapse */
    OverlayDialogComponent.ctorParameters = function () { return [
        { type: Overlay },
        { type: ChangeDetectorRef }
    ]; };
    OverlayDialogComponent.propDecorators = {
        overlayOrigin: [{ type: Input }],
        isOpened: [{ type: Input }],
        overlayWidth: [{ type: Input }],
        close: [{ type: Output }],
        open: [{ type: Output }],
        dialog: [{ type: ViewChild, args: ['dialog',] }]
    };
    return OverlayDialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var modules = [
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
var MaterialManifestModule = /** @class */ (function () {
    function MaterialManifestModule() {
    }
    MaterialManifestModule.decorators = [
        { type: NgModule, args: [{
                    // imports: [
                    //   CommonModule,
                    //   ...modules
                    // ],
                    // declarations: [],
                    exports: __spread(modules)
                },] },
    ];
    return MaterialManifestModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiOverlayDialogModule = /** @class */ (function () {
    function SemUiOverlayDialogModule() {
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
    return SemUiOverlayDialogModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IfTabActiveDirective = /** @class */ (function () {
    function IfTabActiveDirective(templateRef) {
        this.templateRef = templateRef;
    }
    IfTabActiveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxIfTabActive]'
                },] },
    ];
    /** @nocollapse */
    IfTabActiveDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return IfTabActiveDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
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
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TabComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'div[semui-tab]',
                    template: "\n    <div *ngIf=\"template; then template_container else content_container\"></div>\n    <ng-template #template_container>\n      <div *ngIf=\"active\">\n        <ng-container [ngTemplateOutlet]=\"template.templateRef\"></ng-container>\n      </div>\n    </ng-template>\n    <ng-template #content_container>\n      <div [hidden]=\"!active\">\n        <ng-content></ng-content>\n      </div>\n    </ng-template>\n  ",
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
    return TabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.select = new EventEmitter();
    }
    Object.defineProperty(TabsComponent.prototype, "index", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tabs = this.tabs.toArray();
            return tabs.findIndex(function (tab) { return tab.active; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tabs = this.tabs.toArray();
        /** @type {?} */
        var actives = this.tabs.filter(function (t) { return t.active; });
        if (actives.length > 1) {
            console.error("Multiple active tabs set 'active'");
        }
        else if (!actives.length && tabs.length) {
            tabs[0].active = true;
            console.log('tabs[0].active', tabs[0].active);
        }
    };
    /**
     * @param {?} activeTab
     * @return {?}
     */
    TabsComponent.prototype.tabClicked = /**
     * @param {?} activeTab
     * @return {?}
     */
    function (activeTab) {
        /** @type {?} */
        var tabs = this.tabs.toArray();
        tabs.forEach(function (tab) { return tab.active = false; });
        activeTab.active = true;
        console.log('activeTab.active', activeTab, activeTab.active);
        this.select.emit(activeTab);
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    TabsComponent.prototype.move = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        /** @type {?} */
        var tabs = this.tabs.toArray();
        for (var i = this.index + offset; i < tabs.length && i >= 0; i += offset) {
            /** @type {?} */
            var tab = tabs[i];
            if (tab && !tab.disabled) {
                this.tabClicked(tabs[i]);
                return;
            }
        }
    };
    /**
     * @return {?}
     */
    TabsComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        console.log('clicked');
        this.move(1);
    };
    /**
     * @return {?}
     */
    TabsComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        this.move(-1);
    };
    TabsComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'div[semui-tabs]',
                    template: "<section\n  [class.tabs-vertical]=\"vertical\"\n  [class.tabs-horizontal]=\"!vertical\"\n  [class.swipe]=\"swipe\"\n>\n\n  <ng-container *ngIf=\"showTabs && vertical\">\n    <ng-content select=\"[tabs-header]\"></ng-content>\n\n    <ul\n      class=\"semui-tabs--navlist_horizontal\"\n      [class.tabs-vertical]=\"vertical\">\n      <li\n        *ngFor=\"let tab of tabs\"\n        class=\"semui-tab\"\n        [class.disabled]=\"tab.disabled\"\n        [class.active]=\"tab.active\">\n        <button\n          class=\"tabs--button\"\n          (click)=\"tabClicked(tab)\"\n          [disabled]=\"tab.disabled\">\n          {{tab.title}}\n        </button>\n      </li>\n    </ul>\n\n  </ng-container>\n\n  <ul\n\n    *ngIf=\"!vertical && showTabs\"\n    semui-list\n    class=\"semui-tabs-list list-reset\"\n    [class.tabs-horizontal]=\"!vertical\">\n    <li\n      *ngFor=\"let tab of tabs\"\n      semui-list-item\n      list-item\n      sem-importance=\"tertiary\"\n      class=\"corner_top \"\n      [class.disabled]=\"tab.disabled\"\n      [class.active]=\"tab.active\">\n      <button\n        (click)=\"tabClicked(tab)\"\n        [disabled]=\"tab.disabled\">\n        {{tab.title}}\n      </button>\n    </li>\n  </ul>\n\n  <div class=\"tab-nav\">\n    <ng-content select=\"[tab-nav]\"></ng-content>\n  </div>\n  <div class=\"semui-tab-content\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
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
    return TabsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiTabsModule = /** @class */ (function () {
    function SemUiTabsModule() {
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
    return SemUiTabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormFieldComponent = /** @class */ (function () {
    function FormFieldComponent() {
    }
    /**
     * @return {?}
     */
    FormFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FormFieldComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'div[semui-form-field]',
                    styles: [":host{display:block;padding:15px}"],
                    template: "<ng-content select=\"[field-label]\"></ng-content>\n<ng-content select=\"[field-prefix]\"></ng-content>\n<ng-content select=\"[field-input]\"></ng-content>\n"
                },] },
    ];
    /** @nocollapse */
    FormFieldComponent.ctorParameters = function () { return []; };
    FormFieldComponent.propDecorators = {
        addBaseClass: [{ type: HostBinding, args: ['class.semui-form-field',] }]
    };
    return FormFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiFormFieldModule = /** @class */ (function () {
    function SemUiFormFieldModule() {
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
    return SemUiFormFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiButtonFabModule = /** @class */ (function () {
    function SemUiButtonFabModule() {
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
    return SemUiButtonFabModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OverlayVerticalComponent = /** @class */ (function () {
    function OverlayVerticalComponent(overlay, changeDetectorRef, renderer) {
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
    OverlayVerticalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.backdropClass = 'cdkOverlayFullHeight';
        this.overlayOffsetX = 0;
        this.OverlayHeight = '100%';
        this.positions = [
            new ConnectionPositionPair({ originY: 'center', originX: 'end' }, { overlayX: 'start', overlayY: 'top' })
        ];
        this.scrollStrategy = this.overlay.scrollStrategies.block();
        /** @type {?} */
        var overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        var close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter(function () { return _this.isOpened; }), filter(function (event) {
            _this.dialog.nativeElement.parentNode.style.top = '0';
            return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
        }), tap(function (data) {
            _this.changeState(false);
        }));
        close$.subscribe();
    };
    /**
     * @return {?}
     */
    OverlayVerticalComponent.prototype.connectedOverlayDetach = /**
     * @return {?}
     */
    function () {
        this.changeState(false);
    };
    /**
     * @return {?}
     */
    OverlayVerticalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    OverlayVerticalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["isOpened"].currentValue) {
            this.contentLoaded = true;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    OverlayVerticalComponent.prototype.rePosition = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.dialog.nativeElement.parentNode.style.top = '0';
    };
    /**
     * @param {?} isOpened
     * @return {?}
     */
    OverlayVerticalComponent.prototype.changeState = /**
     * @param {?} isOpened
     * @return {?}
     */
    function (isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    OverlayVerticalComponent.prototype.isClickedOutside = /**
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    function (overlayOriginEl, dialog, event) {
        return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
    };
    OverlayVerticalComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'semui-overlay-vertical',
                    template: "<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"isOpened\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayScrollStrategy]=\"scrollStrategy\"\n  [cdkConnectedOverlayHeight]=\"OverlayHeight\"\n  [cdkConnectedOverlayWidth]=\"320\"\n  [cdkConnectedOverlayMinWidth]=\"300\"\n  (detach)=\"connectedOverlayDetach()\"\n  (positionChange)=\"rePosition($event)\"\n>\n  <div #dialog role=\"dialog\" aria-label=\"Dialog\" class=\"dialog-container-full\">\n    <ng-container *ngIf=\"contentLoaded\">\n        <ng-content select=\"[overlay-title]\"></ng-content>\n        <ng-content></ng-content>\n    </ng-container>\n  </div>\n</ng-template>\n"
                },] },
    ];
    /** @nocollapse */
    OverlayVerticalComponent.ctorParameters = function () { return [
        { type: Overlay },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    OverlayVerticalComponent.propDecorators = {
        overlayOrigin: [{ type: Input }],
        isOpened: [{ type: Input }],
        close: [{ type: Output }],
        open: [{ type: Output }],
        dialog: [{ type: ViewChild, args: ['dialog',] }]
    };
    return OverlayVerticalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiOverlayVerticalModule = /** @class */ (function () {
    function SemUiOverlayVerticalModule() {
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
    return SemUiOverlayVerticalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiFontSizesComponent = /** @class */ (function () {
    function SemUiFontSizesComponent() {
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
    SemUiFontSizesComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        console.log('changes are enabled');
        this.activeid = changes["activeid"].currentValue;
    };
    SemUiFontSizesComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[semui-font-sizes]',
                    template: "<div class=\"sem-ul-icon-list sem-ul\">\n  <ng-content></ng-content>\n</div>\n\n\n\n<ul class=\"bullet-inlinelist p4\">\n  <li class=\"active\">\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SemUiFontSizesComponent.ctorParameters = function () { return []; };
    SemUiFontSizesComponent.propDecorators = {
        activeid: [{ type: Input }],
        template: [{ type: ContentChild, args: [TemplateRef,] }],
        dataSource: [{ type: Input }],
        selectedItem: [{ type: Input }],
        openedParent: [{ type: Input }]
    };
    return SemUiFontSizesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiFontSizesItemComponent = /** @class */ (function () {
    function SemUiFontSizesItemComponent(element, renderer, parent) {
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
    SemUiFontSizesItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setSelectedItemIndex();
    };
    /**
     * @return {?}
     */
    SemUiFontSizesItemComponent.prototype.setSelectedItemIndex = /**
     * @return {?}
     */
    function () {
        console.log('mus be call here');
        if (this.selectedIndex === this.indexRef) {
            this.selectedItem = this.getItemAtIndex();
        }
    };
    Object.defineProperty(SemUiFontSizesItemComponent.prototype, "selectedItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.selectedItem;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.parent.selectedItem = value;
            console.log('new one', this.parent.selectedItem);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SemUiFontSizesItemComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.selectedItem = this.itemRef;
        if (this.itemRef === this.selectedItem) {
            console.log('true');
            //  this.styleAsActive = true;
        }
        this.change.emit(this.parent.selectedItem);
        // this.activeidChange.emit(this.groupId);
    };
    Object.defineProperty(SemUiFontSizesItemComponent.prototype, "parentList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SemUiFontSizesItemComponent.prototype.getItemAtIndex = /**
     * @return {?}
     */
    function () {
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
    };
    SemUiFontSizesItemComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[semui-font-sizes-item]',
                    template: "<div\n  [ngClass]=\"{ 'active' : itemRef === selectedItem }\"\n  class=\"sem-li\"\n  (click)=\"toggle()\">\n  <ng-content  select=\"[navlink]\"></ng-content>\n</div>\n<div\n  *ngIf=\"itemRef === selectedItem \"\n  class=\"block\"\n  [ngClass]=\"{ 'active' : itemRef === selectedItem }\"\n>\n  <div class=\"dialog-container--body\">\n    <ng-content select=\"[size-selector]\"></ng-content>\n  </div>\n</div>\n\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SemUiFontSizesItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: SemUiFontSizesComponent }
    ]; };
    SemUiFontSizesItemComponent.propDecorators = {
        itemRef: [{ type: Input }],
        indexRef: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        groupId: [{ type: Input }],
        activeid: [{ type: Input }],
        activeidChange: [{ type: Output }],
        change: [{ type: Output }]
    };
    return SemUiFontSizesItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SemUiFontSizesModule = /** @class */ (function () {
    function SemUiFontSizesModule() {
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
    return SemUiFontSizesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var UIMODULES = [
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
var SemUiModule = /** @class */ (function () {
    function SemUiModule() {
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
    return SemUiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconRowComponent = /** @class */ (function () {
    function IconRowComponent() {
    }
    /**
     * @return {?}
     */
    IconRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    IconRowComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'semui-icon-row',
                    template: "\n    <p>\n      icon-row works!\n    </p>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    IconRowComponent.ctorParameters = function () { return []; };
    return IconRowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconRowModule = /** @class */ (function () {
    function IconRowModule() {
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
    return IconRowModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SwitchRowComponent = /** @class */ (function () {
    function SwitchRowComponent() {
    }
    /**
     * @return {?}
     */
    SwitchRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SwitchRowComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'semui-switch-row',
                    template: "\n    <p>\n      switch-row works!\n    </p>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SwitchRowComponent.ctorParameters = function () { return []; };
    return SwitchRowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SwitchRowModule = /** @class */ (function () {
    function SwitchRowModule() {
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
    return SwitchRowModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TitleMarqueeComponent = /** @class */ (function () {
    function TitleMarqueeComponent() {
    }
    /**
     * @return {?}
     */
    TitleMarqueeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TitleMarqueeComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'semui-title-marquee',
                    template: "\n    <p>\n      title-marquee works!\n    </p>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    TitleMarqueeComponent.ctorParameters = function () { return []; };
    return TitleMarqueeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TitleMarqueeModule = /** @class */ (function () {
    function TitleMarqueeModule() {
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
    return TitleMarqueeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToggleRowComponent = /** @class */ (function () {
    function ToggleRowComponent() {
    }
    /**
     * @return {?}
     */
    ToggleRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ToggleRowComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'semui-toggle-row',
                    template: "\n    <p>\n      toggle-row works!\n    </p>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    ToggleRowComponent.ctorParameters = function () { return []; };
    return ToggleRowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ToggleRowModule = /** @class */ (function () {
    function ToggleRowModule() {
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
    return ToggleRowModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SemUiService, SemUiComponent, SemUiModule, SemUiButtonModule, SemUiButtonDndModule, SemUiButtonFabModule, SemUiCardModule, SemUiFormFieldModule, SemUiFormSelectModule, IconRowModule, SemUiIconsListModule, SemUiInputModule, SemUiLabelModule, SemUiListModule, SemUiOverlayDialogModule, SemUiOverlayVerticalModule, SemUiSectionFooterModule, SemUiSectionHeaderModule, SwitchRowModule, SemUiTabsModule, SemUiThumbnailLargeModule, TitleMarqueeModule, ToggleRowModule, SemUiButtonDndComponent as ɵz, ButtonFabComponent as ɵc, ButtonComponent as ɵb, CardComponent as ɵo, SemUiFontSizesComponent as ɵx, SemUiFontSizesModule as ɵw, SemUiFontSizesItemComponent as ɵy, FormFieldComponent as ɵv, FormOptionsComponent as ɵj, FormSelectComponent as ɵi, IconRowComponent as ɵba, IconsListComponent as ɵl, InputComponent as ɵp, LabelComponent as ɵh, ListItemComponent as ɵf, ListComponent as ɵg, MaterialManifestModule as ɵa, OverlayDialogComponent as ɵq, OverlayVerticalComponent as ɵr, RainDropComponent as ɵe, SemUiRainDropModule as ɵd, SectionFooterComponent as ɵn, SectionHeaderComponent as ɵm, SwitchRowComponent as ɵbb, IfTabActiveDirective as ɵt, TabComponent as ɵs, TabsComponent as ɵu, ThumbnailLargeComponent as ɵk, TitleMarqueeComponent as ɵbc, ToggleRowComponent as ɵbd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS11aS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL3NlbS11aS5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9jYXJkL2NhcmQubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xpc3QvbGlzdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGFiZWwvbGFiZWwubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2Zvcm0tc2VsZWN0L2Zvcm0tb3B0aW9ucy9mb3JtLW9wdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RodW1ibmFpbC1sYXJnZS90aHVtYm5haWwtbGFyZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvcmFpbi1kcm9wL3JhaW4tZHJvcC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWZvb3Rlci9zZWN0aW9uLWZvb3Rlci5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaW5wdXQvaW5wdXQubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL3RhYi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbi1yb3cvaWNvbi1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pY29uLXJvdy9pY29uLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VtLXVpJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHNlbS11aSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW11aS1idXR0b24tZG5kXSwgZGl2W3NlbXVpLWJ1dHRvbi1kbmRdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3hzbWFsbCcpIHhzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3NtYWxsJykgc21hbGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdmdWxsJykgZnVsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbWVkaXVtJykgbWVkaXVtOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblxuXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcbiAgcHVibGljIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xuXG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW1JbXBvcnRhbmNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG5cbiAgZ2V0Q2xhc3Nlcygpe1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idXR0b24tZG5kICcpO1xuICAgIGlmICh0aGlzLmJsb2NrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZ1bGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZWRpdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNtYWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnhzbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCd4c21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWJ1dHRvbi1kbmQtLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSkge1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tZG5kLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2VtVWlCdXR0b25EbmRDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTZW1VaUJ1dHRvbkRuZENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRG5kTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIGJ1dHRvbiBpbXBvcnRhbmNlIGxldmVscy5cbiAqL1xuXG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW0tYnV0dG9uXSwgZGl2W3NlbS1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgb25DbGljayhidG4pIHtcbiAgICB0aGlzLnN0eWxlQXNBY3RpdmUgPSAhdGhpcy5zdHlsZUFzQWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW0tdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG5cbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2Z1bGwnKSBmdWxsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnYmxvY2snKSBibG9jazogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2xpbmtidXR0b24nKSBsaW5rYnV0dG9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnZGlzYWJsZWQnKSBkaXNhYmxlZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2ljb25vbmx5JykgaWNvbm9ubHk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuXG4gIGdldENsYXNzZXMoKXtcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tYnV0dG9uJyk7XG4gICAgaWYgKHRoaXMuYmxvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnYmxvY2snKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnVsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdmdWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhcmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xhcmdlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNtYWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaWNvbm9ubHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnaWNvbm9ubHknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdsaW5rX3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rX3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlua2J1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XG4gICAgY29uc3QgYmFzZSA9ICdzZW0tYnV0dG9uLS0nO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCdXR0b25Db21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCdXR0b25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbXVpLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgY2FyZCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FyZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUNhcmRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0SXRlbVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvbGlzdC10eXBlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID1cbiAgICAnbGlnaHQnXG4gIHwgJ2RhcmsnXG4gIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbc2VtdWktbGlzdC1pdGVtXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IExpc3RJdGVtVHlwZTtcbiAgQElucHV0KCdzZW0tdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW1JbXBvcnRhbmNlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cblxuXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xuICAgIGNvbnN0IGJhc2UgPSAnIHNlbS1saS0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldENsYXNzZXMoKSB7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWxpJyk7XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkZWZhdWx0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgncHJpbWFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICd0ZXJ0aWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3RlcnRpYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdkYW5nZXInKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkYW5nZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpIHtcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9XG4gICAgJ2xpZ2h0J1xuICB8ICdkYXJrJ1xuICB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWxpc3RdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJbbGlzdC1pdGVtXVwiPjwvbmctY29udGVudD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcbiAgcHVibGljIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZztcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW0tdWwtbGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW0tdWwtZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG5cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJyBzZW0tdWwtLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXRDbGFzc2VzKCkge1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS11bCcpO1xuICAgIHJldHVybiBfY2xhc3NlcztcbiAgfVxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKXtcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTGlzdEl0ZW1Db21wb25lbnQsIExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGlzdEl0ZW1Db21wb25lbnQsIExpc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUxpc3RNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIGJ1dHRvbiBpbXBvcnRhbmNlIGxldmVscy5cbiAqL1xuZXhwb3J0IHR5cGUgTGFiZWxJbXBvcnRhbmNlTGV2ZWwgPSAnc21hbGwnIHwgJ2xhcmdlJyB8IHVuZGVmaW5lZDtcbmV4cG9ydCB0eXBlIExhYmVsVGhlbWUgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2xhYmVsW3NlbXVpLWxhYmVsXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1sYWJlbCcpXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcIm1lZGl1bVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWVkaXVtJylcbiAgcHVibGljIHN0eWxlQXNNZWRpdW06IGJvb2xlYW47XG5cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXG4gIHB1YmxpYyBzdHlsZUFzTGFyZ2U6IGJvb2xlYW47XG5cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb3JtLWxhYmVsJylcbiAgcHVibGljIHN0eWxlQXNGb3JtTGFiZWw6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXG4gIHB1YmxpYyBzZW11aUltcG9ydGFuY2U6IExhYmVsSW1wb3J0YW5jZUxldmVsO1xuXG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFyazogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHQ6IGJvb2xlYW47XG5cblxuICAvKipcbiAgICogTGFiZWwgdGhlbWUgaW4gdGVybXMgb2YgbGlnaHQvZGFyay5cbiAgICovXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogTGFiZWxUaGVtZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcbiAgICB0aGlzLnNldFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgdG8gYmUgb24gZGFyayBvciBsaWdodC5cbiAgICovXG4gIHByaXZhdGUgc2V0VGhlbWUodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmsgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdkYXJrJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCdzIHByb3BlcnRpZXMgYm91bmQgdG9cbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cbiAgICovXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XG5cbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xuICAgICAgY2FzZSAoJ3NtYWxsJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnbWVkaXVtJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc01lZGl1bSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2xhcmdlJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZm9ybS1sYWJlbCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNGb3JtTGFiZWwgPSB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTGFiZWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTGFiZWxDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpTGFiZWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZWxlY3Rbc2VtdWktZm9ybS1zZWxlY3RdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcblxufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VsZWN0Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBSdWJpeCBidXR0b24gY3NzIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1zZWxlY3QnKVxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzOiB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnb3B0aW9uW3NlbXVpLWZvcm0tb3B0aW9uc10nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBBbHdheXMgYXBwbHkgdGhlIGJhc2UgUnViaXggYnV0dG9uIGNzcyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktb3B0aW9uJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzczogdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybU9wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tb3B0aW9ucy9mb3JtLW9wdGlvbnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3JtU2VsZWN0Q29tcG9uZW50LCBGb3JtT3B0aW9uc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6W0Zvcm1TZWxlY3RDb21wb25lbnQsIEZvcm1PcHRpb25zQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvcm1TZWxlY3RNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdmaWd1cmVbc2VtdWktdGh1bWJuYWlsXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NhcmQtaW1hZ2VdXCI+PC9uZy1jb250ZW50PlxuXG48bmctY29udGVudCBzZWxlY3Q9XCJbc2VtLXNlY3Rpb24tZm9vdGVyXVwiPjwvbmctY29udGVudD5cblxuXG5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFRodW1ibmFpbExhcmdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS10aHVtYm5haWwnKVxuICBwdWJsaWMgYWRkQmFzZUJ1dHRvbkNzc0NsYXNzID0gdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaHVtYm5haWxMYXJnZUNvbXBvbmVudCB9IGZyb20gJy4vdGh1bWJuYWlsLWxhcmdlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGh1bWJuYWlsTGFyZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGh1bWJuYWlsTGFyZ2VDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbXVpLWljb25zLWxpc3QnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEljb25zTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb25zTGlzdENvbXBvbmVudCB9IGZyb20gJy4vaWNvbnMtbGlzdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ljb25zTGlzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtJY29uc0xpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpSWNvbnNMaXN0TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbXVpLXJhaW4tZHJvcCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmFpbkRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSYWluRHJvcENvbXBvbmVudCB9IGZyb20gJy4vcmFpbi1kcm9wLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmFpbkRyb3BDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUmFpbkRyb3BDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpUmFpbkRyb3BNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSAgSGVhZGVySW1wb3J0YW5jZUxldmVsID0gJycgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS1zZWN0aW9uLWhlYWRlcl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1oZWFkZXItc2VjdGlvbicpXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogSGVhZGVySW1wb3J0YW5jZUxldmVsO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXG4gICAqL1xuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKGxhYmVsVHlwZSkge1xuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XG4gICAgICBjYXNlICgnc21hbGwnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzU21hbGwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24taGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VjdGlvbkhlYWRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWN0aW9uSGVhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBGb290ZXJJbXBvcnRhbmNlTGV2ZWwgPSAnJyB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXNlY3Rpb24tZm9vdGVyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvb3Rlci1zZWN0aW9uJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc21hbGwnKVxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbXVpLWltcG9ydGFuY2UnKVxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBGb290ZXJJbXBvcnRhbmNlTGV2ZWw7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGFyZ2UnKVxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbCh0aGlzLnNlbXVpSW1wb3J0YW5jZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgdG8gYmUgb24gZGFyayBvciBsaWdodC5cbiAgICovXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XG4gICAgc3dpdGNoIChsYWJlbFR5cGUpIHtcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2xhcmdlJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VjdGlvbkZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi1mb290ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZWN0aW9uRm9vdGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlY3Rpb25Gb290ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpU2VjdGlvbkZvb3Rlck1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgSW5wdXRUeXBlID0gJ2Zvcm0taW5wdXQnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpbnB1dFtzZW11aS1pbnB1dF0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBTZW11aSBidXR0b24gY3NzIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcbiAgcHJpdmF0ZSBhZGRGb3JtQmFzZUNsYXNzOiB0cnVlO1xuXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkgb3Igc2Vjb25kYXJ5LlxuICAgKiBQcmltYXJ5IHNldHMgYXMgcm91bmQgY29ybmVycyBhbmQgc2hhcnAgZWRnZSwgc2Vjb25kYXJ5IGlzIGFsbCByb3VuZFxuICAgKi9cbiAgQElucHV0KCdzZW11aS10eXBlJylcbiAgcHVibGljIHNlbXVpVHlwZTogSW5wdXRUeXBlO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic2VtdWktZm9ybS1pbnB1dFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXG4gIHB1YmxpYyBzZW11aVR5cGVGb3JtSW5wdXQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5VHlwZSgpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xuICAgKiB0aGUgaG9zdCBlbGVtZW50IENTUyBjbGFzc2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeVR5cGUoKSB7XG5cbiAgICBpZiAoJ2Zvcm0taW5wdXQnID09PSB0aGlzLnNlbXVpVHlwZSkge1xuICAgICAgdGhpcy5zZW11aVR5cGVGb3JtSW5wdXQgPSB0cnVlO1xuICAgIH1cblxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gJy4vaW5wdXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtJbnB1dENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpSW5wdXRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsXG4gIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDZGtPdmVybGF5T3JpZ2luLFxuICBPdmVybGF5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRhcCAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycyc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50Jztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGVcbiAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXG4gICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlbmVkXCJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIm92ZXJsYXlXaWR0aFwiXG4gICAgKGRldGFjaCk9XCJjb25uZWN0ZWRPdmVybGF5RGV0YWNoKClcIlxuICA+XG4gICAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyXCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3ZlcmxheS10aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyAgT25EZXN0cm95LCBPbkluaXQgIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIEBJbnB1dCgpIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIEBJbnB1dCgpIGlzT3BlbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG92ZXJsYXlXaWR0aDogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY7XG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAvL1xuICAvLyBvdmVybGF5T2Zmc2V0WDtcbiAgLy8gT3ZlcmxheUhlaWdodDtcbiAgLy8gc2Nyb2xsU3RyYXRlZ3k7XG4gIC8vIHBvc2l0aW9ucztcbiAgLy8gYmFja2Ryb3BDbGFzcztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIC8vICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xuICAgIC8vICAgdGhpcy5vdmVybGF5T2Zmc2V0WCA9IDA7XG4gICAgLy8gICB0aGlzLk92ZXJsYXlIZWlnaHQgPSAnMTAwJSc7XG4gICAgLy8gICB0aGlzLnBvc2l0aW9ucyAgPSBbXG4gICAgLy8gICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgIC8vICAgICAgIHtvcmlnaW5ZOiAnY2VudGVyJywgb3JpZ2luWDogJ2VuZCd9LFxuICAgIC8vICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxuICAgIC8vICAgICApXG4gICAgLy8gICBdO1xuICAgIC8vICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG5cblxuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblxuXG4gICAgY29uc3QgY2xvc2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc09wZW5lZCksXG4gICAgICAgIGZpbHRlcihldmVudCA9PiB7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgdGhpcy5kaWFsb2csIGV2ZW50KVxuICAgICAgICB9KSxcbiAgICAgICAgdGFwKCAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgIGNsb3NlJC5zdWJzY3JpYmUoKTtcbiAgfVxuICBjb25uZWN0ZWRPdmVybGF5RGV0YWNoKCkge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShpc09wZW5lZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuZWQgPSBpc09wZW5lZDtcbiAgICBpc09wZW5lZCA/IHRoaXMub3Blbi5lbWl0KCkgOiB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIGRpYWxvZywgZXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIShvdmVybGF5T3JpZ2luRWwuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSB8fCBkaWFsb2cubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudFsndGFyZ2V0J10pKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE9ic2VydmVyc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTY3JvbGxEaXNwYXRjaE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgQ2RrU3RlcHBlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgLy8gQ0RLXG4gIEExMXlNb2R1bGUsXG4gIEJpZGlNb2R1bGUsXG4gIE9ic2VydmVyc01vZHVsZSxcbiAgT3ZlcmxheU1vZHVsZSxcbiAgUGxhdGZvcm1Nb2R1bGUsXG4gIFBvcnRhbE1vZHVsZSxcbiAgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsXG4gIENka1N0ZXBwZXJNb2R1bGUsXG4gIENka1RhYmxlTW9kdWxlLFxuXVxuXG5cbkBOZ01vZHVsZSh7XG4gIC8vIGltcG9ydHM6IFtcbiAgLy8gICBDb21tb25Nb2R1bGUsXG4gIC8vICAgLi4ubW9kdWxlc1xuICAvLyBdLFxuICAvLyBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbIC4uLm1vZHVsZXMgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIHtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUgfSBmcm9tICcuLi9tYXRlcmlhbC1tYW5pZmVzdC9tYXRlcmlhbC1tYW5pZmVzdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW092ZXJsYXlEaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiAgW092ZXJsYXlEaWFsb2dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpT3ZlcmxheURpYWxvZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neElmVGFiQWN0aXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgSWZUYWJBY3RpdmVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBUT0RPOiBSZW1vdmUgaGlkZGVuIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgzMTAgaXMgcmVzb2x2ZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFiXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cInRlbXBsYXRlOyB0aGVuIHRlbXBsYXRlX2NvbnRhaW5lciBlbHNlIGNvbnRlbnRfY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZV9jb250YWluZXI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiYWN0aXZlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGUudGVtcGxhdGVSZWZcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50X2NvbnRhaW5lcj5cbiAgICAgIDxkaXYgW2hpZGRlbl09XCIhYWN0aXZlXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3NlbXVpLXRhYidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBDc3MgYmFzZSBjbGFzcy5cbiAgICovXG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kZWZhdWx0JylcbiAgcHVibGljIGFkZEJhc2VCdXR0b25Dc3NDbGFzcyA9IHRydWU7XG5cbiAgQElucHV0KCkgdGl0bGUgPSAnJztcblxuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoSWZUYWJBY3RpdmVEaXJlY3RpdmUpIHRlbXBsYXRlOiBJZlRhYkFjdGl2ZURpcmVjdGl2ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBhY3RpdmVDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCl7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEV2ZW50RW1pdHRlcixcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyQ29udGVudEluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS10YWJzXScsXG4gIHRlbXBsYXRlOiBgPHNlY3Rpb25cbiAgW2NsYXNzLnRhYnMtdmVydGljYWxdPVwidmVydGljYWxcIlxuICBbY2xhc3MudGFicy1ob3Jpem9udGFsXT1cIiF2ZXJ0aWNhbFwiXG4gIFtjbGFzcy5zd2lwZV09XCJzd2lwZVwiXG4+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dUYWJzICYmIHZlcnRpY2FsXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYnMtaGVhZGVyXVwiPjwvbmctY29udGVudD5cblxuICAgIDx1bFxuICAgICAgY2xhc3M9XCJzZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWxcIlxuICAgICAgW2NsYXNzLnRhYnMtdmVydGljYWxdPVwidmVydGljYWxcIj5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxuICAgICAgICBjbGFzcz1cInNlbXVpLXRhYlwiXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwidGFicy0tYnV0dG9uXCJcbiAgICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2tlZCh0YWIpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCI+XG4gICAgICAgICAge3t0YWIudGl0bGV9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cblxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dWxcblxuICAgICpuZ0lmPVwiIXZlcnRpY2FsICYmIHNob3dUYWJzXCJcbiAgICBzZW11aS1saXN0XG4gICAgY2xhc3M9XCJzZW11aS10YWJzLWxpc3QgbGlzdC1yZXNldFwiXG4gICAgW2NsYXNzLnRhYnMtaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIj5cbiAgICA8bGlcbiAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiXG4gICAgICBzZW11aS1saXN0LWl0ZW1cbiAgICAgIGxpc3QtaXRlbVxuICAgICAgc2VtLWltcG9ydGFuY2U9XCJ0ZXJ0aWFyeVwiXG4gICAgICBjbGFzcz1cImNvcm5lcl90b3AgXCJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuYWN0aXZlXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIChjbGljayk9XCJ0YWJDbGlja2VkKHRhYilcIlxuICAgICAgICBbZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCI+XG4gICAgICAgIHt7dGFiLnRpdGxlfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gIDwvdWw+XG5cbiAgPGRpdiBjbGFzcz1cInRhYi1uYXZcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFiLW5hdl1cIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2VtdWktdGFiLWNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnc2VtdWktdGFicydcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIHNob3dUYWJzOiBib29sZWFuO1xuICBASW5wdXQoKSB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc3dpcGU6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xuXG4gIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmFjdGl2ZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgY29uc3QgYWN0aXZlcyA9IHRoaXMudGFicy5maWx0ZXIodCA9PiB0LmFjdGl2ZSk7XG5cbiAgICBpZihhY3RpdmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE11bHRpcGxlIGFjdGl2ZSB0YWJzIHNldCAnYWN0aXZlJ2ApO1xuICAgIH0gZWxzZSBpZighYWN0aXZlcy5sZW5ndGggJiYgdGFicy5sZW5ndGgpIHtcbiAgICAgIHRhYnNbMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCd0YWJzWzBdLmFjdGl2ZScsIHRhYnNbMF0uYWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICB0YWJDbGlja2VkKGFjdGl2ZVRhYik6IHZvaWQge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWN0aXZlID0gZmFsc2UpO1xuICAgIGFjdGl2ZVRhYi5hY3RpdmUgPSB0cnVlO1xuXG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZVRhYi5hY3RpdmUnLCBhY3RpdmVUYWIsIGFjdGl2ZVRhYi5hY3RpdmUpXG5cbiAgICB0aGlzLnNlbGVjdC5lbWl0KGFjdGl2ZVRhYik7XG4gIH1cblxuICBtb3ZlKG9mZnNldDogbnVtYmVyKSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7IGkgPCB0YWJzLmxlbmd0aCAmJiBpID49IDA7IGkgKz0gb2Zmc2V0KSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzW2ldO1xuICAgICAgaWYgKHRhYiAmJiAhdGFiLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMudGFiQ2xpY2tlZCh0YWJzW2ldKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgIHRoaXMubW92ZSgxKTtcbiAgfVxuXG4gIHByZXYoKTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlKC0xKTtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGFicy90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB9IGZyb20gJy4uL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUxpc3RNb2R1bGUgfSBmcm9tICcuLi9saXN0L2xpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnQsIElmVGFiQWN0aXZlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1RhYkNvbXBvbmVudCwgVGFic0NvbXBvbmVudCwgSWZUYWJBY3RpdmVEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNlbVVpTGlzdE1vZHVsZSxcbiAgICBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVRhYnNNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktZm9ybS1maWVsZF0nLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwYWRkaW5nOjE1cHh9YF0sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWxhYmVsXVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1wcmVmaXhdXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWlucHV0XVwiPjwvbmctY29udGVudD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWZpZWxkJylcbiAgcHVibGljIGFkZEJhc2VDbGFzczogdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tZmllbGQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3JtRmllbGRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRm9ybUZpZWxkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvcm1GaWVsZE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCB0eXBlIENvcm5lclR5cGUgPSAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgfCB1bmRlZmluZWQ7XG5leHBvcnQgdHlwZSBCdXR0b25JbXBvcnRhbmNlTGV2ZWwgPSAncHJpbWFyeScgfCAnbGluay1idXR0b24nIHwgJ3JvdW5kLWJ1dHRvbicgfCAnY29ybmVyLWJ1dHRvbicgfCB1bmRlZmluZWQ7XG5leHBvcnQgdHlwZSBUaGVtZUltcG9ydGFuY2VMZXZlbCA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW0tYnRuLWZhYl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25GYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cblxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZztcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmc7XG4gIEBJbnB1dCgnbWVkaXVtJykgbWVkaXVtOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29ybmVyJykgY29ybmVyOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKSBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbXVpaW1wb3J0YW5jZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZztcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuXG4gIGdldENsYXNzZXMoKSB7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ0bi1mYWInKTtcbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZWRpdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2ludmVydGVkJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnaW52ZXJ0ZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdkZWZhdWx0X3NtYWxsJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGVmYXVsdF9zbWFsbCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdub25lJykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX25vbmUnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAncmlnaHQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfcmlnaHQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnbGVmdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9sZWZ0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3RvcC1sZWZ0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3RvcC1sZWZ0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3RvcC1yaWdodCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtcmlnaHQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnYm90dG9tLXJpZ2h0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2JvdHRvbS1yaWdodCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdib3R0b20tbGVmdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tbGVmdCcpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idG4tZmFiLS0nO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnV0dG9uRmFiQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tZmFiLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQnV0dG9uRmFiQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0J1dHRvbkZhYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25GYWJNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsXG4gIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIENka092ZXJsYXlPcmlnaW4sXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIE92ZXJsYXlcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS12ZXJ0aWNhbCcsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5lZFwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cInBvc2l0aW9uc1wiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5U2Nyb2xsU3RyYXRlZ3ldPVwic2Nyb2xsU3RyYXRlZ3lcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhlaWdodF09XCJPdmVybGF5SGVpZ2h0XCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCIzMjBcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIjMwMFwiXG4gIChkZXRhY2gpPVwiY29ubmVjdGVkT3ZlcmxheURldGFjaCgpXCJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cInJlUG9zaXRpb24oJGV2ZW50KVwiXG4+XG4gIDxkaXYgI2RpYWxvZyByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbD1cIkRpYWxvZ1wiIGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci1mdWxsXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRMb2FkZWRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW292ZXJsYXktdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50IGltcGxlbWVudHMgIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXN7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nJykgZGlhbG9nOiBFbGVtZW50UmVmO1xuXG5cbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgb3ZlcmxheU9mZnNldFg7XG4gIE92ZXJsYXlIZWlnaHQ7XG4gIHNjcm9sbFN0cmF0ZWd5O1xuICBwb3NpdGlvbnM7XG4gIGJhY2tkcm9wQ2xhc3M7XG5cbiAgY29udGVudExvYWRlZCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xuICAgIHRoaXMub3ZlcmxheU9mZnNldFggPSAwO1xuICAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcbiAgICB0aGlzLnBvc2l0aW9ucyAgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXG4gICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxuICAgICAgKVxuICAgIF07XG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgY29uc3Qgb3ZlcmxheU9yaWdpbkVsID0gdGhpcy5vdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaXNPcGVuZWQpLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIHRoaXMuZGlhbG9nLCBldmVudCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YXAoIChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGNsb3NlJC5zdWJzY3JpYmUoKTtcblxuIH1cbiAgY29ubmVjdGVkT3ZlcmxheURldGFjaCgpIHtcbiAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xuICAgIGlmKGNoYW5nZXMuaXNPcGVuZWQuY3VycmVudFZhbHVlKXtcbiAgICAgIHRoaXMuY29udGVudExvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJlUG9zaXRpb24oaXRlbSl7XG4gICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcbiAgfVxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xuICAgIGlzT3BlbmVkID8gdGhpcy5vcGVuLmVtaXQoKSA6IHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBpc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgZGlhbG9nLCBldmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW092ZXJsYXlWZXJ0aWNhbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPdmVybGF5VmVydGljYWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpT3ZlcmxheVZlcnRpY2FsTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgQ29udGVudENoaWxkLFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXNdJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VtLXVsLWljb24tbGlzdCBzZW0tdWxcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5cblxuXG48dWwgY2xhc3M9XCJidWxsZXQtaW5saW5lbGlzdCBwNFwiPlxuICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG48L3VsPlxuYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBhY3RpdmVpZDogbnVtYmVyO1xuXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZGF0YVNvdXJjZTogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgb3BlbmVkUGFyZW50OiBhbnkgPSBudWxsO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsZXZlbHM6IEFycmF5PE9iamVjdD4gPSBbXG4gICAge251bTogMCwgbmFtZTogJzEnfSxcbiAgICB7bnVtOiAxLCBuYW1lOiAnMid9XG4gIF07XG4gIHNlbGVjdGVkTGV2ZWwgPSB0aGlzLmxldmVsc1swXTtcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGFyZSBlbmFibGVkJylcbiAgICB0aGlzLmFjdGl2ZWlkID0gY2hhbmdlcy5hY3RpdmVpZC5jdXJyZW50VmFsdWU7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9udC1zaXplcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tzZW11aS1mb250LXNpemVzLWl0ZW1dJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXG4gIGNsYXNzPVwic2VtLWxpXCJcbiAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XG4gIDxuZy1jb250ZW50ICBzZWxlY3Q9XCJbbmF2bGlua11cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXZcbiAgKm5nSWY9XCJpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gXCJcbiAgY2xhc3M9XCJibG9ja1wiXG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLS1ib2R5XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3NpemUtc2VsZWN0b3JdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtUmVmOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgcHJpdmF0ZSBpbmRleFJlZiA9IC0xO1xuICBASW5wdXQoKSBwcml2YXRlIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgQElucHV0KCkgcHVibGljIGdyb3VwSWQ6IG51bWJlcjtcbiAgQElucHV0KCkgcHVibGljIGFjdGl2ZWlkOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBhY3RpdmVpZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNlbVVpRm9udFNpemVzQ29tcG9uZW50LFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtSW5kZXgoKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkSXRlbUluZGV4KCkge1xuICAgIGNvbnNvbGUubG9nKCdtdXMgYmUgY2FsbCBoZXJlJyk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5pbmRleFJlZikge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmdldEl0ZW1BdEluZGV4KCk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKHZhbHVlKSB7XG4gICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtID0gdmFsdWU7XG4gICAgY29uc29sZS5sb2coJ25ldyBvbmUnLCAgIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSk7XG4gIH1cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbVJlZjtcbiAgICBpZiAodGhpcy5pdGVtUmVmID09PSB0aGlzLnNlbGVjdGVkSXRlbSl7XG4gICAgICBjb25zb2xlLmxvZygndHJ1ZScpXG4gICAgICAvLyAgdGhpcy5zdHlsZUFzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xuICAgIC8vIHRoaXMuYWN0aXZlaWRDaGFuZ2UuZW1pdCh0aGlzLmdyb3VwSWQpO1xuICB9XG5cbiAgZ2V0IHBhcmVudExpc3QoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZGF0YVNvdXJjZTtcbiAgfVxuICBwcml2YXRlIGdldEl0ZW1BdEluZGV4KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFyZW50TGlzdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gdGhpcy5wYXJlbnRMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRMaXN0W3RoaXMuc2VsZWN0ZWRJbmRleF07XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnR9IGZyb20gJy4vc2VtLWZvbnQtc2l6ZXMtaXRlbS9zZW0tZm9udC1zaXplcy1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbVVpRm9udFNpemVzQ29tcG9uZW50fSBmcm9tICcuL2ZvbnQtc2l6ZXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VtVWlGb250U2l6ZXNDb21wb25lbnQsIFNlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZW1VaUZvbnRTaXplc0NvbXBvbmVudCwgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU2VtVWlDb21wb25lbnQgfSBmcm9tICcuL3NlbS11aS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25EbmRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUNhcmRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUxpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvbGlzdC9saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUxhYmVsTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUZvcm1TZWxlY3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpVGh1bWJuYWlsTGFyZ2VNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvdGh1bWJuYWlsLWxhcmdlL3RodW1ibmFpbC1sYXJnZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlJY29uc0xpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaVJhaW5Ecm9wTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NlY3Rpb24tZm9vdGVyL3NlY3Rpb24tZm9vdGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUlucHV0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2lucHV0L2lucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaU92ZXJsYXlEaWFsb2dNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpVGFic01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy90YWJzL3RhYnMubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25GYWJNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaU92ZXJsYXlWZXJ0aWNhbE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9vdmVybGF5LXZlcnRpY2FsL292ZXJsYXktdmVydGljYWwubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2ZvbnQtc2l6ZXMvZm9udC1zaXplcy5tb2R1bGUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9tYXRlcmlhbC1tYW5pZmVzdC9tYXRlcmlhbC1tYW5pZmVzdC5tb2R1bGUnO1xuXG5jb25zdCBVSU1PRFVMRVMgPSBbXG4gIE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUsXG4gIFNlbVVpQnV0dG9uTW9kdWxlLFxuICBTZW1VaUJ1dHRvbkZhYk1vZHVsZSxcbiAgU2VtVWlSYWluRHJvcE1vZHVsZSxcbiAgU2VtVWlMaXN0TW9kdWxlLFxuICBTZW1VaUxhYmVsTW9kdWxlLFxuICBTZW1VaUZvcm1TZWxlY3RNb2R1bGUsXG4gIFNlbVVpVGh1bWJuYWlsTGFyZ2VNb2R1bGUsXG4gIFNlbVVpSWNvbnNMaXN0TW9kdWxlLFxuICBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUsXG4gIFNlbVVpU2VjdGlvbkZvb3Rlck1vZHVsZSxcbiAgU2VtVWlDYXJkTW9kdWxlLFxuICBTZW1VaUlucHV0TW9kdWxlLFxuICBTZW1VaU92ZXJsYXlEaWFsb2dNb2R1bGUsXG4gIFNlbVVpT3ZlcmxheVZlcnRpY2FsTW9kdWxlLFxuICBTZW1VaVRhYnNNb2R1bGUsXG4gIFNlbVVpRm9ybUZpZWxkTW9kdWxlLFxuICBTZW1VaUZvbnRTaXplc01vZHVsZSxcbiAgU2VtVWlCdXR0b25EbmRNb2R1bGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgVUlNT0RVTEVTLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlbVVpQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlbVVpQ29tcG9uZW50LCBVSU1PRFVMRVNdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktaWNvbi1yb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgaWNvbi1yb3cgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJY29uUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWNvblJvd0NvbXBvbmVudCB9IGZyb20gJy4vaWNvbi1yb3cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtJY29uUm93Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ljb25Sb3dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEljb25Sb3dNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS1zd2l0Y2gtcm93JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHN3aXRjaC1yb3cgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTd2l0Y2hSb3dDb21wb25lbnQgfSBmcm9tICcuL3N3aXRjaC1yb3cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTd2l0Y2hSb3dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3dpdGNoUm93Q29tcG9uZW50XSxcblxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hSb3dNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS10aXRsZS1tYXJxdWVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHRpdGxlLW1hcnF1ZWUgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUaXRsZU1hcnF1ZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUaXRsZU1hcnF1ZWVDb21wb25lbnQgfSBmcm9tICcuL3RpdGxlLW1hcnF1ZWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUaXRsZU1hcnF1ZWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGl0bGVNYXJxdWVlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUaXRsZU1hcnF1ZWVNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS10b2dnbGUtcm93JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHRvZ2dsZS1yb3cgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUb2dnbGVSb3dDb21wb25lbnQgfSBmcm9tICcuL3RvZ2dsZS1yb3cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2dnbGVSb3dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG9nZ2xlUm93Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVSb3dNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUJBSkQ7Ozs7Ozs7QUNBQTtJQWFFO0tBQWlCOzs7O0lBRWpCLGlDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw4Q0FJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7Ozt5QkFWRDs7Ozs7OztBQ0FBO0lBK0RFOzs7OzZCQWxDZ0MsS0FBSztLQWtDcEI7Ozs7SUFFakIsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUUsQ0FBQTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsNENBQVU7OztJQUFWOztRQUNFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1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LElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEVBQUU7WUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUU7WUFDdEMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLEVBQUU7WUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxRQUFRLEVBQUU7WUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxlQUFlLEVBQUU7WUFDNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFN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