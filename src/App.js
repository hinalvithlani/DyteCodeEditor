import './App.css';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
      <div className="row">
        <div className="col1">
          <h3>HTML</h3>
          <textarea className="type" placeholder="Type..."></textarea>
        </div>
        <div className="col2">
          <h3>CSS</h3>
          <textarea className="type" placeholder="Type..."></textarea>
        </div>
        <div className="col3">
          <h3>JavaScript</h3>
          <textarea className="type" placeholder="Type..."></textarea>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
