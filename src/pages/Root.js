import React, {Fragment} from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

function RootLayout() {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootLayout;