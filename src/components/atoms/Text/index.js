import styled from 'styled-components/native';

const BaseText = styled.Text`
  margin-top: ${({theme, mt}) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({theme, mb}) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({theme, ml}) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({theme, mr}) => theme.metrics.px(mr || 0)}px;
`;

export const Title = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(28)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Bold';
`;

export const InputLabel = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(16)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-SemiBold';
`;

export const ButtonText = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(22)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Bold';
`;
// Details Texts

export const DetailTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(24)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Bold';
`;

export const DetailSubtitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(18)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-SemiBold';
`;

export const DetailText = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(14)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Regular';
`;

export const DetailSectionTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(20)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Bold';
`;

// CardTexts:

export const CardTitle = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(24)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Bold';
`;

export const CardDescription = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(14)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Regular';
`;

export const CardFileText = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(10)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Regular';
`;

export const CardHightLightText = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(16)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: 'Montserrat-Bold';
`;

export const CardHightLightTextWhite = styled(BaseText)`
  font-size: ${({theme}) => theme.metrics.px(16)}px;
  color: ${({theme}) => theme.colors.white};
  font-family: 'Montserrat-Bold';
`;
