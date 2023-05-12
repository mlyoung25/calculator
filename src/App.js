import logo from './logo.svg';
import './App.css';
import "./styles.css";

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div data-previous-operand className="previous-operand"> 1234</div>
        <div data-current-operand className="current-operand"> 123457098</div>
      </div>
      <button data-all-clear className="span-two">AC</button>
      <button data-delete>DEL</button>
      <button data-operation>÷</button>
      <button data-number>9</button>
      <button data-number>8</button>
      <button data-number>7</button>
      <button data-operation>*</button>
      <button data-number>6</button>
      <button data-number>5</button>
      <button data-number>4</button>
      <button data-operation>-</button>
      <button data-number>3</button>
      <button data-number>2</button>
      <button data-number>1</button>
      <button data-operation>+</button>
      <button data-number>.</button>
      <button data-number>0</button>
      <button data-equals className="span-two">=</button>
    </div>     
  );
}

export default App;
