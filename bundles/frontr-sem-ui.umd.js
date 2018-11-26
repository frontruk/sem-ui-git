(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/overlay'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/cdk/observers'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@frontr/sem-ui', ['exports', '@angular/core', '@angular/common', '@angular/cdk/overlay', 'rxjs', 'rxjs/operators', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/cdk/observers', '@angular/cdk/platform', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/forms'], factory) :
    (factory((global.frontr = global.frontr || {}, global.frontr['sem-ui'] = {}),global.ng.core,global.ng.common,global.ng.cdk.overlay,global.rxjs,global.rxjs.operators,global.ng.cdk.a11y,global.ng.cdk.bidi,global.ng.cdk.observers,global.ng.cdk.platform,global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.forms));
}(this, (function (exports,i0,common,overlay,rxjs,operators,a11y,bidi,observers,platform,portal,scrolling,stepper,table,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiService = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiButtonDndComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiButtonDndModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiButtonModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiCardModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ListItemComponent = (function () {
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
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        // tslint:disable-next-line:component-selector
                        selector: '[semui-list-item]',
                        template: "<ng-content></ng-content>\n"
                    },] },
        ];
        /** @nocollapse */
        ListItemComponent.ctorParameters = function () { return []; };
        ListItemComponent.propDecorators = {
            item: [{ type: i0.Input }],
            semuiTheme: [{ type: i0.Input, args: ['sem-theme',] }],
            semImportance: [{ type: i0.Input, args: ['sem-importance',] }],
            classes: [{ type: i0.HostBinding, args: ['class',] }, { type: i0.Input, args: ['class',] }],
            styleAsLightTheme: [{ type: i0.HostBinding, args: ['class.sem-li-light',] }],
            styleAsDarkTheme: [{ type: i0.HostBinding, args: ['class.sem-li-dark',] }]
        };
        return ListItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ListComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiListModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LabelComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiLabelModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormSelectComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormOptionsComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiFormSelectModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ThumbnailLargeComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiThumbnailLargeModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var IconsListComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiIconsListModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RainDropComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiRainDropModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SectionHeaderComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiSectionHeaderModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SectionFooterComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiSectionFooterModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiInputModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OverlayDialogComponent = (function () {
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
                var close$ = rxjs.fromEvent(document, 'click')
                    .pipe(operators.debounceTime(100), operators.filter(function () { return _this.isOpened; }), operators.filter(function (event) {
                    return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
                }), operators.tap(function (data) {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var modules = [
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
    var MaterialManifestModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiOverlayDialogModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var IfTabActiveDirective = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
     */
    var TabComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TabsComponent = (function () {
        function TabsComponent() {
            this.select = new i0.EventEmitter();
        }
        Object.defineProperty(TabsComponent.prototype, "index", {
            get: /**
             * @return {?}
             */ function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiTabsModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormFieldComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiFormFieldModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonFabComponent = (function () {
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
                if (this.semuiimportance === 'primary') {
                    _classes.push('primary');
                }
                if (this.semuiimportance === 'secondary') {
                    _classes.push('secondary');
                }
                if (this.semuiimportance === 'default') {
                    _classes.push('default');
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiButtonFabModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OverlayVerticalComponent = (function () {
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
                    .pipe(operators.debounceTime(100), operators.filter(function () { return _this.isOpened; }), operators.filter(function (event) {
                    _this.dialog.nativeElement.parentNode.style.top = '0';
                    return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
                }), operators.tap(function (data) {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiOverlayVerticalModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiFontSizesComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiFontSizesItemComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SemUiFontSizesModule = (function () {
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
    var SemUiModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var IconRowComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var IconRowModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SwitchRowComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SwitchRowModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TitleMarqueeComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TitleMarqueeModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToggleRowComponent = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToggleRowModule = (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS11aS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9zZW0tdWkuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL3NlbS11aS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi1kbmQvYnV0dG9uLWRuZC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi1kbmQvYnV0dG9uLWRuZC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGlzdC9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xhYmVsL2xhYmVsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLW9wdGlvbnMvZm9ybS1vcHRpb25zLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGh1bWJuYWlsLWxhcmdlL3RodW1ibmFpbC1sYXJnZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9yYWluLWRyb3AvcmFpbi1kcm9wLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3NlY3Rpb24tZm9vdGVyL3NlY3Rpb24tZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2lucHV0L2lucHV0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cuY29tcG9uZW50LnRzIixudWxsLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL3RhYi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbi1yb3cvaWNvbi1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pY29uLXJvdy9pY29uLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VtLXVpJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHNlbS11aSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW11aS1idXR0b24tZG5kXSwgZGl2W3NlbXVpLWJ1dHRvbi1kbmRdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3hzbWFsbCcpIHhzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3NtYWxsJykgc21hbGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdmdWxsJykgZnVsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbWVkaXVtJykgbWVkaXVtOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW0tdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG5cbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cblxuICBnZXRDbGFzc2VzKCl7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLWJ1dHRvbi1kbmQgJyk7XG4gICAgaWYgKHRoaXMuYmxvY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnYmxvY2snKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnVsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdmdWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhcmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xhcmdlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1lZGl1bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdtZWRpdW0nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMueHNtYWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3hzbWFsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3NlY29uZGFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJyBzZW0tYnV0dG9uLWRuZC0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKSB7XG4gICAgc3dpdGNoICh0aGVtZSkge1xuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdkYXJrJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25EbmRDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1kbmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTZW1VaUJ1dHRvbkRuZENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25EbmRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxuICovXG5cbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW3NlbS1idXR0b25dLCBkaXZbc2VtLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBzdHlsZUFzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKSBvbkNsaWNrKGJ0bikge1xuICAgIHRoaXMuc3R5bGVBc0FjdGl2ZSA9ICF0aGlzLnN0eWxlQXNBY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcblxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdibG9jaycpIGJsb2NrOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbGlua2J1dHRvbicpIGxpbmtidXR0b246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnaWNvbm9ubHknKSBpY29ub25seTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG5cbiAgZ2V0Q2xhc3Nlcygpe1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idXR0b24nKTtcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdibG9jaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Z1bGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGFyZ2UnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pY29ub25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdpY29ub25seScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2xpbmtfcHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xpbmtfcHJpbWFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5saW5rYnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xpbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3NlY29uZGFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idXR0b24tLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSl7XG4gICAgc3dpdGNoICh0aGVtZSkge1xuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdkYXJrJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VtdWktY2FyZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBjYXJkIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQ2FyZE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RJdGVtVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9saXN0LXR5cGUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIGJ1dHRvbiBpbXBvcnRhbmNlIGxldmVscy5cbiAqL1xuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPVxuICAgICdsaWdodCdcbiAgfCAnZGFyaydcbiAgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tzZW11aS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogTGlzdEl0ZW1UeXBlO1xuICBASW5wdXQoJ3NlbS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtLWxpLWxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtLWxpLWRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuXG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWxpLS0nO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0Q2xhc3NlcygpIHtcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tbGknKTtcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3RlcnRpYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgndGVydGlhcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2RhbmdlcicpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RhbmdlcicpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSkge1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID1cbiAgICAnbGlnaHQnXG4gIHwgJ2RhcmsnXG4gIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbc2VtdWktbGlzdF0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltsaXN0LWl0ZW1dXCI+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzZW0tdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cblxuXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xuICAgIGNvbnN0IGJhc2UgPSAnIHNlbS11bC0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldENsYXNzZXMoKSB7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLXVsJyk7XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMaXN0SXRlbUNvbXBvbmVudCwgTGlzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMaXN0SXRlbUNvbXBvbmVudCwgTGlzdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpTGlzdE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxuICovXG5leHBvcnQgdHlwZSBMYWJlbEltcG9ydGFuY2VMZXZlbCA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgTGFiZWxUaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XG5cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbGFiZWxbc2VtdWktbGFiZWxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWxhYmVsJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc21hbGwnKVxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibWVkaXVtXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tZWRpdW0nKVxuICBwdWJsaWMgc3R5bGVBc01lZGl1bTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvcm0tbGFiZWwnKVxuICBwdWJsaWMgc3R5bGVBc0Zvcm1MYWJlbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogTGFiZWxJbXBvcnRhbmNlTGV2ZWw7XG5cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodDogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBMYWJlbCB0aGVtZSBpbiB0ZXJtcyBvZiBsaWdodC9kYXJrLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBMYWJlbFRoZW1lO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xuICAgIHRoaXMuc2V0VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRUaGVtZSh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFyayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xuICAgKiB0aGUgaG9zdCBlbGVtZW50IENTUyBjbGFzc2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcblxuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XG4gICAgICBjYXNlICgnc21hbGwnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzU21hbGwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdtZWRpdW0nKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTWVkaXVtID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnbGFyZ2UnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdmb3JtLWxhYmVsJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0Zvcm1MYWJlbCA9IHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vbGFiZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMYWJlbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMYWJlbENvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlMYWJlbE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbGVjdFtzZW11aS1mb3JtLXNlbGVjdF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZWxlY3RDb21wb25lbnQge1xuICAvKipcbiAgICogQWx3YXlzIGFwcGx5IHRoZSBiYXNlIFJ1Yml4IGJ1dHRvbiBjc3MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLXNlbGVjdCcpXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3M6IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdvcHRpb25bc2VtdWktZm9ybS1vcHRpb25zXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1PcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBSdWJpeCBidXR0b24gY3NzIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1vcHRpb24nKVxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzOiB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1vcHRpb25zL2Zvcm0tb3B0aW9ucy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Zvcm1TZWxlY3RDb21wb25lbnQsIEZvcm1PcHRpb25zQ29tcG9uZW50XSxcbiAgZXhwb3J0czpbRm9ybVNlbGVjdENvbXBvbmVudCwgRm9ybU9wdGlvbnNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpRm9ybVNlbGVjdE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2ZpZ3VyZVtzZW11aS10aHVtYm5haWxdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJbY2FyZC1pbWFnZV1cIj48L25nLWNvbnRlbnQ+XG5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltzZW0tc2VjdGlvbi1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxuXG5cblxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGh1bWJuYWlsTGFyZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLXRodW1ibmFpbCcpXG4gIHB1YmxpYyBhZGRCYXNlQnV0dG9uQ3NzQ2xhc3MgPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRodW1ibmFpbExhcmdlQ29tcG9uZW50IH0gZnJvbSAnLi90aHVtYm5haWwtbGFyZ2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUaHVtYm5haWxMYXJnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUaHVtYm5haWxMYXJnZUNvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVRodW1ibmFpbExhcmdlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktaWNvbnMtbGlzdCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSWNvbnNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWNvbnNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9pY29ucy1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSWNvbnNMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ljb25zTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlJY29uc0xpc3RNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VtdWktcmFpbi1kcm9wJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYWluRHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJhaW5Ecm9wQ29tcG9uZW50IH0gZnJvbSAnLi9yYWluLWRyb3AuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSYWluRHJvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSYWluRHJvcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlSYWluRHJvcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlICBIZWFkZXJJbXBvcnRhbmNlTGV2ZWwgPSAnJyB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXNlY3Rpb24taGVhZGVyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWhlYWRlci1zZWN0aW9uJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc21hbGwnKVxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbXVpLWltcG9ydGFuY2UnKVxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBIZWFkZXJJbXBvcnRhbmNlTGV2ZWw7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGFyZ2UnKVxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbCh0aGlzLnNlbXVpSW1wb3J0YW5jZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgdG8gYmUgb24gZGFyayBvciBsaWdodC5cbiAgICovXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XG4gICAgc3dpdGNoIChsYWJlbFR5cGUpIHtcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2xhcmdlJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZWN0aW9uSGVhZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlY3Rpb25IZWFkZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIEZvb3RlckltcG9ydGFuY2VMZXZlbCA9ICcnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktc2VjdGlvbi1mb290ZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbkZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDc3MgYmFzZSBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9vdGVyLXNlY3Rpb24nKVxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzID0gdHJ1ZTtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNtYWxsXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXG4gIHB1YmxpYyBzdHlsZUFzU21hbGw6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXG4gIHB1YmxpYyBzZW11aUltcG9ydGFuY2U6IEZvb3RlckltcG9ydGFuY2VMZXZlbDtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXG4gIHB1YmxpYyBzdHlsZUFzTGFyZ2U6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xuICAgICAgY2FzZSAoJ3NtYWxsJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnbGFyZ2UnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWN0aW9uRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLWZvb3Rlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlY3Rpb25Gb290ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2VjdGlvbkZvb3RlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAnZm9ybS1pbnB1dCcgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W3NlbXVpLWlucHV0XScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQWx3YXlzIGFwcGx5IHRoZSBiYXNlIFNlbXVpIGJ1dHRvbiBjc3MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvcm0taW5wdXQnKVxuICBwcml2YXRlIGFkZEZvcm1CYXNlQ2xhc3M6IHRydWU7XG5cblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeSBvciBzZWNvbmRhcnkuXG4gICAqIFByaW1hcnkgc2V0cyBhcyByb3VuZCBjb3JuZXJzIGFuZCBzaGFycCBlZGdlLCBzZWNvbmRhcnkgaXMgYWxsIHJvdW5kXG4gICAqL1xuICBASW5wdXQoJ3NlbXVpLXR5cGUnKVxuICBwdWJsaWMgc2VtdWlUeXBlOiBJbnB1dFR5cGU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzZW11aS1mb3JtLWlucHV0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcbiAgcHVibGljIHNlbXVpVHlwZUZvcm1JbnB1dDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlUeXBlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQncyBwcm9wZXJ0aWVzIGJvdW5kIHRvXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgQ1NTIGNsYXNzZXMuXG4gICAqL1xuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5VHlwZSgpIHtcblxuICAgIGlmICgnZm9ybS1pbnB1dCcgPT09IHRoaXMuc2VtdWlUeXBlKSB7XG4gICAgICB0aGlzLnNlbXVpVHlwZUZvcm1JbnB1dCA9IHRydWU7XG4gICAgfVxuXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9pbnB1dC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0lucHV0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0lucHV0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlJbnB1dE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcbiAgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIENka092ZXJsYXlPcmlnaW4sXG4gIE92ZXJsYXlcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdzZW11aS1vdmVybGF5LWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZVxuICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiaXNPcGVuZWRcIlxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcbiAgICAoZGV0YWNoKT1cImNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKVwiXG4gID5cbiAgICA8ZGl2ICNkaWFsb2cgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWw9XCJEaWFsb2dcIiBjbGFzcz1cImRpYWxvZy1jb250YWluZXJcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LXRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzICBPbkRlc3Ryb3ksIE9uSW5pdCAge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIC8vXG4gIC8vIG92ZXJsYXlPZmZzZXRYO1xuICAvLyBPdmVybGF5SGVpZ2h0O1xuICAvLyBzY3JvbGxTdHJhdGVneTtcbiAgLy8gcG9zaXRpb25zO1xuICAvLyBiYWNrZHJvcENsYXNzO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgLy8gICB0aGlzLmJhY2tkcm9wQ2xhc3MgPSAnY2RrT3ZlcmxheUZ1bGxIZWlnaHQnXG4gICAgLy8gICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcbiAgICAvLyAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcbiAgICAvLyAgIHRoaXMucG9zaXRpb25zICA9IFtcbiAgICAvLyAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgLy8gICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXG4gICAgLy8gICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9XG4gICAgLy8gICAgIClcbiAgICAvLyAgIF07XG4gICAgLy8gICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcblxuXG4gICAgY29uc3Qgb3ZlcmxheU9yaWdpbkVsID0gdGhpcy5vdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuXG5cbiAgICBjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbmVkKSxcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IHtcblxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpXG4gICAgICAgIH0pLFxuICAgICAgICB0YXAoIChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgY2xvc2UkLnN1YnNjcmliZSgpO1xuICB9XG4gIGNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKSB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xuICAgIGlzT3BlbmVkID8gdGhpcy5vcGVuLmVtaXQoKSA6IHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBpc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgZGlhbG9nLCBldmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xuICB9XG5cblxuXG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IENka1N0ZXBwZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIC8vIENES1xuICBBMTF5TW9kdWxlLFxuICBCaWRpTW9kdWxlLFxuICBPYnNlcnZlcnNNb2R1bGUsXG4gIE92ZXJsYXlNb2R1bGUsXG4gIFBsYXRmb3JtTW9kdWxlLFxuICBQb3J0YWxNb2R1bGUsXG4gIFNjcm9sbERpc3BhdGNoTW9kdWxlLFxuICBDZGtTdGVwcGVyTW9kdWxlLFxuICBDZGtUYWJsZU1vZHVsZSxcbl1cblxuXG5ATmdNb2R1bGUoe1xuICAvLyBpbXBvcnRzOiBbXG4gIC8vICAgQ29tbW9uTW9kdWxlLFxuICAvLyAgIC4uLm1vZHVsZXNcbiAgLy8gXSxcbiAgLy8gZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogWyAuLi5tb2R1bGVzIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXktZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPdmVybGF5RGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogIFtPdmVybGF5RGlhbG9nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaU92ZXJsYXlEaWFsb2dNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hJZlRhYkFjdGl2ZV0nXG59KVxuZXhwb3J0IGNsYXNzIElmVGFiQWN0aXZlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogVE9ETzogUmVtb3ZlIGhpZGRlbiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MzEwIGlzIHJlc29sdmVkXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJ0ZW1wbGF0ZTsgdGhlbiB0ZW1wbGF0ZV9jb250YWluZXIgZWxzZSBjb250ZW50X2NvbnRhaW5lclwiPjwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVfY29udGFpbmVyPlxuICAgICAgPGRpdiAqbmdJZj1cImFjdGl2ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlLnRlbXBsYXRlUmVmXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudF9jb250YWluZXI+XG4gICAgICA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdzZW11aS10YWInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGVmYXVsdCcpXG4gIHB1YmxpYyBhZGRCYXNlQnV0dG9uQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG5cbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkKElmVGFiQWN0aXZlRGlyZWN0aXZlKSB0ZW1wbGF0ZTogSWZUYWJBY3RpdmVEaXJlY3RpdmU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgYWN0aXZlQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpe1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi90YWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFic10nLFxuICB0ZW1wbGF0ZTogYDxzZWN0aW9uXG4gIFtjbGFzcy50YWJzLXZlcnRpY2FsXT1cInZlcnRpY2FsXCJcbiAgW2NsYXNzLnRhYnMtaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIlxuICBbY2xhc3Muc3dpcGVdPVwic3dpcGVcIlxuPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VGFicyAmJiB2ZXJ0aWNhbFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJzLWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG5cbiAgICA8dWxcbiAgICAgIGNsYXNzPVwic2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsXCJcbiAgICAgIFtjbGFzcy50YWJzLXZlcnRpY2FsXT1cInZlcnRpY2FsXCI+XG4gICAgICA8bGlcbiAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcbiAgICAgICAgY2xhc3M9XCJzZW11aS10YWJcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuYWN0aXZlXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cInRhYnMtLWJ1dHRvblwiXG4gICAgICAgICAgKGNsaWNrKT1cInRhYkNsaWNrZWQodGFiKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxuICAgICAgICAgIHt7dGFiLnRpdGxlfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHVsXG5cbiAgICAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiBzaG93VGFic1wiXG4gICAgc2VtdWktbGlzdFxuICAgIGNsYXNzPVwic2VtdWktdGFicy1saXN0IGxpc3QtcmVzZXRcIlxuICAgIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCI+XG4gICAgPGxpXG4gICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxuICAgICAgc2VtdWktbGlzdC1pdGVtXG4gICAgICBsaXN0LWl0ZW1cbiAgICAgIHNlbS1pbXBvcnRhbmNlPVwidGVydGlhcnlcIlxuICAgICAgY2xhc3M9XCJjb3JuZXJfdG9wIFwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2tlZCh0YWIpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxuICAgICAgICB7e3RhYi50aXRsZX19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuICA8L3VsPlxuXG4gIDxkaXYgY2xhc3M9XCJ0YWItbmF2XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYi1uYXZdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNlbXVpLXRhYi1jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbmAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3NlbXVpLXRhYnMnXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBzaG93VGFiczogYm9vbGVhbjtcbiAgQElucHV0KCkgdmVydGljYWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcblxuICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gdGFicy5maW5kSW5kZXgodGFiID0+IHRhYi5hY3RpdmUpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIGNvbnN0IGFjdGl2ZXMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdC5hY3RpdmUpO1xuXG4gICAgaWYoYWN0aXZlcy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdWx0aXBsZSBhY3RpdmUgdGFicyBzZXQgJ2FjdGl2ZSdgKTtcbiAgICB9IGVsc2UgaWYoIWFjdGl2ZXMubGVuZ3RoICYmIHRhYnMubGVuZ3RoKSB7XG4gICAgICB0YWJzWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZygndGFic1swXS5hY3RpdmUnLCB0YWJzWzBdLmFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgdGFiQ2xpY2tlZChhY3RpdmVUYWIpOiB2b2lkIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcblxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICBhY3RpdmVUYWIuYWN0aXZlID0gdHJ1ZTtcblxuICAgIGNvbnNvbGUubG9nKCdhY3RpdmVUYWIuYWN0aXZlJywgYWN0aXZlVGFiLCBhY3RpdmVUYWIuYWN0aXZlKVxuXG4gICAgdGhpcy5zZWxlY3QuZW1pdChhY3RpdmVUYWIpO1xuICB9XG5cbiAgbW92ZShvZmZzZXQ6IG51bWJlcikge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgb2Zmc2V0OyBpIDwgdGFicy5sZW5ndGggJiYgaSA+PSAwOyBpICs9IG9mZnNldCkge1xuICAgICAgY29uc3QgdGFiID0gdGFic1tpXTtcbiAgICAgIGlmICh0YWIgJiYgIXRhYi5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnRhYkNsaWNrZWQodGFic1tpXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICB0aGlzLm1vdmUoMSk7XG4gIH1cblxuICBwcmV2KCk6IHZvaWQge1xuICAgIHRoaXMubW92ZSgtMSk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RhYnMvdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUgfSBmcm9tICcuLi9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYkNvbXBvbmVudCxcbiAgICBUYWJzQ29tcG9uZW50LCBJZlRhYkFjdGl2ZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUYWJDb21wb25lbnQsIFRhYnNDb21wb25lbnQsIElmVGFiQWN0aXZlRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTZW1VaUxpc3RNb2R1bGUsXG4gICAgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlUYWJzTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLWZvcm0tZmllbGRdJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxNXB4fWBdLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1sYWJlbF1cIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtcHJlZml4XVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1pbnB1dF1cIj48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1maWVsZCcpXG4gIHB1YmxpYyBhZGRCYXNlQ2xhc3M6IHRydWU7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWZpZWxkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRm9ybUZpZWxkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Zvcm1GaWVsZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlGb3JtRmllbGRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgdHlwZSBDb3JuZXJUeXBlID0gJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgQnV0dG9uSW1wb3J0YW5jZUxldmVsID0gJ3ByaW1hcnknIHwgJ2xpbmstYnV0dG9uJyB8ICdyb3VuZC1idXR0b24nIHwgJ2Nvcm5lci1idXR0b24nIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bc2VtLWJ0bi1mYWJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRmFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG5cbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBzdHJpbmc7XG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nO1xuICBASW5wdXQoJ2Nvcm5lcicpIGNvcm5lcjogc3RyaW5nO1xuICBASW5wdXQoJ3NlbXVpLXRoZW1lJykgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW11aWltcG9ydGFuY2U6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cblxuICBnZXRDbGFzc2VzKCkge1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idG4tZmFiJyk7XG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGFyZ2UnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnc2Vjb25kYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc2Vjb25kYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkZWZhdWx0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ2RlZmF1bHRfc21hbGwnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdkZWZhdWx0X3NtYWxsJyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ25vbmUnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfbm9uZScpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdyaWdodCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9yaWdodCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdsZWZ0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2xlZnQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAndG9wLWxlZnQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfdG9wLWxlZnQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAndG9wLXJpZ2h0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3RvcC1yaWdodCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICdib3R0b20tcmlnaHQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfYm90dG9tLXJpZ2h0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2JvdHRvbS1sZWZ0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX2JvdHRvbS1sZWZ0Jyk7XG4gICAgfVxuICAgIHJldHVybiBfY2xhc3NlcztcbiAgfVxuXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xuICAgIGNvbnN0IGJhc2UgPSAnc2VtLWJ0bi1mYWItLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSl7XG4gICAgc3dpdGNoICh0aGVtZSkge1xuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdkYXJrJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCdXR0b25GYWJDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1mYWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25GYWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQnV0dG9uRmFiQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUJ1dHRvbkZhYk1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcbiAgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQ2RrT3ZlcmxheU9yaWdpbixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgT3ZlcmxheVxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50Jztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YXAgIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS1vdmVybGF5LXZlcnRpY2FsJyxcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGVcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlbmVkXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwicG9zaXRpb25zXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlTY3JvbGxTdHJhdGVneV09XCJzY3JvbGxTdHJhdGVneVwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGVpZ2h0XT1cIk92ZXJsYXlIZWlnaHRcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cIjMyMFwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwiMzAwXCJcbiAgKGRldGFjaCk9XCJjb25uZWN0ZWRPdmVybGF5RGV0YWNoKClcIlxuICAocG9zaXRpb25DaGFuZ2UpPVwicmVQb3NpdGlvbigkZXZlbnQpXCJcbj5cbiAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLWZ1bGxcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudExvYWRlZFwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3ZlcmxheS10aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5VmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyAgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlc3tcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBASW5wdXQoKSBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBASW5wdXQoKSBpc09wZW5lZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY7XG5cblxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBvdmVybGF5T2Zmc2V0WDtcbiAgT3ZlcmxheUhlaWdodDtcbiAgc2Nyb2xsU3RyYXRlZ3k7XG4gIHBvc2l0aW9ucztcbiAgYmFja2Ryb3BDbGFzcztcblxuICBjb250ZW50TG9hZGVkID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmJhY2tkcm9wQ2xhc3MgPSAnY2RrT3ZlcmxheUZ1bGxIZWlnaHQnXG4gICAgdGhpcy5vdmVybGF5T2Zmc2V0WCA9IDA7XG4gICAgdGhpcy5PdmVybGF5SGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMucG9zaXRpb25zICA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7b3JpZ2luWTogJ2NlbnRlcicsIG9yaWdpblg6ICdlbmQnfSxcbiAgICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9XG4gICAgICApXG4gICAgXTtcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcbiAgICBjb25zdCBvdmVybGF5T3JpZ2luRWwgPSB0aGlzLm92ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgY29uc3QgY2xvc2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc09wZW5lZCksXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS50b3AgPSAnMCc7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgdGhpcy5kaWFsb2csIGV2ZW50KTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcCggKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgY2xvc2UkLnN1YnNjcmliZSgpO1xuXG4gfVxuICBjb25uZWN0ZWRPdmVybGF5RGV0YWNoKCkge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XG4gICAgaWYoY2hhbmdlcy5pc09wZW5lZC5jdXJyZW50VmFsdWUpe1xuICAgICAgdGhpcy5jb250ZW50TG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmVQb3NpdGlvbihpdGVtKXtcbiAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xuICB9XG4gIHByaXZhdGUgY2hhbmdlU3RhdGUoaXNPcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzT3BlbmVkID0gaXNPcGVuZWQ7XG4gICAgaXNPcGVuZWQgPyB0aGlzLm9wZW4uZW1pdCgpIDogdGhpcy5jbG9zZS5lbWl0KCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIGlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCBkaWFsb2csIGV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEob3ZlcmxheU9yaWdpbkVsLmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkgfHwgZGlhbG9nLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPdmVybGF5VmVydGljYWxDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXktdmVydGljYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUgfSBmcm9tICcuLi9tYXRlcmlhbC1tYW5pZmVzdC9tYXRlcmlhbC1tYW5pZmVzdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdGVyaWFsTWFuaWZlc3RNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW092ZXJsYXlWZXJ0aWNhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlPdmVybGF5VmVydGljYWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFNpbXBsZUNoYW5nZXMsIElucHV0LCBDb250ZW50Q2hpbGQsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbc2VtdWktZm9udC1zaXplc10nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZW0tdWwtaWNvbi1saXN0IHNlbS11bFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuXG5cbjx1bCBjbGFzcz1cImJ1bGxldC1pbmxpbmVsaXN0IHA0XCI+XG4gIDxsaSBjbGFzcz1cImFjdGl2ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbjwvdWw+XG5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGFjdGl2ZWlkOiBudW1iZXI7XG5cbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZilcbiAgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkYXRhU291cmNlOiBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW06IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcGVuZWRQYXJlbnQ6IGFueSA9IG51bGw7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxldmVsczogQXJyYXk8T2JqZWN0PiA9IFtcbiAgICB7bnVtOiAwLCBuYW1lOiAnMSd9LFxuICAgIHtudW06IDEsIG5hbWU6ICcyJ31cbiAgXTtcbiAgc2VsZWN0ZWRMZXZlbCA9IHRoaXMubGV2ZWxzWzBdO1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NoYW5nZXMgYXJlIGVuYWJsZWQnKVxuICAgIHRoaXMuYWN0aXZlaWQgPSBjaGFuZ2VzLmFjdGl2ZWlkLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VtVWlGb250U2l6ZXNDb21wb25lbnQgfSBmcm9tICcuLi9mb250LXNpemVzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXMtaXRlbV0nLFxuICB0ZW1wbGF0ZTogYDxkaXZcbiAgW25nQ2xhc3NdPVwieyAnYWN0aXZlJyA6IGl0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSB9XCJcbiAgY2xhc3M9XCJzZW0tbGlcIlxuICAoY2xpY2spPVwidG9nZ2xlKClcIj5cbiAgPG5nLWNvbnRlbnQgIHNlbGVjdD1cIltuYXZsaW5rXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdlxuICAqbmdJZj1cIml0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSBcIlxuICBjbGFzcz1cImJsb2NrXCJcbiAgW25nQ2xhc3NdPVwieyAnYWN0aXZlJyA6IGl0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSB9XCJcbj5cbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250YWluZXItLWJvZHlcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2l6ZS1zZWxlY3Rvcl1cIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIGl0ZW1SZWY6IGFueSA9IHt9O1xuICBASW5wdXQoKSBwcml2YXRlIGluZGV4UmVmID0gLTE7XG4gIEBJbnB1dCgpIHByaXZhdGUgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJZDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgYWN0aXZlaWQ6IG51bWJlcjtcbiAgQE91dHB1dCgpIGFjdGl2ZWlkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBhcmVudDogU2VtVWlGb250U2l6ZXNDb21wb25lbnQsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1JbmRleCgpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRJdGVtSW5kZXgoKSB7XG4gICAgY29uc29sZS5sb2coJ211cyBiZSBjYWxsIGhlcmUnKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0aGlzLmluZGV4UmVmKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuZ2V0SXRlbUF0SW5kZXgoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0odmFsdWUpIHtcbiAgICB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0gPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygnbmV3IG9uZScsICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtKTtcbiAgfVxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtUmVmO1xuICAgIGlmICh0aGlzLml0ZW1SZWYgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKXtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnVlJylcbiAgICAgIC8vICB0aGlzLnN0eWxlQXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSk7XG4gICAgLy8gdGhpcy5hY3RpdmVpZENoYW5nZS5lbWl0KHRoaXMuZ3JvdXBJZCk7XG4gIH1cblxuICBnZXQgcGFyZW50TGlzdCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5kYXRhU291cmNlO1xuICB9XG4gIHByaXZhdGUgZ2V0SXRlbUF0SW5kZXgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYXJlbnRMaXN0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiB0aGlzLnBhcmVudExpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudExpc3RbdGhpcy5zZWxlY3RlZEluZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1NlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7U2VtVWlGb250U2l6ZXNDb21wb25lbnR9IGZyb20gJy4vZm9udC1zaXplcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZW1VaUZvbnRTaXplc0NvbXBvbmVudCwgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlbVVpRm9udFNpemVzQ29tcG9uZW50LCBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpRm9udFNpemVzTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTZW1VaUNvbXBvbmVudCB9IGZyb20gJy4vc2VtLXVpLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkRuZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24tZG5kL2J1dHRvbi1kbmQubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpQ2FyZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpTGlzdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9saXN0L2xpc3QubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpTGFiZWxNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvbGFiZWwvbGFiZWwubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpRm9ybVNlbGVjdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUljb25zTGlzdE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9pY29ucy1saXN0L2ljb25zLWxpc3QubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpUmFpbkRyb3BNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvcmFpbi1kcm9wL3JhaW4tZHJvcC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaVNlY3Rpb25Gb290ZXJNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpSW5wdXRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvaW5wdXQvaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpT3ZlcmxheURpYWxvZ01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlUYWJzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3RhYnMvdGFicy5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlGb3JtRmllbGRNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUJ1dHRvbkZhYk1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9idXR0b24tZmFiL2J1dHRvbi1mYWIubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpT3ZlcmxheVZlcnRpY2FsTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL292ZXJsYXktdmVydGljYWwvb3ZlcmxheS12ZXJ0aWNhbC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlGb250U2l6ZXNNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLm1vZHVsZSc7XG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZSc7XG5cbmNvbnN0IFVJTU9EVUxFUyA9IFtcbiAgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSxcbiAgU2VtVWlCdXR0b25Nb2R1bGUsXG4gIFNlbVVpQnV0dG9uRmFiTW9kdWxlLFxuICBTZW1VaVJhaW5Ecm9wTW9kdWxlLFxuICBTZW1VaUxpc3RNb2R1bGUsXG4gIFNlbVVpTGFiZWxNb2R1bGUsXG4gIFNlbVVpRm9ybVNlbGVjdE1vZHVsZSxcbiAgU2VtVWlUaHVtYm5haWxMYXJnZU1vZHVsZSxcbiAgU2VtVWlJY29uc0xpc3RNb2R1bGUsXG4gIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSxcbiAgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlLFxuICBTZW1VaUNhcmRNb2R1bGUsXG4gIFNlbVVpSW5wdXRNb2R1bGUsXG4gIFNlbVVpT3ZlcmxheURpYWxvZ01vZHVsZSxcbiAgU2VtVWlPdmVybGF5VmVydGljYWxNb2R1bGUsXG4gIFNlbVVpVGFic01vZHVsZSxcbiAgU2VtVWlGb3JtRmllbGRNb2R1bGUsXG4gIFNlbVVpRm9udFNpemVzTW9kdWxlLFxuICBTZW1VaUJ1dHRvbkRuZE1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBVSU1PRFVMRVMsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VtVWlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2VtVWlDb21wb25lbnQsIFVJTU9EVUxFU11cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS1pY29uLXJvdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBpY29uLXJvdyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEljb25Sb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJY29uUm93Q29tcG9uZW50IH0gZnJvbSAnLi9pY29uLXJvdy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0ljb25Sb3dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSWNvblJvd0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSWNvblJvd01vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbXVpLXN3aXRjaC1yb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgc3dpdGNoLXJvdyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaFJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN3aXRjaFJvd0NvbXBvbmVudCB9IGZyb20gJy4vc3dpdGNoLXJvdy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N3aXRjaFJvd0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTd2l0Y2hSb3dDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaFJvd01vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbXVpLXRpdGxlLW1hcnF1ZWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgdGl0bGUtbWFycXVlZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlTWFycXVlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRpdGxlTWFycXVlZUNvbXBvbmVudCB9IGZyb20gJy4vdGl0bGUtbWFycXVlZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1RpdGxlTWFycXVlZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUaXRsZU1hcnF1ZWVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlTWFycXVlZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbXVpLXRvZ2dsZS1yb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgdG9nZ2xlLXJvdyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRvZ2dsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vdG9nZ2xlLXJvdy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1RvZ2dsZVJvd0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb2dnbGVSb3dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVJvd01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkhvc3RCaW5kaW5nIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkhvc3RMaXN0ZW5lciIsIm92ZXJsYXkiLCJFdmVudEVtaXR0ZXIiLCJTdWJqZWN0IiwiZnJvbUV2ZW50IiwiZGVib3VuY2VUaW1lIiwiZmlsdGVyIiwidGFwIiwiT3ZlcmxheSIsIkNoYW5nZURldGVjdG9yUmVmIiwiT3V0cHV0IiwiVmlld0NoaWxkIiwiQTExeU1vZHVsZSIsIkJpZGlNb2R1bGUiLCJPYnNlcnZlcnNNb2R1bGUiLCJPdmVybGF5TW9kdWxlIiwiUGxhdGZvcm1Nb2R1bGUiLCJQb3J0YWxNb2R1bGUiLCJTY3JvbGxEaXNwYXRjaE1vZHVsZSIsIkNka1N0ZXBwZXJNb2R1bGUiLCJDZGtUYWJsZU1vZHVsZSIsIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiQ29udGVudENoaWxkIiwiQ29udGVudENoaWxkcmVuIiwiQ29ubmVjdGlvblBvc2l0aW9uUGFpciIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJGb3Jtc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7MkJBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLGlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsOENBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7NkJBVkQ7Ozs7Ozs7QUNBQTtRQTZERTs7OztpQ0FoQ2dDLEtBQUs7U0FnQ3BCOzs7O1FBRWpCLDBDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxDQUFBO2dCQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3pDOzs7O1FBRUQsNENBQVU7OztZQUFWOztnQkFDRSxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtvQkFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFL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