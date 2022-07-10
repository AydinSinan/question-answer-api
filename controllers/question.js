const getAllQuestions = (req, res, next) => {
    res.json({
        success : true,
        "here" : "I am"
    })
}

module.exports = {
    getAllQuestions,

}