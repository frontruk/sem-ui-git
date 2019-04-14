import { Injectable, Component, ChangeDetectionStrategy, Input, ContentChild, TemplateRef, NgModule, HostBinding, ViewEncapsulation, Directive, HostListener, Output, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, ViewChild, ContentChildren, defineInjectable } from '@angular/core';
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        classes.forEach((/**
         * @param {?} _class
         * @param {?} index
         * @return {?}
         */
        function (_class, index) {
            if (index === 0) {
                _this.classes += spacer + base + _class;
            }
            else {
                _this.classes += ' ' + base + _class;
            }
        }));
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    SemUiButtonDndComponent.prototype.styleElementTheme = /**
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        classes.forEach((/**
         * @param {?} _class
         * @param {?} index
         * @return {?}
         */
        function (_class, index) {
            if (index === 0) {
                _this.classes += ' ' + spacer + base + _class;
            }
            else {
                _this.classes += ' ' + base + _class;
            }
        }));
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        classes.forEach((/**
         * @param {?} _class
         * @param {?} index
         * @return {?}
         */
        function (_class, index) {
            if (index === 0) {
                _this.classes += ' ' + spacer + base + _class;
            }
            else {
                _this.classes += ' ' + base + _class;
            }
        }));
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
    ListItemComponent.propDecorators = {
        item: [{ type: Input }],
        semImportance: [{ type: Input, args: ['sem-importance',] }],
        classes: [{ type: HostBinding, args: ['class',] }, { type: Input, args: ['class',] }],
        semuiTheme: [{ type: Input, args: ['sem-theme',] }],
        styleAsLightTheme: [{ type: HostBinding, args: ['class.sem-li-light',] }],
        styleAsDarkTheme: [{ type: HostBinding, args: ['class.sem-li-dark',] }]
    };
    return ListItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        classes.forEach((/**
         * @param {?} _class
         * @param {?} index
         * @return {?}
         */
        function (_class, index) {
            if (index === 0) {
                _this.classes += spacer + base + _class;
            }
            else {
                _this.classes += ' ' + base + _class;
            }
        }));
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
     * @private
     * @param {?} theme
     * @return {?}
     */
    ListComponent.prototype.styleElementTheme = /**
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     */
    /**
     * Set component to be on dark or light.
     * @private
     * @param {?} type
     * @return {?}
     */
    LabelComponent.prototype.setTheme = /**
     * Set component to be on dark or light.
     * @private
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
     */
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
     * @param {?} labelType
     * @return {?}
     */
    LabelComponent.prototype.styleElementByImportanceLevel = /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     */
    /**
     * Set component to be on dark or light.
     * @private
     * @param {?} labelType
     * @return {?}
     */
    SectionHeaderComponent.prototype.styleElementByImportanceLevel = /**
     * Set component to be on dark or light.
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     */
    /**
     * Set component to be on dark or light.
     * @private
     * @param {?} labelType
     * @return {?}
     */
    SectionFooterComponent.prototype.styleElementByImportanceLevel = /**
     * Set component to be on dark or light.
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     */
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
     * @return {?}
     */
    InputComponent.prototype.styleElementByType = /**
     * Set component's properties bound to
     * the host element CSS classes.
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { debounceTime } from 'rxjs/internal/operators';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/do';
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
    //
    // overlayOffsetX;
    // OverlayHeight;
    // scrollStrategy;
    // positions;
    // backdropClass;
    /**
     * @return {?}
     */
    OverlayDialogComponent.prototype.ngOnInit = 
    //
    // overlayOffsetX;
    // OverlayHeight;
    // scrollStrategy;
    // positions;
    // backdropClass;
    /**
     * @return {?}
     */
    function () {
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
        var _this = this;
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
        var overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        var close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter((/**
         * @return {?}
         */
        function () { return _this.isOpened; })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
        })), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.changeState(false);
        })));
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
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    OverlayDialogComponent.prototype.changeState = /**
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    function (isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    OverlayDialogComponent.prototype.isClickedOutside = /**
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var modules = [
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return tabs.findIndex((/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) { return tab.active; }));
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
        var actives = this.tabs.filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return t.active; }));
        if (actives.length > 1) {
            console.error("Multiple active tabs set 'active'");
        }
        else if (!actives.length && tabs.length) {
            tabs[0].active = true;
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
        tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) { return tab.active = false; }));
        activeTab.active = true;
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        classes.forEach((/**
         * @param {?} _class
         * @param {?} index
         * @return {?}
         */
        function (_class, index) {
            if (index === 0) {
                _this.classes += spacer + base + _class;
            }
            else {
                _this.classes += ' ' + base + _class;
            }
        }));
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    ButtonFabComponent.prototype.styleElementTheme = /**
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            .pipe(debounceTime(100), filter((/**
         * @return {?}
         */
        function () { return _this.isOpened; })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dialog.nativeElement.parentNode.style.top = '0';
            return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
        })), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.changeState(false);
        })));
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
        if (changes.isOpened.currentValue) {
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
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    OverlayVerticalComponent.prototype.changeState = /**
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    function (isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    OverlayVerticalComponent.prototype.isClickedOutside = /**
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.activeid = changes.activeid.currentValue;
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
     * @return {?}
     */
    SemUiFontSizesItemComponent.prototype.getItemAtIndex = /**
     * @private
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SemUiService, SemUiComponent, SemUiModule, SemUiButtonModule, SemUiButtonDndModule, SemUiButtonFabModule, SemUiCardModule, SemUiFormFieldModule, SemUiFormSelectModule, IconRowModule, SemUiIconsListModule, SemUiInputModule, SemUiLabelModule, SemUiListModule, SemUiOverlayDialogModule, SemUiOverlayVerticalModule, SemUiSectionFooterModule, SemUiSectionHeaderModule, SwitchRowModule, SemUiTabsModule, SemUiThumbnailLargeModule, TitleMarqueeModule, ToggleRowModule, SemUiButtonDndComponent as ɵz, ButtonFabComponent as ɵc, ButtonComponent as ɵb, CardComponent as ɵo, SemUiFontSizesComponent as ɵx, SemUiFontSizesModule as ɵw, SemUiFontSizesItemComponent as ɵy, FormFieldComponent as ɵv, FormOptionsComponent as ɵj, FormSelectComponent as ɵi, IconRowComponent as ɵba, IconsListComponent as ɵl, InputComponent as ɵp, LabelComponent as ɵh, ListItemComponent as ɵf, ListComponent as ɵg, MaterialManifestModule as ɵa, OverlayDialogComponent as ɵq, OverlayVerticalComponent as ɵr, RainDropComponent as ɵe, SemUiRainDropModule as ɵd, SectionFooterComponent as ɵn, SectionHeaderComponent as ɵm, SwitchRowComponent as ɵbb, IfTabActiveDirective as ɵt, TabComponent as ɵs, TabsComponent as ɵu, ThumbnailLargeComponent as ɵk, TitleMarqueeComponent as ɵbc, ToggleRowComponent as ɵbd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS11aS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL3NlbS11aS5zZXJ2aWNlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWRuZC9idXR0b24tZG5kLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9jYXJkL2NhcmQubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xpc3QvbGlzdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGFiZWwvbGFiZWwubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2Zvcm0tc2VsZWN0L2Zvcm0tb3B0aW9ucy9mb3JtLW9wdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RodW1ibmFpbC1sYXJnZS90aHVtYm5haWwtbGFyZ2UuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvcmFpbi1kcm9wL3JhaW4tZHJvcC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWZvb3Rlci9zZWN0aW9uLWZvb3Rlci5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaW5wdXQvaW5wdXQubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL3RhYi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbi1yb3cvaWNvbi1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pY29uLXJvdy9pY29uLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc2VtLXVpJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIHNlbS11aSB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW11aS1idXR0b24tZG5kXSwgZGl2W3NlbXVpLWJ1dHRvbi1kbmRdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25EbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ3hzbWFsbCcpIHhzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ21lZGl1bScpIG1lZGl1bTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW0tdGhlbWUnKVxyXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcclxuXHJcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzZXMoKXtcclxuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XHJcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ1dHRvbi1kbmQgJyk7XHJcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWVkaXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54c21hbGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCd4c21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gX2NsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xyXG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWJ1dHRvbi1kbmQtLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpIHtcclxuICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2VtVWlCdXR0b25EbmRDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1kbmQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2VtVWlCdXR0b25EbmRDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdidXR0b25bc2VtLWJ1dHRvbl0sIGRpdltzZW0tYnV0dG9uXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgb25DbGljayhidG4pIHtcclxuICAgIHRoaXMuc3R5bGVBc0FjdGl2ZSA9ICF0aGlzLnN0eWxlQXNBY3RpdmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2xpbmtidXR0b24nKSBsaW5rYnV0dG9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdpY29ub25seScpIGljb25vbmx5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3Nlcygpe1xyXG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcclxuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tYnV0dG9uJyk7XHJcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmljb25vbmx5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnaWNvbm9ubHknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnbGlua19wcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rX3ByaW1hcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpbmtidXR0b24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idXR0b24tLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUJ1dHRvbk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlbXVpLWNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgY2FyZCB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ2FyZENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NhcmRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUNhcmRNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmdcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2xpc3QtdHlwZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPVxyXG4gICAgJ2xpZ2h0J1xyXG4gIHwgJ2RhcmsnXHJcbiAgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tzZW11aS1saXN0LWl0ZW1dJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IExpc3RJdGVtVHlwZTtcclxuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXHJcbiAgfVxyXG5cclxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xyXG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWxpLS0nO1xyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzZXMoKSB7XHJcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xyXG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1saScpO1xyXG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdpbnZlcnRlZCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnaW52ZXJ0ZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICd0ZXJ0aWFyeScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgndGVydGlhcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdkYW5nZXInKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RhbmdlcicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9jbGFzc2VzO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID1cclxuICAgICdsaWdodCdcclxuICB8ICdkYXJrJ1xyXG4gIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbc2VtdWktbGlzdF0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2xpc3QtaXRlbV1cIj48L25nLWNvbnRlbnQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJyBzZW0tdWwtLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRDbGFzc2VzKCkge1xyXG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcclxuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tdWwnKTtcclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSl7XHJcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XHJcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnZGFyaycpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xpc3RJdGVtQ29tcG9uZW50LCBMaXN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTGlzdEl0ZW1Db21wb25lbnQsIExpc3RDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlMaXN0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGFiZWxJbXBvcnRhbmNlTGV2ZWwgPSAnc21hbGwnIHwgJ2xhcmdlJyB8IHVuZGVmaW5lZDtcclxuZXhwb3J0IHR5cGUgTGFiZWxUaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdsYWJlbFtzZW11aS1sYWJlbF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktbGFiZWwnKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXHJcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcIm1lZGl1bVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1lZGl1bScpXHJcbiAgcHVibGljIHN0eWxlQXNNZWRpdW06IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXHJcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvcm0tbGFiZWwnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRm9ybUxhYmVsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcclxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBMYWJlbEltcG9ydGFuY2VMZXZlbDtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRGFyazogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBMYWJlbCB0aGVtZSBpbiB0ZXJtcyBvZiBsaWdodC9kYXJrLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKVxyXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBMYWJlbFRoZW1lO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xyXG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRUaGVtZSh0eXBlKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFyayA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xyXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgQ1NTIGNsYXNzZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcclxuXHJcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xyXG4gICAgICBjYXNlICgnc21hbGwnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdtZWRpdW0nKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNNZWRpdW0gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnbGFyZ2UnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdmb3JtLWxhYmVsJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRm9ybUxhYmVsID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGFiZWxDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtMYWJlbENvbXBvbmVudF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlMYWJlbE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZWxlY3Rbc2VtdWktZm9ybS1zZWxlY3RdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VsZWN0Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBBbHdheXMgYXBwbHkgdGhlIGJhc2UgUnViaXggYnV0dG9uIGNzcyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLXNlbGVjdCcpXHJcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzczogdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnb3B0aW9uW3NlbXVpLWZvcm0tb3B0aW9uc10nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQWx3YXlzIGFwcGx5IHRoZSBiYXNlIFJ1Yml4IGJ1dHRvbiBjc3MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1vcHRpb24nKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3M6IHRydWU7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1PcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLW9wdGlvbnMvZm9ybS1vcHRpb25zLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRm9ybVNlbGVjdENvbXBvbmVudCwgRm9ybU9wdGlvbnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6W0Zvcm1TZWxlY3RDb21wb25lbnQsIEZvcm1PcHRpb25zQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb3JtU2VsZWN0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2ZpZ3VyZVtzZW11aS10aHVtYm5haWxdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltjYXJkLWltYWdlXVwiPjwvbmctY29udGVudD5cclxuXHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIltzZW0tc2VjdGlvbi1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuXHJcblxyXG5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGh1bWJuYWlsTGFyZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktdGh1bWJuYWlsJylcclxuICBwdWJsaWMgYWRkQmFzZUJ1dHRvbkNzc0NsYXNzID0gdHJ1ZTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsTGFyZ2VDb21wb25lbnQgfSBmcm9tICcuL3RodW1ibmFpbC1sYXJnZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RodW1ibmFpbExhcmdlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVGh1bWJuYWlsTGFyZ2VDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZW11aS1pY29ucy1saXN0JyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25zTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSWNvbnNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9pY29ucy1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSWNvbnNMaXN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSWNvbnNMaXN0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlJY29uc0xpc3RNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZW11aS1yYWluLWRyb3AnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFpbkRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJhaW5Ecm9wQ29tcG9uZW50IH0gZnJvbSAnLi9yYWluLWRyb3AuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtSYWluRHJvcENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1JhaW5Ecm9wQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlSYWluRHJvcE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgIEhlYWRlckltcG9ydGFuY2VMZXZlbCA9ICcnIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktc2VjdGlvbi1oZWFkZXJdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktaGVhZGVyLXNlY3Rpb24nKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXHJcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXHJcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogSGVhZGVySW1wb3J0YW5jZUxldmVsO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXHJcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XHJcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xyXG4gICAgICBjYXNlICgnc21hbGwnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtTZWN0aW9uSGVhZGVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2VjdGlvbkhlYWRlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgRm9vdGVySW1wb3J0YW5jZUxldmVsID0gJycgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS1zZWN0aW9uLWZvb3Rlcl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbkZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQ3NzIGJhc2UgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb290ZXItc2VjdGlvbicpXHJcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcclxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcclxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBGb290ZXJJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcclxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcclxuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2xhcmdlJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTZWN0aW9uRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLWZvb3Rlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlY3Rpb25Gb290ZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTZWN0aW9uRm9vdGVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAnZm9ybS1pbnB1dCcgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2lucHV0W3NlbXVpLWlucHV0XScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBTZW11aSBidXR0b24gY3NzIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXHJcbiAgcHJpdmF0ZSBhZGRGb3JtQmFzZUNsYXNzOiB0cnVlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeSBvciBzZWNvbmRhcnkuXHJcbiAgICogUHJpbWFyeSBzZXRzIGFzIHJvdW5kIGNvcm5lcnMgYW5kIHNoYXJwIGVkZ2UsIHNlY29uZGFyeSBpcyBhbGwgcm91bmRcclxuICAgKi9cclxuICBASW5wdXQoJ3NlbXVpLXR5cGUnKVxyXG4gIHB1YmxpYyBzZW11aVR5cGU6IElucHV0VHlwZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNlbXVpLWZvcm0taW5wdXRcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcclxuICBwdWJsaWMgc2VtdWlUeXBlRm9ybUlucHV0OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlUeXBlKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldCBjb21wb25lbnQncyBwcm9wZXJ0aWVzIGJvdW5kIHRvXHJcbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cclxuICAgKi9cclxuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5VHlwZSgpIHtcclxuXHJcbiAgICBpZiAoJ2Zvcm0taW5wdXQnID09PSB0aGlzLnNlbXVpVHlwZSkge1xyXG4gICAgICB0aGlzLnNlbXVpVHlwZUZvcm1JbnB1dCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuL2lucHV0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtJbnB1dENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUlucHV0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcclxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcclxuICBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDZGtPdmVybGF5T3JpZ2luLFxyXG4gIE92ZXJsYXlcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdzZW11aS1vdmVybGF5LWRpYWxvZycsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlXHJcbiAgICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCJcclxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5lZFwiXHJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIm92ZXJsYXlXaWR0aFwiXHJcbiAgICAoZGV0YWNoKT1cImNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKVwiXHJcbiAgPlxyXG4gICAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LXRpdGxlXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3ZlcmxheURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzICBPbkRlc3Ryb3ksIE9uSW5pdCAge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBASW5wdXQoKSBpc09wZW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlXaWR0aDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAvL1xyXG4gIC8vIG92ZXJsYXlPZmZzZXRYO1xyXG4gIC8vIE92ZXJsYXlIZWlnaHQ7XHJcbiAgLy8gc2Nyb2xsU3RyYXRlZ3k7XHJcbiAgLy8gcG9zaXRpb25zO1xyXG4gIC8vIGJhY2tkcm9wQ2xhc3M7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8vICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xyXG4gICAgLy8gICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcclxuICAgIC8vICAgdGhpcy5PdmVybGF5SGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgLy8gICB0aGlzLnBvc2l0aW9ucyAgPSBbXHJcbiAgICAvLyAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAvLyAgICAgICB7b3JpZ2luWTogJ2NlbnRlcicsIG9yaWdpblg6ICdlbmQnfSxcclxuICAgIC8vICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxyXG4gICAgLy8gICAgIClcclxuICAgIC8vICAgXTtcclxuICAgIC8vICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbmVkKSxcclxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFwKCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgY2xvc2UkLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuICBjb25uZWN0ZWRPdmVybGF5RGV0YWNoKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gaXNPcGVuZWQ7XHJcbiAgICBpc09wZW5lZCA/IHRoaXMub3Blbi5lbWl0KCkgOiB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIGRpYWxvZywgZXZlbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IFNjcm9sbERpc3BhdGNoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcbmltcG9ydCB7IENka1N0ZXBwZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XHJcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSBbXHJcbiAgLy8gQ0RLXHJcbiAgQTExeU1vZHVsZSxcclxuICBCaWRpTW9kdWxlLFxyXG4gIE9ic2VydmVyc01vZHVsZSxcclxuICBPdmVybGF5TW9kdWxlLFxyXG4gIFBsYXRmb3JtTW9kdWxlLFxyXG4gIFBvcnRhbE1vZHVsZSxcclxuICBTY3JvbGxEaXNwYXRjaE1vZHVsZSxcclxuICBDZGtTdGVwcGVyTW9kdWxlLFxyXG4gIENka1RhYmxlTW9kdWxlLFxyXG5dXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAvLyBpbXBvcnRzOiBbXHJcbiAgLy8gICBDb21tb25Nb2R1bGUsXHJcbiAgLy8gICAuLi5tb2R1bGVzXHJcbiAgLy8gXSxcclxuICAvLyBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGV4cG9ydHM6IFsgLi4ubW9kdWxlcyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIHtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPdmVybGF5RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW092ZXJsYXlEaWFsb2dDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6ICBbT3ZlcmxheURpYWxvZ0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpT3ZlcmxheURpYWxvZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4SWZUYWJBY3RpdmVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSWZUYWJBY3RpdmVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogVE9ETzogUmVtb3ZlIGhpZGRlbiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MzEwIGlzIHJlc29sdmVkXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFiXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgKm5nSWY9XCJ0ZW1wbGF0ZTsgdGhlbiB0ZW1wbGF0ZV9jb250YWluZXIgZWxzZSBjb250ZW50X2NvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZV9jb250YWluZXI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJhY3RpdmVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlLnRlbXBsYXRlUmVmXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudF9jb250YWluZXI+XHJcbiAgICAgIDxkaXYgW2hpZGRlbl09XCIhYWN0aXZlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ3NlbXVpLXRhYidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgLyoqXHJcbiAgICogQ3NzIGJhc2UgY2xhc3MuXHJcbiAgICovXHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGVmYXVsdCcpXHJcbiAgcHVibGljIGFkZEJhc2VCdXR0b25Dc3NDbGFzcyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBAQ29udGVudENoaWxkKElmVGFiQWN0aXZlRGlyZWN0aXZlKSB0ZW1wbGF0ZTogSWZUYWJBY3RpdmVEaXJlY3RpdmU7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBwdWJsaWMgYWN0aXZlQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyQ29udGVudEluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYnNdJyxcclxuICB0ZW1wbGF0ZTogYDxzZWN0aW9uXHJcbiAgW2NsYXNzLnRhYnMtdmVydGljYWxdPVwidmVydGljYWxcIlxyXG4gIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCJcclxuICBbY2xhc3Muc3dpcGVdPVwic3dpcGVcIlxyXG4+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VGFicyAmJiB2ZXJ0aWNhbFwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYnMtaGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICA8dWxcclxuICAgICAgY2xhc3M9XCJzZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWxcIlxyXG4gICAgICBbY2xhc3MudGFicy12ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICA8bGlcclxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxyXG4gICAgICAgIGNsYXNzPVwic2VtdWktdGFiXCJcclxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cInRhYnMtLWJ1dHRvblwiXHJcbiAgICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2tlZCh0YWIpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cclxuICAgICAgICAgIHt7dGFiLnRpdGxlfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8dWxcclxuXHJcbiAgICAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiBzaG93VGFic1wiXHJcbiAgICBzZW11aS1saXN0XHJcbiAgICBjbGFzcz1cInNlbXVpLXRhYnMtbGlzdCBsaXN0LXJlc2V0XCJcclxuICAgIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCI+XHJcbiAgICA8bGlcclxuICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcclxuICAgICAgc2VtdWktbGlzdC1pdGVtXHJcbiAgICAgIGxpc3QtaXRlbVxyXG4gICAgICBzZW0taW1wb3J0YW5jZT1cInRlcnRpYXJ5XCJcclxuICAgICAgY2xhc3M9XCJjb3JuZXJfdG9wIFwiXHJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIChjbGljayk9XCJ0YWJDbGlja2VkKHRhYilcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cclxuICAgICAgICB7e3RhYi50aXRsZX19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwidGFiLW5hdlwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYi1uYXZdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzZW11aS10YWItY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbmAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdzZW11aS10YWJzJ1xyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBJbnB1dCgpIHNob3dUYWJzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHZlcnRpY2FsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcclxuXHJcbiAgZ2V0IGluZGV4KCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IGFjdGl2ZXMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdC5hY3RpdmUpO1xyXG5cclxuICAgIGlmKGFjdGl2ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBNdWx0aXBsZSBhY3RpdmUgdGFicyBzZXQgJ2FjdGl2ZSdgKTtcclxuICAgIH0gZWxzZSBpZighYWN0aXZlcy5sZW5ndGggJiYgdGFicy5sZW5ndGgpIHtcclxuICAgICAgdGFic1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFiQ2xpY2tlZChhY3RpdmVUYWIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG5cclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgIGFjdGl2ZVRhYi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0LmVtaXQoYWN0aXZlVGFiKTtcclxuICB9XHJcblxyXG4gIG1vdmUob2Zmc2V0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7IGkgPCB0YWJzLmxlbmd0aCAmJiBpID49IDA7IGkgKz0gb2Zmc2V0KSB7XHJcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNbaV07XHJcbiAgICAgIGlmICh0YWIgJiYgIXRhYi5kaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMudGFiQ2xpY2tlZCh0YWJzW2ldKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vdmUoMSk7XHJcbiAgfVxyXG5cclxuICBwcmV2KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb3ZlKC0xKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzL3RhYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlIH0gZnJvbSAnLi4vc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVGFiQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCwgSWZUYWJBY3RpdmVEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtUYWJDb21wb25lbnQsIFRhYnNDb21wb25lbnQsIElmVGFiQWN0aXZlRGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBTZW1VaUxpc3RNb2R1bGUsXHJcbiAgICBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaVRhYnNNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLWZvcm0tZmllbGRdJyxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9jaztwYWRkaW5nOjE1cHh9YF0sXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtbGFiZWxdXCI+PC9uZy1jb250ZW50PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtcHJlZml4XVwiPjwvbmctY29udGVudD5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWlucHV0XVwiPjwvbmctY29udGVudD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvcm0tZmllbGQnKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ2xhc3M6IHRydWU7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0Zvcm1GaWVsZENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0Zvcm1GaWVsZENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpRm9ybUZpZWxkTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5leHBvcnQgdHlwZSBDb3JuZXJUeXBlID0gJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHwgdW5kZWZpbmVkO1xyXG5leHBvcnQgdHlwZSBCdXR0b25JbXBvcnRhbmNlTGV2ZWwgPSAncHJpbWFyeScgfCAnbGluay1idXR0b24nIHwgJ3JvdW5kLWJ1dHRvbicgfCAnY29ybmVyLWJ1dHRvbicgfCB1bmRlZmluZWQ7XHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnV0dG9uW3NlbS1idG4tZmFiXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25GYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cclxuICAgKi9cclxuXHJcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBzdHJpbmc7XHJcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdtZWRpdW0nKSBtZWRpdW06IHN0cmluZztcclxuICBASW5wdXQoJ2Nvcm5lcicpIGNvcm5lcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKSBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcclxuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtdWlpbXBvcnRhbmNlOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcclxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXHJcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NlcygpIHtcclxuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XHJcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ0bi1mYWInKTtcclxuICAgIGlmICh0aGlzLmxhcmdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbGFyZ2UnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNtYWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1lZGl1bSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnaW52ZXJ0ZWQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2ludmVydGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnbWVkaXVtJykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdtZWRpdW0nKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHRfc21hbGwnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHRfc21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ub25lJyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdyaWdodCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3JpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdsZWZ0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfbGVmdCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAndG9wLWxlZnQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtbGVmdCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAndG9wLXJpZ2h0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfdG9wLXJpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdib3R0b20tcmlnaHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tcmlnaHQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2JvdHRvbS1sZWZ0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfYm90dG9tLWxlZnQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idG4tZmFiLS0nO1xyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKXtcclxuICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJ1dHRvbkZhYkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLWZhYi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0J1dHRvbkZhYkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0J1dHRvbkZhYkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRmFiTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LFxyXG4gIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG4gIE92ZXJsYXlcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbi8vIGltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YXAgIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS12ZXJ0aWNhbCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGVcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlbmVkXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5U2Nyb2xsU3RyYXRlZ3ldPVwic2Nyb2xsU3RyYXRlZ3lcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGVpZ2h0XT1cIk92ZXJsYXlIZWlnaHRcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwiMzIwXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIjMwMFwiXHJcbiAgKGRldGFjaCk9XCJjb25uZWN0ZWRPdmVybGF5RGV0YWNoKClcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJyZVBvc2l0aW9uKCRldmVudClcIlxyXG4+XHJcbiAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLWZ1bGxcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50TG9hZGVkXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW292ZXJsYXktdGl0bGVdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5VmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyAgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlc3tcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHt9XHJcblxyXG4gIEBJbnB1dCgpIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY7XHJcblxyXG5cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgb3ZlcmxheU9mZnNldFg7XHJcbiAgT3ZlcmxheUhlaWdodDtcclxuICBzY3JvbGxTdHJhdGVneTtcclxuICBwb3NpdGlvbnM7XHJcbiAgYmFja2Ryb3BDbGFzcztcclxuXHJcbiAgY29udGVudExvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xhc3MgPSAnY2RrT3ZlcmxheUZ1bGxIZWlnaHQnXHJcbiAgICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcclxuICAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcclxuICAgIHRoaXMucG9zaXRpb25zICA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXHJcbiAgICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9XHJcbiAgICAgIClcclxuICAgIF07XHJcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgY2xvc2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc09wZW5lZCksXHJcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRhcCggKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICBjbG9zZSQuc3Vic2NyaWJlKCk7XHJcblxyXG4gfVxyXG4gIGNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKSB7XHJcbiAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xyXG4gICAgaWYoY2hhbmdlcy5pc09wZW5lZC5jdXJyZW50VmFsdWUpe1xyXG4gICAgICB0aGlzLmNvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZVBvc2l0aW9uKGl0ZW0pe1xyXG4gICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcclxuICB9XHJcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShpc09wZW5lZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xyXG4gICAgaXNPcGVuZWQgPyB0aGlzLm9wZW4uZW1pdCgpIDogdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBwcml2YXRlIGlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCBkaWFsb2csIGV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIShvdmVybGF5T3JpZ2luRWwuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSB8fCBkaWFsb2cubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudFsndGFyZ2V0J10pKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE92ZXJsYXlWZXJ0aWNhbENvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlPdmVybGF5VmVydGljYWxNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFNpbXBsZUNoYW5nZXMsIElucHV0LCBDb250ZW50Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXNdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZW0tdWwtaWNvbi1saXN0IHNlbS11bFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjx1bCBjbGFzcz1cImJ1bGxldC1pbmxpbmVsaXN0IHA0XCI+XHJcbiAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4gIDxsaT5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cclxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbiAgPGxpPlxyXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxyXG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9saT5cclxuICA8bGk+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgYWN0aXZlaWQ6IG51bWJlcjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZilcclxuICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRhdGFTb3VyY2U6IGFueSA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0ge307XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG9wZW5lZFBhcmVudDogYW55ID0gbnVsbDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGxldmVsczogQXJyYXk8T2JqZWN0PiA9IFtcclxuICAgIHtudW06IDAsIG5hbWU6ICcxJ30sXHJcbiAgICB7bnVtOiAxLCBuYW1lOiAnMid9XHJcbiAgXTtcclxuICBzZWxlY3RlZExldmVsID0gdGhpcy5sZXZlbHNbMF07XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ2NoYW5nZXMgYXJlIGVuYWJsZWQnKVxyXG4gICAgdGhpcy5hY3RpdmVpZCA9IGNoYW5nZXMuYWN0aXZlaWQuY3VycmVudFZhbHVlO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9udC1zaXplcy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXMtaXRlbV0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdlxyXG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXHJcbiAgY2xhc3M9XCJzZW0tbGlcIlxyXG4gIChjbGljayk9XCJ0b2dnbGUoKVwiPlxyXG4gIDxuZy1jb250ZW50ICBzZWxlY3Q9XCJbbmF2bGlua11cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2XHJcbiAgKm5nSWY9XCJpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gXCJcclxuICBjbGFzcz1cImJsb2NrXCJcclxuICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIH1cIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250YWluZXItLWJvZHlcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzaXplLXNlbGVjdG9yXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbVJlZjogYW55ID0ge307XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBpbmRleFJlZiA9IC0xO1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBncm91cElkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIGFjdGl2ZWlkOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIGFjdGl2ZWlkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBhcmVudDogU2VtVWlGb250U2l6ZXNDb21wb25lbnQsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldFNlbGVjdGVkSXRlbUluZGV4KCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZEl0ZW1JbmRleCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdtdXMgYmUgY2FsbCBoZXJlJyk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0aGlzLmluZGV4UmVmKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRJdGVtQXRJbmRleCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbTtcclxuICB9XHJcbiAgc2V0IHNlbGVjdGVkSXRlbSh2YWx1ZSkge1xyXG4gICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygnbmV3IG9uZScsICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtUmVmO1xyXG4gICAgaWYgKHRoaXMuaXRlbVJlZiA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pe1xyXG4gICAgICBjb25zb2xlLmxvZygndHJ1ZScpXHJcbiAgICAgIC8vICB0aGlzLnN0eWxlQXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgLy8gdGhpcy5hY3RpdmVpZENoYW5nZS5lbWl0KHRoaXMuZ3JvdXBJZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFyZW50TGlzdCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmRhdGFTb3VyY2U7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SXRlbUF0SW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnBhcmVudExpc3QgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IHRoaXMucGFyZW50TGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAtMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRMaXN0W3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnR9IGZyb20gJy4vc2VtLWZvbnQtc2l6ZXMtaXRlbS9zZW0tZm9udC1zaXplcy1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VtVWlGb250U2l6ZXNDb21wb25lbnR9IGZyb20gJy4vZm9udC1zaXplcy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlbVVpRm9udFNpemVzQ29tcG9uZW50LCBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTZW1VaUZvbnRTaXplc0NvbXBvbmVudCwgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgU2VtVWlDb21wb25lbnQgfSBmcm9tICcuL3NlbS11aS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24tZG5kL2J1dHRvbi1kbmQubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlCdXR0b25Nb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUNhcmRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpTGlzdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9saXN0L2xpc3QubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlMYWJlbE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9sYWJlbC9sYWJlbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUZvcm1TZWxlY3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpSWNvbnNMaXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaVJhaW5Ecm9wTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpU2VjdGlvbkZvb3Rlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uLWZvb3Rlci9zZWN0aW9uLWZvb3Rlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUlucHV0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2lucHV0L2lucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpT3ZlcmxheURpYWxvZ01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaVRhYnNNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpRm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkZhYk1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24tZmFiL2J1dHRvbi1mYWIubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlPdmVybGF5VmVydGljYWxNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2ZvbnQtc2l6ZXMvZm9udC1zaXplcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZSc7XHJcblxyXG5jb25zdCBVSU1PRFVMRVMgPSBbXHJcbiAgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSxcclxuICBTZW1VaUJ1dHRvbk1vZHVsZSxcclxuICBTZW1VaUJ1dHRvbkZhYk1vZHVsZSxcclxuICBTZW1VaVJhaW5Ecm9wTW9kdWxlLFxyXG4gIFNlbVVpTGlzdE1vZHVsZSxcclxuICBTZW1VaUxhYmVsTW9kdWxlLFxyXG4gIFNlbVVpRm9ybVNlbGVjdE1vZHVsZSxcclxuICBTZW1VaVRodW1ibmFpbExhcmdlTW9kdWxlLFxyXG4gIFNlbVVpSWNvbnNMaXN0TW9kdWxlLFxyXG4gIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSxcclxuICBTZW1VaVNlY3Rpb25Gb290ZXJNb2R1bGUsXHJcbiAgU2VtVWlDYXJkTW9kdWxlLFxyXG4gIFNlbVVpSW5wdXRNb2R1bGUsXHJcbiAgU2VtVWlPdmVybGF5RGlhbG9nTW9kdWxlLFxyXG4gIFNlbVVpT3ZlcmxheVZlcnRpY2FsTW9kdWxlLFxyXG4gIFNlbVVpVGFic01vZHVsZSxcclxuICBTZW1VaUZvcm1GaWVsZE1vZHVsZSxcclxuICBTZW1VaUZvbnRTaXplc01vZHVsZSxcclxuICBTZW1VaUJ1dHRvbkRuZE1vZHVsZSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgVUlNT0RVTEVTLFxyXG4gICAgRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlbVVpQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2VtVWlDb21wb25lbnQsIFVJTU9EVUxFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NlbXVpLWljb24tcm93JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIGljb24tcm93IHdvcmtzIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25Sb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEljb25Sb3dDb21wb25lbnQgfSBmcm9tICcuL2ljb24tcm93LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSWNvblJvd0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0ljb25Sb3dDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJY29uUm93TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NlbXVpLXN3aXRjaC1yb3cnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgc3dpdGNoLXJvdyB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTd2l0Y2hSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFN3aXRjaFJvd0NvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoLXJvdy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1N3aXRjaFJvd0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1N3aXRjaFJvd0NvbXBvbmVudF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dpdGNoUm93TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NlbXVpLXRpdGxlLW1hcnF1ZWUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgdGl0bGUtbWFycXVlZSB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaXRsZU1hcnF1ZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRpdGxlTWFycXVlZUNvbXBvbmVudCB9IGZyb20gJy4vdGl0bGUtbWFycXVlZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RpdGxlTWFycXVlZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RpdGxlTWFycXVlZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlTWFycXVlZU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZW11aS10b2dnbGUtcm93JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIHRvZ2dsZS1yb3cgd29ya3MhXHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUb2dnbGVSb3dDb21wb25lbnQgfSBmcm9tICcuL3RvZ2dsZS1yb3cuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb2dnbGVSb3dDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUb2dnbGVSb3dDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVSb3dNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt1QkFKRDtDQVFDOzs7Ozs7QUNSRDtJQWFFO0tBQWlCOzs7O0lBRWpCLGlDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw4Q0FJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OztJQVFELHFCQUFDO0NBQUE7Ozs7OztBQ2xCRDtJQStERTs7OztRQWxDTyxrQkFBYSxHQUFZLEtBQUssQ0FBQztLQWtDckI7Ozs7SUFFakIsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUUsQ0FBQTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsNENBQVU7OztJQUFWOztZQUNRLFFBQVEsR0FBRyxFQUFFO1FBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxF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