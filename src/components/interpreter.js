import  store  from '../store.js'
import { fetchCards } from '../actions/card-actions.js'

export default class Interpreter extends HTMLElement {
  connectedCallback() {
    this.props = {};
    this.store = store;

    this.store.subscribe(this.onStoreChanged.bind(this));
    this.cardSelector = this.querySelector('ti-card-selector');
    store.dispatch(fetchCards());
  }

  onStoreChanged() {
    this.props = this.store.getState();
    this.cardSelector.setAttribute('cards', JSON.stringify(this.props.cards));
  }
}