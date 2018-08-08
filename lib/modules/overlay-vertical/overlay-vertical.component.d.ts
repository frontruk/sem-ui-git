import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
export declare class OverlayVerticalComponent implements OnDestroy, OnInit, OnChanges {
    overlay: Overlay;
    private changeDetectorRef;
    private renderer;
    constructor(overlay: Overlay, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2);
    overlayOrigin: CdkOverlayOrigin;
    isOpened: boolean;
    close: EventEmitter<any>;
    open: EventEmitter<any>;
    dialog: ElementRef;
    destroy$: Subject<any>;
    overlayOffsetX: any;
    OverlayHeight: any;
    scrollStrategy: any;
    positions: any;
    backdropClass: any;
    contentLoaded: boolean;
    ngOnInit(): void;
    connectedOverlayDetach(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    rePosition(item: any): void;
    private changeState(isOpened);
    private isClickedOutside(overlayOriginEl, dialog, event);
}
