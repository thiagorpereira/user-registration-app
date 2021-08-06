import styled from 'styled-components/native';

export const SectionView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  width: 100%;
  height: 100%;
`;

export const SectionImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export const SectionText = styled.Text`
  color: white;
  font-size: 24;
  font-weight: bold;
`;
