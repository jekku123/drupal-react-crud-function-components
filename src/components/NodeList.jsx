import { useEffect, useState } from 'react';
import instance from '../api/instance';

const NodeList = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    getNodes();
  }, [nodes]);

  const getNodes = async () => {
    try {
      const axios = await instance();
      const response = await axios.get('/node/rest/');
      if (response.data) {
        setNodes(response.data);
      }
    } catch (e) {
      alert(e);
    }
  };

  const deleteNode = async (nid) => {
    try {
      const axios = await instance();
      await axios.delete(`/node/${nid}`);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Content ID</td>
          <td>Operations</td>
        </tr>
      </thead>
      <tbody>
        {nodes.map((node, index) => {
          return (
            <tr key={index}>
              <td>
                <a href={node}>{node.title[0].value}</a>
              </td>
              <td>{node.nid[0].value}</td>
              <td>
                <button onClick={() => deleteNode(node.nid[0].value)}>x</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NodeList;
