import '../components/nav/nav'
import Song, { Attribute } from '../components/product/product'; //componente de la card
import { getProductsAction } from '../store/action'; //traigo toda la información, lo que hay en el arreglo
import { dispatch } from '../store';
import { appState } from '../store';

class Home extends HTMLElement {

    songsList: Song[] = []
    
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
    }

    async connectedCallback() {
        if (appState.products.length === 0) {
            const songsAction = await getProductsAction();
            dispatch(songsAction)
        }

        this.render();

     
    }

    async render()  {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
           
            <nav-commponent></nav-commponent>
             <div class="songs"></div>
            `;

          
            appState.products?.forEach(song => {
                const songItem = this.ownerDocument.createElement('song-commponent') as Song;
                songItem.setAttribute(Attribute.titlesong, song.albumname);
                songItem.setAttribute(Attribute.autor, song.author);
                songItem.setAttribute(Attribute.image, song.image);
                songItem.setAttribute(Attribute.stock, song.stock);
                songItem.setAttribute(Attribute.price, song.price);
                this.songsList.push(songItem);
            });

            const container = this.shadowRoot?.querySelector('.songs');
            this.songsList.forEach((song) => {
                container?.appendChild(song);
            });
        };

    }

}

customElements.define('app-home', Home);
export default Home;
