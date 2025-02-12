import { AppState, Observer } from "../types/store"; 
import { reducer } from "./reducer";
import { Screens } from '../types/store';

const initialState: AppState = {
	screen: Screens.HOME, 
	products: [], 
	currentProduct: null 
};

export let appState = initialState;

let observers: Observer[] = [];

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone); // el cambio del payload se hace acá
	appState = newState;

	// persistStore(newState);
	observers.forEach((o: any) => o.render());
};

//Agregar los observadores para los interesados, los suscritos
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};