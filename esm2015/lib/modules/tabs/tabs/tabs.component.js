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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3RhYnMvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUNsRSxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBb0VoRCxNQUFNOztzQkFJZSxJQUFJLFlBQVksRUFBRTs7Ozs7SUFJckMsSUFBSSxLQUFLOztRQUNQLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFDOzs7O0lBRUQsa0JBQWtCOztRQUNoQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUNwRDthQUFNLElBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdkI7S0FDRjs7Ozs7SUFFRCxVQUFVLENBQUMsU0FBUzs7UUFDbEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN4QyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCxJQUFJLENBQUMsTUFBYzs7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRTs7WUFDeEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsT0FBTzthQUNSO1NBQ0Y7S0FDRjs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2Q7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2Y7OztZQXBIRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeURYO2dCQUNDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsWUFBWTtpQkFDcEI7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxNQUFNO21CQUVOLGVBQWUsU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBFdmVudEVtaXR0ZXIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyQ29udGVudEluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL3RhYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnZGl2W3NlbXVpLXRhYnNdJyxcclxuICB0ZW1wbGF0ZTogYDxzZWN0aW9uXHJcbiAgW2NsYXNzLnRhYnMtdmVydGljYWxdPVwidmVydGljYWxcIlxyXG4gIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCJcclxuICBbY2xhc3Muc3dpcGVdPVwic3dpcGVcIlxyXG4+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VGFicyAmJiB2ZXJ0aWNhbFwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYnMtaGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICA8dWxcclxuICAgICAgY2xhc3M9XCJzZW11aS10YWJzLS1uYXZsaXN0X2hvcml6b250YWxcIlxyXG4gICAgICBbY2xhc3MudGFicy12ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICA8bGlcclxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNcIlxyXG4gICAgICAgIGNsYXNzPVwic2VtdWktdGFiXCJcclxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cInRhYnMtLWJ1dHRvblwiXHJcbiAgICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2tlZCh0YWIpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cclxuICAgICAgICAgIHt7dGFiLnRpdGxlfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8dWxcclxuXHJcbiAgICAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiBzaG93VGFic1wiXHJcbiAgICBzZW11aS1saXN0XHJcbiAgICBjbGFzcz1cInNlbXVpLXRhYnMtbGlzdCBsaXN0LXJlc2V0XCJcclxuICAgIFtjbGFzcy50YWJzLWhvcml6b250YWxdPVwiIXZlcnRpY2FsXCI+XHJcbiAgICA8bGlcclxuICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzXCJcclxuICAgICAgc2VtdWktbGlzdC1pdGVtXHJcbiAgICAgIGxpc3QtaXRlbVxyXG4gICAgICBzZW0taW1wb3J0YW5jZT1cInRlcnRpYXJ5XCJcclxuICAgICAgY2xhc3M9XCJjb3JuZXJfdG9wIFwiXHJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmVcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIChjbGljayk9XCJ0YWJDbGlja2VkKHRhYilcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIj5cclxuICAgICAgICB7e3RhYi50aXRsZX19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwidGFiLW5hdlwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RhYi1uYXZdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzZW11aS10YWItY29udGVudFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbmAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdzZW11aS10YWJzJ1xyXG4gIH0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBJbnB1dCgpIHNob3dUYWJzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHZlcnRpY2FsOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSB0YWJzOiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcclxuXHJcbiAgZ2V0IGluZGV4KCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4gdGFiLmFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IGFjdGl2ZXMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdC5hY3RpdmUpO1xyXG5cclxuICAgIGlmKGFjdGl2ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBNdWx0aXBsZSBhY3RpdmUgdGFicyBzZXQgJ2FjdGl2ZSdgKTtcclxuICAgIH0gZWxzZSBpZighYWN0aXZlcy5sZW5ndGggJiYgdGFicy5sZW5ndGgpIHtcclxuICAgICAgdGFic1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFiQ2xpY2tlZChhY3RpdmVUYWIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG5cclxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgIGFjdGl2ZVRhYi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0LmVtaXQoYWN0aXZlVGFiKTtcclxuICB9XHJcblxyXG4gIG1vdmUob2Zmc2V0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7IGkgPCB0YWJzLmxlbmd0aCAmJiBpID49IDA7IGkgKz0gb2Zmc2V0KSB7XHJcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNbaV07XHJcbiAgICAgIGlmICh0YWIgJiYgIXRhYi5kaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMudGFiQ2xpY2tlZCh0YWJzW2ldKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vdmUoMSk7XHJcbiAgfVxyXG5cclxuICBwcmV2KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb3ZlKC0xKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=