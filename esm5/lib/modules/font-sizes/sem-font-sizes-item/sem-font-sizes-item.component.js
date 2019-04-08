/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { SemUiFontSizesComponent } from '../font-sizes.component';
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
export { SemUiFontSizesItemComponent };
if (false) {
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.itemRef;
    /**
     * @type {?}
     * @private
     */
    SemUiFontSizesItemComponent.prototype.indexRef;
    /**
     * @type {?}
     * @private
     */
    SemUiFontSizesItemComponent.prototype.selectedIndex;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.groupId;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.activeid;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.activeidChange;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    SemUiFontSizesItemComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    SemUiFontSizesItemComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SemUiFontSizesItemComponent.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZvbnQtc2l6ZXMvc2VtLWZvbnQtc2l6ZXMtaXRlbS9zZW0tZm9udC1zaXplcy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUN0Qyx1QkFBdUIsRUFDdkIsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbEU7SUFnQ0UscUNBQ1UsT0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsTUFBK0I7UUFGL0IsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBWHpCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUcxQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNbEMsQ0FBQzs7OztJQUVMLDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCwwREFBb0I7OztJQUFwQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7SUFDRCxzQkFBSSxxREFBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDbEMsQ0FBQzs7Ozs7UUFDRCxVQUFpQixLQUFLO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUM7OztPQUpBOzs7O0lBS00sNENBQU07OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsOEJBQThCO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQywwQ0FBMEM7SUFDNUMsQ0FBQztJQUVELHNCQUFJLG1EQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBOzs7OztJQUNPLG9EQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDWDtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7O2dCQS9FRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSwrWkFpQlg7b0JBQ0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXpCZSxVQUFVO2dCQUFFLFNBQVM7Z0JBQzVCLHVCQUF1Qjs7OzBCQTBCN0IsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLE1BQU07eUJBQ04sTUFBTTs7SUFtRFQsa0NBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQTFEWSwyQkFBMkI7OztJQUN0Qyw4Q0FBa0M7Ozs7O0lBQ2xDLCtDQUErQjs7Ozs7SUFDL0Isb0RBQW9DOztJQUNwQyw4Q0FBZ0M7O0lBQ2hDLCtDQUFpQzs7SUFDakMscURBQXNEOztJQUN0RCw2Q0FBc0M7Ozs7O0lBR3BDLDhDQUEyQjs7Ozs7SUFDM0IsK0NBQTJCOzs7OztJQUMzQiw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VtVWlGb250U2l6ZXNDb21wb25lbnQgfSBmcm9tICcuLi9mb250LXNpemVzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbc2VtdWktZm9udC1zaXplcy1pdGVtXScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2XHJcbiAgW25nQ2xhc3NdPVwieyAnYWN0aXZlJyA6IGl0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSB9XCJcclxuICBjbGFzcz1cInNlbS1saVwiXHJcbiAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgIHNlbGVjdD1cIltuYXZsaW5rXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXZcclxuICAqbmdJZj1cIml0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSBcIlxyXG4gIGNsYXNzPVwiYmxvY2tcIlxyXG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci0tYm9keVwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3NpemUtc2VsZWN0b3JdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtUmVmOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBwcml2YXRlIGluZGV4UmVmID0gLTE7XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBzZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgQElucHV0KCkgcHVibGljIGdyb3VwSWQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgYWN0aXZlaWQ6IG51bWJlcjtcclxuICBAT3V0cHV0KCkgYWN0aXZlaWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcGFyZW50OiBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCxcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtSW5kZXgoKTtcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkSXRlbUluZGV4KCkge1xyXG4gICAgY29uc29sZS5sb2coJ211cyBiZSBjYWxsIGhlcmUnKTtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRoaXMuaW5kZXhSZWYpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmdldEl0ZW1BdEluZGV4KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtO1xyXG4gIH1cclxuICBzZXQgc2VsZWN0ZWRJdGVtKHZhbHVlKSB7XHJcbiAgICB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0gPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCduZXcgb25lJywgICB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xyXG4gIH1cclxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1SZWY7XHJcbiAgICBpZiAodGhpcy5pdGVtUmVmID09PSB0aGlzLnNlbGVjdGVkSXRlbSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0cnVlJylcclxuICAgICAgLy8gIHRoaXMuc3R5bGVBc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSk7XHJcbiAgICAvLyB0aGlzLmFjdGl2ZWlkQ2hhbmdlLmVtaXQodGhpcy5ncm91cElkKTtcclxuICB9XHJcblxyXG4gIGdldCBwYXJlbnRMaXN0KCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZGF0YVNvdXJjZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRJdGVtQXRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMucGFyZW50TGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gdGhpcy5wYXJlbnRMaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudExpc3RbdGhpcy5zZWxlY3RlZEluZGV4XTtcclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==