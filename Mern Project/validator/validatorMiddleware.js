
const validate =  (scheme) => async(req, res, next) =>{
 
             try{
 
                          const parsebody = await scheme.parseAsync(req.body)
req.body = parsebody;
         next()    }
         catch (err) {
const status = 400;

const message = err?.errors?.[0]?.message || 'Validation failed';

    // const message = err.errors[0].message;
const error = {
  status, 
  message,
  
}

    next(error);
  }


}
module.exports = validate;