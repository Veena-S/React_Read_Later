import React, { useState } from 'react';

export default function ReadLinks({ readLinksList }) {
  return (
    <div className="container">
      <div className="links-list">
        <h4 className="mt-4">Read Links</h4>
        <ul>
          {readLinksList.map((link, index) => (
            <div className="row">
              <li key={`link-${Number(index).toString()}`}>
                <div className="col-sm">
                  <a href={link}>{link}</a>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
