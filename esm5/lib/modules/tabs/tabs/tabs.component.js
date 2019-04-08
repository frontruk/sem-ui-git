/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ContentChildren, QueryList, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TabComponent } from '../tab.component';
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
export { TabsComponent };
if (false) {
    /** @type {?} */
    TabsComponent.prototype.showTabs;
    /** @type {?} */
    TabsComponent.prototype.vertical;
    /** @type {?} */
    TabsComponent.prototype.swipe;
    /** @type {?} */
    TabsComponent.prototype.select;
    /** @type {?} */
    TabsComponent.prototype.tabs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUNsRSxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhEO0lBQUE7UUFzRVksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFpRHhDLENBQUM7SUE3Q0Msc0JBQUksZ0NBQUs7Ozs7UUFBVDs7Z0JBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEVBQVYsQ0FBVSxFQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7Ozs7SUFFRCwwQ0FBa0I7OztJQUFsQjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7O1lBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxFQUFDO1FBRS9DLElBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3BEO2FBQU0sSUFBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsa0NBQVU7Ozs7SUFBVixVQUFXLFNBQVM7O1lBQ1osSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBRWhDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsNEJBQUk7Ozs7SUFBSixVQUFLLE1BQWM7O1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFOztnQkFDbEUsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixPQUFPO2FBQ1I7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCw0QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELDRCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDOztnQkFwSEYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsdTRDQXlEWDtvQkFDQyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFlBQVk7cUJBQ3BCO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OzJCQUVFLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLE1BQU07dUJBRU4sZUFBZSxTQUFDLFlBQVk7O0lBK0MvQixvQkFBQztDQUFBLEFBdkhELElBdUhDO1NBckRZLGFBQWE7OztJQUN4QixpQ0FBMkI7O0lBQzNCLGlDQUEyQjs7SUFDM0IsOEJBQXdCOztJQUN4QiwrQkFBc0M7O0lBRXRDLDZCQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRXZlbnRFbWl0dGVyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlckNvbnRlbnRJbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi90YWIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2RpdltzZW11aS10YWJzXScsXHJcbiAgdGVtcGxhdGU6IGA8c2VjdGlvblxyXG4gIFtjbGFzcy50YWJzLXZlcnRpY2FsXT1cInZlcnRpY2FsXCJcclxuICBbY2xhc3MudGFicy1ob3Jpem9udGFsXT1cIiF2ZXJ0aWNhbFwiXHJcbiAgW2NsYXNzLnN3aXBlXT1cInN3aXBlXCJcclxuPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1RhYnMgJiYgdmVydGljYWxcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWJzLWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICAgPHVsXHJcbiAgICAgIGNsYXNzPVwic2VtdWktdGFicy0tbmF2bGlzdF9ob3Jpem9udGFsXCJcclxuICAgICAgW2NsYXNzLnRhYnMtdmVydGljYWxdPVwidmVydGljYWxcIj5cclxuICAgICAgPGxpXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcclxuICAgICAgICBjbGFzcz1cInNlbXVpLXRhYlwiXHJcbiAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuYWN0aXZlXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3M9XCJ0YWJzLS1idXR0b25cIlxyXG4gICAgICAgICAgKGNsaWNrKT1cInRhYkNsaWNrZWQodGFiKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCI+XHJcbiAgICAgICAgICB7e3RhYi50aXRsZX19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPHVsXHJcblxyXG4gICAgKm5nSWY9XCIhdmVydGljYWwgJiYgc2hvd1RhYnNcIlxyXG4gICAgc2VtdWktbGlzdFxyXG4gICAgY2xhc3M9XCJzZW11aS10YWJzLWxpc3QgbGlzdC1yZXNldFwiXHJcbiAgICBbY2xhc3MudGFicy1ob3Jpem9udGFsXT1cIiF2ZXJ0aWNhbFwiPlxyXG4gICAgPGxpXHJcbiAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiXHJcbiAgICAgIHNlbXVpLWxpc3QtaXRlbVxyXG4gICAgICBsaXN0LWl0ZW1cclxuICAgICAgc2VtLWltcG9ydGFuY2U9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgIGNsYXNzPVwiY29ybmVyX3RvcCBcIlxyXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuYWN0aXZlXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2tlZCh0YWIpXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCI+XHJcbiAgICAgICAge3t0YWIudGl0bGV9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInRhYi1uYXZcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWItbmF2XVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2VtdWktdGFiLWNvbnRlbnRcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5gLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnc2VtdWktdGFicydcclxuICB9LFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBASW5wdXQoKSBzaG93VGFiczogYm9vbGVhbjtcclxuICBASW5wdXQoKSB2ZXJ0aWNhbDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzd2lwZTogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbXBvbmVudCkgdGFiczogUXVlcnlMaXN0PFRhYkNvbXBvbmVudD47XHJcblxyXG4gIGdldCBpbmRleCgpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gdGFicy5maW5kSW5kZXgodGFiID0+IHRhYi5hY3RpdmUpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XHJcbiAgICBjb25zdCBhY3RpdmVzID0gdGhpcy50YWJzLmZpbHRlcih0ID0+IHQuYWN0aXZlKTtcclxuXHJcbiAgICBpZihhY3RpdmVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgTXVsdGlwbGUgYWN0aXZlIHRhYnMgc2V0ICdhY3RpdmUnYCk7XHJcbiAgICB9IGVsc2UgaWYoIWFjdGl2ZXMubGVuZ3RoICYmIHRhYnMubGVuZ3RoKSB7XHJcbiAgICAgIHRhYnNbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhYkNsaWNrZWQoYWN0aXZlVGFiKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuXHJcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICBhY3RpdmVUYWIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGFjdGl2ZVRhYik7XHJcbiAgfVxyXG5cclxuICBtb3ZlKG9mZnNldDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgb2Zmc2V0OyBpIDwgdGFicy5sZW5ndGggJiYgaSA+PSAwOyBpICs9IG9mZnNldCkge1xyXG4gICAgICBjb25zdCB0YWIgPSB0YWJzW2ldO1xyXG4gICAgICBpZiAodGFiICYmICF0YWIuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLnRhYkNsaWNrZWQodGFic1tpXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb3ZlKDEpO1xyXG4gIH1cclxuXHJcbiAgcHJldigpOiB2b2lkIHtcclxuICAgIHRoaXMubW92ZSgtMSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19