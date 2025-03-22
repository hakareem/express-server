export function showLogin(req, res) {
    res.render('auth/login', {title: 'Login'});
}

export function authenticate(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        res.redirect('/login');
        return;
    }

    if(email.toLowerCase() === 'admin@gmail.com' && password === 'x') {
        req.session.user = {
            email: email,
            isAuthenticated: true
        };
        res.redirect('/cars');
    } else {
        res.redirect('/login');
    }
}


export function logout(req, res) {
    req.session.destroy();
    res.redirect('/login');
}