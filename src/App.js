import ThemeProvider from 'react-bootstrap/ThemeProvider';
import ContainerExample from './components/pages/container';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
 <ContainerExample></ContainerExample>
  </ThemeProvider>
    </>
  );
}

export default App;
