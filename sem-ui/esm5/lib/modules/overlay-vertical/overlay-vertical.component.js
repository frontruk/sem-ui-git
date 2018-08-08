/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
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
            .pipe(debounceTime(100), filter(function () { return _this.isOpened; }), filter(function (event) {
            _this.dialog.nativeElement.parentNode.style.top = '0';
            return _this.isClickedOutside(overlayOriginEl, _this.dialog, event);
        }), tap(function (data) {
            _this.changeState(false);
        }));
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
        if (changes["isOpened"].currentValue) {
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
     * @param {?} isOpened
     * @return {?}
     */
    OverlayVerticalComponent.prototype.changeState = /**
     * @param {?} isOpened
     * @return {?}
     */
    function (isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    OverlayVerticalComponent.prototype.isClickedOutside = /**
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
    /** @type {?} */
    OverlayVerticalComponent.prototype.changeDetectorRef;
    /** @type {?} */
    OverlayVerticalComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9vdmVybGF5LXZlcnRpY2FsL292ZXJsYXktdmVydGljYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQzFDLFNBQVMsRUFBRSxVQUFVLEVBQ3JCLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUFFLFNBQVMsRUFBaUIsU0FBUyxFQUM1QyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLHNCQUFzQixFQUN0QixPQUFPLEVBQ1IsTUFBTSxzQkFBc0IsQ0FBQztBQVE5QixPQUFPLEVBQWMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUcsTUFBTSxnQkFBZ0IsQ0FBQzs7SUE0QjFELGtDQUNTLFNBQ0MsbUJBQ0E7UUFGRCxZQUFPLEdBQVAsT0FBTztRQUNOLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsYUFBUSxHQUFSLFFBQVE7d0JBSUUsS0FBSztxQkFDUCxJQUFJLFlBQVksRUFBTztvQkFDeEIsSUFBSSxZQUFZLEVBQU87d0JBSzdCLElBQUksT0FBTyxFQUFPOzZCQVFiLEtBQUs7S0FsQmpCOzs7O0lBb0JKLDJDQUFROzs7SUFBUjtRQUFBLGlCQTZCQTtRQTNCRSxJQUFJLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFBO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUk7WUFDaEIsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFDbkMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FDckM7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztRQUM1RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7O1FBRXBFLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3hDLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU0sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsRUFDM0IsTUFBTSxDQUFDLFVBQUMsS0FBVTtZQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFFckQsTUFBTSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRSxDQUFDLEVBQ0YsR0FBRyxDQUFFLFVBQUMsSUFBSTtZQUNSLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUNILENBQUM7UUFDSixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7S0FFckI7Ozs7SUFDQSx5REFBc0I7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7Ozs7SUFDRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELDhDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxFQUFFLENBQUEsQ0FBQyxPQUFPLGFBQVUsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtLQUNGOzs7OztJQUNELDZDQUFVOzs7O0lBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ3REOzs7OztJQUNPLDhDQUFXOzs7O2NBQUMsUUFBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Ozs7Ozs7SUFFaEMsbURBQWdCOzs7Ozs7Y0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUs7UUFDckQsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7OztnQkFyR3pHLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSxzdEJBbUJYO2lCQUNBOzs7O2dCQXBDQyxPQUFPO2dCQVZrQixpQkFBaUI7Z0JBSWxDLFNBQVM7OztnQ0FrRGhCLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxNQUFNO3VCQUNOLE1BQU07eUJBRU4sU0FBUyxTQUFDLFFBQVE7O21DQTdEckI7O1NBaURhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxuICBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCxcbiAgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQ2RrT3ZlcmxheU9yaWdpbixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgT3ZlcmxheVxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50Jztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YXAgIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZW11aS1vdmVybGF5LXZlcnRpY2FsJyxcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGVcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlbmVkXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwicG9zaXRpb25zXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlTY3JvbGxTdHJhdGVneV09XCJzY3JvbGxTdHJhdGVneVwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGVpZ2h0XT1cIk92ZXJsYXlIZWlnaHRcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cIjMyMFwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwiMzAwXCJcbiAgKGRldGFjaCk9XCJjb25uZWN0ZWRPdmVybGF5RGV0YWNoKClcIlxuICAocG9zaXRpb25DaGFuZ2UpPVwicmVQb3NpdGlvbigkZXZlbnQpXCJcbj5cbiAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLWZ1bGxcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudExvYWRlZFwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3ZlcmxheS10aXRsZV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5VmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyAgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlc3tcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBASW5wdXQoKSBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBASW5wdXQoKSBpc09wZW5lZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY7XG5cblxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBvdmVybGF5T2Zmc2V0WDtcbiAgT3ZlcmxheUhlaWdodDtcbiAgc2Nyb2xsU3RyYXRlZ3k7XG4gIHBvc2l0aW9ucztcbiAgYmFja2Ryb3BDbGFzcztcblxuICBjb250ZW50TG9hZGVkID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmJhY2tkcm9wQ2xhc3MgPSAnY2RrT3ZlcmxheUZ1bGxIZWlnaHQnXG4gICAgdGhpcy5vdmVybGF5T2Zmc2V0WCA9IDA7XG4gICAgdGhpcy5PdmVybGF5SGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMucG9zaXRpb25zICA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7b3JpZ2luWTogJ2NlbnRlcicsIG9yaWdpblg6ICdlbmQnfSxcbiAgICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9XG4gICAgICApXG4gICAgXTtcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcbiAgICBjb25zdCBvdmVybGF5T3JpZ2luRWwgPSB0aGlzLm92ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgY29uc3QgY2xvc2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc09wZW5lZCksXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS50b3AgPSAnMCc7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgdGhpcy5kaWFsb2csIGV2ZW50KTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcCggKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgY2xvc2UkLnN1YnNjcmliZSgpO1xuXG4gfVxuICBjb25uZWN0ZWRPdmVybGF5RGV0YWNoKCkge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyl7XG4gICAgaWYoY2hhbmdlcy5pc09wZW5lZC5jdXJyZW50VmFsdWUpe1xuICAgICAgdGhpcy5jb250ZW50TG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmVQb3NpdGlvbihpdGVtKXtcbiAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xuICB9XG4gIHByaXZhdGUgY2hhbmdlU3RhdGUoaXNPcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzT3BlbmVkID0gaXNPcGVuZWQ7XG4gICAgaXNPcGVuZWQgPyB0aGlzLm9wZW4uZW1pdCgpIDogdGhpcy5jbG9zZS5lbWl0KCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIGlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCBkaWFsb2csIGV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEob3ZlcmxheU9yaWdpbkVsLmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkgfHwgZGlhbG9nLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSk7XG4gIH1cblxufVxuIl19