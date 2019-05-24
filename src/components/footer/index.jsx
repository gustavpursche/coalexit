import Link from 'gatsby-link';
import React from 'react';

import style, { item } from './style';

export default ({ items }) => (
  <footer>
    <style jsx>{style}</style>
    {item.styles}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1871 622"
      className="background"
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#2E56B4"
        strokeWidth="300"
        d="M1833.7 403s-283.6-72.1-479.2-63.3c-211.3 9.5-383 154.6-627.5 129-244.5-25.5-431.4-261.5-692.3-322.3"
      />
    </svg>

    <ul>
      {items.map(([title, link]) => (
        <li>
          <Link to={link} className={item.className}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </footer>
);