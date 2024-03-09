import logo from './logo.svg';
import './App.css';
import { RecoilRoot } from 'recoil';
import Counter from './recoil/components/Counter';
import Display from './recoil/components/Display';

function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>Recoil Example</h1>
        <Counter />
        <Display />
      </div>
    </RecoilRoot>
  );
}

export default App;
