import { APIRequestContext } from '@playwright/test';

export interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export class PostService {
  constructor(
    private readonly request: APIRequestContext
  ) {}

  async getAllPosts() {
    return this.request.get('/posts');
  }

  async getPostById(id: number) {
    return this.request.get(`/posts/${id}`);
  }

  async getPostsByUser(userId: number) {
    return this.request.get('/posts', {
      params: { userId }
    });
  }

  async createPost(post: Post) {
    return this.request.post('/posts', {
      data: post
    });
  }

  async updatePost(id: number, post: Post) {
    return this.request.put(`/posts/${id}`, {
      data: post
    });
  }

  async patchPost(
    id: number,
    data: Partial<Post>
  ) {
    return this.request.patch(`/posts/${id}`, {
      data
    });
  }

  async deletePost(id: number) {
    return this.request.delete(`/posts/${id}`);
  }
}