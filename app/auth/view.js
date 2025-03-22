const views = {
    loginForm() {
        return this._layout(
            `
            <form action="/login" method="post">
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            `
        )
    },    
    _layout(content) {
        return (
            `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Cars</title>
                <link rel="stylesheet" href="/assets/css/style.css" />
            </head>
            <body>
                 ${content}
            </body>
            </html>
            `
        )
    }
}
export const view = (name, data) => views[name](data);