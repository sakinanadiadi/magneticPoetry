import { useEffect } from "react";
import axios from "axios";

// destructuring state/s and set functions from props
const DisplayWords = (props) => {
  const { userSearchTerm, yourPoem, setYourPoem, setWords, words } = props;

  // calling the API for thematic words on user submit
  useEffect(() => {
    axios({
      url: "https://api.datamuse.com/words",
      method: "GET",
      dataResponse: "json",
      params: {
        rel_trg: userSearchTerm,
        max: 40,
      },
    }).then((res) => {
      const data = res.data;
      // mapping the API data to produce an array
      const wordsArray = data.map((wordObj) => {
        return wordObj.word;
      });
      setWords(wordsArray);
    });
  }, [userSearchTerm, setWords]);

  // adding a word to the Poem on click
  function addWordToPoem(word) {
    const newPoem = [...yourPoem, word];
    setYourPoem(newPoem);
    // removes word from current array of themed words
    const oldWordsArr = [...words];
    const filteredArr = oldWordsArr.filter((arrWord) => arrWord !== word);
    setWords(filteredArr);
  }

  // keyboard accessibility to add words to poem when 'Enter' is pushed
  function handleKeyPress(e, word) {
    if (e.charCode === 13) {
      addWordToPoem(word);
    }
  }

  return (
    <ul>
      {/* Themed words are mapped here */}
      {words.map((word) => {
        return (
          <li
            key={word}
            onClick={() => addWordToPoem(word)}
            onKeyPress={(e) => handleKeyPress(e, word)}
            tabIndex="0"
          >
            <p>{word}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayWords;
