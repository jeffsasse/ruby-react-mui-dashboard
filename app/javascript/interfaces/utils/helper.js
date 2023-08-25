function isAuthRoute(routeName) {
    const unAuthRoutes = ['login']
    let isAuthRoute = true
    if (!routeName || routeName == '' || routeName == '/') isAuthRoute = false
    unAuthRoutes.map(item => {
        if (routeName.includes(item)) isAuthRoute = false
    })
    return isAuthRoute
}

module.exports = {
    isAuthRoute,
}