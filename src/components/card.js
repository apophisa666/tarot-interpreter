export default class Card extends HTMLElement {
    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.setAttribute('name', value);
    }

    get beschreibung() {
        return this.getAttribute('beschreibung');
    }

    set beschreibung(value) {
        this.setAttribute('beschreibung', value);
    }

    connectedCallback() {
        this.render();
    }

    template() {
        return `
            <p><strong>${this.name}</strong></p>
            <p>${this.beschreibung}</p>
      `;
    }

    render() {
        this.innerHTML = this.template();
    }
}
