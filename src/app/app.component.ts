import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number;

  constructor( private store: Store<AppState> ) {
    this.contador = 10;
    this.store.select('contador').subscribe( contador => this.contador = contador);
  }

  incrementar() {
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}
