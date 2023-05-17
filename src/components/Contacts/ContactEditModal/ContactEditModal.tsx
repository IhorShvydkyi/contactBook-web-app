import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// @ts-expect-error TS(2307): Cannot find module 'redux/contacts' or its corresp... Remove this comment to see the full error message
import { contactsOperations } from 'redux/contacts';
// @ts-expect-error TS(2307): Cannot find module 'redux/contacts/contacts-slices... Remove this comment to see the full error message
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
  // @ts-expect-error TS(2339): Property 'contacts' does not exist on type 'Defaul... Remove this comment to see the full error message
  const editContact = useSelector(state => state.contacts.editContact);

  useEffect(() => {
    setId(editContact[0].id);
    setName(editContact[0].name);
    setNumber(editContact[0].number);
  }, [editContact]);

  const handleChange = (e: any) => {
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

  const handleSubmit = (e: any) => {
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
    // @ts-expect-error TS(2345): Argument of type 'Element | null' is not assignabl... Remove this comment to see the full error message
    modalRoot,
  );
};
