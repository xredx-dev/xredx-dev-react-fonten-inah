import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import Inventario from './pages/Inventario';

function App() {
  return (
    <NextUIProvider>
      <Inventario/>
    </NextUIProvider>
  );
}

export default App;
