import { LitElement, html, customElement, css } from "lit-element";

@customElement("my-list")
export class MyList  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .div-box {
          padding: 10px;
      }
    `;
  }

  constructor() {
    super();
  }

  getScripts(){
      return html `
      <link defer async  rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
      <link defer async rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
      `;
  }

  render() {
    return html`
        ${this.getScripts()}
        
        <div class="div-box">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>
            <button type="button" class="btn btn-link">Link</button>
        </div>
        
    `;
  }
}
