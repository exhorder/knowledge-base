import { Link as GatsbyLink } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

interface Props {
  to: string;
  external?: boolean;
  newTab?: boolean;
}

const linkCss = css`
  text-decoration: none;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.link};
  transition: color 0.2s;

  :hover {
    color: ${({ theme }: { theme: DefaultTheme }) => theme.linkHover};
  }
`;

const StyledLink = styled(GatsbyLink)`
  ${linkCss};
`;

const StyledExternalLink = styled.a`
  ${linkCss};
`;

const Link: FunctionComponent<Props> = ({ to, external = false, newTab = false, children }) => {
  if (external) {
    return (
      <StyledExternalLink href={to} target={newTab ? '_blank' : '_self'} rel="noopener noreferrer">
        {children}
      </StyledExternalLink>
    );
  }

  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
