import { createContext, useState } from "react";
import CardBox from "./CardBox";
import Complete from "./Complete";
import FormBox from "./FormBox";

export const MainContext = createContext();

const ContainBox = () => {
  const [show, setShow] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [CVC, setCVC] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardNumberError, setCardNumberError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleInputChange = (e) => {
    let inputText = e.target.value;

    // Remove any non-numeric characters and spaces
    inputText = inputText.replace(/[^\d]/g, "");

    // Format the input with spaces every four digits
    const formattedNumber = inputText.replace(/(\d{4}(?!\s))/g, "$1 ").trim();

    setCardNumber(formattedNumber);
    setCardNumberError(false);
  };

  return (
    <div className="container">
      <MainContext.Provider
        value={{
          cardNumber,
          handleInputChange,
          CVC,
          setCVC,
          handleSubmit,
          name,
          setName,
          year,
          setYear,
          month,
          setMonth,
          setShow,
          show,
          cardNumberError,
          setCardNumberError
        }}
      >
        <CardBox />
        {show ? <Complete /> : <FormBox /> }
        
        {/* <Complete /> */}
      </MainContext.Provider>
    </div>
  );
};

export default ContainBox;
