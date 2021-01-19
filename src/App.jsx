import React, { useState } from 'react';

import LinkInputForm from './components/LinkInputForm.jsx';
import LinkList from './components/LinkList.jsx';
import ReadLinks from './components/ReadLinks.jsx';

export default function App() {
  const [linksList, setLinksList] = useState([]);

  const updateLinksList = (newLinkSubmitted) => {
    setLinksList([...linksList, newLinkSubmitted]);
  };

  return (
    <div>
      <LinkInputForm updateLinksList={updateLinksList} />
      <LinkList linksList={linksList} />
      <ReadLinks />
    </div>
  );
}
