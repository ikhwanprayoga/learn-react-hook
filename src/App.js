import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookArray from './components/HookArray';
import HookUseEffectOne from './components/HookUseEffectOne';
import HookUseEffectConditional from './components/HookUseEffectConditional';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookArray /> */}
      {/* <HookUseEffectOne /> */}
      <HookUseEffectConditional />
    </div>
  );
}

export default App;
