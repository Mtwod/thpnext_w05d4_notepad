import React from 'react';
import './index.scss';

const MarkDownInput = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeContent = () => {
    setContent(document.getElementsByClassName('MarkDownInput__content')[0].innerHTML);
  };

  const handleClickSave = () => {
    console.log('You just clicked save!');
  };

  return (
    <div className="MarkDownInput">
      <input className="MarkDownInput__title" value={title} type="text" onChange={handleChangeTitle} />
      <textarea className="MarkDownInput__content" onChange={handleChangeContent}>
        {content}
      </textarea>
      <button type="button" className="MarkDownInput__save" onClick={handleClickSave}>Sauvegarder</button>
    </div>
  );
};

export default MarkDownInput;
