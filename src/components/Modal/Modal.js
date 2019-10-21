import React from 'react';
import MaterialModal from '@material-ui/core/Modal';

export default function Modal({ open, onClose, marketingMessage }) {
  return (
    <MaterialModal
      data-testid="modal"
      aria-labelledby="modal"
      aria-describedby="modal"
      open={open}
      onClose={onClose}
    >
      <div style={marketingMessage && marketingMessage.getModalStyle()}>
        <h1>{marketingMessage && marketingMessage.text}</h1>
        <div>
          {marketingMessage && marketingMessage.image &&
              <img src={marketingMessage.image} alt="marketing" />
          }
        </div>
      </div>
    </MaterialModal>
  );
}
