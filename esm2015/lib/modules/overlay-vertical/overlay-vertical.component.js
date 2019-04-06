/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
export class OverlayVerticalComponent {
    /**
     * @param {?} overlay
     * @param {?} changeDetectorRef
     * @param {?} renderer
     */
    constructor(overlay, changeDetectorRef, renderer) {
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
    ngOnInit() {
        this.backdropClass = 'cdkOverlayFullHeight';
        this.overlayOffsetX = 0;
        this.OverlayHeight = '100%';
        this.positions = [
            new ConnectionPositionPair({ originY: 'center', originX: 'end' }, { overlayX: 'start', overlayY: 'top' })
        ];
        this.scrollStrategy = this.overlay.scrollStrategies.block();
        /** @type {?} */
        const overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        const close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter(() => this.isOpened), filter((event) => {
            this.dialog.nativeElement.parentNode.style.top = '0';
            return this.isClickedOutside(overlayOriginEl, this.dialog, event);
        }), tap((data) => {
            this.changeState(false);
        }));
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
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["isOpened"].currentValue) {
            this.contentLoaded = true;
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    rePosition(item) {
        this.dialog.nativeElement.parentNode.style.top = '0';
    }
    /**
     * @param {?} isOpened
     * @return {?}
     */
    changeState(isOpened) {
        this.isOpened = isOpened;
        isOpened ? this.open.emit() : this.close.emit();
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} overlayOriginEl
     * @param {?} dialog
     * @param {?} event
     * @return {?}
     */
    isClickedOutside(overlayOriginEl, dialog, event) {
        return !(overlayOriginEl.contains(event['target']) || dialog.nativeElement.contains(event['target']));
    }
}
OverlayVerticalComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'semui-overlay-vertical',
                template: `<ng-template
  cdkConnectedOverlay
  [cdkConnectedOverlayOrigin]="overlayOrigin"
  [cdkConnectedOverlayOpen]="isOpened"
  [cdkConnectedOverlayPositions]="positions"
  [cdkConnectedOverlayScrollStrategy]="scrollStrategy"
  [cdkConnectedOverlayHeight]="OverlayHeight"
  [cdkConnectedOverlayWidth]="320"
  [cdkConnectedOverlayMinWidth]="300"
  (detach)="connectedOverlayDetach()"
  (positionChange)="rePosition($event)"
>
  <div #dialog role="dialog" aria-label="Dialog" class="dialog-container-full">
    <ng-container *ngIf="contentLoaded">
        <ng-content select="[overlay-title]"></ng-content>
        <ng-content></ng-content>
    </ng-container>
  </div>
</ng-template>
`
            },] },
];
/** @nocollapse */
OverlayVerticalComponent.ctorParameters = () => [
    { type: Overlay },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
OverlayVerticalComponent.propDecorators = {
    overlayOrigin: [{ type: Input }],
    isOpened: [{ type: Input }],
    close: [{ type: Output }],
    open: [{ type: Output }],
    dialog: [{ type: ViewChild, args: ['dialog',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL292ZXJsYXktdmVydGljYWwvb3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUFFLFVBQVUsRUFDckIsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUixNQUFNLHNCQUFzQixDQUFDO0FBUTlCLE9BQU8sRUFBYyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRyxNQUFNLGdCQUFnQixDQUFDO0FBMkI1RCxNQUFNOzs7Ozs7SUFDSixZQUNTLFNBQ0MsbUJBQ0E7UUFGRCxZQUFPLEdBQVAsT0FBTztRQUNOLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsYUFBUSxHQUFSLFFBQVE7d0JBSUUsS0FBSztxQkFDUCxJQUFJLFlBQVksRUFBTztvQkFDeEIsSUFBSSxZQUFZLEVBQU87d0JBSzdCLElBQUksT0FBTyxFQUFPOzZCQVFiLEtBQUs7S0FsQmpCOzs7O0lBb0JKLFFBQVE7UUFFTixJQUFJLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFBO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUk7WUFDaEIsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFDbkMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FDckM7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztRQUM1RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7O1FBRXBFLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3hDLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzNCLE1BQU0sQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUVyRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRSxDQUFDLEVBQ0YsR0FBRyxDQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FDSCxDQUFDO1FBQ0osTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBRXJCOzs7O0lBQ0Esc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxPQUFPLGFBQVUsWUFBWSxFQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7O0lBQ0QsVUFBVSxDQUFDLElBQUk7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDdEQ7Ozs7O0lBQ08sV0FBVyxDQUFDLFFBQWlCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7Ozs7O0lBRWhDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSztRQUNyRCxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7WUFyR3pHLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1CWDthQUNBOzs7O1lBcENDLE9BQU87WUFWa0IsaUJBQWlCO1lBSWxDLFNBQVM7Ozs0QkFrRGhCLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxNQUFNO21CQUNOLE1BQU07cUJBRU4sU0FBUyxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LFxyXG4gIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxyXG4gIE92ZXJsYXlcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbi8vIGltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YXAgIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS12ZXJ0aWNhbCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGVcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlbmVkXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5U2Nyb2xsU3RyYXRlZ3ldPVwic2Nyb2xsU3RyYXRlZ3lcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGVpZ2h0XT1cIk92ZXJsYXlIZWlnaHRcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwiMzIwXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIjMwMFwiXHJcbiAgKGRldGFjaCk9XCJjb25uZWN0ZWRPdmVybGF5RGV0YWNoKClcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJyZVBvc2l0aW9uKCRldmVudClcIlxyXG4+XHJcbiAgPGRpdiAjZGlhbG9nIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsPVwiRGlhbG9nXCIgY2xhc3M9XCJkaWFsb2ctY29udGFpbmVyLWZ1bGxcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50TG9hZGVkXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW292ZXJsYXktdGl0bGVdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5VmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyAgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlc3tcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHt9XHJcblxyXG4gIEBJbnB1dCgpIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY7XHJcblxyXG5cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgb3ZlcmxheU9mZnNldFg7XHJcbiAgT3ZlcmxheUhlaWdodDtcclxuICBzY3JvbGxTdHJhdGVneTtcclxuICBwb3NpdGlvbnM7XHJcbiAgYmFja2Ryb3BDbGFzcztcclxuXHJcbiAgY29udGVudExvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xhc3MgPSAnY2RrT3ZlcmxheUZ1bGxIZWlnaHQnXHJcbiAgICB0aGlzLm92ZXJsYXlPZmZzZXRYID0gMDtcclxuICAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcclxuICAgIHRoaXMucG9zaXRpb25zICA9IFtcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXHJcbiAgICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9XHJcbiAgICAgIClcclxuICAgIF07XHJcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxuICAgIGNvbnN0IG92ZXJsYXlPcmlnaW5FbCA9IHRoaXMub3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgY2xvc2UkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5pc09wZW5lZCksXHJcbiAgICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCB0aGlzLmRpYWxvZywgZXZlbnQpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRhcCggKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICBjbG9zZSQuc3Vic2NyaWJlKCk7XHJcblxyXG4gfVxyXG4gIGNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKSB7XHJcbiAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xyXG4gICAgaWYoY2hhbmdlcy5pc09wZW5lZC5jdXJyZW50VmFsdWUpe1xyXG4gICAgICB0aGlzLmNvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZVBvc2l0aW9uKGl0ZW0pe1xyXG4gICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcclxuICB9XHJcbiAgcHJpdmF0ZSBjaGFuZ2VTdGF0ZShpc09wZW5lZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xyXG4gICAgaXNPcGVuZWQgPyB0aGlzLm9wZW4uZW1pdCgpIDogdGhpcy5jbG9zZS5lbWl0KCk7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuICBwcml2YXRlIGlzQ2xpY2tlZE91dHNpZGUob3ZlcmxheU9yaWdpbkVsLCBkaWFsb2csIGV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIShvdmVybGF5T3JpZ2luRWwuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSB8fCBkaWFsb2cubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudFsndGFyZ2V0J10pKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==