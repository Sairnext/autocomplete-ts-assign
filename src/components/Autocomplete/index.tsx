import React, { useState } from "react";

import OptionsList from "./components/OptionsList";

import { useReceiveData } from "./useReceiveData";

import { AutocompleteData } from "./types";
import { DEFAULT_PLACEHOLDER } from "./constants";

import "./index.css";

interface AutocompleteProps {
    getData: (inputValue: string, delay?: number) => Promise<unknown[]>;
    parseData: (data: unknown[]) => AutocompleteData[];
    placeholder?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ getData, parseData }) => {
    const [inputValue, setInput] = useState("");
    const [showSuggestion, setShowSuggestions] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.currentTarget.value;

        setInput(inputValue);
    };

    const onOptionClick = (optionLabel: string) => {
        if (optionLabel) setInput(optionLabel);

        setShowSuggestions(false);
    };

    const data = useReceiveData({
        getData,
        parseData,
        inputValue,
    });

    return (
        <div className="autocomplete__holder">
            <input
                className="auto_complete_input"
                type="text"
                value={inputValue}
                onInput={handleInputChange}
                placeholder={DEFAULT_PLACEHOLDER}
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestion && inputValue.length > 0 ? (
                <OptionsList
                    data={data}
                    inputValue={inputValue}
                    onOptionClick={onOptionClick}
                />
            ) : null}
        </div>
    );
};

export default Autocomplete;
