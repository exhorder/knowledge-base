import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../theme/breakpoints';
import Search from '../Search';
import Center from '../ui/Center';
import Container from '../ui/Container';
import Text from '../ui/Text';

const HeroText = styled(Text)`
  font-size: 3rem !important;
`;

const SearchContainer = styled.div`
  width: 50%;
  margin: 0 auto 5rem auto;

  ${breakpoint('md', 'max')`
    width: 100%;
  `};
`;

const SearchHero: FunctionComponent = () => (
  <Container>
    <Center>
      <HeroText inverted={true}>How can we help you?</HeroText>
    </Center>
    <SearchContainer>
      <Search compact={false} fullSize={true} />
    </SearchContainer>
  </Container>
);

export default SearchHero;
