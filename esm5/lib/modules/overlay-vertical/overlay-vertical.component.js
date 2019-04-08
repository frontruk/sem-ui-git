/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
// import { Observable, Subject } from 'rxjs';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/do';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
var OverlayVerticalComponent = /** @class */ (function () {
    function OverlayVerticalComponent(overlay, changeDetectorRef, renderer) {
        this.overlay = overlay;
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.isOpened = false;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.destroy$ = new Subject();
        this.contentLoaded = false;
    }
    /**
     * @return {?}
     */
    OverlayVerticalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.backdropClass = 'cdkOverlayFullHeight';
        this.overlayOffsetX = 0;
        this.OverlayHeight = '100%';
        this.positions = [
            new ConnectionPositionPair({ originY: 'center', originX: 'end' }, { overlayX: 'start', overlayY: 'top' })
        ];
        this.scrollStrategy = this.overlay.scrollStrategies.block();
        /** @type {?} */
        var overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        var close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter((/**
         * @return {?}
         */
        function () { return _this.isOpened; })), filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.dialog.nativeElement.parentNode.style.top = '0';
            return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
        })), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.changeState(false);
        })));
        close$.subscribe();
    };
    /**
     * @return {?}
     */
    OverlayVerticalComponent.prototype.connectedOverlayDetach = /**
     * @return {?}
     */
    function () {
        this.changeState(false);
    };
    /**
     * @return {?}
     */
    OverlayVerticalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    OverlayVerticalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.isOpened.currentValue) {
            this.contentLoaded = true;
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    OverlayVerticalComponent.prototype.rePosition = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.dialog.nativeElement.parentNode.style.top = '0';
    };
    /**
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    OverlayVerticalComponent.prototype.changeState = /**
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    function (isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @private
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    OverlayVerticalComponent.prototype.isClickedOutside = /**
     * @private
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    function (overlayOriginEl, dialog, event) {
        return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
    };
    OverlayVerticalComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'semui-overlay-vertical',
                    template: "<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"isOpened\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayScrollStrategy]=\"scrollStrategy\"\n  [cdkConnectedOverlayHeight]=\"OverlayHeight\"\n  [cdkConnectedOverlayWidth]=\"320\"\n  [cdkConnectedOverlayMinWidth]=\"300\"\n  (detach)=\"connectedOverlayDetach()\"\n  (positionChange)=\"rePosition($event)\"\n>\n  <div #dialog role=\"dialog\" aria-label=\"Dialog\" class=\"dialog-container-full\">\n    <ng-container *ngIf=\"contentLoaded\">\n        <ng-content select=\"[overlay-title]\"></ng-content>\n        <ng-content></ng-content>\n    </ng-container>\n  </div>\n</ng-template>\n"
                },] },
    ];
    /** @nocollapse */
    OverlayVerticalComponent.ctorParameters = function () { return [
        { type: Overlay },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    OverlayVerticalComponent.propDecorators = {
        overlayOrigin: [{ type: Input }],
        isOpened: [{ type: Input }],
        close: [{ type: Output }],
        open: [{ type: Output }],
        dialog: [{ type: ViewChild, args: ['dialog',] }]
    };
    return OverlayVerticalComponent;
}());
export { OverlayVerticalComponent };
if (false) {
    /** @type {?} */
    OverlayVerticalComponent.prototype.overlayOrigin;
    /** @type {?} */
    OverlayVerticalComponent.prototype.isOpened;
    /** @type {?} */
    OverlayVerticalComponent.prototype.close;
    /** @type {?} */
    OverlayVerticalComponent.prototype.open;
    /** @type {?} */
    OverlayVerticalComponent.prototype.dialog;
    /** @type {?} */
    OverlayVerticalComponent.prototype.destroy$;
    /** @type {?} */
    OverlayVerticalComponent.prototype.overlayOffsetX;
    /** @type {?} */
    OverlayVerticalComponent.prototype.OverlayHeight;
    /** @type {?} */
    OverlayVerticalComponent.prototype.scrollStrategy;
    /** @type {?} */
    OverlayVerticalComponent.prototype.positions;
    /** @type {?} */
    OverlayVerticalComponent.prototype.backdropClass;
    /** @type {?} */
    OverlayVerticalComponent.prototype.contentLoaded;
    /** @type {?} */
    OverlayVerticalComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    OverlayVerticalComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    OverlayVerticalComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL292ZXJsYXktdmVydGljYWwvb3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUFFLFVBQVUsRUFDckIsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0FBUTlCLE9BQU8sRUFBYyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRyxNQUFNLGdCQUFnQixDQUFDO0FBRTVEO0lBMEJFLGtDQUNTLE9BQWdCLEVBQ2YsaUJBQW9DLEVBQ3BDLFFBQW1CO1FBRnBCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFJcEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNoQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUt6QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQVE5QixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQWxCbkIsQ0FBQzs7OztJQW9CSiwyQ0FBUTs7O0lBQVI7UUFBQSxpQkE2QkE7UUEzQkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQTtRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFJO1lBQ2hCLElBQUksc0JBQXNCLENBQ3hCLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEVBQ25DLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQ3JDO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFDdEQsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWE7O1lBRTdELE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN4QyxJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBYixDQUFhLEVBQUMsRUFDM0IsTUFBTTs7OztRQUFDLFVBQUMsS0FBVTtZQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFFckQsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFFLFVBQUMsSUFBSTtZQUNSLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQ0g7UUFDSCxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFdEIsQ0FBQzs7OztJQUNBLHlEQUFzQjs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDhDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7SUFDRCw2Q0FBVTs7OztJQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFDTyw4Q0FBVzs7Ozs7SUFBbkIsVUFBb0IsUUFBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7OztJQUNPLG1EQUFnQjs7Ozs7OztJQUF4QixVQUF5QixlQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUs7UUFDckQsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7O2dCQXRHRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsc3RCQW1CWDtpQkFDQTs7OztnQkFwQ0MsT0FBTztnQkFWa0IsaUJBQWlCO2dCQUlsQyxTQUFTOzs7Z0NBa0RoQixLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsTUFBTTt1QkFDTixNQUFNO3lCQUVOLFNBQVMsU0FBQyxRQUFROztJQW1FckIsK0JBQUM7Q0FBQSxBQXhHRCxJQXdHQztTQS9FWSx3QkFBd0I7OztJQU9uQyxpREFBeUM7O0lBQ3pDLDRDQUEwQjs7SUFDMUIseUNBQTBDOztJQUMxQyx3Q0FBeUM7O0lBRXpDLDBDQUF3Qzs7SUFHeEMsNENBQThCOztJQUU5QixrREFBZTs7SUFDZixpREFBYzs7SUFDZCxrREFBZTs7SUFDZiw2Q0FBVTs7SUFDVixpREFBYzs7SUFFZCxpREFBc0I7O0lBckJwQiwyQ0FBdUI7Ozs7O0lBQ3ZCLHFEQUE0Qzs7Ozs7SUFDNUMsNENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcclxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcclxuICBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBPdmVybGF5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NlbXVpLW92ZXJsYXktdmVydGljYWwnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm92ZXJsYXlPcmlnaW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5lZFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwicG9zaXRpb25zXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVNjcm9sbFN0cmF0ZWd5XT1cInNjcm9sbFN0cmF0ZWd5XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhlaWdodF09XCJPdmVybGF5SGVpZ2h0XCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cIjMyMFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCIzMDBcIlxyXG4gIChkZXRhY2gpPVwiY29ubmVjdGVkT3ZlcmxheURldGFjaCgpXCJcclxuICAocG9zaXRpb25DaGFuZ2UpPVwicmVQb3NpdGlvbigkZXZlbnQpXCJcclxuPlxyXG4gIDxkaXYgI2RpYWxvZyByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbD1cIkRpYWxvZ1wiIGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci1mdWxsXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudExvYWRlZFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LXRpdGxlXVwiPjwvbmctY29udGVudD5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50IGltcGxlbWVudHMgIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXN7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7fVxyXG5cclxuICBASW5wdXQoKSBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIEBJbnB1dCgpIGlzT3BlbmVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZGlhbG9nJykgZGlhbG9nOiBFbGVtZW50UmVmO1xyXG5cclxuXHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gIG92ZXJsYXlPZmZzZXRYO1xyXG4gIE92ZXJsYXlIZWlnaHQ7XHJcbiAgc2Nyb2xsU3RyYXRlZ3k7XHJcbiAgcG9zaXRpb25zO1xyXG4gIGJhY2tkcm9wQ2xhc3M7XHJcblxyXG4gIGNvbnRlbnRMb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xyXG4gICAgdGhpcy5vdmVybGF5T2Zmc2V0WCA9IDA7XHJcbiAgICB0aGlzLk92ZXJsYXlIZWlnaHQgPSAnMTAwJSc7XHJcbiAgICB0aGlzLnBvc2l0aW9ucyAgPSBbXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICAgIHtvcmlnaW5ZOiAnY2VudGVyJywgb3JpZ2luWDogJ2VuZCd9LFxyXG4gICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxyXG4gICAgICApXHJcbiAgICBdO1xyXG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XHJcbiAgICBjb25zdCBvdmVybGF5T3JpZ2luRWwgPSB0aGlzLm92ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXHJcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaXNPcGVuZWQpLFxyXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcclxuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgdGhpcy5kaWFsb2csIGV2ZW50KTtcclxuICAgICAgICB9KSxcclxuICAgICAgICB0YXAoIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgY2xvc2UkLnN1YnNjcmliZSgpO1xyXG5cclxuIH1cclxuICBjb25uZWN0ZWRPdmVybGF5RGV0YWNoKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcclxuICAgIGlmKGNoYW5nZXMuaXNPcGVuZWQuY3VycmVudFZhbHVlKXtcclxuICAgICAgdGhpcy5jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVQb3NpdGlvbihpdGVtKXtcclxuICAgIHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgfVxyXG4gIHByaXZhdGUgY2hhbmdlU3RhdGUoaXNPcGVuZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNPcGVuZWQgPSBpc09wZW5lZDtcclxuICAgIGlzT3BlbmVkID8gdGhpcy5vcGVuLmVtaXQoKSA6IHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBpc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgZGlhbG9nLCBldmVudCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEob3ZlcmxheU9yaWdpbkVsLmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkgfHwgZGlhbG9nLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=