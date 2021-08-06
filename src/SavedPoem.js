import { useState, useEffect } from "react";
import firebase from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SavedPoem = () => {
  // state to hold all the saved poem to the firebase
  const [favourites, setFavourites] = useState([]);

  // useEffect to store favourite poem into the state.
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const myData = snapshot.val();
      const newArray = [];
      for (let item in myData) {
        const poemList = [item, [myData[item]]];
        newArray.push(poemList);
      }
      setFavourites(newArray);
    });
  }, []);

  // remove the poem from the saved list
  const removePoem = (poem) => {
    // Removing from the firebase
    const dbRef = firebase.database().ref();
    dbRef.child(poem).remove();
  };

  return (
    <>
      {/* Two mapping because it's into two layers of array */}
      {favourites.map((poem) => {
        const poemWords = poem[1][0];

        return (
          <ul key={poem[0]}>
            {poemWords.map((word) => {
              return (
                <li key={word}>
                  <p>{word}</p>
                </li>
              );
            })}
            <button
              aria-label="delete poem"
              className="deletePoem"
              onClick={() => removePoem(poem[0])}
            >
              <span>
                <FontAwesomeIcon className="faicons" icon="times" />
              </span>
            </button>
          </ul>
        );
      })}
    </>
  );
};

export default SavedPoem;
