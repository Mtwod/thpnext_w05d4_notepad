/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './index.scss';

const NavBar = ({ onAddNote, onChangeNote }) => {
  const [storageItems, setStorageItems] = React.useState({});

  const getStorageItems = () => {
    const allItems = Object.keys(localStorage).map((key) => {
      const note = localStorage.getItem(key);
      const convertedItem = JSON.parse(note);
      return { note: convertedItem, key: `${key}` };
    });
    // allItems is an array that contains objects with two properties : notes and key
    return allItems;
  };

  React.useEffect(() => {
    const allStorageItems = getStorageItems();
    setStorageItems(allStorageItems);
  }, []);

  const handleClickAddNote = () => {
    const emptyItems = storageItems.filter((item) => item.note.title === '' && item.note.content === '');
    if (emptyItems.length > 0) {
      alert('Au moins une note est vide, mieux vaut l\'éditer plutôt que de créer une nouvelle !');
    } else {
      onAddNote();
    }
  };

  const handleClickNote = (key) => {
    const itemToDisplay = storageItems.filter((item) => item.key === key)[0];
    const noteToDisplay = itemToDisplay.note;
    onChangeNote(noteToDisplay);
  };

  return (
    <div className="NavBar">
      <button type="button" className="NavBar__button" onClick={handleClickAddNote}>Ajouter une note</button>
      <ul className="NavBar__notes">
        {(storageItems.length > 0) && (
          storageItems.map((item) => (
            <li
              className="NavBar__note"
              key={item.note.id}
            >
              <h3
                className="NavBar__note__title"
                onClick={() => handleClickNote(item.key)}
              >
                {`${item.note.id} - ${item.note.title}`}
              </h3>
              <p className="NavBar__note__content">{item.note.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NavBar;
