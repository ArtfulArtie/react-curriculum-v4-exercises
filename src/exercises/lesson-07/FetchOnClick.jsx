import { useState } from 'react';
import { getSinglePost } from './api';

function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleGetPost() {
    setLoading(true);
    setError(null);

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h1>Get a Post</h1>

      <button onClick={handleGetPost}>Get post</button>

      {loading && <p>Loading post...</p>}

      {error && <p>Error: {error}</p>}

      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      )}
    </section>
  );
}

export default FetchOnClick;
