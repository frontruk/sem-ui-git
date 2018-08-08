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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbS11aS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL292ZXJsYXktdmVydGljYWwvb3ZlcmxheS12ZXJ0aWNhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUFFLFVBQVUsRUFDckIsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQzVDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsc0JBQXNCLEVBQ3RCLE9BQU8sRUFDUixNQUFNLHNCQUFzQixDQUFDO0FBUTlCLE9BQU8sRUFBYyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRyxNQUFNLGdCQUFnQixDQUFDO0FBMkI1RCxNQUFNOzs7Ozs7SUFDSixZQUNTLFNBQ0MsbUJBQ0E7UUFGRCxZQUFPLEdBQVAsT0FBTztRQUNOLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsYUFBUSxHQUFSLFFBQVE7d0JBSUUsS0FBSztxQkFDUCxJQUFJLFlBQVksRUFBTztvQkFDeEIsSUFBSSxZQUFZLEVBQU87d0JBSzdCLElBQUksT0FBTyxFQUFPOzZCQVFiLEtBQUs7S0FsQmpCOzs7O0lBb0JKLFFBQVE7UUFFTixJQUFJLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFBO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUk7WUFDaEIsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsRUFDbkMsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FDckM7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztRQUM1RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7O1FBRXBFLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3hDLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzNCLE1BQU0sQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25FLENBQUMsRUFDRixHQUFHLENBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUNILENBQUM7UUFDSixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7S0FFckI7Ozs7SUFDQSxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qjs7OztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxFQUFFLENBQUEsQ0FBQyxPQUFPLGFBQVUsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtLQUNGOzs7OztJQUNELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ3REOzs7OztJQUNPLFdBQVcsQ0FBQyxRQUFpQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDOzs7Ozs7OztJQUVoQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUs7UUFDckQsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7WUFyR3pHLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1CWDthQUNBOzs7O1lBcENDLE9BQU87WUFWa0IsaUJBQWlCO1lBSWxDLFNBQVM7Ozs0QkFrRGhCLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxNQUFNO21CQUNOLE1BQU07cUJBRU4sU0FBUyxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsXG4gIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIENka092ZXJsYXlPcmlnaW4sXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIE92ZXJsYXlcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFwICB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VtdWktb3ZlcmxheS12ZXJ0aWNhbCcsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5lZFwiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cInBvc2l0aW9uc1wiXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5U2Nyb2xsU3RyYXRlZ3ldPVwic2Nyb2xsU3RyYXRlZ3lcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhlaWdodF09XCJPdmVybGF5SGVpZ2h0XCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCIzMjBcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIjMwMFwiXG4gIChkZXRhY2gpPVwiY29ubmVjdGVkT3ZlcmxheURldGFjaCgpXCJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cInJlUG9zaXRpb24oJGV2ZW50KVwiXG4+XG4gIDxkaXYgI2RpYWxvZyByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbD1cIkRpYWxvZ1wiIGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lci1mdWxsXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRMb2FkZWRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW292ZXJsYXktdGl0bGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVZlcnRpY2FsQ29tcG9uZW50IGltcGxlbWVudHMgIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXN7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgQElucHV0KCkgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQElucHV0KCkgaXNPcGVuZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nJykgZGlhbG9nOiBFbGVtZW50UmVmO1xuXG5cbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgb3ZlcmxheU9mZnNldFg7XG4gIE92ZXJsYXlIZWlnaHQ7XG4gIHNjcm9sbFN0cmF0ZWd5O1xuICBwb3NpdGlvbnM7XG4gIGJhY2tkcm9wQ2xhc3M7XG5cbiAgY29udGVudExvYWRlZCA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5iYWNrZHJvcENsYXNzID0gJ2Nka092ZXJsYXlGdWxsSGVpZ2h0J1xuICAgIHRoaXMub3ZlcmxheU9mZnNldFggPSAwO1xuICAgIHRoaXMuT3ZlcmxheUhlaWdodCA9ICcxMDAlJztcbiAgICB0aGlzLnBvc2l0aW9ucyAgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgICAge29yaWdpblk6ICdjZW50ZXInLCBvcmlnaW5YOiAnZW5kJ30sXG4gICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfVxuICAgICAgKVxuICAgIF07XG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gICAgY29uc3Qgb3ZlcmxheU9yaWdpbkVsID0gdGhpcy5vdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaXNPcGVuZWQpLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUudG9wID0gJzAnO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIHRoaXMuZGlhbG9nLCBldmVudCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YXAoIChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGNsb3NlJC5zdWJzY3JpYmUoKTtcblxuIH1cbiAgY29ubmVjdGVkT3ZlcmxheURldGFjaCgpIHtcbiAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xuICAgIGlmKGNoYW5nZXMuaXNPcGVuZWQuY3VycmVudFZhbHVlKXtcbiAgICAgIHRoaXMuY29udGVudExvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJlUG9zaXRpb24oaXRlbSl7XG4gICAgdGhpcy5kaWFsb2cubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLnRvcCA9ICcwJztcbiAgfVxuICBwcml2YXRlIGNoYW5nZVN0YXRlKGlzT3BlbmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW5lZCA9IGlzT3BlbmVkO1xuICAgIGlzT3BlbmVkID8gdGhpcy5vcGVuLmVtaXQoKSA6IHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgcHJpdmF0ZSBpc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgZGlhbG9nLCBldmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKG92ZXJsYXlPcmlnaW5FbC5jb250YWlucyhldmVudFsndGFyZ2V0J10pIHx8IGRpYWxvZy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkpO1xuICB9XG5cbn1cbiJdfQ==