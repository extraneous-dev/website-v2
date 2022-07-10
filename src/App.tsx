import { Component, createResource, Resource, ResourceReturn, Suspense } from 'solid-js';

import NavBar from './Components/NavBar';
import logo from './logo.svg';
import styles from './App.module.css';
import NavBarBlogType from './Components/NavBarBlogType';
import { Route, Routes } from 'solid-app-router';
import ViewAllDesignGalleriesPage from './Pages/ViewAllDesignGalleries';
import ViewDesignGalleryPage from './Pages/ViewDesignGallery';
import ViewAllPostsPage from './Pages/ViewAllPosts';
import HomePage from './Pages/HomePage';

const App: Component = () => {
  return (
    <>
      <NavBar />
      <NavBarBlogType />
      <Routes>
      <Route path='/' component={HomePage} />
      <Route path='/design-gallery/:id' component={ViewDesignGalleryPage} />

      <Route path='/design-galleries' component={ViewAllDesignGalleriesPage} />
      <Route path='/projects' component={ViewAllPostsPage} />
      </Routes>

    </>
  );
};

export default App;
