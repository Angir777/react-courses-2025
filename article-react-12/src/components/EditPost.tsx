import { useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const EditPost = () => {
  const [response, setResponse] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  // PUT
  const handlePut = () => {
    axios
      .put<Post>('https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Updated Title via PUT',
        body: 'Updated body via PUT',
        userId: 1,
      })
      .then((res) => {
        setResponse(res.data);
        setError(null);
      })
      .catch((error) => setError(error.message));
  };

  // PATCH
  const handlePatch = () => {
    axios
      .patch<Post>('https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Updated Title via PATCH',
      })
      .then((res) => {
        setResponse(res.data);
        setError(null);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <button onClick={handlePut}>PUT</button>
      </div> 

      <div className="col-lg-6">
        <button onClick={handlePatch}>PATCH</button>
      </div>

      <div className="col-lg-12">
        {response && (
          <div>
            <h5>Response:</h5>
            <p>ID: {response.id}</p>
            <p>Title: {response.title}</p>
            <p>Body: {response.body}</p>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
    </div>
  );
};

export default EditPost;
