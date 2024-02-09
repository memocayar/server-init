class PostController {
    constructor(createPost) {
        this.createPost = createPost;
    }
    async create(req, res) {
        const {
            title,
            content
        } = req.body;
        try {
            await this.createPost.execute(title, content);
            res.status(201).send('Post created successfully.');
        } catch (error) {
            res.status(500).send('An error occurred while creating the post.');
        }
    }
}
module.exports = PostController;