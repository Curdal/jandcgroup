import { Hono } from 'hono'
import { csrf } from 'hono/csrf'

import { renderer } from './renderer'

import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { ServicesPage } from './pages/services'
import { ContactPage } from './pages/contact'

const app = new Hono()

app.use(csrf())
app.use(renderer)

app.get('/', (c) => {
    return c.render(<HomePage />)
})
app.get('/about', (c) => {
    return c.render(<AboutPage />)
})
app.get('/services', (c) => {
    return c.render(<ServicesPage />)
})
app.get('/contact', (c) => {
    return c.render(<ContactPage />)
})

export default app
