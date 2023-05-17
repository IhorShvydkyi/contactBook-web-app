import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';
import { closeModal } from 'redux/contacts/contacts-slices';
import {
  FormModal,
  LabelModal,
  InputModal,
  SaveButton,
  ExitButton,
  Overlay,
  Modal,
} from './ContactEditModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ContactEditModal = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const editContact = useSelector(state => state.contacts.editContact);

  useEffect(() => {
    setId(editContact[0].id);
    setName(editContact[0].name);
    setNumber(editContact[0].number);
  }, [editContact]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(contactsOperations.updateContact({ id, name, number }));
    dispatch(closeModal());
  };

  return createPortal(
    <Overlay>
      <Modal>
        <FormModal onSubmit={handleSubmit}>
          <LabelModal htmlFor="">
            {' '}
            Name
            <InputModal
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </LabelModal>
          <LabelModal htmlFor="">
            {' '}
            Number
            <InputModal
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </LabelModal>
          <SaveButton type="submit" onClick={handleSubmit}>
            Save edit contact
          </SaveButton>
          <ExitButton type="submit" onClick={() => dispatch(closeModal())}>
            Exit
          </ExitButton>
        </FormModal>
      </Modal>
    </Overlay>,
    modalRoot,
  );
};
