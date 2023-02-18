import styled from 'styled-components'

export const ContainerIcon = styled.main`
  margin-top: 3rem;

  p {
    color: ${(props) => props.theme.gray300};
    text-align: center;
    line-height: 25px;
  }
`

export const IconImage = styled.div`
  margin: auto;
  justify-content: center;
  text-align: center;

  img {
    width: 6rem;
    margin: 1rem;
  }
`
