const User = require("../models/User")
const register =  async (req, res, next) => {
    // POST DATA
    const name = "Mert Erarslan"
    const email = "erarslan@gmail.com"
    const password = "mert"

    // async await
    // try catch  =>  to catch errors
    try {
        const user = await User.create({
            name,
            email,
            password : password
        })
        res.
        status(200).
        json({
            success : true,
            data : user
        })    
    } catch (err) {
        return next(err)  // for async error handling next(err) must use!!!
    }

}
// Postman => {{URL}}/api/auth/register

const errorTest = (req, res, next) => {
// Some Code
throw new Error('Bir Hata Oluştu')

// Some Code

    
}

module.exports = {
    register,
    errorTest

}