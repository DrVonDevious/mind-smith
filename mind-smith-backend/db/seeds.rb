Post.destroy_all()
Tag.destroy_all()
PostTag.destroy_ll()

p1 = Post.create(title: "First Post", body: "Hello World!")
p2 = Post.create(title: "Second Post", body: "Almost as good as the first")

t1 = Tag.create(name: "You're It")

PostTag.create(post_id: p1.id, tag_id: t1.id)