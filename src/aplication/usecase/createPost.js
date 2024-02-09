const Post = require('../entity/Post');

class CreatePost {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    execute(title, content) {
        const post = new Post(Date.now(), title, content);
        this.postRepository.save(post);
    }
}

module.exports = CreatePost;