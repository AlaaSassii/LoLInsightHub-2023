export const abilityImage = (name: string): string => `http://ddragon.leagueoflegends.com/cdn/13.18.1/img/spell/${name}`
export const passiveImage = (name: string): string => `http://ddragon.leagueoflegends.com/cdn/13.18.1/img/passive/${name}_P.png`
export const formatArrayToSentence = (arr: string[]): string => {
    const length = arr.length;
    if (length === 0) {
        return '';
    } else if (length === 1) {
        return arr[0];
    } else if (length === 2) {
        return `${arr[0]} and ${arr[1]}`;
    } else {
        const lastItem = arr[length - 1];
        const restItems = arr.slice(0, length - 1).join(', ');
        return `${restItems}, and ${lastItem}`;
    }
};