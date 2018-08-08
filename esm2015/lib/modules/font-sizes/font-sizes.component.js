/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, ChangeDetectionStrategy, TemplateRef, } from '@angular/core';
export class SemUiFontSizesComponent {
    constructor() {
        this.dataSource = null;
        this.selectedItem = {};
        this.openedParent = null;
        this.levels = [
            { num: 0, name: '1' },
            { num: 1, name: '2' }
        ];
        this.selectedLevel = this.levels[0];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log('changes are enabled');
        this.activeid = changes["activeid"].currentValue;
    }
}
SemUiFontSizesComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[semui-font-sizes]',
                template: `<div class="sem-ul-icon-list sem-ul">
  <ng-content></ng-content>
</div>



<ul class="bullet-inlinelist p4">
  <li class="active">
    <div class="select">
      <select type="number" [(ngModel)]="selectedLevel">
        <option *ngFor="let level of levels" [ngValue]="level">{{level.name}}</option>
      </select>
    </div>
  </li>
  <li>
    <div class="select">
      <select type="number" [(ngModel)]="selectedLevel">
        <option *ngFor="let level of levels" [ngValue]="level">{{level.name}}</option>
      </select>
    </div>
  </li>
  <li>
    <div class="select">
      <select type="number" [(ngModel)]="selectedLevel">
        <option *ngFor="let level of levels" [ngValue]="level">{{level.name}}</option>
      </select>
    </div>
  </li>
  <li>
    <div class="select">
      <select type="number" [(ngModel)]="selectedLevel">
        <option *ngFor="let level of levels" [ngValue]="level">{{level.name}}</option>
      </select>
    </div>
  </li>
</ul>
`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SemUiFontSizesComponent.ctorParameters = () => [];
SemUiFontSizesComponent.propDecorators = {
    activeid: [{ type: Input }],
    template: [{ type: ContentChild, args: [TemplateRef,] }],
    dataSource: [{ type: Input }],
    selectedItem: [{ type: Input }],
    openedParent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SemUiFontSizesComponent.prototype.activeid;
    /** @type {?} */
    SemUiFontSizesComponent.prototype.template;
    /** @type {?} */
    SemUiFontSizesComponent.prototype.dataSource;
    /** @type {?} */
    SemUiFontSizesComponent.prototype.selectedItem;
    /** @type {?} */
    SemUiFontSizesComponent.prototype.openedParent;
    /** @type {?} */
    SemUiFontSizesComponent.prototype.levels;
    /** @type {?} */
    SemUiFontSizesComponent.prototype.selectedLevel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZvbnQtc2l6ZXMvZm9udC1zaXplcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ00sS0FBSyxFQUFFLFlBQVksRUFFbEMsdUJBQXVCLEVBQ3ZCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQTRDdkIsTUFBTTtJQWdCSjswQkFUeUIsSUFBSTs0QkFHRixFQUFFOzRCQUdGLElBQUk7c0JBS1A7WUFDdEIsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUM7WUFDbkIsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUM7U0FDcEI7NkJBQ2UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FOYjs7Ozs7SUFPakIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sYUFBVSxZQUFZLENBQUM7S0FDL0M7OztZQXBFRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0NYO2dCQUNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7Ozt1QkFFRSxLQUFLO3VCQUVMLFlBQVksU0FBQyxXQUFXO3lCQUd4QixLQUFLOzJCQUdMLEtBQUs7MkJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIENvbnRlbnRDaGlsZCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tzZW11aS1mb250LXNpemVzXScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlbS11bC1pY29uLWxpc3Qgc2VtLXVsXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuXG5cblxuPHVsIGNsYXNzPVwiYnVsbGV0LWlubGluZWxpc3QgcDRcIj5cbiAgPGxpIGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L2xpPlxuPC91bD5cbmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlbVVpRm9udFNpemVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYWN0aXZlaWQ6IG51bWJlcjtcblxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKVxuICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRhdGFTb3VyY2U6IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgcHVibGljIG9wZW5lZFBhcmVudDogYW55ID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbGV2ZWxzOiBBcnJheTxPYmplY3Q+ID0gW1xuICAgIHtudW06IDAsIG5hbWU6ICcxJ30sXG4gICAge251bTogMSwgbmFtZTogJzInfVxuICBdO1xuICBzZWxlY3RlZExldmVsID0gdGhpcy5sZXZlbHNbMF07XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlcyBhcmUgZW5hYmxlZCcpXG4gICAgdGhpcy5hY3RpdmVpZCA9IGNoYW5nZXMuYWN0aXZlaWQuY3VycmVudFZhbHVlO1xuICB9XG5cbn1cbiJdfQ==