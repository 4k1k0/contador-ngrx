import { Action } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, acciones, RESET } from './contador.actions';

export function contadorReducer( state: number = 10, action: acciones ) {

  switch( action.type ) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENTAR:
      return state - 1;
    case MULTIPLICAR:
      return state * action.payload;
    case DIVIDIR:
      return state / action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }

}