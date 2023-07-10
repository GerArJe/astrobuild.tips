export const formatDate = (time: string): string => {
    const event = new Date(time);
    const date = event.toDateString();
    return date;
} 