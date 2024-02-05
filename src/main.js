import './styles/main.css'

import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto/routes'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob('./modules/*.js', { eager: true })).forEach((i) =>
      i.install(ctx)
    )
  }
)
