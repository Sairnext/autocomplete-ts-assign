import React, { useMemo } from "react";

import { NO_RESULTS_VALUE } from "../../constants";
import { AutocompleteData } from "../../types";

interface OptionsListInfoProps {
  data: AutocompleteData[];
  inputValue: string;
}

const OptionsListInfo: React.FC<OptionsListInfoProps> = ({
  data,
  inputValue,
}) => {
  const showNoResults = useMemo<boolean>(() => {
    return data.length === 0 && inputValue.length > 0;
  }, [data, inputValue]);

  return showNoResults ? (
    <div className="options-list__info">{NO_RESULTS_VALUE}</div>
  ) : null;
};

export default OptionsListInfo;
