export default class CardSelector extends HTMLElement {
  get error() {
    return this.getAttribute('error');
  }

  set error(error) {
    this.setAttribute('error', error);
  }

  get isFetching() {
    return this.getAttribute('fetching');
  }

  set isFetching(fetching) {
    this.setAttribute('fetching', fetching);
  }

  get cards() {
    return this.getAttribute('cards');
  }

  set cards(cards) {
    this.setAttribute('cards', cards);
  }

  static get observedAttributes() { return ['fetching', 'error', 'cards']; }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(_name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  template() {
    return `
          ${this.isFetching === 'true' ? '<div>Loading</div>' : ''}
          ${this.error ? `<div>error: ${this.error}</div>` : ''}
          <label>
            <select>
              ${JSON.parse(this.cards).map(card => `<option>${card.name}</option>`).join('')}
            </select>
          </label>`
      ;
  }

  render() {
    this.innerHTML = this.template();
  }
}
