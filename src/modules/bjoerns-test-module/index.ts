import { StorefrontModule } from '@vue-storefront/core/lib/modules';
import Liked from '../components/Liked.vue'; // Importiere die Komponente

const examplePlugin = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'PRESSED_LIKE') {
      console.log('Der Kunde hat den Like Button des Produktes gedrückt!');
    }
  })
}

const exampleModuleStore = {
  namespaced: true,
  state: {
    liked: false
  }
}

const exampleRoutes = [{ name: 'liked', path: '/liked', component: Liked, alias: '/liked.html' }] // Route erstellen!

export const BjoernsTestModule: StorefrontModule = function ({ app, store, router, moduleConfig, appConfig }) {
  console.log('Hallo Welt und VSF! Ich habe ein eigenes custom-module geschrieben was zu Diensten ist!');
  store.registerModule('bjoerns-test-module', exampleModuleStore);

  router.addRoutes(exampleRoutes) // Füge die Route hinzu zum Router!
  router.beforeEach((to, from, next) => { next() }) // Navigation Guards
}
