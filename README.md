# react-personalized-modal

A simple npm package for creating customizable modals in your React App.

## Dependencies

- react 18.2.0
- react-dom 18.2.0
- @babel/polyfill 7.12.1
- core-js 3.32.0

## Installation
Run the following command in your terminal:

```bash
npm install react-personalized-modal

or

yarn add react-personalized-modal
```

## Usage
```jsx
import { Modal } from "react-personalized-modal";

    <Modal
        open={isOpen}
        onCloseModal={handleCloseModal}
        message={message}
        containerStyle={{
            backgroundColor: 'white',
            color: 'black',
            width: '500px'
        }}
        closeButtonStyle={{
            backgroundColor: 'black',
            color: 'white',
            width: '30px',
            height: '30px'
        }}
        messageStyle={{
            fontSize: '20px',
            textAlign: 'center'
        }}
    />

```

## Props Usage

- `open` (boolean):
  - Whether the modal is open or closed.

- `onCloseModal` (function):
  - A function to handle the modal close event.

- `message` (string):
  - The message to be displayed inside the modal.

- `containerStyle` (object, optional):
  - An object to customize the style of the modal container.

- `closeButtonStyle` (object, optional):
  - An object to customize the style of the close button.

- `messageStyle` (object, optional):
  - An object to customize the style of the message text.

## Contributors
Developed by eliaexe
