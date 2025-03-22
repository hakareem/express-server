const views = {
    list({cars, title}) {
        const liElements = cars.map(({id, make, model}) => `<li><a href="/cars/${id}">${make} ${model}</a></li>`);
        return this._layout(
            `
            <h2>${title}<h2>
            <ul>
                ${liElements.join('')}
            </ul>
            `
        ) 
    }, 
    show({car}) {
        return this._layout(
            `
            <h2>
                ${car.make} ${car.model}
            </h2>
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