import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { CdkOverlayOrigin, Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
export declare class OverlayDialogComponent implements OnDestroy, OnInit {
    overlay: Overlay;
    private changeDetectorRef;
    constructor(overlay: Overlay, changeDetectorRef: ChangeDetectorRef);
    overlayOrigin: CdkOverlayOrigin;
    isOpened: boolean;
    overlayWidth: string;
    close: EventEmitter<any>;
    open: EventEmitter<any>;
    dialog: ElementRef;
    destroy$: Subject<any>;
    ngOnInit(): void;
    connectedOverlayDetach(): void;
    ngOnDestroy(): void;
    private changeState(isOpened);
    private isClickedOutside(overlayOriginEl, dialog, event);
}
