import MarkDownInput from 'components/MarkDownInput';
import NavBar from 'components/NavBar';
import NoteDisplay from 'components/NoteDisplay';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => (
  <div className="App">
    <NavBar />
    <MarkDownInput />
    <NoteDisplay />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
