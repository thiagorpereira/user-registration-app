import styled from 'styled-components/native';

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const InputText = styled.TextInput`
  height: ${({theme}) => theme.metrics.px(48)}px;
  border-radius: ${({theme}) => theme.metrics.px(12)}px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.grey};
  margin-top: ${({theme}) => theme.metrics.px(12)}px;
  font-size: ${({theme}) => theme.metrics.px(16)}px;
  color: ${({theme}) => theme.colors.primary};
  padding-left: ${({theme}) => theme.metrics.px(12)}px;
  padding-right: ${({theme}) => theme.metrics.px(12)}px;
  font-family: 'Montserrat-Regular';
`;
