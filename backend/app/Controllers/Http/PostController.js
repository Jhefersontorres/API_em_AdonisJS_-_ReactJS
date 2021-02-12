'use strict'
const Post = use('App/Models/Post')
class PostController {
 

  async index () {
    const posts = await Post.all();

    return posts
  }

 
  async store ({ request, response }) {
    const data = request.only(['content']);
    const post = await Post.creat(data);

    return post
  }


  async show ({ params, request, response, view }) {
    const post = await Post.find(params.id);
    return post
  }


 
  async update ({ params, request, response }) {
    const data = request.only(['content']);
    const post = Post.find(params.id);

    post.merge(data);

    await post.save()

    return post
  }


  async destroy ({ params, request, response }) {
    const post = await Post.find(params.id);

    await post.delete();

  }
}

module.exports = PostController
