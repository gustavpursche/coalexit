import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mixins, mq } from '../../../token';

export default css`
  ul {
    ${mixins.resetList()}
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .container {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  .title {
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
  }

  .date-container {
    display: flex;
  }

  @media ${mq.tablet} {
    .date-container {
      align-items: flex-end;
      flex-direction: column;
      left: 0;
      position: absolute;
      top: 0.35rem;
      transform: translateX(calc(-100% - 1.25rem));
    }
  }

  .date {
    ${mixins.text('small')}

    background-color: ${colors.greenBrand};
    color: white;
    font-weight: 700;
    padding: 0.05rem 0.25rem;
  }

  @media ${mq.tablet} {
    .date {
      ${mixins.text('regular')}

      font-weight: 700;
    }
  }

  .type {
    ${mixins.text('mini')}

    align-items: center;
    color: ${colors.blueBrand};
    display: flex;
    font-weight: 700;
    margin-left: 0.5rem;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    .type {
      ${mixins.text('small')}

      font-weight: 700;
      margin-top: 1rem;
    }
  }

  .title-text {
    ${mixins.text('big')}

    display: block;
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  @media ${mq.tablet} {
    .title-text {
      ${mixins.text('medium', 'tablet')}

      margin-top: 1rem;
    }
  }

  @media ${mq.desktop} {
    .title-text {
      ${mixins.text('medium', 'desktop')}
    }
  }

  .intro {
    ${mixins.text('regular')}

    margin-bottom: 0;
    margin-top: 0.75rem;
  }

  @media ${mq.tablet} {
    .intro {
      ${mixins.text('regular', 'tablet')}

      margin-top: 1rem;
    }
  }

  @media ${mq.desktop} {
    .intro {
      ${mixins.text('regular', 'desktop')}
    }
  }
`;

export const iconType = css.resolve`
  svg {
    color: ${colors.blueBrand};
    height: 0.75rem;
    margin-left: 0.5rem;
    width: 0.75rem;
  }

  @media ${mq.tablet} {
    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;

export const titleLink = css.resolve`
  a {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;
