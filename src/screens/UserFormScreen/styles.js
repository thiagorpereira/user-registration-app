import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  padding: 14px;
  margin-top: 14px;
`;

export const SubmitContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 40%;
  padding-right: 40%;
`;
