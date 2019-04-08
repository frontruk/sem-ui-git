/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ContentChildren, QueryList, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TabComponent } from '../tab.component';
export class TabsComponent {
    constructor() {
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get index() {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        return tabs.findIndex((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.active));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        /** @type {?} */
        const actives = this.tabs.filter((/**
         * @param {?} t
         * @return {?}
         */
        t => t.active));
        if (actives.length > 1) {
            console.error(`Multiple active tabs set 'active'`);
        }
        else if (!actives.length && tabs.length) {
            tabs[0].active = true;
        }
    }
    /**
     * @param {?} activeTab
     * @return {?}
     */
    tabClicked(activeTab) {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        tab => tab.active = false));
        activeTab.active = true;
        this.select.emit(activeTab);
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    move(offset) {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        for (let i = this.index + offset; i < tabs.length && i >= 0; i += offset) {
            /** @type {?} */
            const tab = tabs[i];
            if (tab && !tab.disabled) {
                this.tabClicked(tabs[i]);
                return;
            }
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.move(1);
    }
    /**
     * @return {?}
     */
    prev() {
        this.move(-1);
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'div[semui-tabs]',
                template: `<section
  [class.tabs-vertical]="vertical"
  [class.tabs-horizontal]="!vertical"
  [class.swipe]="swipe"
>

  <ng-container *ngIf="showTabs && vertical">
    <ng-content select="[tabs-header]"></ng-content>

    <ul
      class="semui-tabs--navlist_horizontal"
      [class.tabs-vertical]="vertical">
      <li
        *ngFor="let tab of tabs"
        class="semui-tab"
        [class.disabled]="tab.disabled"
        [class.active]="tab.active">
        <button
          class="tabs--button"
          (click)="tabClicked(tab)"
          [disabled]="tab.disabled">
          {{tab.title}}
        </button>
      </li>
    </ul>

  </ng-container>

  <ul

    *ngIf="!vertical && showTabs"
    semui-list
    class="semui-tabs-list list-reset"
    [class.tabs-horizontal]="!vertical">
    <li
      *ngFor="let tab of tabs"
      semui-list-item
      list-item
      sem-importance="tertiary"
      class="corner_top "
      [class.disabled]="tab.disabled"
      [class.active]="tab.active">
      <button
        (click)="tabClicked(tab)"
        [disabled]="tab.disabled">
        {{tab.title}}
      </button>
    </li>
  </ul>

  <div class="tab-nav">
    <ng-content select="[tab-nav]"></ng-content>
  </div>
  <div class="semui-tab-content">
    <ng-content></ng-content>
  </div>
</section>
`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUNsRSxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBb0VoRCxNQUFNLE9BQU8sYUFBYTtJQWxFMUI7UUFzRVksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFpRHhDLENBQUM7Ozs7SUE3Q0MsSUFBSSxLQUFLOztjQUNELElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNoQyxPQUFPLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELGtCQUFrQjs7Y0FDVixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7O2NBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUM7UUFFL0MsSUFBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDcEQ7YUFBTSxJQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsU0FBUzs7Y0FDWixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFFaEMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUFDLENBQUM7UUFDeEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsTUFBYzs7Y0FDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUU7O2tCQUNsRSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU87YUFDUjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7O1lBcEhGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5RFg7Z0JBQ0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxZQUFZO2lCQUNwQjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O3VCQUVFLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLE1BQU07bUJBRU4sZUFBZSxTQUFDLFlBQVk7Ozs7SUFMN0IsaUNBQTJCOztJQUMzQixpQ0FBMkI7O0lBQzNCLDhCQUF3Qjs7SUFDeEIsK0JBQXNDOztJQUV0Qyw2QkFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEV2ZW50RW1pdHRlcixcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJDb250ZW50SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktdGFic10nLFxyXG4gIHRlbXBsYXRlOiBgPHNlY3Rpb25cclxuICBbY2xhc3MudGFicy12ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiXHJcbiAgW2NsYXNzLnRhYnMtaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIlxyXG4gIFtjbGFzcy5zd2lwZV09XCJzd2lwZVwiXHJcbj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dUYWJzICYmIHZlcnRpY2FsXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFicy1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgIDx1bFxyXG4gICAgICBjbGFzcz1cInNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbFwiXHJcbiAgICAgIFtjbGFzcy50YWJzLXZlcnRpY2FsXT1cInZlcnRpY2FsXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiXHJcbiAgICAgICAgY2xhc3M9XCJzZW11aS10YWJcIlxyXG4gICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzPVwidGFicy0tYnV0dG9uXCJcclxuICAgICAgICAgIChjbGljayk9XCJ0YWJDbGlja2VkKHRhYilcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3t0YWIudGl0bGV9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuXHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDx1bFxyXG5cclxuICAgICpuZ0lmPVwiIXZlcnRpY2FsICYmIHNob3dUYWJzXCJcclxuICAgIHNlbXVpLWxpc3RcclxuICAgIGNsYXNzPVwic2VtdWktdGFicy1saXN0IGxpc3QtcmVzZXRcIlxyXG4gICAgW2NsYXNzLnRhYnMtaG9yaXpvbnRhbF09XCIhdmVydGljYWxcIj5cclxuICAgIDxsaVxyXG4gICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxyXG4gICAgICBzZW11aS1saXN0LWl0ZW1cclxuICAgICAgbGlzdC1pdGVtXHJcbiAgICAgIHNlbS1pbXBvcnRhbmNlPVwidGVydGlhcnlcIlxyXG4gICAgICBjbGFzcz1cImNvcm5lcl90b3AgXCJcclxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgKGNsaWNrKT1cInRhYkNsaWNrZWQodGFiKVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxyXG4gICAgICAgIHt7dGFiLnRpdGxlfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ0YWItbmF2XCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFiLW5hdl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNlbXVpLXRhYi1jb250ZW50XCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ3NlbXVpLXRhYnMnXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQElucHV0KCkgc2hvd1RhYnM6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdmVydGljYWw6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc3dpcGU6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIHRhYnM6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xyXG5cclxuICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB0YWIuYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgY29uc3QgYWN0aXZlcyA9IHRoaXMudGFicy5maWx0ZXIodCA9PiB0LmFjdGl2ZSk7XHJcblxyXG4gICAgaWYoYWN0aXZlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE11bHRpcGxlIGFjdGl2ZSB0YWJzIHNldCAnYWN0aXZlJ2ApO1xyXG4gICAgfSBlbHNlIGlmKCFhY3RpdmVzLmxlbmd0aCAmJiB0YWJzLmxlbmd0aCkge1xyXG4gICAgICB0YWJzWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0YWJDbGlja2VkKGFjdGl2ZVRhYik6IHZvaWQge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XHJcblxyXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgYWN0aXZlVGFiLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zZWxlY3QuZW1pdChhY3RpdmVUYWIpO1xyXG4gIH1cclxuXHJcbiAgbW92ZShvZmZzZXQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleCArIG9mZnNldDsgaSA8IHRhYnMubGVuZ3RoICYmIGkgPj0gMDsgaSArPSBvZmZzZXQpIHtcclxuICAgICAgY29uc3QgdGFiID0gdGFic1tpXTtcclxuICAgICAgaWYgKHRhYiAmJiAhdGFiLmRpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy50YWJDbGlja2VkKHRhYnNbaV0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpOiB2b2lkIHtcclxuICAgIHRoaXMubW92ZSgxKTtcclxuICB9XHJcblxyXG4gIHByZXYoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vdmUoLTEpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==