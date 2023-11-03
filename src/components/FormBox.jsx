import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "./ContainBox";
const FormBox = () => {
  // const inputName = useRef(null);
  // const inputMonth = useRef(null);
  // const inputYear = useRef(null);
  // const inputCVC = useRef(null);
  // const inputNum = useRef(null);
  const inputRefs = {
    inputName: useRef(null),
    inputMonth: useRef(null),
    inputYear: useRef(null),
    inputCVC: useRef(null),
    inputNum: useRef(null),
  };

  const { inputName, inputMonth, inputYear, inputCVC, inputNum } = inputRefs;

  const [expDateError, setExpDateError] = useState(null);
  const [cvcError, setCvcError] = useState(null);
  const {
    name,
    cardNumber,
    handleInputChange,
    handleSubmit,
    CVC,
    setCVC,
    month,
    setMonth,
    year,
    setYear,
    setName,
    setShow,
    show,
    cardNumberError,
    setCardNumberError,
  } = useContext(MainContext);

  useEffect(() => {
    function enterKey(e) {
      if (e.key === "Enter") {
        handleConfirm();
      }
    }
    // Add an event listener to the document
    document.addEventListener("keyup", enterKey);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keyup", enterKey);
    };
  }, [name, CVC, year, month, cardNumber]);

  useEffect(() => {
    inputName.current.focus();
  }, [show]);

  function handleErrorMessage(inputValue, setErrorState, fieldName) {
    const errorMessage = inputValue === "" ? fieldName : null;
    setErrorState(errorMessage);
  }

  function handleConfirm() {
    if (
      name === "" ||
      cardNumber === "" ||
      month === "" ||
      year === "" ||
      CVC === ""
    ) {
      if (name === "") {
        inputName.current.focus();
      } else if (cardNumber === "") {
        inputNum.current.focus();
      } else if (CVC === "") {
        inputCVC.current.focus();
      } else if (month === "") {
        inputMonth.current.focus();
      } else if (year === "") {
        inputYear.current.focus();
      }
      setShow(false);
    } else {
      setShow(true);
    }
    handleErrorMessage(
      cardNumber,
      setCardNumberError,
      "wrong format, number only"
    );
    handleErrorMessage(year, setExpDateError, "Can't be blank");
    handleErrorMessage(CVC, setCvcError, "Can't be blank");
  }

  return (
    <div className="right-box">
      <div className="main-form">
        <form action="" className="body-form" onSubmit={handleSubmit}>
          <div className="box-form">
            <label htmlFor="">Cardholder Name</label>
            <input
              ref={inputName}
              type="text"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setName(e.target.value)}
              maxLength={16}
            />
          </div>

          <div className="box-form">
            <label htmlFor="">Card Number</label>
            <input
              ref={inputNum}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              // required
              maxLength={19}
              value={cardNumber}
              onChange={handleInputChange}
            />
            <span>{cardNumberError}</span>
          </div>

          <div className="box-form">
            <div className="box-form-2">
              <label htmlFor=""> EXP. DATE (MM/YY)</label>
              <input
                ref={inputMonth}
                type="text"
                placeholder="MM"
                value={month}
                onChange={(e) => {
                  const inputNum = e.target.value;
                  setMonth(inputNum.replace(/[^\d]/g, ""));
                  setExpDateError(false);
                }}
                maxLength={2}
              />
              <input
                ref={inputYear}
                type="text"
                name=""
                id="space"
                placeholder="YY"
                value={year}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setYear(inputValue.replace(/[^\d]/g, ""));
                  setExpDateError(false);
                }}
                maxLength={2}
              />
              <span>{expDateError}</span>
            </div>

            <div className="box-form-3">
              <label htmlFor="">CVC</label>
              <input
                ref={inputCVC}
                type="text"
                name=""
                id=""
                placeholder="e.g. 123"
                maxLength={3}
                // required
                value={CVC}
                onChange={(e) => {
                  const inputNum = e.target.value;
                  setCVC(inputNum.replace(/[^\d]/g, ""));
                  setCvcError(false);
                }}
              />

              <span>{cvcError}</span>
            </div>
          </div>

          <button className="btn-confirm" onClick={handleConfirm}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormBox;
