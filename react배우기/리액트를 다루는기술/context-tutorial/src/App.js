import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
function App() {
  return (
    <ColorProvider>
      <>
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </>
    </ColorProvider>
  );
}

export default App;
