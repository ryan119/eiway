/**
 * Created by ryan on 2018/2/5.
 */
import React from 'react' ;
import { renderToString } from 'react-dom/server' ;
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux' ;
import { renderRoutes } from 'react-router-config' ;
import serialize from 'serialize-javascript' ;
import { Helmet } from 'react-helmet';
import { ServerStyleSheet , StyleSheetManager } from 'styled-components';
import Routes from '../client/Routes' ;


export default (req, store, context) => {
    const sheet = new ServerStyleSheet();
    const content = renderToString(
        <StyleSheetManager sheet={sheet.instance}>
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </Provider>
        </StyleSheetManager>
    );

    const styleTags = sheet.getStyleTags();
    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${styleTags}
                 <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `;
}
