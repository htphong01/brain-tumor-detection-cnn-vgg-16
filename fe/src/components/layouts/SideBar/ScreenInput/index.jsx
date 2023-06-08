import React, { useState } from 'react';
import './styles.css';

function ScreenInput({ handleCreateCollection, onClose }) {
  const [title, setTitle] = useState('');

  return (
    <div id="screen-input-wrapper">
      <div className="screen-input-wrap">
        <div className='input-title'>Input collection name</div>
        <input value={title} required onChange={(e) => setTitle(e.target.value)} />
        <div className='btn-wrap'>
          <button className='btn cancel-btn' onClick={() => onClose(false)}>Cancel</button>
          <button className='btn submit-btn' onClick={() => handleCreateCollection(title)}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default ScreenInput;
