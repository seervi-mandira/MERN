// in thsi error middleware we need to pas 3 argument err, req, res, nex

 const errorMiddleware = (err, req, res, next) => {
 
             const status = err.status || 500 
             const message = err.message || 'bakend error'
             const extradetails = err.extradetails || 'server error'

res.status(status).json({message, extradetails})


 }
  module.exports = errorMiddleware;