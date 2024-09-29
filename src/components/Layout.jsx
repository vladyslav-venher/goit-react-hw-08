import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div style={{ width: 1440, margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
