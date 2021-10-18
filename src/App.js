import './App.css';
import LottoNumbers from './LottoNumbers';
function App() {
  return (
    <div className="App">
      <div>
        <LottoNumbers />
        <LottoNumbers title="Mini Daily" numQuantity={4} maxNum={10} />
        <LottoNumbers title="Mega Daily" numQuantity={10} maxNum={100} />
      </div>
    </div>
  );
}

export default App;
