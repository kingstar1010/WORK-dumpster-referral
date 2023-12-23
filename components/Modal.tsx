import React from 'react';

export default function Modal(props: { isOpen?: boolean, onClose?: ()=>void, children?: string | React.ReactElement | React.ReactElement[]}) {
  if (!props.isOpen) {
    return;
  }

  return <div className="modal is-active">
      <div className="modal-background" onClick={props.onClose}></div>
      <div className="modal-content">
        <div className="box">
          {props.children}
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={props.onClose}></button>
    </div>;
}