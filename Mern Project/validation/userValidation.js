const {z} = require('zod');



const singupSchema= z.object({
             username: z.string ({required_error:'name is required '})
             .trim()
             .min(3, {message: 'min 3 charcto ri s required '}),

email :z.string({required_error:'email is requires'})
.trim()
.min(3, { message: 'min 3 charcto ri s required '}),

phone: z.string({required_error:'phone is requires'})
.trim()
.min(10, { message: 'min 3 charcto ri s required '})
.max(10, { message: 'min 3 charcto ri s required '}),


password : z.string({required_error:'passord is requires'})
.trim()
.min(6, { message: 'min 6 charcto ri s required in paword '})

})




module.exports = singupSchema;