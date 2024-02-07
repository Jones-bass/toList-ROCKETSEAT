import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  position: absolute;

  top: 10rem;

  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  display: inline-block;

  .input {
    height: 54px;
    width: 638px;
    padding: 0 1.4rem;
    height: 3.85rem;
    border-radius: 8px;
    border: none;
    font-size: 1.14rem;

    color: ${(props) => props.theme.gray300};
    background-color: ${(props) => props.theme.gray500};
  }
`
export const ButtonTask = styled.button`
  width: 90px;
  height: 54px;
  margin: 15px;

  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  align-items: center;
  justify-content: space-between;
  text-align: center;

  background-color: ${(props) => props.theme.blueDark};
  color: ${(props) => props.theme.gray100};

  :hover {
    background-color: ${(props) => props.theme.blue};
  }

  &[type='submit']:disabled {
    opacity: 0.7;
    background-color: ${(props) => props.theme.blueDark};
    cursor: not-allowed;
  }
`
export const ContainerTask = styled.div`
  width: 745px;
  padding-top: 64px;

  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  display: flex;

  .textTask {
    color: ${(props) => props.theme.blueDark};
    font-size: 1.2rem;
  }
`
