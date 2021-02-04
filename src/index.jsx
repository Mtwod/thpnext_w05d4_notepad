import MarkDownInput from 'components/MarkDownInput';
import NavBar from 'components/NavBar';
import NoteDisplay from 'components/NoteDisplay';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => {
  const [note, setNote] = React.useState({ id: '0', title: '', content: '' });
  const { localStorage } = window;

  const handleChangeTitle = (event) => {
    setNote({ id: note.id, title: event.target.value, content: note.content });
  };

  const handleChangeContent = (event) => {
    setNote({ id: note.id, title: note.title, content: event.target.value });
  };

  const handleSave = () => {
    const storageContent = JSON.stringify(note);
    alert('You just saved!');
    localStorage.setItem(note.id, storageContent);
  };

  React.useEffect(() => {
    const localStorageLength = localStorage.length;
    if (localStorageLength > 0) {
      const storageContent = localStorage.getItem(localStorage.key(localStorage.length - 1));
      const convertedNote = JSON.parse(storageContent);
      setNote(convertedNote);
    }
  }, []);

  React.useEffect(() => {
    const storageContent = JSON.stringify(note);
    localStorage.setItem(note.id, storageContent);
  }, [note]);

  const handleClickAddNote = () => {
    if (note.title === '' && note.content === '') {
      alert('La note actuelle est vide !');
    } else {
      setNote({ id: `${localStorage.length}`, title: '', content: '' });
    }
  };

  const handleChangeNote = (noteToDisplay) => {
    setNote(noteToDisplay);
  };

  return (
    <div className="App">
      <NavBar onAddNote={handleClickAddNote} onChangeNote={handleChangeNote} />
      <MarkDownInput
        onChangeTitle={handleChangeTitle}
        onChangeContent={handleChangeContent}
        onSave={handleSave}
        note={note}
      />
      <NoteDisplay note={note} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
