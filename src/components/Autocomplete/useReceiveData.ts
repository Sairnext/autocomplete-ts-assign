import { useState, useEffect } from "react";

import useDebounce from "../../hooks/useDebounce";

import { AutocompleteData } from "./types";
type ReceiveProps = {
  getData: (inputValue: string, delay?: number) => Promise<unknown[]>;
  parseData: (data: unknown[]) => AutocompleteData[];
  inputValue?: string;
  delay?: number;
};

export const useReceiveData = ({
  getData,
  parseData,
  inputValue = "",
  delay = 300,
}: ReceiveProps): AutocompleteData[] => {
  const [data, setData] = useState<AutocompleteData[]>([]);
  const searchInput = useDebounce(inputValue, delay);

  useEffect(() => {
    getData(searchInput)
      .then(parseData)
      .then(setData)
      .catch(() => []);
  }, [searchInput]);

  return data;
};
