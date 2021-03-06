import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoints';

const HeaderButton = styled.li`
  display: inline-flex;
  align-items: center;
  height: 100%;
  color: white;
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;

  & > a {
    display: flex;
    align-items: center;
    height: 100%;
    color: inherit;
    padding: 0 2.5rem;
    transition: background 0.2s;

    :hover {
      color: inherit;
      background: ${({ theme }) => theme.navigationHover};
    }
  }

  ${breakpoint('lg', 'max')`
    width: 100%;

    & > a {
      width: 100%;
      padding: 2rem 1.5rem;
    }

    & > div {
      width: 100%;
      margin: 0 1.5rem;
    }
  `};
`;

export default HeaderButton;
