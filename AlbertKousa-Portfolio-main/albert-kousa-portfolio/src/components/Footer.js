import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Albert Kousa. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;