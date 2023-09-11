import { useState } from 'react';
import instance from '../api/instance';

const NodeForm = () => {
  const [data, setData] = useState({ title: '', body: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const node = {
      type: [
        {
          target_id: 'article',
          target_type: 'node_type',
        },
      ],
      title: [
        {
          value: data.title,
        },
      ],
      body: [
        {
          value: data.body,
          format: 'plain_text',
        },
      ],
    };
    try {
      const axios = await instance();
      await axios.post('/node/', node);
    } catch (e) {
      alert(e);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  return (
    <div className="create-node-form">
      <h4>Create Node Form</h4>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input type="text" id="title" onChange={handleChange}></input>
        <br />
        <label>Body</label>
        <br />
        <textarea id="body" onChange={handleChange}></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NodeForm;
