import styled from '@emotion/styled';

export const Modal = styled.div`
  display: block;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const FormModal = styled.form`
  width: 400px;
  margin: 100px 0;
  margin-bottom: 15px;
`;

export const LabelModal = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const InputModal = styled.input`
  margin-top: 10px;
  border-radius: 5px;
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 5px;
  margin-left: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #6b6b6b;
  background: rgba(127, 218, 0, 0.4);
  color: white;
  cursor: pointer;
  &:active,
  &:hover {
    color: #e6e5be;
  }
`;

export const ExitButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 5px;
  margin-left: auto;
  border-radius: 5px;
  border: 1px solid #6b6b6b;
  background: rgba(255, 69, 0, 0.4);
  color: white;
  cursor: pointer;
  &:active,
  &:hover {
    color: #e6e5be;
  }
`;
