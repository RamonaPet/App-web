
import errors from './components/errors';
import path from 'path';

export default function (app) {
    // Insert routes below
    app.use('/api/things', require('./api/thing'));
    app.use('/api/users', require('./api/user'));
    app.use('/api/tools', require('./api/tool'));
    app.use('/api/products', require('./api/product'));
    app.use('/api/categories', require('./api/category'));
    app.use('/api/news', require('./api/news'));
    app.use('/api/productupdates', require('./api/product-update'));
    app.use('/api/tutorials', require('./api/tutorial'));
    app.use('/api/tutorialchapters', require('./api/tutorial-chapter'));
    app.use('/auth', require('./auth').default);

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the app.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
        });
}