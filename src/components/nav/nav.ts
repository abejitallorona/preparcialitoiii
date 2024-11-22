import { dispatch } from '../../store/index'
import { Screens } from '../../types/store';
import { navigate } from '../../store/action';

class Nav extends HTMLElement {
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }


    render() {
        if (this.shadowRoot) {

            const p = this.ownerDocument.createElement("h1")
            p.innerText = 'Vinyl Store';
            this.shadowRoot.appendChild(p);

            const homeNav = this.ownerDocument.createElement("p")
            homeNav.innerText = 'Home';
            this.shadowRoot.appendChild(homeNav);
            homeNav.addEventListener('click', () =>  {
                dispatch(navigate(Screens.HOME));
            })

            const addNav = this.ownerDocument.createElement("p")
            addNav.innerText = 'Add New Product';
            this.shadowRoot.appendChild(addNav);
            addNav.addEventListener('click', () =>  {
                dispatch(navigate(Screens.ADD));
            })

            const modifyNav = this.ownerDocument.createElement("p")
            modifyNav.innerText = 'Modify Products';
            this.shadowRoot.appendChild(modifyNav);
            modifyNav.addEventListener('click', () =>  {
                dispatch(navigate(Screens.MODIFICAR));
            })

        }
        
    }
}

customElements.define("nav-commponent", Nav);
export default Nav;