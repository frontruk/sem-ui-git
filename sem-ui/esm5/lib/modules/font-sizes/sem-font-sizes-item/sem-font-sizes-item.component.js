/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
export { SemUiFontSizesItemComponent };
if (false) {
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.itemRef;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.indexRef;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.selectedIndex;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.groupId;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.activeid;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.activeidChange;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.change;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.element;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.renderer;
    /** @type {?} */
    SemUiFontSizesItemComponent.prototype.parent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9mb250LXNpemVzL3NlbS1mb250LXNpemVzLWl0ZW0vc2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFDdEMsdUJBQXVCLEVBQ3ZCLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQWtDaEUscUNBQ1UsU0FDQSxVQUNBO1FBRkEsWUFBTyxHQUFQLE9BQU87UUFDUCxhQUFRLEdBQVIsUUFBUTtRQUNSLFdBQU0sR0FBTixNQUFNO3VCQVhlLEVBQUU7d0JBQ0wsQ0FBQyxDQUFDOzZCQUNHLENBQUMsQ0FBQzs4QkFHUixJQUFJLFlBQVksRUFBVTtzQkFDbEMsSUFBSSxZQUFZLEVBQUU7S0FNaEM7Ozs7SUFFTCw4Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUVELDBEQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDM0M7S0FDRjtJQUNELHNCQUFJLHFEQUFZOzs7O1FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ2pDOzs7OztRQUNELFVBQWlCLEtBQUs7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7OztPQUpBOzs7O0lBS00sNENBQU07Ozs7UUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztTQUVwQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7OztJQUk3QyxzQkFBSSxtREFBVTs7OztRQUFkO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQy9COzs7T0FBQTs7OztJQUNPLG9EQUFjOzs7O1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWDtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWDtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O2dCQTlFYixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSwrWkFpQlg7b0JBQ0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXpCZSxVQUFVO2dCQUFFLFNBQVM7Z0JBQzVCLHVCQUF1Qjs7OzBCQTBCN0IsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLE1BQU07eUJBQ04sTUFBTTs7c0NBbkNUOztTQTRCYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VtVWlGb250U2l6ZXNDb21wb25lbnQgfSBmcm9tICcuLi9mb250LXNpemVzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXMtaXRlbV0nLFxuICB0ZW1wbGF0ZTogYDxkaXZcbiAgW25nQ2xhc3NdPVwieyAnYWN0aXZlJyA6IGl0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSB9XCJcbiAgY2xhc3M9XCJzZW0tbGlcIlxuICAoY2xpY2spPVwidG9nZ2xlKClcIj5cbiAgPG5nLWNvbnRlbnQgIHNlbGVjdD1cIltuYXZsaW5rXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdlxuICAqbmdJZj1cIml0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSBcIlxuICBjbGFzcz1cImJsb2NrXCJcbiAgW25nQ2xhc3NdPVwieyAnYWN0aXZlJyA6IGl0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSB9XCJcbj5cbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250YWluZXItLWJvZHlcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2l6ZS1zZWxlY3Rvcl1cIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIGl0ZW1SZWY6IGFueSA9IHt9O1xuICBASW5wdXQoKSBwcml2YXRlIGluZGV4UmVmID0gLTE7XG4gIEBJbnB1dCgpIHByaXZhdGUgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJZDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgYWN0aXZlaWQ6IG51bWJlcjtcbiAgQE91dHB1dCgpIGFjdGl2ZWlkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBhcmVudDogU2VtVWlGb250U2l6ZXNDb21wb25lbnQsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1JbmRleCgpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRJdGVtSW5kZXgoKSB7XG4gICAgY29uc29sZS5sb2coJ211cyBiZSBjYWxsIGhlcmUnKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0aGlzLmluZGV4UmVmKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuZ2V0SXRlbUF0SW5kZXgoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtO1xuICB9XG4gIHNldCBzZWxlY3RlZEl0ZW0odmFsdWUpIHtcbiAgICB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0gPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygnbmV3IG9uZScsICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtKTtcbiAgfVxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtUmVmO1xuICAgIGlmICh0aGlzLml0ZW1SZWYgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKXtcbiAgICAgIGNvbnNvbGUubG9nKCd0cnVlJylcbiAgICAgIC8vICB0aGlzLnN0eWxlQXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSk7XG4gICAgLy8gdGhpcy5hY3RpdmVpZENoYW5nZS5lbWl0KHRoaXMuZ3JvdXBJZCk7XG4gIH1cblxuICBnZXQgcGFyZW50TGlzdCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5kYXRhU291cmNlO1xuICB9XG4gIHByaXZhdGUgZ2V0SXRlbUF0SW5kZXgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5wYXJlbnRMaXN0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiB0aGlzLnBhcmVudExpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudExpc3RbdGhpcy5zZWxlY3RlZEluZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbn1cbiJdfQ==