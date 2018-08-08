/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return tabs.findIndex(tab => tab.active);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        /** @type {?} */
        const actives = this.tabs.filter(t => t.active);
        if (actives.length > 1) {
            console.error(`Multiple active tabs set 'active'`);
        }
        else if (!actives.length && tabs.length) {
            tabs[0].active = true;
            console.log('tabs[0].active', tabs[0].active);
        }
    }
    /**
     * @param {?} activeTab
     * @return {?}
     */
    tabClicked(activeTab) {
        /** @type {?} */
        const tabs = this.tabs.toArray();
        tabs.forEach(tab => tab.active = false);
        activeTab.active = true;
        console.log('activeTab.active', activeTab, activeTab.active);
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
        console.log('clicked');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy90YWJzL3RhYnMvdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFDbEUsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQW9FaEQsTUFBTTs7c0JBSWUsSUFBSSxZQUFZLEVBQUU7Ozs7O0lBSXJDLElBQUksS0FBSzs7UUFDUCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFDOzs7O0lBRUQsa0JBQWtCOztRQUNoQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQztLQUNGOzs7OztJQUVELFVBQVUsQ0FBQyxTQUFTOztRQUNsQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUU1RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCxJQUFJLENBQUMsTUFBYzs7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQzs7WUFDekUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUM7YUFDUjtTQUNGO0tBQ0Y7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2Q7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2Y7OztZQXhIRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeURYO2dCQUNDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsWUFBWTtpQkFDcEI7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxNQUFNO21CQUVOLGVBQWUsU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJDb250ZW50SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYnNdJyxcbiAgdGVtcGxhdGU6IGA8c2VjdGlvblxuICBbY2xhc3MudGFicy12ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiXG4gIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCJcbiAgW2NsYXNzLnN3aXBlXT1cInN3aXBlXCJcbj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1RhYnMgJiYgdmVydGljYWxcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFicy1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuXG4gICAgPHVsXG4gICAgICBjbGFzcz1cInNlbXVpLXRhYnMtLW5hdmxpc3RfaG9yaXpvbnRhbFwiXG4gICAgICBbY2xhc3MudGFicy12ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiPlxuICAgICAgPGxpXG4gICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiXG4gICAgICAgIGNsYXNzPVwic2VtdWktdGFiXCJcbiAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZVwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJ0YWJzLS1idXR0b25cIlxuICAgICAgICAgIChjbGljayk9XCJ0YWJDbGlja2VkKHRhYilcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cbiAgICAgICAgICB7e3RhYi50aXRsZX19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx1bFxuXG4gICAgKm5nSWY9XCIhdmVydGljYWwgJiYgc2hvd1RhYnNcIlxuICAgIHNlbXVpLWxpc3RcbiAgICBjbGFzcz1cInNlbXVpLXRhYnMtbGlzdCBsaXN0LXJlc2V0XCJcbiAgICBbY2xhc3MudGFicy1ob3Jpem9udGFsXT1cIiF2ZXJ0aWNhbFwiPlxuICAgIDxsaVxuICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcbiAgICAgIHNlbXVpLWxpc3QtaXRlbVxuICAgICAgbGlzdC1pdGVtXG4gICAgICBzZW0taW1wb3J0YW5jZT1cInRlcnRpYXJ5XCJcbiAgICAgIGNsYXNzPVwiY29ybmVyX3RvcCBcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKGNsaWNrKT1cInRhYkNsaWNrZWQodGFiKVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cbiAgICAgICAge3t0YWIudGl0bGV9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgPC91bD5cblxuICA8ZGl2IGNsYXNzPVwidGFiLW5hdlwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0YWItbmF2XVwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzZW11aS10YWItY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5gLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdzZW11aS10YWJzJ1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgc2hvd1RhYnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHZlcnRpY2FsOiBib29sZWFuO1xuICBASW5wdXQoKSBzd2lwZTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbXBvbmVudCkgdGFiczogUXVlcnlMaXN0PFRhYkNvbXBvbmVudD47XG5cbiAgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB0YWIuYWN0aXZlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICBjb25zdCBhY3RpdmVzID0gdGhpcy50YWJzLmZpbHRlcih0ID0+IHQuYWN0aXZlKTtcblxuICAgIGlmKGFjdGl2ZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXVsdGlwbGUgYWN0aXZlIHRhYnMgc2V0ICdhY3RpdmUnYCk7XG4gICAgfSBlbHNlIGlmKCFhY3RpdmVzLmxlbmd0aCAmJiB0YWJzLmxlbmd0aCkge1xuICAgICAgdGFic1swXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coJ3RhYnNbMF0uYWN0aXZlJywgdGFic1swXS5hY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIHRhYkNsaWNrZWQoYWN0aXZlVGFiKTogdm9pZCB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG5cbiAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5hY3RpdmUgPSBmYWxzZSk7XG4gICAgYWN0aXZlVGFiLmFjdGl2ZSA9IHRydWU7XG5cbiAgICBjb25zb2xlLmxvZygnYWN0aXZlVGFiLmFjdGl2ZScsIGFjdGl2ZVRhYiwgYWN0aXZlVGFiLmFjdGl2ZSlcblxuICAgIHRoaXMuc2VsZWN0LmVtaXQoYWN0aXZlVGFiKTtcbiAgfVxuXG4gIG1vdmUob2Zmc2V0OiBudW1iZXIpIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleCArIG9mZnNldDsgaSA8IHRhYnMubGVuZ3RoICYmIGkgPj0gMDsgaSArPSBvZmZzZXQpIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNbaV07XG4gICAgICBpZiAodGFiICYmICF0YWIuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy50YWJDbGlja2VkKHRhYnNbaV0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICAgdGhpcy5tb3ZlKDEpO1xuICB9XG5cbiAgcHJldigpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmUoLTEpO1xuICB9XG5cblxufVxuIl19