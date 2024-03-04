import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';

import { QueryBuilderComponent } from './query-builder.component';

import { QueryArrowIconDirective } from './query-arrow-icon.directive';
import { QueryFieldDirective } from './query-field.directive';
import { QueryInputDirective } from './query-input.directive';
import { QueryEntityDirective } from './query-entity.directive';
import { QueryOperatorDirective } from './query-operator.directive';
import { QueryButtonGroupDirective } from './query-button-group.directive';
import { QuerySwitchGroupDirective } from './query-switch-group.directive';
import { QueryRemoveButtonDirective } from './query-remove-button.directive';
import { QueryEmptyWarningDirective } from './query-empty-warning.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    QueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
  ],
  exports: [
    QueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
  ]
})
export class QueryBuilderModule { }
