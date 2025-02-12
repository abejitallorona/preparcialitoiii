import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { Screens } from '../../types/store';
import { addSong } from '../../utils/firebase';

const addpr = { // dummie porque le va entrar información
    albumname: '',
	author: '',
	price: '',
    stock: '',
	image: '',
}

class Add extends HTMLElement {
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    //Métodos para que coja el nuevo valor
    changeTitle(e: any)  {
        addpr.albumname = e.target.value;
    }
    changeAutor(e: any)  {
        addpr.author = e.target.value;
    }
    changeAlbum(e: any)  {
        addpr.price = e.target.value;
    }

    changeDuracion(e: any)  {
        addpr.stock = e.target.value;
    }
    changeImage(e: any) {
        addpr.image = e.target.value;
       
    }
    
    //Para que suba los productos

    submitForm()  {
        addSong(addpr);
        alert('Vinilo creado')
        dispatch(navigate(Screens.HOME)) // le redirije al home
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div>
                    <input type="text" id="albumName" placeholder="Enter album name">
                     <input type="text" id="artistName" placeholder="Enter artist name">
                      <input type="number" id="price" placeholder="Enter price" >
                      <input type="number" id="stock" placeholder="Enter stock quantity">
                       <input type="text" id="imageLink" placeholder="Enter image URL">
                    <button id="submitButton" type="submit">Add Product</button>
                </div>
            `;

            const songTitle = this.shadowRoot?.querySelector("#albumName") as HTMLInputElement;
            songTitle.addEventListener('change', this.changeTitle);
            songTitle.required
	
            const songArtist = this.shadowRoot?.querySelector("#artistName") as HTMLInputElement;
            songArtist.addEventListener('change', this.changeAutor);
            songArtist.required

            const songAlbum = this.shadowRoot?.querySelector("#price") as HTMLInputElement;
            songAlbum.addEventListener('change', this.changeAlbum);
            songAlbum.required

            const songDuration = this.shadowRoot?.querySelector("#stock") as HTMLInputElement;
            songDuration.addEventListener('change', this.changeDuracion);
            songDuration.required

            const songImage = this.shadowRoot?.querySelector("#imageLink") as HTMLInputElement;
            songImage.addEventListener('change', this.changeImage);
            songImage.required

            const buttonSubmit = this.shadowRoot?.querySelector("#submitButton")as HTMLButtonElement;
            buttonSubmit.addEventListener('click', this.submitForm);
        }
        
    }
}

customElements.define("add-commponent", Add);
export default Add;