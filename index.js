import Card from "./src/components/card";
import CardSelector from "./src/components/card-selector";

import './src/stylesheets/index.scss';

if (!customElements.get('ti-card')) {
    customElements.define('ti-card', Card);
}

if (!customElements.get('ti-card-selector')) {
    customElements.define('ti-card-selector', CardSelector);
}