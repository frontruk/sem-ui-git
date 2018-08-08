import { OnInit } from '@angular/core';
export declare type InputType = 'form-input' | undefined;
export declare class InputComponent implements OnInit {
    /**
     * Always apply the base Semui button css class.
     */
    private addFormBaseClass;
    /**
     * Button importance level in terms of primary or secondary.
     * Primary sets as round corners and sharp edge, secondary is all round
     */
    semuiType: InputType;
    /**
     * Bind to the host "semui-form-input" CSS class.
     */
    semuiTypeFormInput: boolean;
    constructor();
    ngOnInit(): void;
    /**
     * Set component's properties bound to
     * the host element CSS classes.
     */
    private styleElementByType();
}
