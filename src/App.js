import './App.css';
import LottoNumbers from './LottoNumbers';
function App() {
  return (
    <div className="App">
      <div>
        <LottoNumbers />
        <LottoNumbers title="Mini Daily" numQuantity={4} maxNum={10} />
      </div>
    </div>
  );
}

export default App;
