import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrganizationDataPublic } from 'store/slices/organization';
import Header from 'components/Header';
import Footer from 'components/Footer';
import RouteList from './routes';
import './App.css';
import { GlobalStyles } from './global';
import { theme } from './theme';
const toastOptions = {
  duration: 900,
};
function App() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.organization);
  useEffect(() => {
    dispatch(fetchOrganizationDataPublic(1));
  }, [dispatch]);
  useEffect(() => { // This change the name of the page when reducer updates
    document.title = list.name;
  });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Toaster
          toastOptions={toastOptions}
        />
        <RouteList />
        <Footer />
      </>
    </ThemeProvider>
  );
}
export default App;
