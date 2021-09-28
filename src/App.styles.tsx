import styled from 'styled-components';

interface WrapperInterface {
  colourInput: string;
}

export const Wrapper = styled.div<WrapperInterface>`
  width: 100%;
  height: 100px;
  background-color: ${({ colourInput }: WrapperInterface) => `${colourInput}`};
`