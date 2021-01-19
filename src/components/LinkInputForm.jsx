import React, { useState } from 'react';

export default function LinkInputForm({ updateLinksList }) {
  const [newLink, setNewLink] = useState('');

  return (
    <div className="container">
      <div>
        <input
          type="url"
          placeholder="Enter a link"
          value={newLink}
          onChange={(event) => {
            setNewLink(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            updateLinksList(newLink);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
