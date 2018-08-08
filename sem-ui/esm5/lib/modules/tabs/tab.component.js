/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, HostBinding } from '@angular/core';
import { IfTabActiveDirective } from './if-tab-active.directive';
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
    // @Input('active')
    // set active(value: boolean) {
    //   this.activeClass = value;
    // }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('on',  this.active)
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
        // console.log('cccc', changes, this.active)
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
export { TabComponent };
if (false) {
    /**
     * Css base class.
     * @type {?}
     */
    TabComponent.prototype.addBaseButtonCssClass;
    /** @type {?} */
    TabComponent.prototype.title;
    /** @type {?} */
    TabComponent.prototype.active;
    /** @type {?} */
    TabComponent.prototype.disabled;
    /** @type {?} */
    TabComponent.prototype.template;
    /** @type {?} */
    TabComponent.prototype.activeClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3RhYnMvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQWUsWUFBWSxFQUMvQixXQUFXLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7cUNBK0JoQyxJQUFJO3FCQUVsQixFQUFFO3NCQUVELEtBQUs7d0JBRUgsS0FBSzsyQkFLSyxLQUFLOztJQUVuQyxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixJQUFJOzs7O0lBQ0osK0JBQVE7OztJQUFSOztLQUVDOzs7OztJQUNELGtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjs7S0FFakM7O2dCQWhERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxpYUFZVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFdBQVc7cUJBQ25CO2lCQUNGOzs7d0NBTUUsV0FBVyxTQUFDLGVBQWU7d0JBRzNCLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLFlBQVksU0FBQyxvQkFBb0I7OEJBRWpDLFdBQVcsU0FBQyxjQUFjOzt1QkE3QzdCOztTQTZCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBUT0RPOiBSZW1vdmUgaGlkZGVuIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTgzMTAgaXMgcmVzb2x2ZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFiXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cInRlbXBsYXRlOyB0aGVuIHRlbXBsYXRlX2NvbnRhaW5lciBlbHNlIGNvbnRlbnRfY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZV9jb250YWluZXI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiYWN0aXZlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGUudGVtcGxhdGVSZWZcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50X2NvbnRhaW5lcj5cbiAgICAgIDxkaXYgW2hpZGRlbl09XCIhYWN0aXZlXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3NlbXVpLXRhYidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlc3tcbiAgLyoqXG4gICAqIENzcyBiYXNlIGNsYXNzLlxuICAgKi9cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRlZmF1bHQnKVxuICBwdWJsaWMgYWRkQmFzZUJ1dHRvbkNzc0NsYXNzID0gdHJ1ZTtcblxuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZChJZlRhYkFjdGl2ZURpcmVjdGl2ZSkgdGVtcGxhdGU6IElmVGFiQWN0aXZlRGlyZWN0aXZlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgcHVibGljIGFjdGl2ZUNsYXNzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gQElucHV0KCdhY3RpdmUnKVxuICAvLyBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gIC8vICAgdGhpcy5hY3RpdmVDbGFzcyA9IHZhbHVlO1xuICAvLyB9XG4gIG5nT25Jbml0KCl7XG4gICAgLy8gY29uc29sZS5sb2coJ29uJywgIHRoaXMuYWN0aXZlKVxuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY2NjYycsIGNoYW5nZXMsIHRoaXMuYWN0aXZlKVxuICB9XG5cbn1cbiJdfQ==