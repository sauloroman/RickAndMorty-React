import styled from "@emotion/styled"

const ComponentSelectField = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComponentSelectLabel = styled.label`
  background-color: var(--button-color);
  width: 10rem;
  text-align: center;
  border-radius: 100px;
  padding: .5rem;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  display: block;
  margin-bottom: .5rem;
`;

const ComponentSelectSelectElement = styled.select`
  font-size: 1.4rem;
  border: 1px solid var(--border-color);
  border-radius: 100px;
  padding: 1rem;
  max-width: 100%;
`;

const ComponentSelectOption = styled.option`
  font-weight: bold;
`;

export {
  ComponentSelectField,
  ComponentSelectLabel,
  ComponentSelectSelectElement,
  ComponentSelectOption
}