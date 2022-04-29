import React, { useState } from "react";
import "./calculadora.css";

export const Calculadora = () => {
  const [resultado, setResultado] = useState("");

  const eliminar = () => {
    setResultado("");
  };

  const clear = () => {
    setResultado(resultado.slice(0, -1));
  };

  const onChange = (e) => {
    setResultado(resultado.concat(e.target.name));
  };

  const calcular = () => {
    try {
      setResultado(eval(resultado).toString());
    } catch (error) {
      setResultado("Error");
    }
  };

  return (
    <>
      <div className="autor">GDcode</div>
      <div className="container">
        <div className="main">
          <div>
            <input
              type="text"
              placeholder="0"
              value={resultado}
              className="input"
            />
          </div>
          <div className="row1">
            <button className="btn del color" onClick={eliminar}>
              Del
            </button>
            <button className="btn color" onClick={clear}>
              C
            </button>
            <button className="btn color" onClick={onChange}>
              %
            </button>
          </div>
          <div className="row2">
            <button className="btn" name="7" onClick={onChange}>
              7
            </button>
            <button className="btn" name="8" onClick={onChange}>
              8
            </button>
            <button className="btn" name="9" onClick={onChange}>
              9
            </button>
            <button className="btn color" name="+" onClick={onChange}>
              +
            </button>
          </div>
          <div className="row3">
            <button className="btn" name="4" onClick={onChange}>
              4
            </button>
            <button className="btn" name="5" onClick={onChange}>
              5
            </button>
            <button className="btn" name="6" onClick={onChange}>
              6
            </button>
            <button className="btn color" name="-" onClick={onChange}>
              -
            </button>
          </div>
          <div className="row4">
            <button className="btn" name="1" onClick={onChange}>
              1
            </button>
            <button className="btn" name="2" onClick={onChange}>
              2
            </button>
            <button className="btn" name="3" onClick={onChange}>
              3
            </button>
            <button className="btn color" name="*" onClick={onChange}>
              *
            </button>
          </div>
          <div className="row5">
            <button className="btn" name="0" onClick={onChange}>
              0
            </button>
            <button className="btn" name="." onClick={onChange}>
              .
            </button>
            <button className="btn color" onClick={calcular}>
              =
            </button>
            <button className="btn color" name="/" onClick={onChange}>
              /
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
