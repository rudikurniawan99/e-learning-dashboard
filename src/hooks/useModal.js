const PropTypes = require('prop-types');
const { useState } = require('react');
const { Dialog, DialogTitle, DialogContent } = require('@mui/material');

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const renderModal = (title, component) => (
    <Dialog open={isOpen} onClose={toggleModal}>
      <DialogTitle>{title} </DialogTitle>
      <DialogContent>{component}</DialogContent>
    </Dialog>
  );

  renderModal.propTypes = {
    title: PropTypes.string,
    component: PropTypes.element
  };

  return { toggleModal, renderModal };
};

export default useModal;
