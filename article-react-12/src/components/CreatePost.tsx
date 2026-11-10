import React, { useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  body: string;
};

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // POST
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post<Post>('https://jsonplaceholder.typicode.com/posts', {
        title,
        body
      })
      .then((response) => {
        alert('Post added! See in console!');
        console.log(response.data);
        // Reset form
        setTitle('');
        setBody('');
      })
      .catch((error) => {
        console.error('Error while sending data:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Content"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-100">POST</button>
      </form>
    </div>
  );
};

export default CreatePost;
