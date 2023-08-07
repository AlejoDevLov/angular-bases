import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations: [ //Declarar componentes para compartir en el scope del modulo
    CounterComponent
  ],
  exports: [ //exportar componentes a un scope externo
    CounterComponent
  ]
})
export class CounterModule {}
