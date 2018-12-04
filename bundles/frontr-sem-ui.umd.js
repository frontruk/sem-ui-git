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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRyLXNlbS11aS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9zZW0tdWkuc2VydmljZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL3NlbS11aS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi1kbmQvYnV0dG9uLWRuZC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi1kbmQvYnV0dG9uLWRuZC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvbGlzdC9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9saXN0L2xpc3QubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2xhYmVsL2xhYmVsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb3JtLXNlbGVjdC9mb3JtLW9wdGlvbnMvZm9ybS1vcHRpb25zLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90aHVtYm5haWwtbGFyZ2UvdGh1bWJuYWlsLWxhcmdlLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGh1bWJuYWlsLWxhcmdlL3RodW1ibmFpbC1sYXJnZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3JhaW4tZHJvcC9yYWluLWRyb3AuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9yYWluLWRyb3AvcmFpbi1kcm9wLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3NlY3Rpb24tZm9vdGVyL3NlY3Rpb24tZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvc2VjdGlvbi1mb290ZXIvc2VjdGlvbi1mb290ZXIubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL2lucHV0L2lucHV0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cuY29tcG9uZW50LnRzIixudWxsLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS1kaWFsb2cvb3ZlcmxheS1kaWFsb2cubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy90YWJzL3RhYi5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvYnV0dG9uLWZhYi9idXR0b24tZmFiLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9mb250LXNpemVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvZm9udC1zaXplcy9zZW0tZm9udC1zaXplcy1pdGVtL3NlbS1mb250LXNpemVzLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMubW9kdWxlLnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvc2VtLXVpLm1vZHVsZS50cyIsIm5nOi8vQGZyb250ci9zZW0tdWkvbGliL21vZHVsZXMvaWNvbi1yb3cvaWNvbi1yb3cuY29tcG9uZW50LnRzIiwibmc6Ly9AZnJvbnRyL3NlbS11aS9saWIvbW9kdWxlcy9pY29uLXJvdy9pY29uLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3N3aXRjaC1yb3cvc3dpdGNoLXJvdy5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RpdGxlLW1hcnF1ZWUvdGl0bGUtbWFycXVlZS5tb2R1bGUudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5jb21wb25lbnQudHMiLCJuZzovL0Bmcm9udHIvc2VtLXVpL2xpYi9tb2R1bGVzL3RvZ2dsZS1yb3cvdG9nZ2xlLXJvdy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2VtLXVpJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHNlbS11aSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBQb3NzaWJsZSBidXR0b24gaW1wb3J0YW5jZSBsZXZlbHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2J1dHRvbltzZW11aS1idXR0b24tZG5kXSwgZGl2W3NlbXVpLWJ1dHRvbi1kbmRdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgc3R5bGVBc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3hzbWFsbCcpIHhzbWFsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3NtYWxsJykgc21hbGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdmdWxsJykgZnVsbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ2Jsb2NrJykgYmxvY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbWVkaXVtJykgbWVkaXVtOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblxuXG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtLXRoZW1lJylcbiAgcHVibGljIHNlbXVpVGhlbWU6IFRoZW1lSW1wb3J0YW5jZUxldmVsO1xuXG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW1JbXBvcnRhbmNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFyaycpXG4gIHB1YmxpYyBzdHlsZUFzRGFya1RoZW1lOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG5cbiAgZ2V0Q2xhc3Nlcygpe1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idXR0b24tZG5kICcpO1xuICAgIGlmICh0aGlzLmJsb2NrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Jsb2NrJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZ1bGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZnVsbCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXJnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdsYXJnZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZWRpdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbWVkaXVtJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNtYWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NtYWxsJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnhzbWFsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCd4c21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJyBzZW0tYnV0dG9uLWRuZC0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKSB7XG4gICAgc3dpdGNoICh0aGVtZSkge1xuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdkYXJrJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25EbmRDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1kbmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTZW1VaUJ1dHRvbkRuZENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNlbVVpQnV0dG9uRG5kQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25EbmRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxuICovXG5cbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID0gJ2xpZ2h0JyB8ICdkYXJrJyB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYnV0dG9uW3NlbS1idXR0b25dLCBkaXZbc2VtLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBzdHlsZUFzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKSBvbkNsaWNrKGJ0bikge1xuICAgIHRoaXMuc3R5bGVBc0FjdGl2ZSA9ICF0aGlzLnN0eWxlQXNBY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxpZ2h0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcblxuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdzbWFsbCcpIHNtYWxsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnZnVsbCcpIGZ1bGw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdibG9jaycpIGJsb2NrOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnbGlua2J1dHRvbicpIGxpbmtidXR0b246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgnaWNvbm9ubHknKSBpY29ub25seTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoJ3NlbS1pbXBvcnRhbmNlJykgc2VtSW1wb3J0YW5jZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCdjbGFzcycpIGNsYXNzZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRDbGFzc2VzKCB0aGlzLmdldENsYXNzZXMoKSApXG4gICAgdGhpcy5zdHlsZUVsZW1lbnRUaGVtZSh0aGlzLnNlbXVpVGhlbWUpO1xuICB9XG5cbiAgZ2V0Q2xhc3Nlcygpe1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idXR0b24nKTtcbiAgICBpZiAodGhpcy5ibG9jayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdibG9jaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mdWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Z1bGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGFyZ2UnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pY29ub25seSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdpY29ub25seScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAncHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2xpbmtfcHJpbWFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xpbmtfcHJpbWFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5saW5rYnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2xpbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3NlY29uZGFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cblxuICBhZGRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3Qgc3BhY2VyID0gdGhpcy5jbGFzc2VzID8gJycgOiAnJztcbiAgICBjb25zdCBiYXNlID0gJ3NlbS1idXR0b24tLSc7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKChfY2xhc3MsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9IHNwYWNlciArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gJyAnICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSl7XG4gICAgc3dpdGNoICh0aGVtZSkge1xuICAgICAgY2FzZSAoJ2xpZ2h0Jyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xpZ2h0VGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdkYXJrJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0RhcmtUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlCdXR0b25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VtdWktY2FyZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBjYXJkIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQ2FyZE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RJdGVtVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9saXN0LXR5cGUnO1xuXG4vKipcbiAqIFBvc3NpYmxlIGJ1dHRvbiBpbXBvcnRhbmNlIGxldmVscy5cbiAqL1xuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPVxuICAgICdsaWdodCdcbiAgfCAnZGFyaydcbiAgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tzZW11aS1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogTGlzdEl0ZW1UeXBlO1xuICBASW5wdXQoJ3NlbS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBUaGVtZUltcG9ydGFuY2VMZXZlbDtcbiAgQElucHV0KCdzZW0taW1wb3J0YW5jZScpIHNlbUltcG9ydGFuY2U6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtLWxpLWxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodFRoZW1lOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtLWxpLWRhcmsnKVxuICBwdWJsaWMgc3R5bGVBc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYWRkQ2xhc3NlcyggdGhpcy5nZXRDbGFzc2VzKCkgKVxuICAgIHRoaXMuc3R5bGVFbGVtZW50VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuXG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XG4gICAgY29uc3QgYmFzZSA9ICcgc2VtLWxpLS0nO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoX2NsYXNzLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSBzcGFjZXIgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc2VzICs9ICcgJyArIGJhc2UgKyBfY2xhc3M7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0Q2xhc3NlcygpIHtcbiAgICBjb25zdCBfY2xhc3NlcyA9IFtdO1xuICAgIF9jbGFzc2VzLnB1c2goJyBzZW0tbGknKTtcbiAgICBpZiAodGhpcy5zZW1JbXBvcnRhbmNlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbUltcG9ydGFuY2UgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdzZWNvbmRhcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ3RlcnRpYXJ5Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgndGVydGlhcnknKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtSW1wb3J0YW5jZSA9PT0gJ2RhbmdlcicpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RhbmdlcicpO1xuICAgIH1cbiAgICByZXR1cm4gX2NsYXNzZXM7XG4gIH1cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRUaGVtZSh0aGVtZSkge1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRoZW1lSW1wb3J0YW5jZUxldmVsID1cbiAgICAnbGlnaHQnXG4gIHwgJ2RhcmsnXG4gIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbc2VtdWktbGlzdF0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltsaXN0LWl0ZW1dXCI+PC9uZy1jb250ZW50PlxuYFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzZW0tdGhlbWUnKVxuICBwdWJsaWMgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBASW5wdXQoJ2NsYXNzJykgY2xhc3Nlczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGlnaHRcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1saWdodCcpXG4gIHB1YmxpYyBzdHlsZUFzTGlnaHRUaGVtZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImRhcmtcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbS11bC1kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cblxuXG4gIGFkZENsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBzcGFjZXIgPSB0aGlzLmNsYXNzZXMgPyAnJyA6ICcnO1xuICAgIGNvbnN0IGJhc2UgPSAnIHNlbS11bC0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldENsYXNzZXMoKSB7XG4gICAgY29uc3QgX2NsYXNzZXMgPSBbXTtcbiAgICBfY2xhc3Nlcy5wdXNoKCcgc2VtLXVsJyk7XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG4gIHByaXZhdGUgc3R5bGVFbGVtZW50VGhlbWUodGhlbWUpe1xuICAgIHN3aXRjaCAodGhlbWUpIHtcbiAgICAgIGNhc2UgKCdsaWdodCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNMaWdodFRoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnZGFyaycpOlxuICAgICAgICB0aGlzLnN0eWxlQXNEYXJrVGhlbWUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMaXN0SXRlbUNvbXBvbmVudCwgTGlzdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMaXN0SXRlbUNvbXBvbmVudCwgTGlzdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpTGlzdE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUG9zc2libGUgYnV0dG9uIGltcG9ydGFuY2UgbGV2ZWxzLlxuICovXG5leHBvcnQgdHlwZSBMYWJlbEltcG9ydGFuY2VMZXZlbCA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgTGFiZWxUaGVtZSA9ICdsaWdodCcgfCAnZGFyaycgfCB1bmRlZmluZWQ7XG5cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbGFiZWxbc2VtdWktbGFiZWxdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWxhYmVsJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc21hbGwnKVxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibWVkaXVtXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tZWRpdW0nKVxuICBwdWJsaWMgc3R5bGVBc01lZGl1bTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxhcmdlJylcbiAgcHVibGljIHN0eWxlQXNMYXJnZTogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvcm0tbGFiZWwnKVxuICBwdWJsaWMgc3R5bGVBc0Zvcm1MYWJlbDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeS9zZWNvbmRhcnkvZXRjLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS1pbXBvcnRhbmNlJylcbiAgcHVibGljIHNlbXVpSW1wb3J0YW5jZTogTGFiZWxJbXBvcnRhbmNlTGV2ZWw7XG5cblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwibGFyZ2VcIiBDU1MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpZ2h0JylcbiAgcHVibGljIHN0eWxlQXNMaWdodDogYm9vbGVhbjtcblxuXG4gIC8qKlxuICAgKiBMYWJlbCB0aGVtZSBpbiB0ZXJtcyBvZiBsaWdodC9kYXJrLlxuICAgKi9cbiAgQElucHV0KCdzZW11aS10aGVtZScpXG4gIHB1YmxpYyBzZW11aVRoZW1lOiBMYWJlbFRoZW1lO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwodGhpcy5zZW11aUltcG9ydGFuY2UpO1xuICAgIHRoaXMuc2V0VGhlbWUodGhpcy5zZW11aVRoZW1lKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRUaGVtZSh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFyayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50J3MgcHJvcGVydGllcyBib3VuZCB0b1xuICAgKiB0aGUgaG9zdCBlbGVtZW50IENTUyBjbGFzc2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcblxuICAgIHN3aXRjaCAobGFiZWxUeXBlKSB7XG4gICAgICBjYXNlICgnc21hbGwnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzU21hbGwgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdtZWRpdW0nKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTWVkaXVtID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnbGFyZ2UnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgKCdmb3JtLWxhYmVsJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0Zvcm1MYWJlbCA9IHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vbGFiZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMYWJlbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMYWJlbENvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlMYWJlbE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbGVjdFtzZW11aS1mb3JtLXNlbGVjdF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZWxlY3RDb21wb25lbnQge1xuICAvKipcbiAgICogQWx3YXlzIGFwcGx5IHRoZSBiYXNlIFJ1Yml4IGJ1dHRvbiBjc3MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLXNlbGVjdCcpXG4gIHB1YmxpYyBhZGRCYXNlQ3NzQ2xhc3M6IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdvcHRpb25bc2VtdWktZm9ybS1vcHRpb25zXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1PcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEFsd2F5cyBhcHBseSB0aGUgYmFzZSBSdWJpeCBidXR0b24gY3NzIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1vcHRpb24nKVxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzOiB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1vcHRpb25zL2Zvcm0tb3B0aW9ucy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Zvcm1TZWxlY3RDb21wb25lbnQsIEZvcm1PcHRpb25zQ29tcG9uZW50XSxcbiAgZXhwb3J0czpbRm9ybVNlbGVjdENvbXBvbmVudCwgRm9ybU9wdGlvbnNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpRm9ybVNlbGVjdE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2ZpZ3VyZVtzZW11aS10aHVtYm5haWxdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJbY2FyZC1pbWFnZV1cIj48L25nLWNvbnRlbnQ+XG5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltzZW0tc2VjdGlvbi1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxuXG5cblxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVGh1bWJuYWlsTGFyZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLXRodW1ibmFpbCcpXG4gIHB1YmxpYyBhZGRCYXNlQnV0dG9uQ3NzQ2xhc3MgPSB0cnVlO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRodW1ibmFpbExhcmdlQ29tcG9uZW50IH0gZnJvbSAnLi90aHVtYm5haWwtbGFyZ2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUaHVtYm5haWxMYXJnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUaHVtYm5haWxMYXJnZUNvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVRodW1ibmFpbExhcmdlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktaWNvbnMtbGlzdCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSWNvbnNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSWNvbnNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9pY29ucy1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSWNvbnNMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ljb25zTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlJY29uc0xpc3RNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VtdWktcmFpbi1kcm9wJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYWluRHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJhaW5Ecm9wQ29tcG9uZW50IH0gZnJvbSAnLi9yYWluLWRyb3AuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSYWluRHJvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSYWluRHJvcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlSYWluRHJvcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlICBIZWFkZXJJbXBvcnRhbmNlTGV2ZWwgPSAnJyB8IHVuZGVmaW5lZDtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXNlY3Rpb24taGVhZGVyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25IZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWhlYWRlci1zZWN0aW9uJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzbWFsbFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc21hbGwnKVxuICBwdWJsaWMgc3R5bGVBc1NtYWxsOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gaW1wb3J0YW5jZSBsZXZlbCBpbiB0ZXJtcyBvZiBwcmltYXJ5L3NlY29uZGFyeS9ldGMuXG4gICAqL1xuICBASW5wdXQoJ3NlbXVpLWltcG9ydGFuY2UnKVxuICBwdWJsaWMgc2VtdWlJbXBvcnRhbmNlOiBIZWFkZXJJbXBvcnRhbmNlTGV2ZWw7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsYXJnZVwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGFyZ2UnKVxuICBwdWJsaWMgc3R5bGVBc0xhcmdlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbCh0aGlzLnNlbXVpSW1wb3J0YW5jZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgdG8gYmUgb24gZGFyayBvciBsaWdodC5cbiAgICovXG4gIHByaXZhdGUgc3R5bGVFbGVtZW50QnlJbXBvcnRhbmNlTGV2ZWwobGFiZWxUeXBlKSB7XG4gICAgc3dpdGNoIChsYWJlbFR5cGUpIHtcbiAgICAgIGNhc2UgKCdzbWFsbCcpOlxuICAgICAgICB0aGlzLnN0eWxlQXNTbWFsbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2xhcmdlJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc0xhcmdlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZWN0aW9uSGVhZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlY3Rpb25IZWFkZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIEZvb3RlckltcG9ydGFuY2VMZXZlbCA9ICcnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktc2VjdGlvbi1mb290ZXJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbkZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDc3MgYmFzZSBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9vdGVyLXNlY3Rpb24nKVxuICBwdWJsaWMgYWRkQmFzZUNzc0NsYXNzID0gdHJ1ZTtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcInNtYWxsXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbWFsbCcpXG4gIHB1YmxpYyBzdHlsZUFzU21hbGw6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG4gIEBJbnB1dCgnc2VtdWktaW1wb3J0YW5jZScpXG4gIHB1YmxpYyBzZW11aUltcG9ydGFuY2U6IEZvb3RlckltcG9ydGFuY2VMZXZlbDtcblxuICAvKipcbiAgICogQmluZCB0byB0aGUgaG9zdCBcImxhcmdlXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5sYXJnZScpXG4gIHB1YmxpYyBzdHlsZUFzTGFyZ2U6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlRWxlbWVudEJ5SW1wb3J0YW5jZUxldmVsKHRoaXMuc2VtdWlJbXBvcnRhbmNlKTtcbiAgfVxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB0byBiZSBvbiBkYXJrIG9yIGxpZ2h0LlxuICAgKi9cbiAgcHJpdmF0ZSBzdHlsZUVsZW1lbnRCeUltcG9ydGFuY2VMZXZlbChsYWJlbFR5cGUpIHtcbiAgICBzd2l0Y2ggKGxhYmVsVHlwZSkge1xuICAgICAgY2FzZSAoJ3NtYWxsJyk6XG4gICAgICAgIHRoaXMuc3R5bGVBc1NtYWxsID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICgnbGFyZ2UnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGFyZ2UgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWN0aW9uRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLWZvb3Rlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlY3Rpb25Gb290ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2VjdGlvbkZvb3RlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlTZWN0aW9uRm9vdGVyTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBJbnB1dFR5cGUgPSAnZm9ybS1pbnB1dCcgfCB1bmRlZmluZWQ7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W3NlbXVpLWlucHV0XScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQWx3YXlzIGFwcGx5IHRoZSBiYXNlIFNlbXVpIGJ1dHRvbiBjc3MgY2xhc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbXVpLWZvcm0taW5wdXQnKVxuICBwcml2YXRlIGFkZEZvcm1CYXNlQ2xhc3M6IHRydWU7XG5cblxuICAvKipcbiAgICogQnV0dG9uIGltcG9ydGFuY2UgbGV2ZWwgaW4gdGVybXMgb2YgcHJpbWFyeSBvciBzZWNvbmRhcnkuXG4gICAqIFByaW1hcnkgc2V0cyBhcyByb3VuZCBjb3JuZXJzIGFuZCBzaGFycCBlZGdlLCBzZWNvbmRhcnkgaXMgYWxsIHJvdW5kXG4gICAqL1xuICBASW5wdXQoJ3NlbXVpLXR5cGUnKVxuICBwdWJsaWMgc2VtdWlUeXBlOiBJbnB1dFR5cGU7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJzZW11aS1mb3JtLWlucHV0XCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZW11aS1mb3JtLWlucHV0JylcbiAgcHVibGljIHNlbXVpVHlwZUZvcm1JbnB1dDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVFbGVtZW50QnlUeXBlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQncyBwcm9wZXJ0aWVzIGJvdW5kIHRvXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgQ1NTIGNsYXNzZXMuXG4gICAqL1xuICBwcml2YXRlIHN0eWxlRWxlbWVudEJ5VHlwZSgpIHtcblxuICAgIGlmICgnZm9ybS1pbnB1dCcgPT09IHRoaXMuc2VtdWlUeXBlKSB7XG4gICAgICB0aGlzLnNlbXVpVHlwZUZvcm1JbnB1dCA9IHRydWU7XG4gICAgfVxuXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9pbnB1dC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0lucHV0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0lucHV0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlJbnB1dE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcbiAgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIENka092ZXJsYXlPcmlnaW4sXG4gIE92ZXJsYXlcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICdzZW11aS1vdmVybGF5LWRpYWxvZycsXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZVxuICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiaXNPcGVuZWRcIlxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcbiAgICAoZGV0YWNoKT1cImNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKVwiXG4gID5cbiAgICA8ZGl2ICNkaWFsb2cgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWw9XCJEaWFsb2dcIiBjbGFzcz1cImRpYWxvZy1jb250YWluZXJcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LXRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzICBPbkRlc3Ryb3ksIE9uSW5pdCAge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIC8vXG4gIC8vIG92ZXJsYXlPZmZzZXRYO1xuICAvLyBPdmVybGF5SGVpZ2h0O1xuICAvLyBzY3JvbGxTdHJhdGVneTtcbiAgLy8gcG9zaXRpb25zO1xuICAvLyBiYWNrZHJvcENsYXNzO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgLy8gICB0aGlzLmJhY2tkcm9wQ2xhc3MgPSAnY2RrT3ZlcmxheUZ1bGxIZWlnaHQnXG4gICAgLy8gICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcbiAgICAvLyAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcbiAgICAvLyAgIHRoaXMucG9zaXRpb25zICA9IFtcbiAgICAvLyAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgLy8gICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXG4gICAgLy8gICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9XG4gICAgLy8gICAgIClcbiAgICAvLyAgIF07XG4gICAgLy8gICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcblxuXG4gICAgY29uc3Qgb3ZlcmxheU9yaWdpbkVsID0gdGhpcy5vdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuXG5cbiAgICBjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbmVkKSxcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IHtcblxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpXG4gICAgICAgIH0pLFxuICAgICAgICB0YXAoIChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgY2xvc2UkLnN1YnNjcmliZSgpO1xuICB9XG4gIGNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKSB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xuICAgIGlzT3BlbmVkID8gdGhpcy5vcGVuLmVtaXQoKSA6IHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBpc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgZGlhbG9nLCBldmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xuICB9XG5cblxuXG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IENka1N0ZXBwZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIC8vIENES1xuICBBMTF5TW9kdWxlLFxuICBCaWRpTW9kdWxlLFxuICBPYnNlcnZlcnNNb2R1bGUsXG4gIE92ZXJsYXlNb2R1bGUsXG4gIFBsYXRmb3JtTW9kdWxlLFxuICBQb3J0YWxNb2R1bGUsXG4gIFNjcm9sbERpc3BhdGNoTW9kdWxlLFxuICBDZGtTdGVwcGVyTW9kdWxlLFxuICBDZGtUYWJsZU1vZHVsZSxcbl1cblxuXG5ATmdNb2R1bGUoe1xuICAvLyBpbXBvcnRzOiBbXG4gIC8vICAgQ29tbW9uTW9kdWxlLFxuICAvLyAgIC4uLm1vZHVsZXNcbiAgLy8gXSxcbiAgLy8gZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogWyAuLi5tb2R1bGVzIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXktZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPdmVybGF5RGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogIFtPdmVybGF5RGlhbG9nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaU92ZXJsYXlEaWFsb2dNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hJZlRhYkFjdGl2ZV0nXG59KVxuZXhwb3J0IGNsYXNzIElmVGFiQWN0aXZlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogVE9ETzogUmVtb3ZlIGhpZGRlbiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MzEwIGlzIHJlc29sdmVkXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJ0ZW1wbGF0ZTsgdGhlbiB0ZW1wbGF0ZV9jb250YWluZXIgZWxzZSBjb250ZW50X2NvbnRhaW5lclwiPjwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVfY29udGFpbmVyPlxuICAgICAgPGRpdiAqbmdJZj1cImFjdGl2ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlLnRlbXBsYXRlUmVmXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudF9jb250YWluZXI+XG4gICAgICA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdzZW11aS10YWInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ3NzIGJhc2UgY2xhc3MuXG4gICAqL1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGVmYXVsdCcpXG4gIHB1YmxpYyBhZGRCYXNlQnV0dG9uQ3NzQ2xhc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHRpdGxlID0gJyc7XG5cbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkKElmVGFiQWN0aXZlRGlyZWN0aXZlKSB0ZW1wbGF0ZTogSWZUYWJBY3RpdmVEaXJlY3RpdmU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgYWN0aXZlQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpe1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi90YWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFic10nLFxuICB0ZW1wbGF0ZTogYDxzZWN0aW9uXG4gIFtjbGFzcy50YWJzLXZlcnRpY2FsXT1cInZlcnRpY2FsXCJcbiAgW2NsYXNzLnRhYnMtaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIlxuICBbY2xhc3Muc3dpcGVdPVwic3dpcGVcIlxuPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VGFicyAmJiB2ZXJ0aWNhbFwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJzLWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG5cbiAgICA8dWxcbiAgICAgIGNsYXNzPVwic2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsXCJcbiAgICAgIFtjbGFzcy50YWJzLXZlcnRpY2FsXT1cInZlcnRpY2FsXCI+XG4gICAgICA8bGlcbiAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcbiAgICAgICAgY2xhc3M9XCJzZW11aS10YWJcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuYWN0aXZlXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cInRhYnMtLWJ1dHRvblwiXG4gICAgICAgICAgKGNsaWNrKT1cInRhYkNsaWNrZWQodGFiKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxuICAgICAgICAgIHt7dGFiLnRpdGxlfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHVsXG5cbiAgICAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiBzaG93VGFic1wiXG4gICAgc2VtdWktbGlzdFxuICAgIGNsYXNzPVwic2VtdWktdGFicy1saXN0IGxpc3QtcmVzZXRcIlxuICAgIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCI+XG4gICAgPGxpXG4gICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxuICAgICAgc2VtdWktbGlzdC1pdGVtXG4gICAgICBsaXN0LWl0ZW1cbiAgICAgIHNlbS1pbXBvcnRhbmNlPVwidGVydGlhcnlcIlxuICAgICAgY2xhc3M9XCJjb3JuZXJfdG9wIFwiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2tlZCh0YWIpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxuICAgICAgICB7e3RhYi50aXRsZX19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuICA8L3VsPlxuXG4gIDxkaXYgY2xhc3M9XCJ0YWItbmF2XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYi1uYXZdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNlbXVpLXRhYi1jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbmAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3NlbXVpLXRhYnMnXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBzaG93VGFiczogYm9vbGVhbjtcbiAgQElucHV0KCkgdmVydGljYWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcblxuICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gdGFicy5maW5kSW5kZXgodGFiID0+IHRhYi5hY3RpdmUpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIGNvbnN0IGFjdGl2ZXMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdC5hY3RpdmUpO1xuXG4gICAgaWYoYWN0aXZlcy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdWx0aXBsZSBhY3RpdmUgdGFicyBzZXQgJ2FjdGl2ZSdgKTtcbiAgICB9IGVsc2UgaWYoIWFjdGl2ZXMubGVuZ3RoICYmIHRhYnMubGVuZ3RoKSB7XG4gICAgICB0YWJzWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZygndGFic1swXS5hY3RpdmUnLCB0YWJzWzBdLmFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgdGFiQ2xpY2tlZChhY3RpdmVUYWIpOiB2b2lkIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcblxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICBhY3RpdmVUYWIuYWN0aXZlID0gdHJ1ZTtcblxuICAgIGNvbnNvbGUubG9nKCdhY3RpdmVUYWIuYWN0aXZlJywgYWN0aXZlVGFiLCBhY3RpdmVUYWIuYWN0aXZlKVxuXG4gICAgdGhpcy5zZWxlY3QuZW1pdChhY3RpdmVUYWIpO1xuICB9XG5cbiAgbW92ZShvZmZzZXQ6IG51bWJlcikge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgb2Zmc2V0OyBpIDwgdGFicy5sZW5ndGggJiYgaSA+PSAwOyBpICs9IG9mZnNldCkge1xuICAgICAgY29uc3QgdGFiID0gdGFic1tpXTtcbiAgICAgIGlmICh0YWIgJiYgIXRhYi5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnRhYkNsaWNrZWQodGFic1tpXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICB0aGlzLm1vdmUoMSk7XG4gIH1cblxuICBwcmV2KCk6IHZvaWQge1xuICAgIHRoaXMubW92ZSgtMSk7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RhYnMvdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUgfSBmcm9tICcuLi9zZWN0aW9uLWhlYWRlci9zZWN0aW9uLWhlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYkNvbXBvbmVudCxcbiAgICBUYWJzQ29tcG9uZW50LCBJZlRhYkFjdGl2ZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUYWJDb21wb25lbnQsIFRhYnNDb21wb25lbnQsIElmVGFiQWN0aXZlRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTZW1VaUxpc3RNb2R1bGUsXG4gICAgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlUYWJzTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLWZvcm0tZmllbGRdJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxNXB4fWBdLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1sYWJlbF1cIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtcHJlZml4XVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1pbnB1dF1cIj48L25nLWNvbnRlbnQ+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBCaW5kIHRvIHRoZSBob3N0IFwiZGFya1wiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktZm9ybS1maWVsZCcpXG4gIHB1YmxpYyBhZGRCYXNlQ2xhc3M6IHRydWU7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWZpZWxkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRm9ybUZpZWxkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Zvcm1GaWVsZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlGb3JtRmllbGRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgdHlwZSBDb3JuZXJUeXBlID0gJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgQnV0dG9uSW1wb3J0YW5jZUxldmVsID0gJ3ByaW1hcnknIHwgJ2xpbmstYnV0dG9uJyB8ICdyb3VuZC1idXR0b24nIHwgJ2Nvcm5lci1idXR0b24nIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgVGhlbWVJbXBvcnRhbmNlTGV2ZWwgPSAnbGlnaHQnIHwgJ2RhcmsnIHwgdW5kZWZpbmVkO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bc2VtLWJ0bi1mYWJdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRmFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIEJ1dHRvbiBpbXBvcnRhbmNlIGxldmVsIGluIHRlcm1zIG9mIHByaW1hcnkvc2Vjb25kYXJ5L2V0Yy5cbiAgICovXG5cbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBzdHJpbmc7XG4gIEBJbnB1dCgnc21hbGwnKSBzbWFsbDogc3RyaW5nO1xuICBASW5wdXQoJ21lZGl1bScpIG1lZGl1bTogc3RyaW5nO1xuICBASW5wdXQoJ2Nvcm5lcicpIGNvcm5lcjogc3RyaW5nO1xuICBASW5wdXQoJ3NlbXVpLXRoZW1lJykgc2VtdWlUaGVtZTogVGhlbWVJbXBvcnRhbmNlTGV2ZWw7XG4gIEBJbnB1dCgnc2VtLWltcG9ydGFuY2UnKSBzZW11aWltcG9ydGFuY2U6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgnY2xhc3MnKSBjbGFzc2VzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJsaWdodFwiIENTUyBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGlnaHQnKVxuICBwdWJsaWMgc3R5bGVBc0xpZ2h0VGhlbWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEJpbmQgdG8gdGhlIGhvc3QgXCJkYXJrXCIgQ1NTIGNsYXNzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYXJrJylcbiAgcHVibGljIHN0eWxlQXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZENsYXNzZXMoIHRoaXMuZ2V0Q2xhc3NlcygpIClcbiAgICB0aGlzLnN0eWxlRWxlbWVudFRoZW1lKHRoaXMuc2VtdWlUaGVtZSk7XG4gIH1cblxuICBnZXRDbGFzc2VzKCkge1xuICAgIGNvbnN0IF9jbGFzc2VzID0gW107XG4gICAgX2NsYXNzZXMucHVzaCgnIHNlbS1idG4tZmFiJyk7XG4gICAgaWYgKHRoaXMubGFyZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnbGFyZ2UnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc21hbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgX2NsYXNzZXMucHVzaCgnc21hbGwnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWVkaXVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ21lZGl1bScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdpbnZlcnRlZCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2ludmVydGVkJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbXVpaW1wb3J0YW5jZSA9PT0gJ3NlY29uZGFyeScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ3NlY29uZGFyeScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZW11aWltcG9ydGFuY2UgPT09ICdtZWRpdW0nKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdtZWRpdW0nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VtdWlpbXBvcnRhbmNlID09PSAnZGVmYXVsdF9zbWFsbCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2RlZmF1bHRfc21hbGwnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnbm9uZScpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ub25lJyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgX2NsYXNzZXMucHVzaCgnY29ybmVyX3JpZ2h0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2xlZnQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfbGVmdCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICd0b3AtbGVmdCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl90b3AtbGVmdCcpO1xuICAgIH1cbiAgICBpZiggdGhpcy5jb3JuZXIgPT09ICd0b3AtcmlnaHQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfdG9wLXJpZ2h0Jyk7XG4gICAgfVxuICAgIGlmKCB0aGlzLmNvcm5lciA9PT0gJ2JvdHRvbS1yaWdodCcpIHtcbiAgICAgIF9jbGFzc2VzLnB1c2goJ2Nvcm5lcl9ib3R0b20tcmlnaHQnKTtcbiAgICB9XG4gICAgaWYoIHRoaXMuY29ybmVyID09PSAnYm90dG9tLWxlZnQnKSB7XG4gICAgICBfY2xhc3Nlcy5wdXNoKCdjb3JuZXJfYm90dG9tLWxlZnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2VzO1xuICB9XG5cbiAgYWRkQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHNwYWNlciA9IHRoaXMuY2xhc3NlcyA/ICcnIDogJyc7XG4gICAgY29uc3QgYmFzZSA9ICdzZW0tYnRuLWZhYi0tJztcbiAgICBjbGFzc2VzLmZvckVhY2goKF9jbGFzcywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsYXNzZXMgKz0gc3BhY2VyICsgYmFzZSArIF9jbGFzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NlcyArPSAnICcgKyBiYXNlICsgX2NsYXNzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIHN0eWxlRWxlbWVudFRoZW1lKHRoZW1lKXtcbiAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICBjYXNlICgnbGlnaHQnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzTGlnaHRUaGVtZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAoJ2RhcmsnKTpcbiAgICAgICAgdGhpcy5zdHlsZUFzRGFya1RoZW1lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJ1dHRvbkZhYkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uLWZhYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0J1dHRvbkZhYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtCdXR0b25GYWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpQnV0dG9uRmFiTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LFxuICBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDZGtPdmVybGF5T3JpZ2luLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBPdmVybGF5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5Jztcbi8vIGltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRhcCAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbXVpLW92ZXJsYXktdmVydGljYWwnLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZVxuICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm92ZXJsYXlPcmlnaW5cIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiaXNPcGVuZWRcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVNjcm9sbFN0cmF0ZWd5XT1cInNjcm9sbFN0cmF0ZWd5XCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIZWlnaHRdPVwiT3ZlcmxheUhlaWdodFwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwiMzIwXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCIzMDBcIlxuICAoZGV0YWNoKT1cImNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKVwiXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJyZVBvc2l0aW9uKCRldmVudClcIlxuPlxuICA8ZGl2ICNkaWFsb2cgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWw9XCJEaWFsb2dcIiBjbGFzcz1cImRpYWxvZy1jb250YWluZXItZnVsbFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50TG9hZGVkXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LXRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlWZXJ0aWNhbENvbXBvbmVudCBpbXBsZW1lbnRzICBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2Vze1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIEBJbnB1dCgpIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIEBJbnB1dCgpIGlzT3BlbmVkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjtcblxuXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIG92ZXJsYXlPZmZzZXRYO1xuICBPdmVybGF5SGVpZ2h0O1xuICBzY3JvbGxTdHJhdGVneTtcbiAgcG9zaXRpb25zO1xuICBiYWNrZHJvcENsYXNzO1xuXG4gIGNvbnRlbnRMb2FkZWQgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuYmFja2Ryb3BDbGFzcyA9ICdjZGtPdmVybGF5RnVsbEhlaWdodCdcbiAgICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcbiAgICB0aGlzLk92ZXJsYXlIZWlnaHQgPSAnMTAwJSc7XG4gICAgdGhpcy5wb3NpdGlvbnMgID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICAgIHtvcmlnaW5ZOiAnY2VudGVyJywgb3JpZ2luWDogJ2VuZCd9LFxuICAgICAgICB7b3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJ31cbiAgICAgIClcbiAgICBdO1xuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbmVkKSxcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcblxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKCAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICBjbG9zZSQuc3Vic2NyaWJlKCk7XG5cbiB9XG4gIGNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKSB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcbiAgICBpZihjaGFuZ2VzLmlzT3BlbmVkLmN1cnJlbnRWYWx1ZSl7XG4gICAgICB0aGlzLmNvbnRlbnRMb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZVBvc2l0aW9uKGl0ZW0pe1xuICAgIHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS50b3AgPSAnMCc7XG4gIH1cbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShpc09wZW5lZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuZWQgPSBpc09wZW5lZDtcbiAgICBpc09wZW5lZCA/IHRoaXMub3Blbi5lbWl0KCkgOiB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIGRpYWxvZywgZXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIShvdmVybGF5T3JpZ2luRWwuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSB8fCBkaWFsb2cubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudFsndGFyZ2V0J10pKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlWZXJ0aWNhbENvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZSB9IGZyb20gJy4uL21hdGVyaWFsLW1hbmlmZXN0L21hdGVyaWFsLW1hbmlmZXN0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0ZXJpYWxNYW5pZmVzdE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPdmVybGF5VmVydGljYWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaU92ZXJsYXlWZXJ0aWNhbE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIENvbnRlbnRDaGlsZCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tzZW11aS1mb250LXNpemVzXScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlbS11bC1pY29uLWxpc3Qgc2VtLXVsXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuXG5cblxuPHVsIGNsYXNzPVwiYnVsbGV0LWlubGluZWxpc3QgcDRcIj5cbiAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuPC91bD5cbmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpRm9udFNpemVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYWN0aXZlaWQ6IG51bWJlcjtcblxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKVxuICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRhdGFTb3VyY2U6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgcHVibGljIG9wZW5lZFBhcmVudDogYW55ID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbGV2ZWxzOiBBcnJheTxPYmplY3Q+ID0gW1xuICAgIHtudW06IDAsIG5hbWU6ICcxJ30sXG4gICAge251bTogMSwgbmFtZTogJzInfVxuICBdO1xuICBzZWxlY3RlZExldmVsID0gdGhpcy5sZXZlbHNbMF07XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlcyBhcmUgZW5hYmxlZCcpXG4gICAgdGhpcy5hY3RpdmVpZCA9IGNoYW5nZXMuYWN0aXZlaWQuY3VycmVudFZhbHVlO1xuICB9XG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCB9IGZyb20gJy4uL2ZvbnQtc2l6ZXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbc2VtdWktZm9udC1zaXplcy1pdGVtXScsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIH1cIlxuICBjbGFzcz1cInNlbS1saVwiXG4gIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICA8bmctY29udGVudCAgc2VsZWN0PVwiW25hdmxpbmtdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48ZGl2XG4gICpuZ0lmPVwiaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIFwiXG4gIGNsYXNzPVwiYmxvY2tcIlxuICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIH1cIlxuPlxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci0tYm9keVwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzaXplLXNlbGVjdG9yXVwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgaXRlbVJlZjogYW55ID0ge307XG4gIEBJbnB1dCgpIHByaXZhdGUgaW5kZXhSZWYgPSAtMTtcbiAgQElucHV0KCkgcHJpdmF0ZSBzZWxlY3RlZEluZGV4ID0gLTE7XG4gIEBJbnB1dCgpIHB1YmxpYyBncm91cElkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVpZDogbnVtYmVyO1xuICBAT3V0cHV0KCkgYWN0aXZlaWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFyZW50OiBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkSXRlbUluZGV4KCk7XG4gIH1cblxuICBzZXRTZWxlY3RlZEl0ZW1JbmRleCgpIHtcbiAgICBjb25zb2xlLmxvZygnbXVzIGJlIGNhbGwgaGVyZScpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRoaXMuaW5kZXhSZWYpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRJdGVtQXRJbmRleCgpO1xuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW07XG4gIH1cbiAgc2V0IHNlbGVjdGVkSXRlbSh2YWx1ZSkge1xuICAgIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCduZXcgb25lJywgICB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xuICB9XG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1SZWY7XG4gICAgaWYgKHRoaXMuaXRlbVJlZiA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pe1xuICAgICAgY29uc29sZS5sb2coJ3RydWUnKVxuICAgICAgLy8gIHRoaXMuc3R5bGVBc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtKTtcbiAgICAvLyB0aGlzLmFjdGl2ZWlkQ2hhbmdlLmVtaXQodGhpcy5ncm91cElkKTtcbiAgfVxuXG4gIGdldCBwYXJlbnRMaXN0KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmRhdGFTb3VyY2U7XG4gIH1cbiAgcHJpdmF0ZSBnZXRJdGVtQXRJbmRleCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhcmVudExpc3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IHRoaXMucGFyZW50TGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50TGlzdFt0aGlzLnNlbGVjdGVkSW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50fSBmcm9tICcuL3NlbS1mb250LXNpemVzLWl0ZW0vc2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtTZW1VaUZvbnRTaXplc0NvbXBvbmVudH0gZnJvbSAnLi9mb250LXNpemVzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlbVVpRm9udFNpemVzQ29tcG9uZW50LCBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbU2VtVWlGb250U2l6ZXNDb21wb25lbnQsIFNlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFNlbVVpQ29tcG9uZW50IH0gZnJvbSAnLi9zZW0tdWkuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbVVpQnV0dG9uRG5kTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2J1dHRvbi1kbmQvYnV0dG9uLWRuZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlCdXR0b25Nb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlDYXJkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlMaXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2xpc3QvbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlMYWJlbE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9sYWJlbC9sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlGb3JtU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2Zvcm0tc2VsZWN0L2Zvcm0tc2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaVRodW1ibmFpbExhcmdlTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3RodW1ibmFpbC1sYXJnZS90aHVtYm5haWwtbGFyZ2UubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpSWNvbnNMaXN0TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2ljb25zLWxpc3QvaWNvbnMtbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlSYWluRHJvcE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9yYWluLWRyb3AvcmFpbi1kcm9wLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaVNlY3Rpb25IZWFkZXJNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvc2VjdGlvbi1oZWFkZXIvc2VjdGlvbi1oZWFkZXIubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpU2VjdGlvbkZvb3Rlck1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zZWN0aW9uLWZvb3Rlci9zZWN0aW9uLWZvb3Rlci5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlJbnB1dE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9pbnB1dC9pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlPdmVybGF5RGlhbG9nTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL292ZXJsYXktZGlhbG9nL292ZXJsYXktZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaVRhYnNNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQubW9kdWxlJztcbmltcG9ydCB7IFNlbVVpQnV0dG9uRmFiTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2J1dHRvbi1mYWIvYnV0dG9uLWZhYi5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlPdmVybGF5VmVydGljYWxNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvb3ZlcmxheS12ZXJ0aWNhbC9vdmVybGF5LXZlcnRpY2FsLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaUZvbnRTaXplc01vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMubW9kdWxlJztcbmltcG9ydCB7IE1hdGVyaWFsTWFuaWZlc3RNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvbWF0ZXJpYWwtbWFuaWZlc3QvbWF0ZXJpYWwtbWFuaWZlc3QubW9kdWxlJztcblxuY29uc3QgVUlNT0RVTEVTID0gW1xuICBNYXRlcmlhbE1hbmlmZXN0TW9kdWxlLFxuICBTZW1VaUJ1dHRvbk1vZHVsZSxcbiAgU2VtVWlCdXR0b25GYWJNb2R1bGUsXG4gIFNlbVVpUmFpbkRyb3BNb2R1bGUsXG4gIFNlbVVpTGlzdE1vZHVsZSxcbiAgU2VtVWlMYWJlbE1vZHVsZSxcbiAgU2VtVWlGb3JtU2VsZWN0TW9kdWxlLFxuICBTZW1VaVRodW1ibmFpbExhcmdlTW9kdWxlLFxuICBTZW1VaUljb25zTGlzdE1vZHVsZSxcbiAgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlLFxuICBTZW1VaVNlY3Rpb25Gb290ZXJNb2R1bGUsXG4gIFNlbVVpQ2FyZE1vZHVsZSxcbiAgU2VtVWlJbnB1dE1vZHVsZSxcbiAgU2VtVWlPdmVybGF5RGlhbG9nTW9kdWxlLFxuICBTZW1VaU92ZXJsYXlWZXJ0aWNhbE1vZHVsZSxcbiAgU2VtVWlUYWJzTW9kdWxlLFxuICBTZW1VaUZvcm1GaWVsZE1vZHVsZSxcbiAgU2VtVWlGb250U2l6ZXNNb2R1bGUsXG4gIFNlbVVpQnV0dG9uRG5kTW9kdWxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFVJTU9EVUxFUyxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTZW1VaUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZW1VaUNvbXBvbmVudCwgVUlNT0RVTEVTXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbXVpLWljb24tcm93JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGljb24tcm93IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSWNvblJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb25Sb3dDb21wb25lbnQgfSBmcm9tICcuL2ljb24tcm93LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSWNvblJvd0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtJY29uUm93Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJY29uUm93TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktc3dpdGNoLXJvdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzd2l0Y2gtcm93IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3dpdGNoUm93Q29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2gtcm93LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3dpdGNoUm93Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N3aXRjaFJvd0NvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoUm93TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktdGl0bGUtbWFycXVlZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0aXRsZS1tYXJxdWVlIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGl0bGVNYXJxdWVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGl0bGVNYXJxdWVlQ29tcG9uZW50IH0gZnJvbSAnLi90aXRsZS1tYXJxdWVlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGl0bGVNYXJxdWVlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RpdGxlTWFycXVlZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGl0bGVNYXJxdWVlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktdG9nZ2xlLXJvdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0b2dnbGUtcm93IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVG9nZ2xlUm93Q29tcG9uZW50IH0gZnJvbSAnLi90b2dnbGUtcm93LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVG9nZ2xlUm93Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RvZ2dsZVJvd0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlUm93TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiSG9zdEJpbmRpbmciLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiSG9zdExpc3RlbmVyIiwib3ZlcmxheSIsIkV2ZW50RW1pdHRlciIsIlN1YmplY3QiLCJmcm9tRXZlbnQiLCJkZWJvdW5jZVRpbWUiLCJmaWx0ZXIiLCJ0YXAiLCJPdmVybGF5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJPdXRwdXQiLCJWaWV3Q2hpbGQiLCJBMTF5TW9kdWxlIiwiQmlkaU1vZHVsZSIsIk9ic2VydmVyc01vZHVsZSIsIk92ZXJsYXlNb2R1bGUiLCJQbGF0Zm9ybU1vZHVsZSIsIlBvcnRhbE1vZHVsZSIsIlNjcm9sbERpc3BhdGNoTW9kdWxlIiwiQ2RrU3RlcHBlck1vZHVsZSIsIkNka1RhYmxlTW9kdWxlIiwiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJDb250ZW50Q2hpbGQiLCJDb250ZW50Q2hpbGRyZW4iLCJDb25uZWN0aW9uUG9zaXRpb25QYWlyIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsIkZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsyQkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsaUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSw4Q0FJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozs2QkFWRDs7Ozs7OztBQ0FBO1FBK0RFOzs7O2lDQWxDZ0MsS0FBSztTQWtDcEI7Ozs7UUFFakIsMENBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxVQUFVLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFFLENBQUE7Z0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekM7Ozs7UUFFRCw0Q0FB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