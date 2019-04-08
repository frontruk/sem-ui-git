(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/overlay'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/observers'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@frontr/sem-ui', ['exports', '@angular/core', '@angular/common', '@angular/cdk/overlay', 'rxjs', 'rxjs/operators', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/observers', '@angular/cdk/platform', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/forms'], factory) :
    (factory((global.frontr = global.frontr || {}, global.frontr['sem-ui'] = {}),global.ng.core,global.ng.common,global.ng.cdk.overlay,global.rxjs,global.rxjs.operators,global.ng.cdk.a11y,global.ng.cdk.bidi,global.ng.cdk.observers,global.ng.cdk.platform,global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.forms));
}(this, (function (exports,i0,common,overlay,rxjs,operators,a11y,bidi,observers,platform,portal,scrolling,stepper,table,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SemUiService = /** @class */ (function () {
        function SemUiService() {
        }
        SemUiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        SemUiService.ctorParameters = function () { return []; };
        /** @nocollapse */ SemUiService.ngInjectableDef = i0.defineInjectable({ factory: function SemUiService_Factory() { return new SemUiService(); }, token: SemUiService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
                classes.forEach(( /**
                 * @param {?} _class
                 * @param {?} index
                 * @return {?}
                 */function (_class, index) {
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'button[semui-button-dnd], div[semui-button-dnd]',
                        template: "<ng-content></ng-content>\n"
                    },] },
        ];
        /** @nocollapse */
        SemUiButtonDndComponent.ctorParameters = function () { return []; };
        SemUiButtonDndComponent.propDecorators = {
            styleAsActive: [{ type: i0.HostBinding, args: ['class.active',] }],
            large: [{ type: i0.Input, args: ['large',] }],
            xsmall: [{ type: i0.Input, args: ['xsmall',] }],
            small: [{ type: i0.Input, args: ['small',] }],
            full: [{ type: i0.Input, args: ['full',] }],
            block: [{ type: i0.Input, args: ['block',] }],
            disabled: [{ type: i0.Input, args: ['disabled',] }],
            medium: [{ type: i0.Input, args: ['medium',] }],
            semuiTheme: [{ type: i0.Input, args: ['sem-theme',] }],
            semImportance: [{ type: i0.Input, args: ['sem-importance',] }],
            classes: [{ type: i0.HostBinding, args: ['class',] }, { type: i0.Input, args: ['class',] }],
            styleAsLightTheme: [{ type: i0.HostBinding, args: ['class.light',] }],
            styleAsDarkTheme: [{ type: i0.HostBinding, args: ['class.dark',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
                classes.forEach(( /**
                 * @param {?} _class
                 * @param {?} index
                 * @return {?}
                 */function (_class, index) {
                    if (index === 0) {
                        _this.classes += ' ' + spacer + base + _class;
                    }
                    else {
                        _this.classes += ' ' + base + _class;
                    }
                }));
            };
        ButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'button[sem-button], div[sem-button]',
                        template: "\n    <ng-content></ng-content>\n  "
                    },] },
        ];
        ButtonComponent.propDecorators = {
            styleAsActive: [{ type: i0.HostBinding, args: ['class.active',] }],
            onClick: [{ type: i0.HostListener, args: ['click', ['$event.target'],] }],
            styleAsLightTheme: [{ type: i0.HostBinding, args: ['class.light',] }],
            styleAsDarkTheme: [{ type: i0.HostBinding, args: ['class.dark',] }],
            semuiTheme: [{ type: i0.Input, args: ['sem-theme',] }],
            large: [{ type: i0.Input, args: ['large',] }],
            small: [{ type: i0.Input, args: ['small',] }],
            full: [{ type: i0.Input, args: ['full',] }],
            block: [{ type: i0.Input, args: ['block',] }],
            linkbutton: [{ type: i0.Input, args: ['linkbutton',] }],
            disabled: [{ type: i0.Input, args: ['disabled',] }],
            icononly: [{ type: i0.Input, args: ['icononly',] }],
            semImportance: [{ type: i0.Input, args: ['sem-importance',] }],
            classes: [{ type: i0.HostBinding, args: ['class',] }, { type: i0.Input, args: ['class',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
            { type: i0.Component, args: [{
                        selector: 'semui-card',
                        template: "\n    <p>\n      card works!\n    </p>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
                classes.forEach(( /**
                 * @param {?} _class
                 * @param {?} index
                 * @return {?}
                 */function (_class, index) {
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: '[semui-list-item]',
                        template: "<ng-content></ng-content>\n"
                    },] },
        ];
        ListItemComponent.propDecorators = {
            item: [{ type: i0.Input }],
            semImportance: [{ type: i0.Input, args: ['sem-importance',] }],
            classes: [{ type: i0.HostBinding, args: ['class',] }, { type: i0.Input, args: ['class',] }],
            semuiTheme: [{ type: i0.Input, args: ['sem-theme',] }],
            styleAsLightTheme: [{ type: i0.HostBinding, args: ['class.sem-li-light',] }],
            styleAsDarkTheme: [{ type: i0.HostBinding, args: ['class.sem-li-dark',] }]
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
                classes.forEach(( /**
                 * @param {?} _class
                 * @param {?} index
                 * @return {?}
                 */function (_class, index) {
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: '[semui-list]',
                        template: "<ng-content select=\"[list-item]\"></ng-content>\n"
                    },] },
        ];
        /** @nocollapse */
        ListComponent.ctorParameters = function () { return []; };
        ListComponent.propDecorators = {
            semuiTheme: [{ type: i0.Input, args: ['sem-theme',] }],
            classes: [{ type: i0.HostBinding, args: ['class',] }, { type: i0.Input, args: ['class',] }],
            styleAsLightTheme: [{ type: i0.HostBinding, args: ['class.sem-ul-light',] }],
            styleAsDarkTheme: [{ type: i0.HostBinding, args: ['class.sem-ul-dark',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'label[semui-label]',
                        template: "\n    <ng-content></ng-content>\n  "
                    },] },
        ];
        LabelComponent.propDecorators = {
            addBaseCssClass: [{ type: i0.HostBinding, args: ['class.semui-label',] }],
            styleAsSmall: [{ type: i0.HostBinding, args: ['class.small',] }],
            styleAsMedium: [{ type: i0.HostBinding, args: ['class.medium',] }],
            styleAsLarge: [{ type: i0.HostBinding, args: ['class.large',] }],
            styleAsFormLabel: [{ type: i0.HostBinding, args: ['class.form-label',] }],
            semuiImportance: [{ type: i0.Input, args: ['semui-importance',] }],
            styleAsDark: [{ type: i0.HostBinding, args: ['class.dark',] }],
            styleAsLight: [{ type: i0.HostBinding, args: ['class.light',] }],
            semuiTheme: [{ type: i0.Input, args: ['semui-theme',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'select[semui-form-select]',
                        template: "\n      <ng-content></ng-content>\n  ",
                    },] },
        ];
        /** @nocollapse */
        FormSelectComponent.ctorParameters = function () { return []; };
        FormSelectComponent.propDecorators = {
            addBaseCssClass: [{ type: i0.HostBinding, args: ['class.semui-select',] }]
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'option[semui-form-options]',
                        template: "<ng-content></ng-content>",
                    },] },
        ];
        /** @nocollapse */
        FormOptionsComponent.ctorParameters = function () { return []; };
        FormOptionsComponent.propDecorators = {
            addBaseCssClass: [{ type: i0.HostBinding, args: ['class.semui-option',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'figure[semui-thumbnail]',
                        template: "<ng-content select=\"[card-image]\"></ng-content>\n\n<ng-content select=\"[sem-section-footer]\"></ng-content>\n\n\n\n",
                    },] },
        ];
        /** @nocollapse */
        ThumbnailLargeComponent.ctorParameters = function () { return []; };
        ThumbnailLargeComponent.propDecorators = {
            addBaseButtonCssClass: [{ type: i0.HostBinding, args: ['class.semui-thumbnail',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'semui-icons-list',
                        template: "",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        selector: 'semui-rain-drop',
                        template: "",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'div[semui-section-header]',
                        template: "\n    <ng-content></ng-content>\n  "
                    },] },
        ];
        /** @nocollapse */
        SectionHeaderComponent.ctorParameters = function () { return []; };
        SectionHeaderComponent.propDecorators = {
            addBaseCssClass: [{ type: i0.HostBinding, args: ['class.semui-header-section',] }],
            styleAsSmall: [{ type: i0.HostBinding, args: ['class.small',] }],
            semuiImportance: [{ type: i0.Input, args: ['semui-importance',] }],
            styleAsLarge: [{ type: i0.HostBinding, args: ['class.large',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'div[semui-section-footer]',
                        template: "\n    <ng-content></ng-content>\n  "
                    },] },
        ];
        /** @nocollapse */
        SectionFooterComponent.ctorParameters = function () { return []; };
        SectionFooterComponent.propDecorators = {
            addBaseCssClass: [{ type: i0.HostBinding, args: ['class.semui-footer-section',] }],
            styleAsSmall: [{ type: i0.HostBinding, args: ['class.small',] }],
            semuiImportance: [{ type: i0.Input, args: ['semui-importance',] }],
            styleAsLarge: [{ type: i0.HostBinding, args: ['class.large',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'input[semui-input]',
                        template: "<ng-content></ng-content>"
                    },] },
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () { return []; };
        InputComponent.propDecorators = {
            addFormBaseClass: [{ type: i0.HostBinding, args: ['class.semui-form-input',] }],
            semuiType: [{ type: i0.Input, args: ['semui-type',] }],
            semuiTypeFormInput: [{ type: i0.HostBinding, args: ['class.semui-form-input',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
        function OverlayDialogComponent(overlay$$1, changeDetectorRef) {
            this.overlay = overlay$$1;
            this.changeDetectorRef = changeDetectorRef;
            this.isOpened = false;
            this.close = new i0.EventEmitter();
            this.open = new i0.EventEmitter();
            this.destroy$ = new rxjs.Subject();
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
                var close$ = rxjs.fromEvent(document, 'click')
                    .pipe(operators.debounceTime(100), operators.filter(( /**
             * @return {?}
             */function () { return _this.isOpened; })), operators.filter(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
                })), operators.tap(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        selector: 'semui-overlay-dialog',
                        template: " <ng-template\n    cdkConnectedOverlay\n    [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n    [cdkConnectedOverlayOpen]=\"isOpened\"\n    [cdkConnectedOverlayMinWidth]=\"overlayWidth\"\n    (detach)=\"connectedOverlayDetach()\"\n  >\n    <div #dialog role=\"dialog\" aria-label=\"Dialog\" class=\"dialog-container\">\n      <ng-content select=\"[overlay-title]\"></ng-content>\n      <ng-content></ng-content>\n    </div>\n  </ng-template>\n"
                    },] },
        ];
        /** @nocollapse */
        OverlayDialogComponent.ctorParameters = function () {
            return [
                { type: overlay.Overlay },
                { type: i0.ChangeDetectorRef }
            ];
        };
        OverlayDialogComponent.propDecorators = {
            overlayOrigin: [{ type: i0.Input }],
            isOpened: [{ type: i0.Input }],
            overlayWidth: [{ type: i0.Input }],
            close: [{ type: i0.Output }],
            open: [{ type: i0.Output }],
            dialog: [{ type: i0.ViewChild, args: ['dialog',] }]
        };
        return OverlayDialogComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var modules = [
        // CDK
        a11y.A11yModule,
        bidi.BidiModule,
        observers.ObserversModule,
        overlay.OverlayModule,
        platform.PlatformModule,
        portal.PortalModule,
        scrolling.ScrollDispatchModule,
        stepper.CdkStepperModule,
        table.CdkTableModule,
    ];
    var MaterialManifestModule = /** @class */ (function () {
        function MaterialManifestModule() {
        }
        MaterialManifestModule.decorators = [
            { type: i0.NgModule, args: [{
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
            { type: i0.Directive, args: [{
                        selector: '[ngxIfTabActive]'
                    },] },
        ];
        /** @nocollapse */
        IfTabActiveDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'div[semui-tab]',
                        template: "\n    <div *ngIf=\"template; then template_container else content_container\"></div>\n    <ng-template #template_container>\n      <div *ngIf=\"active\">\n        <ng-container [ngTemplateOutlet]=\"template.templateRef\"></ng-container>\n      </div>\n    </ng-template>\n    <ng-template #content_container>\n      <div [hidden]=\"!active\">\n        <ng-content></ng-content>\n      </div>\n    </ng-template>\n  ",
                        host: {
                            class: 'semui-tab'
                        }
                    },] },
        ];
        TabComponent.propDecorators = {
            addBaseButtonCssClass: [{ type: i0.HostBinding, args: ['class.default',] }],
            title: [{ type: i0.Input }],
            active: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            template: [{ type: i0.ContentChild, args: [IfTabActiveDirective,] }],
            activeClass: [{ type: i0.HostBinding, args: ['class.active',] }]
        };
        return TabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TabsComponent = /** @class */ (function () {
        function TabsComponent() {
            this.select = new i0.EventEmitter();
        }
        Object.defineProperty(TabsComponent.prototype, "index", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var tabs = this.tabs.toArray();
                return tabs.findIndex(( /**
                 * @param {?} tab
                 * @return {?}
                 */function (tab) { return tab.active; }));
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
                var actives = this.tabs.filter(( /**
                 * @param {?} t
                 * @return {?}
                 */function (t) { return t.active; }));
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
                tabs.forEach(( /**
                 * @param {?} tab
                 * @return {?}
                 */function (tab) { return tab.active = false; }));
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'div[semui-tabs]',
                        template: "<section\n  [class.tabs-vertical]=\"vertical\"\n  [class.tabs-horizontal]=\"!vertical\"\n  [class.swipe]=\"swipe\"\n>\n\n  <ng-container *ngIf=\"showTabs && vertical\">\n    <ng-content select=\"[tabs-header]\"></ng-content>\n\n    <ul\n      class=\"semui-tabs--navlist_horizontal\"\n      [class.tabs-vertical]=\"vertical\">\n      <li\n        *ngFor=\"let tab of tabs\"\n        class=\"semui-tab\"\n        [class.disabled]=\"tab.disabled\"\n        [class.active]=\"tab.active\">\n        <button\n          class=\"tabs--button\"\n          (click)=\"tabClicked(tab)\"\n          [disabled]=\"tab.disabled\">\n          {{tab.title}}\n        </button>\n      </li>\n    </ul>\n\n  </ng-container>\n\n  <ul\n\n    *ngIf=\"!vertical && showTabs\"\n    semui-list\n    class=\"semui-tabs-list list-reset\"\n    [class.tabs-horizontal]=\"!vertical\">\n    <li\n      *ngFor=\"let tab of tabs\"\n      semui-list-item\n      list-item\n      sem-importance=\"tertiary\"\n      class=\"corner_top \"\n      [class.disabled]=\"tab.disabled\"\n      [class.active]=\"tab.active\">\n      <button\n        (click)=\"tabClicked(tab)\"\n        [disabled]=\"tab.disabled\">\n        {{tab.title}}\n      </button>\n    </li>\n  </ul>\n\n  <div class=\"tab-nav\">\n    <ng-content select=\"[tab-nav]\"></ng-content>\n  </div>\n  <div class=\"semui-tab-content\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
                        host: {
                            class: 'semui-tabs'
                        },
                        encapsulation: i0.ViewEncapsulation.None
                    },] },
        ];
        TabsComponent.propDecorators = {
            showTabs: [{ type: i0.Input }],
            vertical: [{ type: i0.Input }],
            swipe: [{ type: i0.Input }],
            select: [{ type: i0.Output }],
            tabs: [{ type: i0.ContentChildren, args: [TabComponent,] }]
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
            { type: i0.NgModule, args: [{
                        declarations: [
                            TabComponent,
                            TabsComponent, IfTabActiveDirective
                        ],
                        exports: [TabComponent, TabsComponent, IfTabActiveDirective],
                        imports: [
                            common.CommonModule,
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'div[semui-form-field]',
                        styles: [":host{display:block;padding:15px}"],
                        template: "<ng-content select=\"[field-label]\"></ng-content>\n<ng-content select=\"[field-prefix]\"></ng-content>\n<ng-content select=\"[field-input]\"></ng-content>\n"
                    },] },
        ];
        /** @nocollapse */
        FormFieldComponent.ctorParameters = function () { return []; };
        FormFieldComponent.propDecorators = {
            addBaseClass: [{ type: i0.HostBinding, args: ['class.semui-form-field',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
                classes.forEach(( /**
                 * @param {?} _class
                 * @param {?} index
                 * @return {?}
                 */function (_class, index) {
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: 'button[sem-btn-fab]',
                        template: "\n    <ng-content></ng-content>\n  "
                    },] },
        ];
        ButtonFabComponent.propDecorators = {
            large: [{ type: i0.Input, args: ['large',] }],
            small: [{ type: i0.Input, args: ['small',] }],
            medium: [{ type: i0.Input, args: ['medium',] }],
            corner: [{ type: i0.Input, args: ['corner',] }],
            semuiTheme: [{ type: i0.Input, args: ['semui-theme',] }],
            semuiimportance: [{ type: i0.Input, args: ['sem-importance',] }],
            classes: [{ type: i0.HostBinding, args: ['class',] }, { type: i0.Input, args: ['class',] }],
            styleAsLightTheme: [{ type: i0.HostBinding, args: ['class.light',] }],
            styleAsDarkTheme: [{ type: i0.HostBinding, args: ['class.dark',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
        function OverlayVerticalComponent(overlay$$1, changeDetectorRef, renderer) {
            this.overlay = overlay$$1;
            this.changeDetectorRef = changeDetectorRef;
            this.renderer = renderer;
            this.isOpened = false;
            this.close = new i0.EventEmitter();
            this.open = new i0.EventEmitter();
            this.destroy$ = new rxjs.Subject();
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
                    new overlay.ConnectionPositionPair({ originY: 'center', originX: 'end' }, { overlayX: 'start', overlayY: 'top' })
                ];
                this.scrollStrategy = this.overlay.scrollStrategies.block();
                /** @type {?} */
                var overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
                /** @type {?} */
                var close$ = rxjs.fromEvent(document, 'click')
                    .pipe(operators.debounceTime(100), operators.filter(( /**
             * @return {?}
             */function () { return _this.isOpened; })), operators.filter(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    _this.dialog.nativeElement.parentNode.style.top = '0';
                    return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
                })), operators.tap(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'semui-overlay-vertical',
                        template: "<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"isOpened\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayScrollStrategy]=\"scrollStrategy\"\n  [cdkConnectedOverlayHeight]=\"OverlayHeight\"\n  [cdkConnectedOverlayWidth]=\"320\"\n  [cdkConnectedOverlayMinWidth]=\"300\"\n  (detach)=\"connectedOverlayDetach()\"\n  (positionChange)=\"rePosition($event)\"\n>\n  <div #dialog role=\"dialog\" aria-label=\"Dialog\" class=\"dialog-container-full\">\n    <ng-container *ngIf=\"contentLoaded\">\n        <ng-content select=\"[overlay-title]\"></ng-content>\n        <ng-content></ng-content>\n    </ng-container>\n  </div>\n</ng-template>\n"
                    },] },
        ];
        /** @nocollapse */
        OverlayVerticalComponent.ctorParameters = function () {
            return [
                { type: overlay.Overlay },
                { type: i0.ChangeDetectorRef },
                { type: i0.Renderer2 }
            ];
        };
        OverlayVerticalComponent.propDecorators = {
            overlayOrigin: [{ type: i0.Input }],
            isOpened: [{ type: i0.Input }],
            close: [{ type: i0.Output }],
            open: [{ type: i0.Output }],
            dialog: [{ type: i0.ViewChild, args: ['dialog',] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: '[semui-font-sizes]',
                        template: "<div class=\"sem-ul-icon-list sem-ul\">\n  <ng-content></ng-content>\n</div>\n\n\n\n<ul class=\"bullet-inlinelist p4\">\n  <li class=\"active\">\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n</ul>\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        SemUiFontSizesComponent.ctorParameters = function () { return []; };
        SemUiFontSizesComponent.propDecorators = {
            activeid: [{ type: i0.Input }],
            template: [{ type: i0.ContentChild, args: [i0.TemplateRef,] }],
            dataSource: [{ type: i0.Input }],
            selectedItem: [{ type: i0.Input }],
            openedParent: [{ type: i0.Input }]
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
            this.activeidChange = new i0.EventEmitter();
            this.change = new i0.EventEmitter();
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
             */ function () {
                return this.parent.selectedItem;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: '[semui-font-sizes-item]',
                        template: "<div\n  [ngClass]=\"{ 'active' : itemRef === selectedItem }\"\n  class=\"sem-li\"\n  (click)=\"toggle()\">\n  <ng-content  select=\"[navlink]\"></ng-content>\n</div>\n<div\n  *ngIf=\"itemRef === selectedItem \"\n  class=\"block\"\n  [ngClass]=\"{ 'active' : itemRef === selectedItem }\"\n>\n  <div class=\"dialog-container--body\">\n    <ng-content select=\"[size-selector]\"></ng-content>\n  </div>\n</div>\n\n\n",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        SemUiFontSizesItemComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: SemUiFontSizesComponent }
            ];
        };
        SemUiFontSizesItemComponent.propDecorators = {
            itemRef: [{ type: i0.Input }],
            indexRef: [{ type: i0.Input }],
            selectedIndex: [{ type: i0.Input }],
            groupId: [{ type: i0.Input }],
            activeid: [{ type: i0.Input }],
            activeidChange: [{ type: i0.Output }],
            change: [{ type: i0.Output }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            UIMODULES,
                            forms.FormsModule
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'semui-icon-row',
                        template: "\n    <p>\n      icon-row works!\n    </p>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'semui-switch-row',
                        template: "\n    <p>\n      switch-row works!\n    </p>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'semui-title-marquee',
                        template: "\n    <p>\n      title-marquee works!\n    </p>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
            { type: i0.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'semui-toggle-row',
                        template: "\n    <p>\n      toggle-row works!\n    </p>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.SemUiService = SemUiService;
    exports.SemUiComponent = SemUiComponent;
    exports.SemUiModule = SemUiModule;
    exports.SemUiButtonModule = SemUiButtonModule;
    exports.SemUiButtonDndModule = SemUiButtonDndModule;
    exports.SemUiButtonFabModule = SemUiButtonFabModule;
    exports.SemUiCardModule = SemUiCardModule;
    exports.SemUiFormFieldModule = SemUiFormFieldModule;
    exports.SemUiFormSelectModule = SemUiFormSelectModule;
    exports.IconRowModule = IconRowModule;
    exports.SemUiIconsListModule = SemUiIconsListModule;
    exports.SemUiInputModule = SemUiInputModule;
    exports.SemUiLabelModule = SemUiLabelModule;
    exports.SemUiListModule = SemUiListModule;
    exports.SemUiOverlayDialogModule = SemUiOverlayDialogModule;
    exports.SemUiOverlayVerticalModule = SemUiOverlayVerticalModule;
    exports.SemUiSectionFooterModule = SemUiSectionFooterModule;
    exports.SemUiSectionHeaderModule = SemUiSectionHeaderModule;
    exports.SwitchRowModule = SwitchRowModule;
    exports.SemUiTabsModule = SemUiTabsModule;
    exports.SemUiThumbnailLargeModule = SemUiThumbnailLargeModule;
    exports.TitleMarqueeModule = TitleMarqueeModule;
    exports.ToggleRowModule = ToggleRowModule;
    exports.ɵz = SemUiButtonDndComponent;
    exports.ɵc = ButtonFabComponent;
    exports.ɵb = ButtonComponent;
    exports.ɵo = CardComponent;
    exports.ɵx = SemUiFontSizesComponent;
    exports.ɵw = SemUiFontSizesModule;
    exports.ɵy = SemUiFontSizesItemComponent;
    exports.ɵv = FormFieldComponent;
    exports.ɵj = FormOptionsComponent;
    exports.ɵi = FormSelectComponent;
    exports.ɵba = IconRowComponent;
    exports.ɵl = IconsListComponent;
    exports.ɵp = InputComponent;
    exports.ɵh = LabelComponent;
    exports.ɵf = ListItemComponent;
    exports.ɵg = ListComponent;
    exports.ɵa = MaterialManifestModule;
    exports.ɵq = OverlayDialogComponent;
    exports.ɵr = OverlayVerticalComponent;
    exports.ɵe = RainDropComponent;
    exports.ɵd = SemUiRainDropModule;
    exports.ɵn = SectionFooterComponent;
    exports.ɵm = SectionHeaderComponent;
    exports.ɵbb = SwitchRowComponent;
    exports.ɵt = IfTabActiveDirective;
    exports.ɵs = TabComponent;
    exports.ɵu = TabsComponent;
    exports.ɵk = ThumbnailLargeComponent;
    exports.ɵbc = TitleMarqueeComponent;
    exports.ɵbd = ToggleRowComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS11aS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9zZW0tdWkuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL3NlbS11aS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi1kbmQvYnV0dG9uLWRuZC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi1kbmQvYnV0dG9uLWRuZC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGlzdC9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xhYmVsL2xhYmVsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLW9wdGlvbnMvZm9ybS1vcHRpb25zLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGh1bWJuYWlsLWxhcmdlL3RodW1ibmFpbC1sYXJnZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9yYWluLWRyb3AvcmFpbi1kcm9wLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3NlY3Rpb24tZm9vdGVyL3NlY3Rpb24tZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2lucHV0L2lucHV0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cuY29tcG9uZW50LnRzIixudWxsLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL3RhYi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbi1yb3cvaWNvbi1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pY29uLXJvdy9pY29uLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItc2VtLXVpJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHA+XHJcbiAgICAgIHNlbS11aSB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW11aS1idXR0b24tZG5kXSwgZGl2W3NlbXVpLWJ1dHRvbi1kbmRdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25EbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ3hzbWFsbCcpIHhzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ21lZGl1bScpIG1lZGl1bTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW0tdGhlbWUnKVxyXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcclxuXHJcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzZXMoKXtcclxuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XHJcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ1dHRvbi1kbmQgJyk7XHJcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWVkaXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zbWFsbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54c21hbGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCd4c21hbGwnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gX2NsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xyXG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWJ1dHRvbi1kbmQtLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpIHtcclxuICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2VtVWlCdXR0b25EbmRDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1kbmQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2VtVWlCdXR0b25EbmRDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdidXR0b25bc2VtLWJ1dHRvbl0sIGRpdltzZW0tYnV0dG9uXScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgb25DbGljayhidG4pIHtcclxuICAgIHRoaXMuc3R5bGVBc0FjdGl2ZSA9ICF0aGlzLnN0eWxlQXNBY3RpdmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoJ2xpbmtidXR0b24nKSBsaW5rYnV0dG9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdpY29ub25seScpIGljb25vbmx5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3Nlcygpe1xyXG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcclxuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tYnV0dG9uJyk7XHJcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmljb25vbmx5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnaWNvbm9ubHknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnbGlua19wcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rX3ByaW1hcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpbmtidXR0b24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsaW5rJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idXR0b24tLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUJ1dHRvbk1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlbXVpLWNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgY2FyZCB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ2FyZENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NhcmRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUNhcmRNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmdcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2xpc3QtdHlwZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPVxyXG4gICAgJ2xpZ2h0J1xyXG4gIHwgJ2RhcmsnXHJcbiAgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tzZW11aS1saXN0LWl0ZW1dJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IExpc3RJdGVtVHlwZTtcclxuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nO1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS1saS1kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXHJcbiAgfVxyXG5cclxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xyXG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWxpLS0nO1xyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENsYXNzZXMoKSB7XHJcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xyXG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1saScpO1xyXG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdpbnZlcnRlZCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnaW52ZXJ0ZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICd0ZXJ0aWFyeScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgndGVydGlhcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdkYW5nZXInKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RhbmdlcicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9jbGFzc2VzO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID1cclxuICAgICdsaWdodCdcclxuICB8ICdkYXJrJ1xyXG4gIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbc2VtdWktbGlzdF0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2xpc3QtaXRlbV1cIj48L25nLWNvbnRlbnQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcclxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1saWdodCcpXHJcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxyXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XHJcbiAgICBjb25zdCBiYXNlID0gJyBzZW0tdWwtLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRDbGFzc2VzKCkge1xyXG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcclxuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tdWwnKTtcclxuICAgIHJldHVybiBfY2xhc3NlcztcclxuICB9XHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSl7XHJcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XHJcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnZGFyaycpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xpc3RJdGVtQ29tcG9uZW50LCBMaXN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTGlzdEl0ZW1Db21wb25lbnQsIExpc3RDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlMaXN0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGFiZWxJbXBvcnRhbmNlTGV2ZWwgPSAnc21hbGwnIHwgJ2xhcmdlJyB8IHVuZGVmaW5lZDtcclxuZXhwb3J0IHR5cGUgTGFiZWxUaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdsYWJlbFtzZW11aS1sYWJlbF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktbGFiZWwnKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXHJcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcIm1lZGl1bVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1lZGl1bScpXHJcbiAgcHVibGljIHN0eWxlQXNNZWRpdW06IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXHJcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvcm0tbGFiZWwnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRm9ybUxhYmVsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcclxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBMYWJlbEltcG9ydGFuY2VMZXZlbDtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxyXG4gIHB1YmxpYyBzdHlsZUFzRGFyazogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBMYWJlbCB0aGVtZSBpbiB0ZXJtcyBvZiBsaWdodC9kYXJrLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktdGhlbWUnKVxyXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBMYWJlbFRoZW1lO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xyXG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRUaGVtZSh0eXBlKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFyayA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdkYXJrJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xyXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgQ1NTIGNsYXNzZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcclxuXHJcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xyXG4gICAgICBjYXNlICgnc21hbGwnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdtZWRpdW0nKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNNZWRpdW0gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICgnbGFyZ2UnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNMYXJnZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdmb3JtLWxhYmVsJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzRm9ybUxhYmVsID0gdHJ1ZTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTGFiZWxDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtMYWJlbENvbXBvbmVudF0sXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlMYWJlbE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZWxlY3Rbc2VtdWktZm9ybS1zZWxlY3RdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VsZWN0Q29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBBbHdheXMgYXBwbHkgdGhlIGJhc2UgUnViaXggYnV0dG9uIGNzcyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLXNlbGVjdCcpXHJcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzczogdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnb3B0aW9uW3NlbXVpLWZvcm0tb3B0aW9uc10nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtT3B0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQWx3YXlzIGFwcGx5IHRoZSBiYXNlIFJ1Yml4IGJ1dHRvbiBjc3MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1vcHRpb24nKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3M6IHRydWU7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1PcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLW9wdGlvbnMvZm9ybS1vcHRpb25zLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRm9ybVNlbGVjdENvbXBvbmVudCwgRm9ybU9wdGlvbnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6W0Zvcm1TZWxlY3RDb21wb25lbnQsIEZvcm1PcHRpb25zQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb3JtU2VsZWN0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2ZpZ3VyZVtzZW11aS10aHVtYm5haWxdJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltjYXJkLWltYWdlXVwiPjwvbmctY29udGVudD5cclxuXHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIltzZW0tc2VjdGlvbi1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuXHJcblxyXG5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGh1bWJuYWlsTGFyZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktdGh1bWJuYWlsJylcclxuICBwdWJsaWMgYWRkQmFzZUJ1dHRvbkNzc0NsYXNzID0gdHJ1ZTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGh1bWJuYWlsTGFyZ2VDb21wb25lbnQgfSBmcm9tICcuL3RodW1ibmFpbC1sYXJnZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RodW1ibmFpbExhcmdlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVGh1bWJuYWlsTGFyZ2VDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZW11aS1pY29ucy1saXN0JyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25zTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSWNvbnNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9pY29ucy1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSWNvbnNMaXN0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSWNvbnNMaXN0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlJY29uc0xpc3RNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZW11aS1yYWluLWRyb3AnLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFpbkRyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJhaW5Ecm9wQ29tcG9uZW50IH0gZnJvbSAnLi9yYWluLWRyb3AuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtSYWluRHJvcENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1JhaW5Ecm9wQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlSYWluRHJvcE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgIEhlYWRlckltcG9ydGFuY2VMZXZlbCA9ICcnIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktc2VjdGlvbi1oZWFkZXJdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENzcyBiYXNlIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktaGVhZGVyLXNlY3Rpb24nKVxyXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwic21hbGxcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXHJcbiAgcHVibGljIHN0eWxlQXNTbWFsbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXHJcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogSGVhZGVySW1wb3J0YW5jZUxldmVsO1xyXG5cclxuICAvKipcclxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXHJcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XHJcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xyXG4gICAgICBjYXNlICgnc21hbGwnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgKCdsYXJnZScpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtTZWN0aW9uSGVhZGVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2VjdGlvbkhlYWRlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgRm9vdGVySW1wb3J0YW5jZUxldmVsID0gJycgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS1zZWN0aW9uLWZvb3Rlcl0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbkZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQ3NzIGJhc2UgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb290ZXItc2VjdGlvbicpXHJcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNtYWxsJylcclxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXHJcbiAgICovXHJcbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcclxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBGb290ZXJJbXBvcnRhbmNlTGV2ZWw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcclxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXQgY29tcG9uZW50IHRvIGJlIG9uIGRhcmsgb3IgbGlnaHQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcclxuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxyXG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2xhcmdlJyk6XHJcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTZWN0aW9uRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLWZvb3Rlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlY3Rpb25Gb290ZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTZWN0aW9uRm9vdGVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAnZm9ybS1pbnB1dCcgfCB1bmRlZmluZWQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2lucHV0W3NlbXVpLWlucHV0XScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBTZW11aSBidXR0b24gY3NzIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1pbnB1dCcpXHJcbiAgcHJpdmF0ZSBhZGRGb3JtQmFzZUNsYXNzOiB0cnVlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeSBvciBzZWNvbmRhcnkuXHJcbiAgICogUHJpbWFyeSBzZXRzIGFzIHJvdW5kIGNvcm5lcnMgYW5kIHNoYXJwIGVkZ2UsIHNlY29uZGFyeSBpcyBhbGwgcm91bmRcclxuICAgKi9cclxuICBASW5wdXQoJ3NlbXVpLXR5cGUnKVxyXG4gIHB1YmxpYyBzZW11aVR5cGU6IElucHV0VHlwZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNlbXVpLWZvcm0taW5wdXRcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcclxuICBwdWJsaWMgc2VtdWlUeXBlRm9ybUlucHV0OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlUeXBlKCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldCBjb21wb25lbnQncyBwcm9wZXJ0aWVzIGJvdW5kIHRvXHJcbiAgICogdGhlIGhvc3QgZWxlbWVudCBDU1MgY2xhc3Nlcy5cclxuICAgKi9cclxuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5VHlwZSgpIHtcclxuXHJcbiAgICBpZiAoJ2Zvcm0taW5wdXQnID09PSB0aGlzLnNlbXVpVHlwZSkge1xyXG4gICAgICB0aGlzLnNlbXVpVHlwZUZvcm1JbnB1dCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuL2lucHV0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbSW5wdXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtJbnB1dENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUlucHV0TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcclxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcclxuICBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDZGtPdmVybGF5T3JpZ2luLFxyXG4gIE92ZXJsYXlcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICdzZW11aS1vdmVybGF5LWRpYWxvZycsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlXHJcbiAgICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCJcclxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5lZFwiXHJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIm92ZXJsYXlXaWR0aFwiXHJcbiAgICAoZGV0YWNoKT1cImNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKVwiXHJcbiAgPlxyXG4gICAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LXRpdGxlXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3ZlcmxheURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzICBPbkRlc3Ryb3ksIE9uSW5pdCAge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBASW5wdXQoKSBpc09wZW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG92ZXJsYXlXaWR0aDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAvL1xyXG4gIC8vIG92ZXJsYXlPZmZzZXRYO1xyXG4gIC8vIE92ZXJsYXlIZWlnaHQ7XHJcbiAgLy8gc2Nyb2xsU3RyYXRlZ3k7XHJcbiAgLy8gcG9zaXRpb25zO1xyXG4gIC8vIGJhY2tkcm9wQ2xhc3M7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8vICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xyXG4gICAgLy8gICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcclxuICAgIC8vICAgdGhpcy5PdmVybGF5SGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgLy8gICB0aGlzLnBvc2l0aW9ucyAgPSBbXHJcbiAgICAvLyAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAvLyAgICAgICB7b3JpZ2luWTogJ2NlbnRlcicsIG9yaWdpblg6ICdlbmQnfSxcclxuICAgIC8vICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxyXG4gICAgLy8gICAgIClcclxuICAgIC8vICAgXTtcclxuICAgIC8vICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbmVkKSxcclxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFwKCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgY2xvc2UkLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuICBjb25uZWN0ZWRPdmVybGF5RGV0YWNoKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gaXNPcGVuZWQ7XHJcbiAgICBpc09wZW5lZCA/IHRoaXMub3Blbi5lbWl0KCkgOiB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIGRpYWxvZywgZXZlbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgQ2RrU3RlcHBlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcclxuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xyXG5cclxuY29uc3QgbW9kdWxlcyA9IFtcclxuICAvLyBDREtcclxuICBBMTF5TW9kdWxlLFxyXG4gIEJpZGlNb2R1bGUsXHJcbiAgT2JzZXJ2ZXJzTW9kdWxlLFxyXG4gIE92ZXJsYXlNb2R1bGUsXHJcbiAgUGxhdGZvcm1Nb2R1bGUsXHJcbiAgUG9ydGFsTW9kdWxlLFxyXG4gIFNjcm9sbERpc3BhdGNoTW9kdWxlLFxyXG4gIENka1N0ZXBwZXJNb2R1bGUsXHJcbiAgQ2RrVGFibGVNb2R1bGUsXHJcbl1cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIC8vIGltcG9ydHM6IFtcclxuICAvLyAgIENvbW1vbk1vZHVsZSxcclxuICAvLyAgIC4uLm1vZHVsZXNcclxuICAvLyBdLFxyXG4gIC8vIGRlY2xhcmF0aW9uczogW10sXHJcbiAgZXhwb3J0czogWyAuLi5tb2R1bGVzIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUge1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE92ZXJsYXlEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXktZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUgfSBmcm9tICcuLi9tYXRlcmlhbC1tYW5pZmVzdC9tYXRlcmlhbC1tYW5pZmVzdC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbT3ZlcmxheURpYWxvZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogIFtPdmVybGF5RGlhbG9nQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlPdmVybGF5RGlhbG9nTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hJZlRhYkFjdGl2ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZlRhYkFjdGl2ZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBUT0RPOiBSZW1vdmUgaGlkZGVuIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgzMTAgaXMgcmVzb2x2ZWRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS10YWJdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAqbmdJZj1cInRlbXBsYXRlOyB0aGVuIHRlbXBsYXRlX2NvbnRhaW5lciBlbHNlIGNvbnRlbnRfY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICA8bmctdGVtcGxhdGUgI3RlbXBsYXRlX2NvbnRhaW5lcj5cclxuICAgICAgPGRpdiAqbmdJZj1cImFjdGl2ZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGUudGVtcGxhdGVSZWZcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50X2NvbnRhaW5lcj5cclxuICAgICAgPGRpdiBbaGlkZGVuXT1cIiFhY3RpdmVcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnc2VtdWktdGFiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvKipcclxuICAgKiBDc3MgYmFzZSBjbGFzcy5cclxuICAgKi9cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kZWZhdWx0JylcclxuICBwdWJsaWMgYWRkQmFzZUJ1dHRvbkNzc0NsYXNzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcclxuXHJcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoSWZUYWJBY3RpdmVEaXJlY3RpdmUpIHRlbXBsYXRlOiBJZlRhYkFjdGl2ZURpcmVjdGl2ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIHB1YmxpYyBhY3RpdmVDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gIH1cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEV2ZW50RW1pdHRlcixcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJDb250ZW50SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFic10nLFxyXG4gIHRlbXBsYXRlOiBgPHNlY3Rpb25cclxuICBbY2xhc3MudGFicy12ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiXHJcbiAgW2NsYXNzLnRhYnMtaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIlxyXG4gIFtjbGFzcy5zd2lwZV09XCJzd2lwZVwiXHJcbj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dUYWJzICYmIHZlcnRpY2FsXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFicy1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgIDx1bFxyXG4gICAgICBjbGFzcz1cInNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbFwiXHJcbiAgICAgIFtjbGFzcy50YWJzLXZlcnRpY2FsXT1cInZlcnRpY2FsXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiXHJcbiAgICAgICAgY2xhc3M9XCJzZW11aS10YWJcIlxyXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzPVwidGFicy0tYnV0dG9uXCJcclxuICAgICAgICAgIChjbGljayk9XCJ0YWJDbGlja2VkKHRhYilcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3t0YWIudGl0bGV9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuXHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDx1bFxyXG5cclxuICAgICpuZ0lmPVwiIXZlcnRpY2FsICYmIHNob3dUYWJzXCJcclxuICAgIHNlbXVpLWxpc3RcclxuICAgIGNsYXNzPVwic2VtdWktdGFicy1saXN0IGxpc3QtcmVzZXRcIlxyXG4gICAgW2NsYXNzLnRhYnMtaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIj5cclxuICAgIDxsaVxyXG4gICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxyXG4gICAgICBzZW11aS1saXN0LWl0ZW1cclxuICAgICAgbGlzdC1pdGVtXHJcbiAgICAgIHNlbS1pbXBvcnRhbmNlPVwidGVydGlhcnlcIlxyXG4gICAgICBjbGFzcz1cImNvcm5lcl90b3AgXCJcclxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgKGNsaWNrKT1cInRhYkNsaWNrZWQodGFiKVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxyXG4gICAgICAgIHt7dGFiLnRpdGxlfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ0YWItbmF2XCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFiLW5hdl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNlbXVpLXRhYi1jb250ZW50XCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ3NlbXVpLXRhYnMnXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQElucHV0KCkgc2hvd1RhYnM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdmVydGljYWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc3dpcGU6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xyXG5cclxuICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB0YWIuYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgY29uc3QgYWN0aXZlcyA9IHRoaXMudGFicy5maWx0ZXIodCA9PiB0LmFjdGl2ZSk7XHJcblxyXG4gICAgaWYoYWN0aXZlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE11bHRpcGxlIGFjdGl2ZSB0YWJzIHNldCAnYWN0aXZlJ2ApO1xyXG4gICAgfSBlbHNlIGlmKCFhY3RpdmVzLmxlbmd0aCAmJiB0YWJzLmxlbmd0aCkge1xyXG4gICAgICB0YWJzWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0YWJDbGlja2VkKGFjdGl2ZVRhYik6IHZvaWQge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XHJcblxyXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgYWN0aXZlVGFiLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zZWxlY3QuZW1pdChhY3RpdmVUYWIpO1xyXG4gIH1cclxuXHJcbiAgbW92ZShvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleCArIG9mZnNldDsgaSA8IHRhYnMubGVuZ3RoICYmIGkgPj0gMDsgaSArPSBvZmZzZXQpIHtcclxuICAgICAgY29uc3QgdGFiID0gdGFic1tpXTtcclxuICAgICAgaWYgKHRhYiAmJiAhdGFiLmRpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy50YWJDbGlja2VkKHRhYnNbaV0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpOiB2b2lkIHtcclxuICAgIHRoaXMubW92ZSgxKTtcclxuICB9XHJcblxyXG4gIHByZXYoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vdmUoLTEpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RhYnMvdGFicy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJZlRhYkFjdGl2ZURpcmVjdGl2ZSB9IGZyb20gJy4vaWYtdGFiLWFjdGl2ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUgfSBmcm9tICcuLi9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUxpc3RNb2R1bGUgfSBmcm9tICcuLi9saXN0L2xpc3QubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUYWJDb21wb25lbnQsXHJcbiAgICBUYWJzQ29tcG9uZW50LCBJZlRhYkFjdGl2ZURpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW1RhYkNvbXBvbmVudCwgVGFic0NvbXBvbmVudCwgSWZUYWJBY3RpdmVEaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFNlbVVpTGlzdE1vZHVsZSxcclxuICAgIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpVGFic01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktZm9ybS1maWVsZF0nLFxyXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTVweH1gXSxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1sYWJlbF1cIj48L25nLWNvbnRlbnQ+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1wcmVmaXhdXCI+PC9uZy1jb250ZW50PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtaW5wdXRdXCI+PC9uZy1jb250ZW50PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1maWVsZCcpXHJcbiAgcHVibGljIGFkZEJhc2VDbGFzczogdHJ1ZTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbRm9ybUZpZWxkQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbRm9ybUZpZWxkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb3JtRmllbGRNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCB0eXBlIENvcm5lclR5cGUgPSAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgfCB1bmRlZmluZWQ7XHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkltcG9ydGFuY2VMZXZlbCA9ICdwcmltYXJ5JyB8ICdsaW5rLWJ1dHRvbicgfCAncm91bmQtYnV0dG9uJyB8ICdjb3JuZXItYnV0dG9uJyB8IHVuZGVmaW5lZDtcclxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdidXR0b25bc2VtLWJ0bi1mYWJdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkZhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxyXG4gICAqL1xyXG5cclxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZztcclxuICBASW5wdXQoJ3NtYWxsJykgc21hbGw6IHN0cmluZztcclxuICBASW5wdXQoJ21lZGl1bScpIG1lZGl1bTogc3RyaW5nO1xyXG4gIEBJbnB1dCgnY29ybmVyJykgY29ybmVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCdzZW11aS10aGVtZScpIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xyXG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW11aWltcG9ydGFuY2U6IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxyXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcclxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXHJcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc2VzKCkge1xyXG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcclxuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tYnRuLWZhYicpO1xyXG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzbWFsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWVkaXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdpbnZlcnRlZCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnaW52ZXJ0ZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ3NlY29uZGFyeScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdtZWRpdW0nKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnZGVmYXVsdF9zbWFsbCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnZGVmYXVsdF9zbWFsbCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnbm9uZScpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX25vbmUnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfcmlnaHQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9sZWZ0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICd0b3AtbGVmdCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3RvcC1sZWZ0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICd0b3AtcmlnaHQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtcmlnaHQnKTtcclxuICAgIH1cclxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2JvdHRvbS1yaWdodCcpIHtcclxuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2JvdHRvbS1yaWdodCcpO1xyXG4gICAgfVxyXG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnYm90dG9tLWxlZnQnKSB7XHJcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tbGVmdCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9jbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcclxuICAgIGNvbnN0IGJhc2UgPSAnc2VtLWJ0bi1mYWItLSc7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xyXG4gICAgc3dpdGNoICh0aGVtZSkge1xyXG4gICAgICBjYXNlICgnbGlnaHQnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAoJ2RhcmsnKTpcclxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQnV0dG9uRmFiQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24tZmFiLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQnV0dG9uRmFiQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQnV0dG9uRmFiQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25GYWJNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsXHJcbiAgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDZGtPdmVybGF5T3JpZ2luLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgT3ZlcmxheVxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRhcCAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZW11aS1vdmVybGF5LXZlcnRpY2FsJyxcclxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZVxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiaXNPcGVuZWRcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cInBvc2l0aW9uc1wiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlTY3JvbGxTdHJhdGVneV09XCJzY3JvbGxTdHJhdGVneVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIZWlnaHRdPVwiT3ZlcmxheUhlaWdodFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCIzMjBcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwiMzAwXCJcclxuICAoZGV0YWNoKT1cImNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKVwiXHJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cInJlUG9zaXRpb24oJGV2ZW50KVwiXHJcbj5cclxuICA8ZGl2ICNkaWFsb2cgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWw9XCJEaWFsb2dcIiBjbGFzcz1cImRpYWxvZy1jb250YWluZXItZnVsbFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRMb2FkZWRcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3ZlcmxheS10aXRsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlWZXJ0aWNhbENvbXBvbmVudCBpbXBsZW1lbnRzICBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2Vze1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge31cclxuXHJcbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBASW5wdXQoKSBpc09wZW5lZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjtcclxuXHJcblxyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuICBvdmVybGF5T2Zmc2V0WDtcclxuICBPdmVybGF5SGVpZ2h0O1xyXG4gIHNjcm9sbFN0cmF0ZWd5O1xyXG4gIHBvc2l0aW9ucztcclxuICBiYWNrZHJvcENsYXNzO1xyXG5cclxuICBjb250ZW50TG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuYmFja2Ryb3BDbGFzcyA9ICdjZGtPdmVybGF5RnVsbEhlaWdodCdcclxuICAgIHRoaXMub3ZlcmxheU9mZnNldFggPSAwO1xyXG4gICAgdGhpcy5PdmVybGF5SGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgdGhpcy5wb3NpdGlvbnMgID0gW1xyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgICAgICB7b3JpZ2luWTogJ2NlbnRlcicsIG9yaWdpblg6ICdlbmQnfSxcclxuICAgICAgICB7b3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJ31cclxuICAgICAgKVxyXG4gICAgXTtcclxuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xyXG4gICAgY29uc3Qgb3ZlcmxheU9yaWdpbkVsID0gdGhpcy5vdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbmVkKSxcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS50b3AgPSAnMCc7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIHRoaXMuZGlhbG9nLCBldmVudCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFwKCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIGNsb3NlJC5zdWJzY3JpYmUoKTtcclxuXHJcbiB9XHJcbiAgY29ubmVjdGVkT3ZlcmxheURldGFjaCgpIHtcclxuICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XHJcbiAgICBpZihjaGFuZ2VzLmlzT3BlbmVkLmN1cnJlbnRWYWx1ZSl7XHJcbiAgICAgIHRoaXMuY29udGVudExvYWRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlUG9zaXRpb24oaXRlbSl7XHJcbiAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xyXG4gIH1cclxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzT3BlbmVkID0gaXNPcGVuZWQ7XHJcbiAgICBpc09wZW5lZCA/IHRoaXMub3Blbi5lbWl0KCkgOiB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIGRpYWxvZywgZXZlbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50IH0gZnJvbSAnLi9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUgfSBmcm9tICcuLi9tYXRlcmlhbC1tYW5pZmVzdC9tYXRlcmlhbC1tYW5pZmVzdC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtPdmVybGF5VmVydGljYWxDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtPdmVybGF5VmVydGljYWxDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaU92ZXJsYXlWZXJ0aWNhbE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIENvbnRlbnRDaGlsZCxcclxuICBPbkNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgVGVtcGxhdGVSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbc2VtdWktZm9udC1zaXplc10nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlbS11bC1pY29uLWxpc3Qgc2VtLXVsXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPHVsIGNsYXNzPVwiYnVsbGV0LWlubGluZWxpc3QgcDRcIj5cclxuICA8bGkgY2xhc3M9XCJhY3RpdmVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cclxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbiAgPGxpPlxyXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxyXG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9saT5cclxuICA8bGk+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4gIDxsaT5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cclxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcbmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpRm9udFNpemVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBhY3RpdmVpZDogbnVtYmVyO1xyXG5cclxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKVxyXG4gIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGF0YVNvdXJjZTogYW55ID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBhbnkgPSB7fTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgb3BlbmVkUGFyZW50OiBhbnkgPSBudWxsO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbGV2ZWxzOiBBcnJheTxPYmplY3Q+ID0gW1xyXG4gICAge251bTogMCwgbmFtZTogJzEnfSxcclxuICAgIHtudW06IDEsIG5hbWU6ICcyJ31cclxuICBdO1xyXG4gIHNlbGVjdGVkTGV2ZWwgPSB0aGlzLmxldmVsc1swXTtcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlcyBhcmUgZW5hYmxlZCcpXHJcbiAgICB0aGlzLmFjdGl2ZWlkID0gY2hhbmdlcy5hY3RpdmVpZC5jdXJyZW50VmFsdWU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VtVWlGb250U2l6ZXNDb21wb25lbnQgfSBmcm9tICcuLi9mb250LXNpemVzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbc2VtdWktZm9udC1zaXplcy1pdGVtXScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2XHJcbiAgW25nQ2xhc3NdPVwieyAnYWN0aXZlJyA6IGl0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSB9XCJcclxuICBjbGFzcz1cInNlbS1saVwiXHJcbiAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgIHNlbGVjdD1cIltuYXZsaW5rXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXZcclxuICAqbmdJZj1cIml0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSBcIlxyXG4gIGNsYXNzPVwiYmxvY2tcIlxyXG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci0tYm9keVwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3NpemUtc2VsZWN0b3JdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtUmVmOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBwcml2YXRlIGluZGV4UmVmID0gLTE7XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBzZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgQElucHV0KCkgcHVibGljIGdyb3VwSWQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgYWN0aXZlaWQ6IG51bWJlcjtcclxuICBAT3V0cHV0KCkgYWN0aXZlaWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcGFyZW50OiBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCxcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtSW5kZXgoKTtcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkSXRlbUluZGV4KCkge1xyXG4gICAgY29uc29sZS5sb2coJ211cyBiZSBjYWxsIGhlcmUnKTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRoaXMuaW5kZXhSZWYpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmdldEl0ZW1BdEluZGV4KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtO1xyXG4gIH1cclxuICBzZXQgc2VsZWN0ZWRJdGVtKHZhbHVlKSB7XHJcbiAgICB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0gPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCduZXcgb25lJywgICB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xyXG4gIH1cclxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1SZWY7XHJcbiAgICBpZiAodGhpcy5pdGVtUmVmID09PSB0aGlzLnNlbGVjdGVkSXRlbSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0cnVlJylcclxuICAgICAgLy8gIHRoaXMuc3R5bGVBc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSk7XHJcbiAgICAvLyB0aGlzLmFjdGl2ZWlkQ2hhbmdlLmVtaXQodGhpcy5ncm91cElkKTtcclxuICB9XHJcblxyXG4gIGdldCBwYXJlbnRMaXN0KCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZGF0YVNvdXJjZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRJdGVtQXRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMucGFyZW50TGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gdGhpcy5wYXJlbnRMaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudExpc3RbdGhpcy5zZWxlY3RlZEluZGV4XTtcclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1NlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtTZW1VaUZvbnRTaXplc0NvbXBvbmVudH0gZnJvbSAnLi9mb250LXNpemVzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2VtVWlGb250U2l6ZXNDb21wb25lbnQsIFNlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NlbVVpRm9udFNpemVzQ29tcG9uZW50LCBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBTZW1VaUNvbXBvbmVudCB9IGZyb20gJy4vc2VtLXVpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlbVVpQnV0dG9uRG5kTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2J1dHRvbi1kbmQvYnV0dG9uLWRuZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24vYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpQ2FyZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9jYXJkL2NhcmQubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlMaXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2xpc3QvbGlzdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaUxhYmVsTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpRm9ybVNlbGVjdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaVRodW1ibmFpbExhcmdlTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3RodW1ibmFpbC1sYXJnZS90aHVtYm5haWwtbGFyZ2UubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlJY29uc0xpc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaWNvbnMtbGlzdC9pY29ucy1saXN0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpUmFpbkRyb3BNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvcmFpbi1kcm9wL3JhaW4tZHJvcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NlY3Rpb24tZm9vdGVyL3NlY3Rpb24tZm9vdGVyLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpSW5wdXRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaW5wdXQvaW5wdXQubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlPdmVybGF5RGlhbG9nTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL292ZXJsYXktZGlhbG9nL292ZXJsYXktZGlhbG9nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpVGFic01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy90YWJzL3RhYnMubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlGb3JtRmllbGRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlbVVpQnV0dG9uRmFiTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2J1dHRvbi1mYWIvYnV0dG9uLWZhYi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZW1VaU92ZXJsYXlWZXJ0aWNhbE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9vdmVybGF5LXZlcnRpY2FsL292ZXJsYXktdmVydGljYWwubW9kdWxlJztcclxuaW1wb3J0IHsgU2VtVWlGb250U2l6ZXNNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcclxuXHJcbmNvbnN0IFVJTU9EVUxFUyA9IFtcclxuICBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlLFxyXG4gIFNlbVVpQnV0dG9uTW9kdWxlLFxyXG4gIFNlbVVpQnV0dG9uRmFiTW9kdWxlLFxyXG4gIFNlbVVpUmFpbkRyb3BNb2R1bGUsXHJcbiAgU2VtVWlMaXN0TW9kdWxlLFxyXG4gIFNlbVVpTGFiZWxNb2R1bGUsXHJcbiAgU2VtVWlGb3JtU2VsZWN0TW9kdWxlLFxyXG4gIFNlbVVpVGh1bWJuYWlsTGFyZ2VNb2R1bGUsXHJcbiAgU2VtVWlJY29uc0xpc3RNb2R1bGUsXHJcbiAgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlLFxyXG4gIFNlbVVpU2VjdGlvbkZvb3Rlck1vZHVsZSxcclxuICBTZW1VaUNhcmRNb2R1bGUsXHJcbiAgU2VtVWlJbnB1dE1vZHVsZSxcclxuICBTZW1VaU92ZXJsYXlEaWFsb2dNb2R1bGUsXHJcbiAgU2VtVWlPdmVybGF5VmVydGljYWxNb2R1bGUsXHJcbiAgU2VtVWlUYWJzTW9kdWxlLFxyXG4gIFNlbVVpRm9ybUZpZWxkTW9kdWxlLFxyXG4gIFNlbVVpRm9udFNpemVzTW9kdWxlLFxyXG4gIFNlbVVpQnV0dG9uRG5kTW9kdWxlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBVSU1PRFVMRVMsXHJcbiAgICBGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2VtVWlDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTZW1VaUNvbXBvbmVudCwgVUlNT0RVTEVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc2VtdWktaWNvbi1yb3cnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgaWNvbi1yb3cgd29ya3MhXHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvblJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSWNvblJvd0NvbXBvbmVudCB9IGZyb20gJy4vaWNvbi1yb3cuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtJY29uUm93Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSWNvblJvd0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEljb25Sb3dNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc2VtdWktc3dpdGNoLXJvdycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBzd2l0Y2gtcm93IHdvcmtzIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3aXRjaFJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3dpdGNoUm93Q29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2gtcm93LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU3dpdGNoUm93Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU3dpdGNoUm93Q29tcG9uZW50XSxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTd2l0Y2hSb3dNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc2VtdWktdGl0bGUtbWFycXVlZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICB0aXRsZS1tYXJxdWVlIHdvcmtzIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlTWFycXVlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGl0bGVNYXJxdWVlQ29tcG9uZW50IH0gZnJvbSAnLi90aXRsZS1tYXJxdWVlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVGl0bGVNYXJxdWVlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVGl0bGVNYXJxdWVlQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVNYXJxdWVlTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NlbXVpLXRvZ2dsZS1yb3cnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgdG9nZ2xlLXJvdyB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRvZ2dsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vdG9nZ2xlLXJvdy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RvZ2dsZVJvd0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RvZ2dsZVJvd0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZ2dsZVJvd01vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiSG9zdEJpbmRpbmciLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiSG9zdExpc3RlbmVyIiwib3ZlcmxheSIsIkV2ZW50RW1pdHRlciIsIlN1YmplY3QiLCJmcm9tRXZlbnQiLCJkZWJvdW5jZVRpbWUiLCJmaWx0ZXIiLCJ0YXAiLCJPdmVybGF5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJPdXRwdXQiLCJWaWV3Q2hpbGQiLCJBMTF5TW9kdWxlIiwiQmlkaU1vZHVsZSIsIk9ic2VydmVyc01vZHVsZSIsIk92ZXJsYXlNb2R1bGUiLCJQbGF0Zm9ybU1vZHVsZSIsIlBvcnRhbE1vZHVsZSIsIlNjcm9sbERpc3BhdGNoTW9kdWxlIiwiQ2RrU3RlcHBlck1vZHVsZSIsIkNka1RhYmxlTW9kdWxlIiwiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJDb250ZW50Q2hpbGQiLCJDb250ZW50Q2hpbGRyZW4iLCJDb25uZWN0aW9uUG9zaXRpb25QYWlyIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsIkZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsyQkFKRDtLQVFDOzs7Ozs7QUNSRDtRQWFFO1NBQWlCOzs7O1FBRWpCLGlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsOENBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7UUFRRCxxQkFBQztLQUFBOzs7Ozs7QUNsQkQ7UUErREU7Ozs7WUFsQ08sa0JBQWEsR0FBWSxLQUFLLENBQUM7U0FrQ3JCOzs7O1FBRWpCLDBDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxDQUFBO2dCQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FB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