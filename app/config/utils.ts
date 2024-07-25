export const titleFormat = (value: string, separator: string) => {
   return value
      .replace("%3A", ":")
      .split(separator)
      .map((word: string) => firstUppercase(word))
      .join(" ");
};

const firstUppercase = (val: string) => {
   const firstLetter = val[0].toUpperCase();
   const slices = val.slice(1);

   const newWord = firstLetter + slices;
   return newWord;
};
