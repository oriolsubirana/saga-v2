import * as React from 'react';

interface Props {
  onRequestNewNumber: () => void;
  onUserConfirmNewNumberRequest: (result: boolean) => void;
}

export const MyNumberSetterComponent = (props: Props) => {
  const [showModalConfirmation, setShowModalConfirmation] = React.useState(false);
  const { onRequestNewNumber, onUserConfirmNewNumberRequest } = props;

  const onConfirmationOptionClicked = (result: boolean) => {
    onUserConfirmNewNumberRequest(result);
    setShowModalConfirmation(false);
  }

  const setModalDialogStyle = (): React.CSSProperties => ({
    background: '#ADD8E6',
    display: (showModalConfirmation) ? 'inline' : 'none',
  })

  const onRequestNewNumberWithConfirmation = () => {
    setShowModalConfirmation(true);
    onRequestNewNumber();
  }

  return (
    <>
      <button onClick={onRequestNewNumberWithConfirmation}>Request new number</button>
      <div style={setModalDialogStyle()}>
        <span>Are you sure you want to get a new number?</span>
        <button onClick={() => onConfirmationOptionClicked(true)}>Yes</button>
        <button onClick={() => onConfirmationOptionClicked(false)}>No</button>
      </div>
    </>
  )
}
