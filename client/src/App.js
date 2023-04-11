import './App.css';

import Page from './Page';
import Container from './Container'

function App() {
  return (
    <div className="App">
      <Container customClass="column">
        <Page/>
      </Container>
    </div>
  );
}

export default App;
