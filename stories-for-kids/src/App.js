import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import MyNavbar from './components/MyNavbar';
import MyAnim from './components/MyAnim';
import Home from './components/Home';
import Settings from './components/Settings';
import Store from './redux/Store';
import { Provider } from 'react-redux';

function App() {

  const darkTheme = createTheme({
    type: 'dark',
  });

  return (
    <div className="App">
      <Provider store={Store}>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            dark: darkTheme.className
          }}
        >
          <NextUIProvider>
            <Router>
              <MyNavbar />
              <Routes>
                <Route path='/' element={<MyAnim />} />
                <Route path='/home' element={<Home />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </Router>
          </NextUIProvider>
        </NextThemesProvider>
      </Provider>
    </div>
  );
}

export default App;