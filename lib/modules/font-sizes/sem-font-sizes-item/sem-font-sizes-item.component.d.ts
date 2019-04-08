import { OnInit, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { SemUiFontSizesComponent } from '../font-sizes.component';
export declare class SemUiFontSizesItemComponent implements OnInit {
    private element;
    private renderer;
    private parent;
    itemRef: any;
    private indexRef;
    private selectedIndex;
    groupId: number;
    activeid: number;
    activeidChange: EventEmitter<number>;
    change: EventEmitter<{}>;
    constructor(element: ElementRef, renderer: Renderer2, parent: SemUiFontSizesComponent);
    ngOnInit(): void;
    setSelectedItemIndex(): void;
    selectedItem: any;
    toggle(): void;
    readonly parentList: any;
    private getItemAtIndex;
}
