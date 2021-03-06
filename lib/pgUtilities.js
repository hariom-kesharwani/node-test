const async = require('async')
	
module.exports = {
	parallel : middlewares => {
	    return (req, res, next) => {
	        async.each(middlewares, (mw, cb) => {
	            mw(req, res, cb)
	        }, next)
	    }
	}
}	
