import styled from "@emotion/styled";

const ComponentFormContainer = styled.form`
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const ComponentFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ComponentFormLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
`;

const ComponentFormInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.6rem;
  border: 1.5px solid var(--border-color);
  border-radius: 5px;
`;

const ComponentFormFieldButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
`;

const ComponentFormButton = styled.button`
  background-color: var(--button-color);
  padding: 1.5rem 1rem;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  width: 100%;
  transition: all .3s;
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--button-color-2);
  }
`;

const ComponentFormTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  font-size: 1.4rem;

  a {
    margin-bottom: 1px;
    font-weight: 600;
    color: var(--button-color);
    border-bottom: 1px solid currentColor;
  }
`;

const ComponentFormDanger = styled.p`
  font-size: 1.2rem;
  color: #ef476f;
`;

const ComponentFormError = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  background-color: #ef476f;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
`;

export {
  ComponentFormContainer,
  ComponentFormField,
  ComponentFormLabel,
  ComponentFormInput,
  ComponentFormFieldButtons,
  ComponentFormButton,
  ComponentFormTextContainer,
  ComponentFormDanger,
  ComponentFormError
}
