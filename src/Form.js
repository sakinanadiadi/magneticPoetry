import { useEffect, useState } from "react";
import axios from "axios";

function Form(props) {
  const { setUserSearchTerm, setFunctionsDisplayed } = props;

  // Creating a state to hold the userInputs.
  const [userInput, setUserInput] = useState("");

  // Creating a state to hold the word auto completion
  const [autoComplete, setAutoComplete] = useState([]);

  // Useeffect for calling an API for the autoComplete endpoint
  useEffect(() => {
    if (userInput !== "") {
      axios({
        url: "https://api.datamuse.com/sug",
        method: "GET",
        dataResponse: "json",
        params: {
          s: userInput,
          max: "6",
        },
      }).then((res) => {
        setAutoComplete(res.data);
      });
    }
  }, [userInput]);

  // Event listner for the user input
  const inputHandleChange = (event) => {
    setUserInput(event.target.value);
  };

  // Event listner for the submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // making a function to check if the users are putting more then one word or number then give them an alert message
    const checkUserInput = /[^a-z]+/i;
    if (userInput === "") {
      alert("Please enter a word or choose some of our themes!");
    } else if (checkUserInput.test(userInput)) {
      alert("Please write one word only!");
    } else {
      setUserSearchTerm(userInput);
      setFunctionsDisplayed(true);
      setUserInput("");
    }
  };

  // Function for all the themes buttons so that it can caputre that value and display results for different theme buttons
  const handleClick = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="searchLabel">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="searchInput"
          onChange={inputHandleChange}
          list="autoCompleteSuggestions"
          value={userInput}
        />
        {/* For autoComplete */}
        <datalist id="autoCompleteSuggestions">
          {autoComplete.map((suggestion, index) => {
            return <option value={suggestion.word} key={index}></option>;
          })}
        </datalist>
        <button className="search magnet" type="submit">
          Search
        </button>
      </div>

      {/* Theme buttons */}

      <div className="allThemeButtons">
        <button
          className="halloween magnet"
          onClick={handleClick}
          value="halloween"
        >
          halloween
        </button>
        <button
          className="christmas magnet"
          onClick={handleClick}
          value="christmas"
        >
          Christmas
        </button>
        <button
          className="animals magnet"
          onClick={handleClick}
          value="animals"
        >
          Animals
        </button>
        <button
          className="technology magnet"
          onClick={handleClick}
          value="technology"
        >
          Technology
        </button>
      </div>
    </form>
  );
}

export default Form;
