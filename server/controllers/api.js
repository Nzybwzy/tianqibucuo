/**
 * Created by nap on 2017/3/22.
 */
var request = require('request');
var log = require('../util/logger').outlog;
var qs = require('qs');

module.exports = {
    get(req, res){
        // console.log(req.query,req.params,req.get('Content-Type'));
        const service_catalog = req.get('service_catalog');
        if (service_catalog) {
            const url = req.params['0'];
            const options = {
                url    : service_catalog + '/' + url + (req.query ? '?' + qs.stringify(req.query) : ''),
                method : 'get',
                headers: {},
                body   : req.body,
                json   : true,
            };
            
            const Authorization = req.get('Authorization') || '';
            
            if (Authorization) {
                options.headers.Authorization = Authorization;
            }
            console.log(options);
            
            request(options, (error, response, body) => {
                // console.log(error,response.statusCode,body)
                if (error) {
                    res.status(404).send({error});
                } else {
                    res.status(response.statusCode).send(body);
                }
            });
        } else {
            res.status(404).send({message: 'service_catalog missing'});
        }
        
    },
    post(req, res){
        const service_catalog = req.get('service_catalog');
        if (service_catalog) {
            
            const url = req.params['0'];
            const options = {
                url    : service_catalog + '/' + url + (req.query ? '?' + qs.stringify(req.query) : ''),
                method : 'post',
                headers: {},
                body   : req.body,
                json   : true,
            };
            
            const Authorization = req.get('Authorization') || '';
            
            if (Authorization) {
                options.headers.Authorization = Authorization;
            }
            console.log(options);
            
            request(options, (error, response, body) => {
                // console.log(error,response.statusCode,body)
                if (error) {
                    res.status(404).send({error});
                } else {
                    res.status(response.statusCode).send(body);
                }
            });
            
        } else {
            res.status(404).send({message: 'service_catalog missing'});
        }
    },
    put(req, res){
        const service_catalog = req.get('service_catalog');
        if (service_catalog) {
            
            const url = req.params['0'];
            const options = {
                url    : service_catalog + '/' + url + (req.query ? '?' + qs.stringify(req.query) : ''),
                method : 'put',
                headers: {},
                body   : req.body,
                json   : true,
            };
            
            const Authorization = req.get('Authorization') || '';
            
            if (Authorization) {
                options.headers.Authorization = Authorization;
            }
            console.log(options);
            
            request(options, (error, response, body) => {
                // console.log(error,response.statusCode,body)
                if (error) {
                    res.status(404).send({error});
                } else {
                    res.status(response.statusCode).send(body);
                }
            });
            
        } else {
            res.status(404).send({message: 'service_catalog missing'});
        }
    },
    patch(req, res){
        const service_catalog = req.get('service_catalog');
        if (service_catalog) {
            
            const url = req.params['0'];
            const options = {
                url    : service_catalog + '/' + url + (req.query ? '?' + qs.stringify(req.query) : ''),
                method : 'patch',
                headers: {},
                body   : req.body,
                json   : true,
            };
            
            const Authorization = req.get('Authorization') || '';
            
            if (Authorization) {
                options.headers.Authorization = Authorization;
            }
            console.log(options);
            
            request(options, (error, response, body) => {
                // console.log(error,response.statusCode,body)
                if (error) {
                    res.status(404).send({error});
                } else {
                    res.status(response.statusCode).send(body);
                }
            });
            
        } else {
            res.status(404).send({message: 'service_catalog missing'});
        }
    },
    delete(req, res){
        const service_catalog = req.get('service_catalog');
        if (service_catalog) {
            
            const url = req.params['0'];
            const options = {
                url    : service_catalog + '/' + url + (req.query ? '?' + qs.stringify(req.query) : ''),
                method : 'delete',
                headers: {},
                body   : req.body,
                json   : true,
            };
            
            const Authorization = req.get('Authorization') || '';
            
            if (Authorization) {
                options.headers.Authorization = Authorization;
            }
            console.log(options);
            
            request(options, (error, response, body) => {
                // console.log(error,response.statusCode,body)
                if (error) {
                    res.status(404).send({error});
                } else {
                    res.status(response.statusCode).send(body);
                }
            });
            
        } else {
            res.status(404).send({message: 'service_catalog missing'});
        }
    }
};
