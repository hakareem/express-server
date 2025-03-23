import { compareHash } from './crypt.js';
import { User } from './model.js';

export function showLogin(req, res) {
    res.render('auth/login', {title: 'Login'});
}

export async function authenticate(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        res.redirect('/login');
        return;
    }

    const user = await User.findOne({email: email.toLowerCase()});

    if (!user) {
        res.redirect('/login');
        return;
    }

    if(await compareHash(password, user.password)) {
        req.session.user = {
            email,
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