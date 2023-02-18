import styled from 'styled-components'

export const Container = styled.main`
  width: 745px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  display: flex;
  margin: auto;
`
export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
`

export const ContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 4px;

  font-size: 14px;
  border-radius: 8px;
  padding: 16px;

  margin-top: 0.5rem;
  width: 745px;
  height: 72px;

  background-color: ${(props) => props.theme.gray500};

  & + {
    // aplicando css no segundo elemento após
    border-top: 1px solid red;

    margin-top: 15px;
  }

  .text {
    padding: 12px;
    text-align: left;
  }

  > button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.gray300};
    cursor: pointer;
  }

  .trash:hover {
    color: ${(props) => props.theme.danger};
  }
`
