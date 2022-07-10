import { Component, createResource, Suspense } from 'solid-js';

import NavBar from './Components/NavBar';
import logo from './logo.svg';
import styles from './App.module.css';

type Post = {
  name: string
}

const fetchContents = async () => {
  const req = await fetch('/api/design-galleries/62ca627ba4a53ca7cbfda15d');
  const res = await req.json();
  
  return res;
}
const App: Component = () => {
  const [post] = createResource(1, fetchContents);
  return (
    <>
    <NavBar />
    <nav>
        <ul>
          <li>Projects</li>
          <li>Design Concepts</li>
        </ul>
      </nav>
      <h1>Projects</h1>
      {!post().loading && <>
        <h1>{JSON.stringify(post().title)}</h1>
      
      </>}
    </>
  );
};

export default App;
