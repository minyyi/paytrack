import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/layout/Layout';
import Home from './page/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
