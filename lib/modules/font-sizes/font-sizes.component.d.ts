import { SimpleChanges, OnChanges, TemplateRef } from '@angular/core';
export declare class SemUiFontSizesComponent implements OnChanges {
    activeid: number;
    template: TemplateRef<any>;
    dataSource: any;
    selectedItem: any;
    openedParent: any;
    constructor();
    levels: Array<Object>;
    selectedLevel: Object;
    ngOnChanges(changes: SimpleChanges): void;
}
