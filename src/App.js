import logo from "./logo.svg";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`,
      };
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer , {})    
  return (
    <div className="calculator-grid">
      <div className="output">
        <div data-previous-operand className="previous-operand">
          {" "}
          {previousOperand} {operation}{" "}
        </div>
        <div data-current-operand className="current-operand">
          {" "}
          {currentOperand}{" "}
        </div>
      </div>
      <button data-all-clear className="span-two">
        AC
      </button>
      <button data-delete>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button data-equals className="span-two"> =</button>
    </div>
  );
}

export default App;
