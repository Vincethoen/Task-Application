import { useState } from 'react';
import './CSS/App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App
