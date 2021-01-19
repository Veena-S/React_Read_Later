import React, { useState } from 'react';

export default function LinkList({ linksList }) {
  return (
    <div>
      <div className="links-list">
        <h4>Added Links</h4>
        <ul>
          {linksList.map((link, index) => (
            <li key={`link-${Number(index).toString()}`}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
