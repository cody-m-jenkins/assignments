const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    blogBody: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
    }
})

module.exports = mongoose.model('Blog', blogSchema)