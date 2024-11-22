import { Actions } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

    switch (action) {
        
		case Actions.NAVIGATE: // Accion para navegar entre pantallas
			return {
				...currentState,
				screen: payload,
			};

		case Actions.GETPRODUCTS: // Acción para obtener el producto
			return {
				...currentState,
				products: payload,
			};


		default:
			return currentState;
	}
};