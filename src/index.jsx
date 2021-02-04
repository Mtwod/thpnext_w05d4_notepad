import MarkDownInput from 'components/MarkDownInput';
import NavBar from 'components/NavBar';
import NoteDisplay from 'components/NoteDisplay';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => {
  const [note, setNote] = React.useState({ title: '', content: '' });
  const { localStorage } = window;

  const handleChangeTitle = (event) => {
    setNote({ title: event.target.value, content: note.content });
  };

  const handleChangeContent = (event) => {
    setNote({ title: note.title, content: event.target.value });
  };

  const handleSave = () => {
    const storageContent = JSON.stringify(note);
    alert('You just saved your note!');
    localStorage.setItem('notepad', storageContent);
  };

  React.useEffect(() => {
    const storageContent = localStorage.getItem('notepad');
    if (storageContent) {
      const convertedNote = JSON.parse(storageContent);
      setNote(convertedNote);
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
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
