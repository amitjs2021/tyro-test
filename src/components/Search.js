import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
// import debounce from "lodash.debounce";
import useDebounce from "./useDebounce";

const Search = () => {
    const { query, setQuery, error } = useGlobalContext();
    const [val, setVal] = useState(query);

    const debouncedVal = useDebounce(val, 1000);

    useEffect(() => {
        if (debouncedVal) {
            setQuery(debouncedVal);
        }
    }, [setQuery, debouncedVal]);

    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <h2>search movies debouce(1s)</h2>
            <input
                type="text "
                className="form-input"
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    );
};

export default Search;
