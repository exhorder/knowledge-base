import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import minus from '../../../assets/images/icons/minus.svg';
import plus from '../../../assets/images/icons/plus.svg';
import discord from '../../../assets/images/icons/social/discord.svg';
import facebook from '../../../assets/images/icons/social/facebook.svg';
import github from '../../../assets/images/icons/social/github.svg';
import linkedin from '../../../assets/images/icons/social/linkedin.svg';
import medium from '../../../assets/images/icons/social/medium.svg';
import reddit from '../../../assets/images/icons/social/reddit.svg';
import twitter from '../../../assets/images/icons/social/twitter.svg';

export const icons = {
  discord,
  facebook,
  github,
  linkedin,
  medium,
  reddit,
  twitter,
  minus,
  plus
};

interface Props {
  icon: keyof typeof icons;
}

export const StyledIcon = styled.img`
  width: 20px;
  vertical-align: middle;
`;

const Icon: FunctionComponent<Props> = ({ icon }) => <StyledIcon src={icons[icon]} />;

export default Icon;
