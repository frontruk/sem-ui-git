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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9mb250LXNpemVzL2ZvbnQtc2l6ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNNLEtBQUssRUFBRSxZQUFZLEVBRWxDLHVCQUF1QixFQUN2QixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUE0Q3ZCLE1BQU07SUFnQko7MEJBVHlCLElBQUk7NEJBR0YsRUFBRTs0QkFHRixJQUFJO3NCQUtQO1lBQ3RCLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDO1lBQ25CLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDO1NBQ3BCOzZCQUNlLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBTmI7Ozs7O0lBT2pCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLGFBQVUsWUFBWSxDQUFDO0tBQy9DOzs7WUFwRUYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9DWDtnQkFDQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7Ozs7dUJBRUUsS0FBSzt1QkFFTCxZQUFZLFNBQUMsV0FBVzt5QkFHeEIsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFNpbXBsZUNoYW5nZXMsIElucHV0LCBDb250ZW50Q2hpbGQsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbc2VtdWktZm9udC1zaXplc10nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZW0tdWwtaWNvbi1saXN0IHNlbS11bFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cblxuXG5cbjx1bCBjbGFzcz1cImJ1bGxldC1pbmxpbmVsaXN0IHA0XCI+XG4gIDxsaSBjbGFzcz1cImFjdGl2ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbjwvdWw+XG5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaUZvbnRTaXplc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGFjdGl2ZWlkOiBudW1iZXI7XG5cbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZilcbiAgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkYXRhU291cmNlOiBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW06IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvcGVuZWRQYXJlbnQ6IGFueSA9IG51bGw7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxldmVsczogQXJyYXk8T2JqZWN0PiA9IFtcbiAgICB7bnVtOiAwLCBuYW1lOiAnMSd9LFxuICAgIHtudW06IDEsIG5hbWU6ICcyJ31cbiAgXTtcbiAgc2VsZWN0ZWRMZXZlbCA9IHRoaXMubGV2ZWxzWzBdO1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NoYW5nZXMgYXJlIGVuYWJsZWQnKVxuICAgIHRoaXMuYWN0aXZlaWQgPSBjaGFuZ2VzLmFjdGl2ZWlkLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG59XG4iXX0=