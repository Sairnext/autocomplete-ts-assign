import React from "react";

import Autocomplete from "../../components/Autocomplete";
import { AutocompleteData } from "../../components/Autocomplete/types";

import { getLanguages } from "../../api/mockData";

const App = () => {
    const parseDataForLanguages = (data: any[]): AutocompleteData[] => {
        if (data.length === 0) return [];

        return data.map((el) => ({
            label: el.label ? el.label : "",
            value: el.value ? el.value : "",
        }));
    };

    return (
        <div className="centred">
            <Autocomplete getData={getLanguages} parseData={parseDataForLanguages} />
        </div>
    );
};

export default App;
