export function checkAuth(req, res, next) {
    let isAuth = req.session.user && req.session.user.isAuthenticated;

    if (!isAuth) {
        res.redirect('/login');
        return;
    }

    next()
}