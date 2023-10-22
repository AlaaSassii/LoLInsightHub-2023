export const replaceRandomLetters = (input: string): string => {
    const replacedString = input.split('').map((char) => {
        if (char !== ' ' && Math.random() < 0.5) {
            return '_';
        }
        return char;
    }).join('');
    return replacedString;
};
