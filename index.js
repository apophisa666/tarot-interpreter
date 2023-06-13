import Interpreter from "./src/components/interpreter";
import CardSelector from "./src/components/card-selector";

import './src/stylesheets/index.scss';

if (!customElements.get('ti-interpreter')) {
    customElements.define('ti-interpreter', Interpreter);
}

if (!customElements.get('ti-card-selector')) {
    customElements.define('ti-card-selector', CardSelector);
}