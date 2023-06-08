import { useState } from 'react';
import ListPatient from './List';
import { convertArrayToObject } from '@utils';

function Vocabulary() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="content-section">
          <div className="content-section-heading">
            <div className="content-section-title">
              
            </div>
            <div>
              <button
                className="content-button status-button"
                onClick={() => {}}
              >
                Shuffle
              </button>
              <button
                className="content-button status-button"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <ListPatient />
        </div>
      </div>
    </div>
  );
}

export default Vocabulary;
