import { LitElement, html, customElement, css } from "lit-element";

@customElement("app-example")
export class ExampleElement extends LitElement {
    static styles = css`
        .example {
            font-size: 100px;
            background-color: #000;
            color: #fff;
            padding: 30px;
        }
        .center{
            text-align:center
        }
    `;

    constructor() {
        super();

        import('../lists/myList').then((myList) => {
            console.log('LoadModules ', myList)
        })
    }

    render() {
        return html`
            <div class="example">
                Lab Bootstrap Starter
            </div>
            <div>
                <my-list></my-list>
            </div>
            <div class="center">by Lit Element</div>
        `;
    }
}