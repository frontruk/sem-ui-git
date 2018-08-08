/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9mb250LXNpemVzL3NlbS1mb250LXNpemVzLWl0ZW0vc2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFDdEMsdUJBQXVCLEVBQ3ZCLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBeUJsRSxNQUFNOzs7Ozs7SUFTSixZQUNVLFNBQ0EsVUFDQTtRQUZBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7UUFDUixXQUFNLEdBQU4sTUFBTTt1QkFYZSxFQUFFO3dCQUNMLENBQUMsQ0FBQzs2QkFDRyxDQUFDLENBQUM7OEJBR1IsSUFBSSxZQUFZLEVBQVU7c0JBQ2xDLElBQUksWUFBWSxFQUFFO0tBTWhDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0tBQzdCOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzNDO0tBQ0Y7Ozs7SUFDRCxJQUFJLFlBQVk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7S0FDakM7Ozs7O0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNwRDs7OztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztTQUVwQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7OztJQUk3QyxJQUFJLFVBQVU7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7S0FDL0I7Ozs7SUFDTyxjQUFjO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWDtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDWDtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztZQTlFYixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQlg7Z0JBQ0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUF6QmUsVUFBVTtZQUFFLFNBQVM7WUFDNUIsdUJBQXVCOzs7c0JBMEI3QixLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsTUFBTTtxQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbVVpRm9udFNpemVzQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9udC1zaXplcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tzZW11aS1mb250LXNpemVzLWl0ZW1dJyxcbiAgdGVtcGxhdGU6IGA8ZGl2XG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXG4gIGNsYXNzPVwic2VtLWxpXCJcbiAgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XG4gIDxuZy1jb250ZW50ICBzZWxlY3Q9XCJbbmF2bGlua11cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXZcbiAgKm5nSWY9XCJpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gXCJcbiAgY2xhc3M9XCJibG9ja1wiXG4gIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtUmVmID09PSBzZWxlY3RlZEl0ZW0gfVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLS1ib2R5XCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3NpemUtc2VsZWN0b3JdXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBpdGVtUmVmOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgcHJpdmF0ZSBpbmRleFJlZiA9IC0xO1xuICBASW5wdXQoKSBwcml2YXRlIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgQElucHV0KCkgcHVibGljIGdyb3VwSWQ6IG51bWJlcjtcbiAgQElucHV0KCkgcHVibGljIGFjdGl2ZWlkOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBhY3RpdmVpZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNlbVVpRm9udFNpemVzQ29tcG9uZW50LFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtSW5kZXgoKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkSXRlbUluZGV4KCkge1xuICAgIGNvbnNvbGUubG9nKCdtdXMgYmUgY2FsbCBoZXJlJyk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5pbmRleFJlZikge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLmdldEl0ZW1BdEluZGV4KCk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbTtcbiAgfVxuICBzZXQgc2VsZWN0ZWRJdGVtKHZhbHVlKSB7XG4gICAgdGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtID0gdmFsdWU7XG4gICAgY29uc29sZS5sb2coJ25ldyBvbmUnLCAgIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSk7XG4gIH1cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbVJlZjtcbiAgICBpZiAodGhpcy5pdGVtUmVmID09PSB0aGlzLnNlbGVjdGVkSXRlbSl7XG4gICAgICBjb25zb2xlLmxvZygndHJ1ZScpXG4gICAgICAvLyAgdGhpcy5zdHlsZUFzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW0pO1xuICAgIC8vIHRoaXMuYWN0aXZlaWRDaGFuZ2UuZW1pdCh0aGlzLmdyb3VwSWQpO1xuICB9XG5cbiAgZ2V0IHBhcmVudExpc3QoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZGF0YVNvdXJjZTtcbiAgfVxuICBwcml2YXRlIGdldEl0ZW1BdEluZGV4KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucGFyZW50TGlzdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gdGhpcy5wYXJlbnRMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRMaXN0W3RoaXMuc2VsZWN0ZWRJbmRleF07XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG59XG4iXX0=