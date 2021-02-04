import React from 'react';
import './index.scss';

const MarkDownInput = (props) => {
  const {
    note,
    onChangeTitle,
    onChangeContent,
    onSave,
  } = props;

  return (
    <div className="MarkDownInput">
      <input className="MarkDownInput__title" value={note.title} type="text" onChange={onChangeTitle} />
      <textarea className="MarkDownInput__content" value={note.content} onChange={onChangeContent} />
      <button type="button" className="MarkDownInput__save" onClick={onSave}>Sauvegarder</button>
    </div>
  );
};

export default MarkDownInput;
