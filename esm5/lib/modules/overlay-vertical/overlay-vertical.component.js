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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL292ZXJsYXktdmVydGljYWwvb3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUFFLFVBQVUsRUFDckIsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUixNQUFNLHNCQUFzQixDQUFDO0FBUTlCLE9BQU8sRUFBYyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRyxNQUFNLGdCQUFnQixDQUFDOztJQTRCMUQsa0NBQ1MsU0FDQyxtQkFDQTtRQUZELFlBQU8sR0FBUCxPQUFPO1FBQ04sc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixhQUFRLEdBQVIsUUFBUTt3QkFJRSxLQUFLO3FCQUNQLElBQUksWUFBWSxFQUFPO29CQUN4QixJQUFJLFlBQVksRUFBTzt3QkFLN0IsSUFBSSxPQUFPLEVBQU87NkJBUWIsS0FBSztLQWxCakI7Ozs7SUFvQkosMkNBQVE7OztJQUFSO1FBQUEsaUJBNkJBO1FBM0JFLElBQUksQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUE7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBSTtZQUNoQixJQUFJLHNCQUFzQixDQUN4QixFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxFQUNuQyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUNyQztTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1FBQzVELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzs7UUFFcEUsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDeEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFiLENBQWEsQ0FBQyxFQUMzQixNQUFNLENBQUMsVUFBQyxLQUFVO1lBQ2hCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUVyRCxNQUFNLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25FLENBQUMsRUFDRixHQUFHLENBQUUsVUFBQyxJQUFJO1lBQ1IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQ0gsQ0FBQztRQUNKLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUVyQjs7OztJQUNBLHlEQUFzQjs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qjs7OztJQUNELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sYUFBVSxZQUFZLENBQUMsQ0FBQSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7O0lBQ0QsNkNBQVU7Ozs7SUFBVixVQUFXLElBQUk7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDdEQ7Ozs7O0lBQ08sOENBQVc7Ozs7Y0FBQyxRQUFpQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDOzs7Ozs7OztJQUVoQyxtREFBZ0I7Ozs7OztjQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSztRQUNyRCxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O2dCQXJHekcsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztvQkFFL0MsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLHN0QkFtQlg7aUJBQ0E7Ozs7Z0JBcENDLE9BQU87Z0JBVmtCLGlCQUFpQjtnQkFJbEMsU0FBUzs7O2dDQWtEaEIsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLE1BQU07dUJBQ04sTUFBTTt5QkFFTixTQUFTLFNBQUMsUUFBUTs7bUNBN0RyQjs7U0FpRGEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LFxuICBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDZGtPdmVybGF5T3JpZ2luLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBPdmVybGF5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5Jztcbi8vIGltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRhcCAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbXVpLW92ZXJsYXktdmVydGljYWwnLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZVxuICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm92ZXJsYXlPcmlnaW5cIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiaXNPcGVuZWRcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVNjcm9sbFN0cmF0ZWd5XT1cInNjcm9sbFN0cmF0ZWd5XCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIZWlnaHRdPVwiT3ZlcmxheUhlaWdodFwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwiMzIwXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCIzMDBcIlxuICAoZGV0YWNoKT1cImNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKVwiXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJyZVBvc2l0aW9uKCRldmVudClcIlxuPlxuICA8ZGl2ICNkaWFsb2cgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWw9XCJEaWFsb2dcIiBjbGFzcz1cImRpYWxvZy1jb250YWluZXItZnVsbFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50TG9hZGVkXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdmVybGF5LXRpdGxlXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlWZXJ0aWNhbENvbXBvbmVudCBpbXBsZW1lbnRzICBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2Vze1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIEBJbnB1dCgpIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIEBJbnB1dCgpIGlzT3BlbmVkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjtcblxuXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIG92ZXJsYXlPZmZzZXRYO1xuICBPdmVybGF5SGVpZ2h0O1xuICBzY3JvbGxTdHJhdGVneTtcbiAgcG9zaXRpb25zO1xuICBiYWNrZHJvcENsYXNzO1xuXG4gIGNvbnRlbnRMb2FkZWQgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMuYmFja2Ryb3BDbGFzcyA9ICdjZGtPdmVybGF5RnVsbEhlaWdodCdcbiAgICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcbiAgICB0aGlzLk92ZXJsYXlIZWlnaHQgPSAnMTAwJSc7XG4gICAgdGhpcy5wb3NpdGlvbnMgID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICAgIHtvcmlnaW5ZOiAnY2VudGVyJywgb3JpZ2luWDogJ2VuZCd9LFxuICAgICAgICB7b3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJ31cbiAgICAgIClcbiAgICBdO1xuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmlzT3BlbmVkKSxcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcblxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKCAoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICBjbG9zZSQuc3Vic2NyaWJlKCk7XG5cbiB9XG4gIGNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKSB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcbiAgICBpZihjaGFuZ2VzLmlzT3BlbmVkLmN1cnJlbnRWYWx1ZSl7XG4gICAgICB0aGlzLmNvbnRlbnRMb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZVBvc2l0aW9uKGl0ZW0pe1xuICAgIHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS50b3AgPSAnMCc7XG4gIH1cbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShpc09wZW5lZDogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuZWQgPSBpc09wZW5lZDtcbiAgICBpc09wZW5lZCA/IHRoaXMub3Blbi5lbWl0KCkgOiB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIGRpYWxvZywgZXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIShvdmVybGF5T3JpZ2luRWwuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSB8fCBkaWFsb2cubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudFsndGFyZ2V0J10pKTtcbiAgfVxuXG59XG4iXX0=