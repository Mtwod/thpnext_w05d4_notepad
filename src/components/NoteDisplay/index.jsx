import React from 'react';
import Showdown from 'showdown';
import './index.scss';

const NoteDisplay = ({ note }) => {
  const converter = new Showdown.Converter();

  const contentMarkUp = () => (
    { __html: converter.makeHtml(note.content) }
  );

  return (
    <div className="NoteDisplay">
      <h1 className="NoteDisplay__title">{note.title}</h1>
      <div
        className="NoteDisplay__content"
        dangerouslySetInnerHTML={contentMarkUp()}
      />
    </div>
  );
};

export default NoteDisplay;
