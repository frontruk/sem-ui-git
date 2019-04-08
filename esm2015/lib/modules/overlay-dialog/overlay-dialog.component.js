/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
// import { debounceTime } from 'rxjs/internal/operators';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/do';
export class OverlayDialogComponent {
    /**
     * @param {?} overlay
     * @param {?} changeDetectorRef
     */
    constructor(overlay, changeDetectorRef) {
        this.overlay = overlay;
        this.changeDetectorRef = changeDetectorRef;
        this.isOpened = false;
        this.close = new EventEmitter();
        this.open = new EventEmitter();
        this.destroy$ = new Subject();
    }
    //
    // overlayOffsetX;
    // OverlayHeight;
    // scrollStrategy;
    // positions;
    // backdropClass;
    /**
     * @return {?}
     */
    ngOnInit() {
        //   this.backdropClass = 'cdkOverlayFullHeight'
        //   this.overlayOffsetX = 0;
        //   this.OverlayHeight = '100%';
        //   this.positions  = [
        //     new ConnectionPositionPair(
        //       {originY: 'center', originX: 'end'},
        //       {overlayX: 'start', overlayY: 'top'}
        //     )
        //   ];
        //   this.scrollStrategy = this.overlay.scrollStrategies.block();
        //   this.backdropClass = 'cdkOverlayFullHeight'
        //   this.overlayOffsetX = 0;
        //   this.OverlayHeight = '100%';
        //   this.positions  = [
        //     new ConnectionPositionPair(
        //       {originY: 'center', originX: 'end'},
        //       {overlayX: 'start', overlayY: 'top'}
        //     )
        //   ];
        //   this.scrollStrategy = this.overlay.scrollStrategies.block();
        /** @type {?} */
        const overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        const close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter((/**
         * @return {?}
         */
        () => this.isOpened)), filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            return this.isClickedOutside(overlayOriginEl, this.dialog, event);
        })), tap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.changeState(false);
        })));
        close$.subscribe();
    }
    /**
     * @return {?}
     */
    connectedOverlayDetach() {
        this.changeState(false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
    }
    /**
     * @private
     * @param {?} isOpened
     * @return {?}
     */
    changeState(isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    isClickedOutside(overlayOriginEl, dialog, event) {
        return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
    }
}
OverlayDialogComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'semui-overlay-dialog',
                template: ` <ng-template
    cdkConnectedOverlay
    [cdkConnectedOverlayOrigin]="overlayOrigin"
    [cdkConnectedOverlayOpen]="isOpened"
    [cdkConnectedOverlayMinWidth]="overlayWidth"
    (detach)="connectedOverlayDetach()"
  >
    <div #dialog role="dialog" aria-label="Dialog" class="dialog-container">
      <ng-content select="[overlay-title]"></ng-content>
      <ng-content></ng-content>
    </div>
  </ng-template>
`
            },] },
];
/** @nocollapse */
OverlayDialogComponent.ctorParameters = () => [
    { type: Overlay },
    { type: ChangeDetectorRef }
];
OverlayDialogComponent.propDecorators = {
    overlayOrigin: [{ type: Input }],
    isOpened: [{ type: Input }],
    overlayWidth: [{ type: Input }],
    close: [{ type: Output }],
    open: [{ type: Output }],
    dialog: [{ type: ViewChild, args: ['dialog',] }]
};
if (false) {
    /** @type {?} */
    OverlayDialogComponent.prototype.overlayOrigin;
    /** @type {?} */
    OverlayDialogComponent.prototype.isOpened;
    /** @type {?} */
    OverlayDialogComponent.prototype.overlayWidth;
    /** @type {?} */
    OverlayDialogComponent.prototype.close;
    /** @type {?} */
    OverlayDialogComponent.prototype.open;
    /** @type {?} */
    OverlayDialogComponent.prototype.dialog;
    /** @type {?} */
    OverlayDialogComponent.prototype.destroy$;
    /** @type {?} */
    OverlayDialogComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    OverlayDialogComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUFFLFVBQVUsRUFDckIsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQWlCLFNBQVMsRUFDakMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixPQUFPLEVBQ1IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQWMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUcsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBd0I1RCxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUNqQyxZQUNTLE9BQWdCLEVBQ2YsaUJBQW9DO1FBRHJDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSXJDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDaEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHekMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFUM0IsQ0FBQzs7Ozs7Ozs7OztJQWlCSixRQUFRO1FBRU4sZ0RBQWdEO1FBQ2hELDZCQUE2QjtRQUM3QixpQ0FBaUM7UUFDakMsd0JBQXdCO1FBQ3hCLGtDQUFrQztRQUNsQyw2Q0FBNkM7UUFDN0MsNkNBQTZDO1FBQzdDLFFBQVE7UUFDUixPQUFPO1FBQ1AsaUVBQWlFOzs7Ozs7Ozs7Ozs7Y0FHM0QsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWE7O2NBSTdELE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN4QyxJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLEVBQzNCLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUViLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ25FLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FDSDtRQUNILE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0Qsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxRQUFpQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7O0lBQ08sZ0JBQWdCLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLO1FBQ3JELE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztDQVlYO2FBQ0E7Ozs7WUExQkMsT0FBTztZQVRrQixpQkFBaUI7Ozs0QkEwQ3pDLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO29CQUNMLE1BQU07bUJBQ04sTUFBTTtxQkFFTixTQUFTLFNBQUMsUUFBUTs7OztJQU5uQiwrQ0FBeUM7O0lBQ3pDLDBDQUEwQjs7SUFDMUIsOENBQThCOztJQUM5Qix1Q0FBMEM7O0lBQzFDLHNDQUF5Qzs7SUFFekMsd0NBQXdDOztJQUN4QywwQ0FBOEI7O0lBWDVCLHlDQUF1Qjs7Ozs7SUFDdkIsbURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsXHJcbiAgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBPdmVybGF5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRhcCAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbi8vIGltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZVxyXG4gICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXHJcbiAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiaXNPcGVuZWRcIlxyXG4gICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCJvdmVybGF5V2lkdGhcIlxyXG4gICAgKGRldGFjaCk9XCJjb25uZWN0ZWRPdmVybGF5RGV0YWNoKClcIlxyXG4gID5cclxuICAgIDxkaXYgI2RpYWxvZyByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbD1cIkRpYWxvZ1wiIGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3ZlcmxheS10aXRsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyAgT25EZXN0cm95LCBPbkluaXQgIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIEBJbnB1dCgpIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBvdmVybGF5V2lkdGg6IHN0cmluZztcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY7XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgLy9cclxuICAvLyBvdmVybGF5T2Zmc2V0WDtcclxuICAvLyBPdmVybGF5SGVpZ2h0O1xyXG4gIC8vIHNjcm9sbFN0cmF0ZWd5O1xyXG4gIC8vIHBvc2l0aW9ucztcclxuICAvLyBiYWNrZHJvcENsYXNzO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyAgIHRoaXMuYmFja2Ryb3BDbGFzcyA9ICdjZGtPdmVybGF5RnVsbEhlaWdodCdcclxuICAgIC8vICAgdGhpcy5vdmVybGF5T2Zmc2V0WCA9IDA7XHJcbiAgICAvLyAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcclxuICAgIC8vICAgdGhpcy5wb3NpdGlvbnMgID0gW1xyXG4gICAgLy8gICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgLy8gICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXHJcbiAgICAvLyAgICAgICB7b3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJ31cclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgIF07XHJcbiAgICAvLyAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xyXG5cclxuXHJcbiAgICBjb25zdCBvdmVybGF5T3JpZ2luRWwgPSB0aGlzLm92ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgY2xvc2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc09wZW5lZCksXHJcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgdGhpcy5kaWFsb2csIGV2ZW50KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRhcCggKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgIGNsb3NlJC5zdWJzY3JpYmUoKTtcclxuICB9XHJcbiAgY29ubmVjdGVkT3ZlcmxheURldGFjaCgpIHtcclxuICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShpc09wZW5lZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xyXG4gICAgaXNPcGVuZWQgPyB0aGlzLm9wZW4uZW1pdCgpIDogdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBwcml2YXRlIGlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCBkaWFsb2csIGV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIShvdmVybGF5T3JpZ2luRWwuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSB8fCBkaWFsb2cubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudFsndGFyZ2V0J10pKTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19