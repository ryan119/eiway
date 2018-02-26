/**
 * Created by ryan on 2018/2/5.
 */
import 'babel-polyfill' ;
import express  from 'express';
import { matchRoutes } from 'react-router-config' ;
import proxy from 'express-http-proxy' ;
import Routes from './client/Routes' ;
import renderer from './server/renderer' ;
import createStore from './server/createStore' ;

const app = express() ;

app.use('/api', proxy('http://localhost', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000' ;
        return optsl
    }
}));


app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req) ;
    //console.log(Routes);
    console.log("path: ",req.path);
    const promises = matchRoutes(Routes, req.path).map(({ route }) =>{
        //console.log('route : ' , route);
        return route.loadData ? route.loadData(store) : null ;
    }).map( promise => {
        if(promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(() =>{
        const context = {} ;
        const content = renderer(req, store, context) ;

        if(context.url) {
            return res.redirect(301, context.url) ;
        }

        if(context.notFound){
            res.status(404);
        }

        res.send(content) ;
    })

});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

