/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
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
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const overlayOriginEl = this.overlayOrigin.elementRef.nativeElement;
        /** @type {?} */
        const close$ = fromEvent(document, 'click')
            .pipe(debounceTime(100), filter(() => this.isOpened), filter(event => {
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
    /** @type {?} */
    OverlayDialogComponent.prototype.changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZyb250ci9zZW0tdWkvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9vdmVybGF5LWRpYWxvZy9vdmVybGF5LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUFFLFVBQVUsRUFDckIsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQWlCLFNBQVMsRUFDakMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixPQUFPLEVBQ1IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQWMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUcsTUFBTSxnQkFBZ0IsQ0FBQztBQXdCNUQsTUFBTTs7Ozs7SUFDSixZQUNTLFNBQ0M7UUFERCxZQUFPLEdBQVAsT0FBTztRQUNOLHNCQUFpQixHQUFqQixpQkFBaUI7d0JBSVAsS0FBSztxQkFFUCxJQUFJLFlBQVksRUFBTztvQkFDeEIsSUFBSSxZQUFZLEVBQU87d0JBRzdCLElBQUksT0FBTyxFQUFPO0tBVHpCOzs7O0lBaUJKLFFBQVE7O1FBY04sTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDOztRQUlwRSxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN4QyxJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFYixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNsRSxDQUFDLEVBQ0YsR0FBRyxDQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FDSCxDQUFBO1FBQ0gsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBQ0Qsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFTyxXQUFXLENBQUMsUUFBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7Ozs7Ozs7SUFFaEMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLO1FBQ3JELE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztZQW5GekcsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztDQVlYO2FBQ0E7Ozs7WUExQkMsT0FBTztZQVRrQixpQkFBaUI7Ozs0QkEwQ3pDLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO29CQUNMLE1BQU07bUJBQ04sTUFBTTtxQkFFTixTQUFTLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LFxyXG4gIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgT3ZlcmxheVxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YXAgIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG4vLyBpbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycyc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ3NlbXVpLW92ZXJsYXktZGlhbG9nJyxcclxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGVcclxuICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm92ZXJsYXlPcmlnaW5cIlxyXG4gICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlbmVkXCJcclxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwib3ZlcmxheVdpZHRoXCJcclxuICAgIChkZXRhY2gpPVwiY29ubmVjdGVkT3ZlcmxheURldGFjaCgpXCJcclxuICA+XHJcbiAgICA8ZGl2ICNkaWFsb2cgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWw9XCJEaWFsb2dcIiBjbGFzcz1cImRpYWxvZy1jb250YWluZXJcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW292ZXJsYXktdGl0bGVdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgIE9uRGVzdHJveSwgT25Jbml0ICB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBASW5wdXQoKSBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIEBJbnB1dCgpIGlzT3BlbmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgb3ZlcmxheVdpZHRoOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZGlhbG9nJykgZGlhbG9nOiBFbGVtZW50UmVmO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIC8vXHJcbiAgLy8gb3ZlcmxheU9mZnNldFg7XHJcbiAgLy8gT3ZlcmxheUhlaWdodDtcclxuICAvLyBzY3JvbGxTdHJhdGVneTtcclxuICAvLyBwb3NpdGlvbnM7XHJcbiAgLy8gYmFja2Ryb3BDbGFzcztcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgLy8gICB0aGlzLmJhY2tkcm9wQ2xhc3MgPSAnY2RrT3ZlcmxheUZ1bGxIZWlnaHQnXHJcbiAgICAvLyAgIHRoaXMub3ZlcmxheU9mZnNldFggPSAwO1xyXG4gICAgLy8gICB0aGlzLk92ZXJsYXlIZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAvLyAgIHRoaXMucG9zaXRpb25zICA9IFtcclxuICAgIC8vICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgIC8vICAgICAgIHtvcmlnaW5ZOiAnY2VudGVyJywgb3JpZ2luWDogJ2VuZCd9LFxyXG4gICAgLy8gICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9XHJcbiAgICAvLyAgICAgKVxyXG4gICAgLy8gICBdO1xyXG4gICAgLy8gICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheU9yaWdpbkVsID0gdGhpcy5vdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGNsb3NlJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXHJcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaXNPcGVuZWQpLFxyXG4gICAgICAgIGZpbHRlcihldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDbGlja2VkT3V0c2lkZShvdmVybGF5T3JpZ2luRWwsIHRoaXMuZGlhbG9nLCBldmVudClcclxuICAgICAgICB9KSxcclxuICAgICAgICB0YXAoIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICBjbG9zZSQuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG4gIGNvbm5lY3RlZE92ZXJsYXlEZXRhY2goKSB7XHJcbiAgICB0aGlzLmNoYW5nZVN0YXRlKGZhbHNlKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlU3RhdGUoaXNPcGVuZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNPcGVuZWQgPSBpc09wZW5lZDtcclxuICAgIGlzT3BlbmVkID8gdGhpcy5vcGVuLmVtaXQoKSA6IHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBpc0NsaWNrZWRPdXRzaWRlKG92ZXJsYXlPcmlnaW5FbCwgZGlhbG9nLCBldmVudCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEob3ZlcmxheU9yaWdpbkVsLmNvbnRhaW5zKGV2ZW50Wyd0YXJnZXQnXSkgfHwgZGlhbG9nLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnRbJ3RhcmdldCddKSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==