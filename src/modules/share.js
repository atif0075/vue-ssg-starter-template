import {
    SharedElementRouteGuard,
    SharedElementDirective,
    createSharedElementDirective
} from 'v-shared-element'

export const install = ({ isClient, app, router }) => {
    if (!isClient) return

    router.beforeEach(SharedElementRouteGuard)
    app.directive('shared-element', createSharedElementDirective(router))
}