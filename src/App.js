import { useState, useEffect, useRef } from "react";

import "./App.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";
import { useSearchBox } from "react-instantsearch-hooks";
import { useHits } from "react-instantsearch-hooks";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const searchClient = algoliasearch(
  "OKWV8IAMQ2",
  "ba70c9f3ae51485845a9e4fc4d05480a"
);

export function SearchBox(props) {
  const { query, refine } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  function handleReset(event) {
    event.preventDefault();
    event.stopPropagation();

    setInputValue("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  // Track when the value coming from the React state changes to synchronize
  // it with InstantSearch.
  useEffect(() => {
    if (query !== inputValue) {
      refine(inputValue);
    }
  }, [inputValue, refine, query]);

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  useEffect(() => {
    // Bypass the state update if the input is focused to avoid concurrent
    // updates when typing.
    if (document.activeElement !== inputRef.current && query !== inputValue) {
      setInputValue(query);
    }
  }, [query, inputValue]);

  return (
    <div className="">
      <form
        action=""
        className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        noValidate
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-center"
            for="username"
          >
            Search actors
          </label>
          <input
            ref={inputRef}
            className="ais-SearchBox-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            placeholder="example : Whoopi Goldberg"
            spellCheck={false}
            maxLength={512}
            type="search"
            value={inputValue}
            onChange={(event) => setInputValue(event.currentTarget.value)}
          />
        </div>
      </form>
    </div>
  );
}

export function Hits({ hitComponent: Hit }) {
  const { hits } = useHits();

  return (
    <div className="bg-cover bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')]  min-h-screen w-full flex justify-center items-center">
      <section className="py-20 w-[80%] min-h-[800px] ml-auto mr-auto">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap mx-auto  mb-12">
            {hits.map((hit) => (
              <Hit hit={hit} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Hit({ hit }) {
  return (
    <div className="w-full md:w-[45%] lg:w-[30%] px-4 mb-8 ml-auto mr-auto p-6 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-lg">
      <article className="">
        <h1 className="text-center text-white font-semibold">{hit.name}</h1>
        <p className="text-center mt-5">Rating : {hit.rating}</p>
      </article>
    </div>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <InstantSearch searchClient={searchClient} indexName="actors-name-test">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
      <Footer />
    </>
  );
}

export default App;
