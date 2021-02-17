import React from 'react';

function Footer() {
  return (
    <>
      <footer id="main-footer">

        copyright
        {' '}
        &copy;
        {new Date().getFullYear()}
        {' '}
        |
        {' '}
        <span>Math Magician</span>
        {' '}
        all
        rights reserved.

      </footer>

    </>
  );
}

export default Footer;
