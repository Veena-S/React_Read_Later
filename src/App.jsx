import React, { useState } from 'react';

import LinkInputForm from './components/LinkInputForm.jsx';
import LinkList from './components/LinkList.jsx';
import ReadLinks from './components/ReadLinks.jsx';

export default function App() {
  const [linksList, setLinksList] = useState([]);
  const [readLinksList, setReadLinksList] = useState([]);

  const updateLinksList = (newLinkSubmitted) => {
    setLinksList([...linksList, newLinkSubmitted]);
  };

  const addReadLink = (readLink, linkItemIndex) => {
    const updatedList = [...linksList];
    updatedList.splice(linkItemIndex, 1);
    setLinksList([...updatedList]);
    setReadLinksList([...readLinksList, readLink]);
  };

  return (
    <div>
      <LinkInputForm updateLinksList={updateLinksList} />
      <LinkList linksList={linksList} addReadLink={addReadLink} />
      <ReadLinks readLinksList={readLinksList} />
    </div>
  );
}
