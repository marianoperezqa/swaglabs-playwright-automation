
import { test, expect } from '../../src/fixtures/testFixtures';
import { Post } from '../../src/api/PostService';

test.describe('JSONPlaceholder - Posts API', () => {

  const testPost: Post = {
    userId: 1,
    title: 'Playwright API Automation',
    body: 'Testing REST API with TypeScript and Playwright'
  };

  test('API_001 - Get all posts', async ({
    postService
  }) => {
    const response = await postService.getAllPosts();

    expect(response.status()).toBe(200);

    const posts = await response.json();

    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);
  });

  test('API_002 - Get post by ID', async ({
    postService
  }) => {
    const response = await postService.getPostById(1);

    expect(response.status()).toBe(200);

    const post = await response.json();

    expect(post.id).toBe(1);
    expect(post.userId).toBe(1);
    expect(post.title).toBeTruthy();
  });

  test('API_003 - Filter posts by user', async ({
    postService
  }) => {
    const response = await postService.getPostsByUser(1);

    expect(response.status()).toBe(200);

    const posts = await response.json();

    expect(posts.length).toBeGreaterThan(0);

    for (const post of posts) {
      expect(post.userId).toBe(1);
    }
  });

  test('API_004 - Create a post', async ({
    postService
  }) => {
    const response = await postService.createPost(testPost);

    expect(response.status()).toBe(201);

    const createdPost = await response.json();

    expect(createdPost.title).toBe(testPost.title);
    expect(createdPost.body).toBe(testPost.body);
    expect(createdPost.userId).toBe(1);
    expect(createdPost.id).toBeTruthy();
  });

  test('API_005 - Update a post', async ({
    postService
  }) => {
    const updatedPost: Post = {
      userId: 1,
      id: 1,
      title: 'Updated Playwright Post',
      body: 'Updated complete post content'
    };

    const response = await postService.updatePost(
      1,
      updatedPost
    );

    expect(response.status()).toBe(200);

    const result = await response.json();

    expect(result.title).toBe(updatedPost.title);
    expect(result.body).toBe(updatedPost.body);
  });

  test('API_006 - Partially update a post', async ({
    postService
  }) => {
    const response = await postService.patchPost(
      1,
      { title: 'Patched Post Title' }
    );

    expect(response.status()).toBe(200);

    const result = await response.json();

    expect(result.title).toBe('Patched Post Title');
  });

  test('API_007 - Delete a post', async ({
    postService
  }) => {
    const response = await postService.deletePost(1);

    expect([200, 204]).toContain(response.status());
  });

  test('API_008 - Get nonexistent post', async ({
    postService
  }) => {
    const response = await postService.getPostById(9999);

    expect(response.status()).toBe(404);
  });

});