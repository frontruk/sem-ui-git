/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, ChangeDetectionStrategy, TemplateRef, } from '@angular/core';
var SemUiFontSizesComponent = /** @class */ (function () {
    function SemUiFontSizesComponent() {
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
    SemUiFontSizesComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        console.log('changes are enabled');
        this.activeid = changes["activeid"].currentValue;
    };
    SemUiFontSizesComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[semui-font-sizes]',
                    template: "<div class=\"sem-ul-icon-list sem-ul\">\n  <ng-content></ng-content>\n</div>\n\n\n\n<ul class=\"bullet-inlinelist p4\">\n  <li class=\"active\">\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n  <li>\n    <div class=\"select\">\n      <select type=\"number\" [(ngModel)]=\"selectedLevel\">\n        <option *ngFor=\"let level of levels\" [ngValue]=\"level\">{{level.name}}</option>\n      </select>\n    </div>\n  </li>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SemUiFontSizesComponent.ctorParameters = function () { return []; };
    SemUiFontSizesComponent.propDecorators = {
        activeid: [{ type: Input }],
        template: [{ type: ContentChild, args: [TemplateRef,] }],
        dataSource: [{ type: Input }],
        selectedItem: [{ type: Input }],
        openedParent: [{ type: Input }]
    };
    return SemUiFontSizesComponent;
}());
export { SemUiFontSizesComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2ZvbnQtc2l6ZXMvZm9udC1zaXplcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ00sS0FBSyxFQUFFLFlBQVksRUFFbEMsdUJBQXVCLEVBQ3ZCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQzs7SUE0RHJCOzBCQVR5QixJQUFJOzRCQUdGLEVBQUU7NEJBR0YsSUFBSTtzQkFLUDtZQUN0QixFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQztZQUNuQixFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQztTQUNwQjs2QkFDZSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQU5iOzs7OztJQU9qQiw2Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxhQUFVLFlBQVksQ0FBQztLQUMvQzs7Z0JBcEVGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLG1pQ0FvQ1g7b0JBQ0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7OzsyQkFFRSxLQUFLOzJCQUVMLFlBQVksU0FBQyxXQUFXOzZCQUd4QixLQUFLOytCQUdMLEtBQUs7K0JBR0wsS0FBSzs7a0NBOURSOztTQWtEYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBTaW1wbGVDaGFuZ2VzLCBJbnB1dCwgQ29udGVudENoaWxkLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBUZW1wbGF0ZVJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tzZW11aS1mb250LXNpemVzXScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VtLXVsLWljb24tbGlzdCBzZW0tdWxcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48dWwgY2xhc3M9XCJidWxsZXQtaW5saW5lbGlzdCBwNFwiPlxyXG4gIDxsaSBjbGFzcz1cImFjdGl2ZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxyXG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9saT5cclxuICA8bGk+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgIDxzZWxlY3QgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRMZXZlbFwiPlxyXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIGxldmVsc1wiIFtuZ1ZhbHVlXT1cImxldmVsXCI+e3tsZXZlbC5uYW1lfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4gIDxsaT5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cclxuICAgICAgPHNlbGVjdCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZExldmVsXCI+XHJcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgbGV2ZWxzXCIgW25nVmFsdWVdPVwibGV2ZWxcIj57e2xldmVsLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbiAgPGxpPlxyXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxyXG4gICAgICA8c2VsZWN0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkTGV2ZWxcIj5cclxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBsZXZlbCBvZiBsZXZlbHNcIiBbbmdWYWx1ZV09XCJsZXZlbFwiPnt7bGV2ZWwubmFtZX19PC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9saT5cclxuPC91bD5cclxuYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VtVWlGb250U2l6ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGFjdGl2ZWlkOiBudW1iZXI7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpXHJcbiAgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkYXRhU291cmNlOiBhbnkgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW06IGFueSA9IHt9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBvcGVuZWRQYXJlbnQ6IGFueSA9IG51bGw7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBsZXZlbHM6IEFycmF5PE9iamVjdD4gPSBbXHJcbiAgICB7bnVtOiAwLCBuYW1lOiAnMSd9LFxyXG4gICAge251bTogMSwgbmFtZTogJzInfVxyXG4gIF07XHJcbiAgc2VsZWN0ZWRMZXZlbCA9IHRoaXMubGV2ZWxzWzBdO1xyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGFyZSBlbmFibGVkJylcclxuICAgIHRoaXMuYWN0aXZlaWQgPSBjaGFuZ2VzLmFjdGl2ZWlkLmN1cnJlbnRWYWx1ZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==