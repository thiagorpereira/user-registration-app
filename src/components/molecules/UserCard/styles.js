import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: ${({theme}) => theme.metrics.wp(86)}px;
  height: ${({theme}) => theme.metrics.px(240)}px;
  border-radius: ${({theme}) => theme.metrics.px(24)}px;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  display: flex;
  flex-direction: row;
  margin-top: ${({theme}) => theme.metrics.px(24)}px;
  overflow: hidden;
`;

export const CardImage = styled.Image`
  width: 40%;
  height: 100%;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-vertical: ${({theme}) => theme.metrics.px(12)}px;
  padding-horizontal: ${({theme}) => theme.metrics.px(14)}px;
  width: 60%;
`;

export const ContainerDate = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.primary};
  margin-top: 4px;
`;

export const TextContainerLeft = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  height: 100%;
`;

export const TextContainerRight = styled.View`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
`;
