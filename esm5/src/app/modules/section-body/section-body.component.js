/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation, } from '@angular/core';
var SectionBodyComponent = /** @class */ (function () {
    function SectionBodyComponent() {
        /**
         * Css base class.
         */
        this.addBaseCssClass = true;
    }
    /**
     * @return {?}
     */
    SectionBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SectionBodyComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    // tslint:disable-next-line:component-selector
                    selector: 'div[semui-section-body]',
                    styles: [".semui-body-section{padding:0 2%;display:block}.semui-body-section.large{padding:0 2%}.semui-body-section.small{padding:0 .5%}"],
                    template: "\n    <ng-content></ng-content>\n  "
                },] },
    ];
    /** @nocollapse */
    SectionBodyComponent.ctorParameters = function () { return []; };
    SectionBodyComponent.propDecorators = {
        "addBaseCssClass": [{ type: HostBinding, args: ['class.semui-body-section',] },],
    };
    return SectionBodyComponent;
}());
export { SectionBodyComponent };
function SectionBodyComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SectionBodyComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SectionBodyComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SectionBodyComponent.propDecorators;
    /**
     * Css base class.
     * @type {?}
     */
    SectionBodyComponent.prototype.addBaseCssClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcm9udHIvc2VtYmxlci1jb21wb25lbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWN0aW9uLWJvZHkvc2VjdGlvbi1ib2R5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsV0FBVyxFQUdYLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQzs7SUFxQnJCOzs7OytCQUZ5QixJQUFJO0tBRVo7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0tBQ0M7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztvQkFFckMsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsTUFBTSxFQUFFLENBQUMsZ0lBQWdJLENBQUM7b0JBQzFJLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7Ozs7b0NBTUUsV0FBVyxTQUFDLDBCQUEwQjs7K0JBekJ6Qzs7U0FxQmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbc2VtdWktc2VjdGlvbi1ib2R5XScsXG4gIHN0eWxlczogW2Auc2VtdWktYm9keS1zZWN0aW9ue3BhZGRpbmc6MCAyJTtkaXNwbGF5OmJsb2NrfS5zZW11aS1ib2R5LXNlY3Rpb24ubGFyZ2V7cGFkZGluZzowIDIlfS5zZW11aS1ib2R5LXNlY3Rpb24uc21hbGx7cGFkZGluZzowIC41JX1gXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWN0aW9uQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDc3MgYmFzZSBjbGFzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VtdWktYm9keS1zZWN0aW9uJylcbiAgcHVibGljIGFkZEJhc2VDc3NDbGFzcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=