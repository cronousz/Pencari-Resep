class AppView extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
           :host {
                display: block;
                width: 100%;
                height: 250px;
                background: linear-gradient(90deg, #C36A2D, rgb(248, 133, 57));
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
               padding: 16px;
               font-size: 30px;
            }
            h6 {
                padding-left: 20px;
                font-size: 15px;
            }
        </style>
        <h2>Pencari Resep Makanan</h2>
        `;
    }
}
customElements.define("app-bar", AppView);