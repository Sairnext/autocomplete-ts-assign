import React from "react";

import OptionsListInfo from "../OptionsListInfo";
import { AutocompleteData } from "../../types";

import "./index.css";

interface OptionsProps {
  data: AutocompleteData[];
  inputValue: string;
  onOptionClick: (optionLabel: string) => void;
}

const OptionsList: React.FC<OptionsProps> = ({
  data,
  onOptionClick,
  inputValue,
}) => {
  const renderLabel = (label: string, search: string) => {
    if (label) {
      const startBold = label.toLowerCase().indexOf(search.toLowerCase());
      const endBold = startBold + search.length;

      if (startBold === -1 || endBold === -1) return <span>{label}</span>;

      const renderParts = [
        <span>{label.slice(0, startBold)}</span>,
        <span className="bold">{label.slice(startBold, endBold)}</span>,
        <span>{label.slice(endBold)}</span>,
      ];

      return renderParts;
    }
    return "";
  };

  return (
    <div className="options-list">
      <OptionsListInfo data={data} inputValue={inputValue} />
      {data.map((item, id) => (
        <div
          className="options-list__option"
          key={id}
          onClick={() => {
            onOptionClick(item.label);
          }}
        >
          {renderLabel(item.label, inputValue)}
        </div>
      ))}
    </div>
  );
};

export default OptionsList;
