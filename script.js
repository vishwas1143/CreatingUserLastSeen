 // Simulating a function to create a post and return a promise
function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  // Simulating a function to update the last user activity time and return a promise
  function updateLastUserActivityTime(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Date());
      }, 1000);
    });
  }
  
  // Simulating a function to delete a post and return a promise
  function deletePost(postId) {
    return new Promise((resolve) => {
      // Deleting post logic here
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  // Function to handle the entire flow
  async function handlePostFlow() {
    const user = {
      id: 1,
      name: 'John',
      lastActivityTime: null,
      posts: [],
    };
  
    // Create a post and update last user activity time
    const post = { postId: 1, content: 'New post content' };
    const createPostPromise = createPost(post);
    const updateActivityTimePromise = updateLastUserActivityTime(user.id);
  
    // Wait for both promises to resolve
    const [createdPost, lastActivityTime] = await Promise.all([
      createPostPromise,
      updateActivityTimePromise,
    ]);
  
    // Log the created post and last activity time
    console.log('Post created:', createdPost);
    console.log('Last Activity Time:', lastActivityTime);
  
    // Add the post to the user's posts
    user.posts.push(createdPost);
  
    // Delete the last post and log the new set of posts
    const deletedPostId = user.posts.pop().postId;
    await deletePost(deletedPostId);
    console.log('New set of posts:', user.posts);
  }
  
  // Call the main function to start the flow
  handlePostFlow();
  