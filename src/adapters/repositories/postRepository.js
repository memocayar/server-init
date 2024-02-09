class PostRepository {
    constructor() {
        this.posts = [];
    }
    save(post) {
        this.posts.push(post);
    }
}
module.exports = PostRepository;