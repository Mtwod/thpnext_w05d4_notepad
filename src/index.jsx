import MarkDownInput from 'components/MarkDownInput';
import NavBar from 'components/NavBar';
import NoteDisplay from 'components/NoteDisplay';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// const localStorage = window.localStorage;

const App = () => {
  const [note, setNote] = React.useState({ title: '', content: '' });

  const handleChangeTitle = (event) => {
    setNote({ title: event.target.value });
  };

  const handleChangeContent = (event) => {
    setNote({ content: event.target.value });
  };

  return (
    <div className="App">
      <NavBar />
      <MarkDownInput
        onChangeTitle={handleChangeTitle}
        onChangeContent={handleChangeContent}
        note={note}
      />
      <NoteDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
