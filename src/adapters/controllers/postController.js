const create = async (req, res) => {
  const { title, content } = req.body;
  try {
    await this.createPost.execute(title, content);
    res.status(201).json({msg: "Post created successfully."});
  } catch (error) {
    res.status(500).json({msg: "An error occurred while creating the post."});
  }
};

const get = async (req, res) => {
  res.json({
    msg: "Post get",
  });
};

module.exports = {
  get,
  create,
};
