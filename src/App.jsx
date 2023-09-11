import './App.css';
import NodeForm from './components/NodeForm';
import NodeList from './components/NodeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn.pixabay.com/photo/2015/09/11/08/48/banner-935470_1280.jpg"
          alt="logo"
        />
        <p>React - Progressively Decoupled / Headless</p>
        <a
          className="App-link"
          href="https://github.com/kalwar/reactjs_drupal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </header>
      <main>
        <div className="node-list">
          <h3>Nodes with Title, ContentID and Operation in Drupal</h3>
          <NodeList />
        </div>
        <NodeForm />
      </main>
    </div>
  );
}

export default App;
