import 'core-js/modules/es.symbol.description.js';
import React, { useState, useEffect } from 'react';

// Modal component that displays a customizable modal
export default function Modal(props) {
  // State to manage the modal's open state
  const [isModalOpen, setIsModalOpen] = useState(props.open);

  // Effect to update the modal's state when 'open' prop changes
  useEffect(() => {
    setIsModalOpen(props.open); 
  }, [props.open]);

  // Function to close the modal and call onCloseModal prop
  const closeModal = () => {
    setIsModalOpen(false);
    props.onCloseModal();
  };

  // Default style for the modal container, can be customized with props
  const defaultModalStyle = {
    position: 'relative',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    maxWidth: '80%',
    zIndex: 1001,
    ...props.containerStyle 
  };

  // Style for the overlay that darkens the background when modal is open
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isModalOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  // Style for the close button inside the modal
  const closeButtonStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    width: '30px',
    height: '30px',
    ...props.closeButtonStyle 
  };

  // Style for the message inside the modal, can be customized with props
  const messageStyle = {
    ...props.messageStyle
  }

  // Render the modal with customized styles and content
  return (
    <div>
      <div className="overlay" style={overlayStyle}>
        <div className="modale" style={defaultModalStyle}>
          <button className="close-button" style={closeButtonStyle} onClick={closeModal}>
            X
          </button>
          <h3 style={messageStyle}>{props.message}</h3>
        </div>
      </div>
    </div>
  );
}
