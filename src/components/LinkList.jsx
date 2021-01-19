import React, { useState } from 'react';

export default function LinkList({ linksList, addReadLink }) {
  return (
    <div className="container">
      <div className="links-list">
        <h4 className="mt-4">Added Links</h4>
        <ul>
          {linksList.map((link, index) => (
            <div className="row">
              <li key={`link-${Number(index).toString()}`}>
                <div className="col-sm">
                  <a href={link}>{link}</a>
                </div>
                <div className="col-sm">
                  <input
                    type="checkbox"
                    id={`link-${index}`}
                    name={`link-${index}`}
                    value={link}
                    onClick={(event) => {
                      if (event.target.checked)
                      {
                        addReadLink(event.target.value, index);
                      }
                    }}
                  />
                  <label htmlFor={`link-${index}`}> Mark As Read</label>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
