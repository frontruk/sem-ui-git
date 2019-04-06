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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtLWZvbnQtc2l6ZXMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZvbnQtc2l6ZXMvc2VtLWZvbnQtc2l6ZXMtaXRlbS9zZW0tZm9udC1zaXplcy1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUN0Qyx1QkFBdUIsRUFDdkIsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUF5QmxFLE1BQU07Ozs7OztJQVNKLFlBQ1UsU0FDQSxVQUNBO1FBRkEsWUFBTyxHQUFQLE9BQU87UUFDUCxhQUFRLEdBQVIsUUFBUTtRQUNSLFdBQU0sR0FBTixNQUFNO3VCQVhlLEVBQUU7d0JBQ0wsQ0FBQyxDQUFDOzZCQUNHLENBQUMsQ0FBQzs4QkFHUixJQUFJLFlBQVksRUFBVTtzQkFDbEMsSUFBSSxZQUFZLEVBQUU7S0FNaEM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7S0FDN0I7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzNDO0tBQ0Y7Ozs7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0tBQ2pDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDcEQ7Ozs7SUFDTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7O1NBRXBCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Ozs7O0lBSTdDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7S0FDL0I7Ozs7SUFDTyxjQUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRCxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7Ozs7WUE5RWIsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJYO2dCQUNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBekJlLFVBQVU7WUFBRSxTQUFTO1lBQzVCLHVCQUF1Qjs7O3NCQTBCN0IsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLE1BQU07cUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCB9IGZyb20gJy4uL2ZvbnQtc2l6ZXMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tzZW11aS1mb250LXNpemVzLWl0ZW1dJyxcclxuICB0ZW1wbGF0ZTogYDxkaXZcclxuICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIH1cIlxyXG4gIGNsYXNzPVwic2VtLWxpXCJcclxuICAoY2xpY2spPVwidG9nZ2xlKClcIj5cclxuICA8bmctY29udGVudCAgc2VsZWN0PVwiW25hdmxpbmtdXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPGRpdlxyXG4gICpuZ0lmPVwiaXRlbVJlZiA9PT0gc2VsZWN0ZWRJdGVtIFwiXHJcbiAgY2xhc3M9XCJibG9ja1wiXHJcbiAgW25nQ2xhc3NdPVwieyAnYWN0aXZlJyA6IGl0ZW1SZWYgPT09IHNlbGVjdGVkSXRlbSB9XCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLS1ib2R5XCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2l6ZS1zZWxlY3Rvcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbVVpRm9udFNpemVzSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIGl0ZW1SZWY6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgaW5kZXhSZWYgPSAtMTtcclxuICBASW5wdXQoKSBwcml2YXRlIHNlbGVjdGVkSW5kZXggPSAtMTtcclxuICBASW5wdXQoKSBwdWJsaWMgZ3JvdXBJZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBhY3RpdmVpZDogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBhY3RpdmVpZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNlbVVpRm9udFNpemVzQ29tcG9uZW50LFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW1JbmRleCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRJdGVtSW5kZXgoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbXVzIGJlIGNhbGwgaGVyZScpO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5pbmRleFJlZikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuZ2V0SXRlbUF0SW5kZXgoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IHNlbGVjdGVkSXRlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudC5zZWxlY3RlZEl0ZW07XHJcbiAgfVxyXG4gIHNldCBzZWxlY3RlZEl0ZW0odmFsdWUpIHtcclxuICAgIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coJ25ldyBvbmUnLCAgIHRoaXMucGFyZW50LnNlbGVjdGVkSXRlbSk7XHJcbiAgfVxyXG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbVJlZjtcclxuICAgIGlmICh0aGlzLml0ZW1SZWYgPT09IHRoaXMuc2VsZWN0ZWRJdGVtKXtcclxuICAgICAgY29uc29sZS5sb2coJ3RydWUnKVxyXG4gICAgICAvLyAgdGhpcy5zdHlsZUFzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5wYXJlbnQuc2VsZWN0ZWRJdGVtKTtcclxuICAgIC8vIHRoaXMuYWN0aXZlaWRDaGFuZ2UuZW1pdCh0aGlzLmdyb3VwSWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcmVudExpc3QoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudC5kYXRhU291cmNlO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEl0ZW1BdEluZGV4KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5wYXJlbnRMaXN0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiB0aGlzLnBhcmVudExpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gLTEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGFyZW50TGlzdFt0aGlzLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbn1cclxuIl19