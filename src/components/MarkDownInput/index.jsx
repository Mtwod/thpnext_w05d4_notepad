import React from 'react';
import './index.scss';

const MarkDownInput = ({ note, onChangeTitle, onChangeContent }) => {
  const handleClickSave = () => {
    console.log('You just clicked save!');
  };

  return (
    <div className="MarkDownInput">
      <input className="MarkDownInput__title" value={note.title} type="text" onChange={onChangeTitle} />
      <textarea className="MarkDownInput__content" value={note.content} onChange={onChangeContent} />
      <button type="button" className="MarkDownInput__save" onClick={handleClickSave}>Sauvegarder</button>
    </div>
  );
};

export default MarkDownInput;
