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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZvbnQtc2l6ZXMvc2VtLWZvbnQtc2l6ZXMtaXRlbS9zZW0tZm9udC1zaXplcy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUN0Qyx1QkFBdUIsRUFDdkIsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBa0NoRSxxQ0FDVSxTQUNBLFVBQ0E7UUFGQSxZQUFPLEdBQVAsT0FBTztRQUNQLGFBQVEsR0FBUixRQUFRO1FBQ1IsV0FBTSxHQUFOLE1BQU07dUJBWGUsRUFBRTt3QkFDTCxDQUFDLENBQUM7NkJBQ0csQ0FBQyxDQUFDOzhCQUdSLElBQUksWUFBWSxFQUFVO3NCQUNsQyxJQUFJLFlBQVksRUFBRTtLQU1oQzs7OztJQUVMLDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsMERBQW9COzs7SUFBcEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMzQztLQUNGO0lBQ0Qsc0JBQUkscURBQVk7Ozs7UUFBaEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDakM7Ozs7O1FBQ0QsVUFBaUIsS0FBSztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRDs7O09BSkE7Ozs7SUFLTSw0Q0FBTTs7OztRQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7O1NBRXBCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7O0lBSTdDLHNCQUFJLG1EQUFVOzs7O1FBQWQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDL0I7OztPQUFBOzs7O0lBQ08sb0RBQWM7Ozs7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Z0JBOUViLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLCtaQWlCWDtvQkFDQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBekJlLFVBQVU7Z0JBQUUsU0FBUztnQkFDNUIsdUJBQXVCOzs7MEJBMEI3QixLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsTUFBTTt5QkFDTixNQUFNOztzQ0FuQ1Q7O1NBNEJhLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCB9IGZyb20gJy4uL2ZvbnQtc2l6ZXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbc2VtdWktZm9udC1zaXplcy1pdGVtXScsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIH1cIlxuICBjbGFzcz1cInNlbS1saVwiXG4gIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICA8bmctY29udGVudCAgc2VsZWN0PVwiW25hdmxpbmtdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48ZGl2XG4gICpuZ0lmPVwiaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIFwiXG4gIGNsYXNzPVwiYmxvY2tcIlxuICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIH1cIlxuPlxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci0tYm9keVwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzaXplLXNlbGVjdG9yXVwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgaXRlbVJlZjogYW55ID0ge307XG4gIEBJbnB1dCgpIHByaXZhdGUgaW5kZXhSZWYgPSAtMTtcbiAgQElucHV0KCkgcHJpdmF0ZSBzZWxlY3RlZEluZGV4ID0gLTE7XG4gIEBJbnB1dCgpIHB1YmxpYyBncm91cElkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVpZDogbnVtYmVyO1xuICBAT3V0cHV0KCkgYWN0aXZlaWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFyZW50OiBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkSXRlbUluZGV4KCk7XG4gIH1cblxuICBzZXRTZWxlY3RlZEl0ZW1JbmRleCgpIHtcbiAgICBjb25zb2xlLmxvZygnbXVzIGJlIGNhbGwgaGVyZScpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRoaXMuaW5kZXhSZWYpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRJdGVtQXRJbmRleCgpO1xuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW07XG4gIH1cbiAgc2V0IHNlbGVjdGVkSXRlbSh2YWx1ZSkge1xuICAgIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCduZXcgb25lJywgICB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xuICB9XG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1SZWY7XG4gICAgaWYgKHRoaXMuaXRlbVJlZiA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pe1xuICAgICAgY29uc29sZS5sb2coJ3RydWUnKVxuICAgICAgLy8gIHRoaXMuc3R5bGVBc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtKTtcbiAgICAvLyB0aGlzLmFjdGl2ZWlkQ2hhbmdlLmVtaXQodGhpcy5ncm91cElkKTtcbiAgfVxuXG4gIGdldCBwYXJlbnRMaXN0KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmRhdGFTb3VyY2U7XG4gIH1cbiAgcHJpdmF0ZSBnZXRJdGVtQXRJbmRleCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBhcmVudExpc3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IHRoaXMucGFyZW50TGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50TGlzdFt0aGlzLnNlbGVjdGVkSW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxufVxuIl19