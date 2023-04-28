// Data is taken from https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers
interface LanguagesItem {
    value: number;
    label: string;
}

const LANGUAGES: LanguagesItem[] = [
    {
        value: 0,
        label: "English",
    },
    {
        value: 1,
        label: "Hindi",
    },
    {
        value: 2,
        label: "Spanish",
    },
    {
        value: 3,
        label: "French",
    },
    {
        value: 4,
        label: "Modern Standard Arabic",
    },
    {
        value: 5,
        label: "Portuguese",
    },
    {
        value: 6,
        label: "Urdu",
    },
    {
        value: 7,
        label: "Indonesian",
    },
    {
        value: 8,
        label: "Standard German",
    },
    {
        value: 9,
        label: "Japanese",
    },
    {
        value: 10,
        label: "Nigerian Pidgin",
    },
    {
        value: 11,
        label: "Marathi",
    },
    {
        value: 12,
        label: "Telugu",
    },
    {
        value: 13,
        label: "Turkish",
    },
    {
        value: 14,
        label: "Tamil",
    },
    {
        value: 15,
        label: "Yue Chinese",
    },
    {
        value: 16,
        label: "Vietnamese",
    },
    {
        value: 17,
        label: "Tagalog[b]",
    },
    {
        value: 18,
        label: "Wu Chinese",
    },
    {
        value: 19,
        label: "Korean",
    },
    {
        value: 20,
        label: "Iranian Persian",
    },
    {
        value: 21,
        label: "Hausa",
    },
    {
        value: 22,
        label: "Egyptian Spoken Arabic",
    },
    {
        value: 23,
        label: "Swahili",
    },
    {
        value: 24,
        label: "Javanese",
    },
    {
        value: 25,
        label: "Italian",
    },
    {
        value: 26,
        label: "Western Punjabi",
    },
    {
        value: 27,
        label: "Kannada",
    },
    {
        value: 28,
        label: "Gujarati",
    },
    {
        value: 29,
        label: "Thai",
    },
    {
        value: 30,
        label: "Amharic",
    },
    {
        value: 31,
        label: "Bhojpuri",
    },
    {
        value: 32,
        label: "Eastern Punjabi",
    },
    {
        value: 33,
        label: "Min Nan Chinese",
    },
    {
        value: 34,
        label: "Jin Chinese",
    },
    {
        value: 35,
        label: "Yoruba",
    },
    {
        value: 36,
        label: "Hakka Chinese",
    },
    {
        value: 37,
        label: "Burmese",
    },
    {
        value: 38,
        label: "Sudanese Spoken Arabic",
    },
    {
        value: 39,
        label: "Polish",
    },
    {
        value: 40,
        label: "Algerian Spoken Arabic",
    },
    {
        value: 41,
        label: "Lingala",
    },
    {
        value: 42,
        label: "Mandarin Chinese",
    },
    {
        value: 43,
        label: "Arabic",
    },
    {
        value: 44,
        label: "Bengali",
    },
    {
        value: 45,
        label: "Russian",
    },
];

export const getLanguages = (search: string): Promise<LanguagesItem[]> =>
    new Promise((resolve) => {
        if (search === "") resolve([]);
        resolve(
            LANGUAGES.filter((el) =>
                el.label.toLowerCase().includes(search.toLowerCase())
            )
        );
    });

// Here we can create additional function to request data from remote api.s
