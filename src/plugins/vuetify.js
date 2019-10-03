import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#555273',
        secondary: '#ff5722',
        accent: '#ff9800',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#00bcd4',
        success: '#4caf50'
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  },
});
