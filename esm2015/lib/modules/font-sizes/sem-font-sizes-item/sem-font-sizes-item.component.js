/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { SemUiFontSizesComponent } from '../font-sizes.component';
export class SemUiFontSizesItemComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} parent
     */
    constructor(element, renderer, parent) {
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
    ngOnInit() {
        this.setSelectedItemIndex();
    }
    /**
     * @return {?}
     */
    setSelectedItemIndex() {
        console.log('mus be call here');
        if (this.selectedIndex === this.indexRef) {
            this.selectedItem = this.getItemAtIndex();
        }
    }
    /**
     * @return {?}
     */
    get selectedItem() {
        return this.parent.selectedItem;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedItem(value) {
        this.parent.selectedItem = value;
        console.log('new one', this.parent.selectedItem);
    }
    /**
     * @return {?}
     */
    toggle() {
        this.selectedItem = this.itemRef;
        if (this.itemRef === this.selectedItem) {
            console.log('true');
            //  this.styleAsActive = true;
        }
        this.change.emit(this.parent.selectedItem);
        // this.activeidChange.emit(this.groupId);
    }
    /**
     * @return {?}
     */
    get parentList() {
        return this.parent.dataSource;
    }
    /**
     * @private
     * @return {?}
     */
    getItemAtIndex() {
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
    }
}
SemUiFontSizesItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[semui-font-sizes-item]',
                template: `<div
  [ngClass]="{ 'active' : itemRef === selectedItem }"
  class="sem-li"
  (click)="toggle()">
  <ng-content  select="[navlink]"></ng-content>
</div>
<div
  *ngIf="itemRef === selectedItem "
  class="block"
  [ngClass]="{ 'active' : itemRef === selectedItem }"
>
  <div class="dialog-container--body">
    <ng-content select="[size-selector]"></ng-content>
  </div>
</div>


`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SemUiFontSizesItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SemUiFontSizesComponent }
];
SemUiFontSizesItemComponent.propDecorators = {
    itemRef: [{ type: Input }],
    indexRef: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    groupId: [{ type: Input }],
    activeid: [{ type: Input }],
    activeidChange: [{ type: Output }],
    change: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZvbnQtc2l6ZXMvc2VtLWZvbnQtc2l6ZXMtaXRlbS9zZW0tZm9udC1zaXplcy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUN0Qyx1QkFBdUIsRUFDdkIsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUF5QmxFLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQVN0QyxZQUNVLE9BQW1CLEVBQ25CLFFBQW1CLEVBQ25CLE1BQStCO1FBRi9CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQVh6QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNkLGtCQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFHMUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzVDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTWxDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQiw4QkFBOEI7U0FDL0I7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLDBDQUEwQztJQUM1QyxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUNPLGNBQWM7UUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDWDtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7OztZQS9FRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQlg7Z0JBQ0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUF6QmUsVUFBVTtZQUFFLFNBQVM7WUFDNUIsdUJBQXVCOzs7c0JBMEI3QixLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsTUFBTTtxQkFDTixNQUFNOzs7O0lBTlAsOENBQWtDOzs7OztJQUNsQywrQ0FBK0I7Ozs7O0lBQy9CLG9EQUFvQzs7SUFDcEMsOENBQWdDOztJQUNoQywrQ0FBaUM7O0lBQ2pDLHFEQUFzRDs7SUFDdEQsNkNBQXNDOzs7OztJQUdwQyw4Q0FBMkI7Ozs7O0lBQzNCLCtDQUEyQjs7Ozs7SUFDM0IsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9udC1zaXplcy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnW3NlbXVpLWZvbnQtc2l6ZXMtaXRlbV0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdlxyXG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXHJcbiAgY2xhc3M9XCJzZW0tbGlcIlxyXG4gIChjbGljayk9XCJ0b2dnbGUoKVwiPlxyXG4gIDxuZy1jb250ZW50ICBzZWxlY3Q9XCJbbmF2bGlua11cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2XHJcbiAgKm5nSWY9XCJpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gXCJcclxuICBjbGFzcz1cImJsb2NrXCJcclxuICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIH1cIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1jb250YWluZXItLWJvZHlcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzaXplLXNlbGVjdG9yXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaXRlbVJlZjogYW55ID0ge307XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBpbmRleFJlZiA9IC0xO1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBncm91cElkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcHVibGljIGFjdGl2ZWlkOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIGFjdGl2ZWlkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBhcmVudDogU2VtVWlGb250U2l6ZXNDb21wb25lbnQsXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldFNlbGVjdGVkSXRlbUluZGV4KCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZEl0ZW1JbmRleCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdtdXMgYmUgY2FsbCBoZXJlJyk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0aGlzLmluZGV4UmVmKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5nZXRJdGVtQXRJbmRleCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgc2VsZWN0ZWRJdGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbTtcclxuICB9XHJcbiAgc2V0IHNlbGVjdGVkSXRlbSh2YWx1ZSkge1xyXG4gICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtID0gdmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZygnbmV3IG9uZScsICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtKTtcclxuICB9XHJcbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtUmVmO1xyXG4gICAgaWYgKHRoaXMuaXRlbVJlZiA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0pe1xyXG4gICAgICBjb25zb2xlLmxvZygndHJ1ZScpXHJcbiAgICAgIC8vICB0aGlzLnN0eWxlQXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgLy8gdGhpcy5hY3RpdmVpZENoYW5nZS5lbWl0KHRoaXMuZ3JvdXBJZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFyZW50TGlzdCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmRhdGFTb3VyY2U7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SXRlbUF0SW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLnBhcmVudExpc3QgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IHRoaXMucGFyZW50TGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiAtMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRMaXN0W3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=