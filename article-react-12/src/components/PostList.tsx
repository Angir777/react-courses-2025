import { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET
  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // DELETE
  const handleDelete = (id: number) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        setError(null);
        alert('Post deleted successfully!');
      })
      .catch((error) => setError(error.message));
  };
  
  return (
    <>
      {posts.map((post) => (
        <div className="card text-left mb-2" key={post.id}>
          <strong>{post.title}</strong><br /> 
          <small className="mb-3">{post.body}</small>
          <button className="w-25" onClick={() => handleDelete(post.id)}>DELETE</button>
        </div>
      ))}
    </>
  );
};

export default PostList;
