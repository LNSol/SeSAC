import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import loadable from '@loadable/component';
import Layout from '@layouts/index';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { CloseButton } from '@components/MainModal';

const Home = loadable(() => import('@pages/Home'));

const App = () => {
  return (
    <Layout>
      <Switch>{/*<Route path={'/'} component={Home} />*/}</Switch>
    </Layout>
  );
};

export default App;
