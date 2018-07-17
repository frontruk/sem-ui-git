/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab.component';
import { IfTabActiveDirective } from './if-tab-active.directive';
import { SemUiSectionHeaderModule } from '../section-header/section-header.module';
import { SemUiSectionBodyModule } from '../section-body/section-body.module';
import { SemUiListModule } from '../list/list.module';
export class SemUiTabsModule {
}
SemUiTabsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TabComponent,
                    TabsComponent, IfTabActiveDirective
                ],
                exports: [TabComponent, TabsComponent, IfTabActiveDirective],
                imports: [
                    CommonModule,
                    SemUiListModule,
                    SemUiSectionHeaderModule,
                    SemUiSectionBodyModule
                ]
            },] },
];
function SemUiTabsModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SemUiTabsModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SemUiTabsModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnJvbnRyL3NlbWJsZXItY29tcG9uZW50LWxpYnJhcnkvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvdGFicy90YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFjdEQsTUFBTTs7O1lBWkwsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixZQUFZO29CQUNaLGFBQWEsRUFBRSxvQkFBb0I7aUJBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsb0JBQW9CLENBQUM7Z0JBQzVELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2Ysd0JBQXdCO29CQUN4QixzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RhYnMvdGFicy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWZUYWJBY3RpdmVEaXJlY3RpdmUgfSBmcm9tICcuL2lmLXRhYi1hY3RpdmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNlbVVpU2VjdGlvbkhlYWRlck1vZHVsZSB9IGZyb20gJy4uL3NlY3Rpb24taGVhZGVyL3NlY3Rpb24taGVhZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTZW1VaVNlY3Rpb25Cb2R5TW9kdWxlIH0gZnJvbSAnLi4vc2VjdGlvbi1ib2R5L3NlY3Rpb24tYm9keS5tb2R1bGUnO1xuaW1wb3J0IHsgU2VtVWlMaXN0TW9kdWxlIH0gZnJvbSAnLi4vbGlzdC9saXN0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYkNvbXBvbmVudCxcbiAgICBUYWJzQ29tcG9uZW50LCBJZlRhYkFjdGl2ZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUYWJDb21wb25lbnQsIFRhYnNDb21wb25lbnQsIElmVGFiQWN0aXZlRGlyZWN0aXZlXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTZW1VaUxpc3RNb2R1bGUsXG4gICAgU2VtVWlTZWN0aW9uSGVhZGVyTW9kdWxlLFxuICAgIFNlbVVpU2VjdGlvbkJvZHlNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZW1VaVRhYnNNb2R1bGUgeyB9XG4iXX0=