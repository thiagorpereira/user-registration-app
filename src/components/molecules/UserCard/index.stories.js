import styled from 'styled-components/native';
import { text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HouseCard } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('HouseCard', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const title = text('Title', 'Casa Example');
  const description = text('Description', 'QNL 17 BLOCO B');
  const price = number('Preço', 350);
  const imgSource = text(
    'Img',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  );
  return (
    <HouseCard
      imgSource={imgSource}
      title={title}
      description={description}
      price={price}
    />
  );
});
