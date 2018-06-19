import Router from 'next/router'
import nprogress from 'nprogress'

Router.onRouteChangeStart = () => nprogress.start()
Router.onRouteChangeComplete = () => nprogress.done()
Router.onRouteChangeError = () => nprogress.done()
