require('./bootstrap');

window.Vue = require('vue');

// import App from './components/App';
import AppComponent from './components/App'; //<app-component></app-component>

new Vue({
    el: '#app',
    components: {AppComponent}
});
