export const formatUnixTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export const formatTimestamp = (timestamp: number, isMilliseconds = false): string => {
    const milliseconds = isMilliseconds ? timestamp : timestamp * 1000;
    const date = new Date(milliseconds);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};