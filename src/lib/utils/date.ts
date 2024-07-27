export function toLocalDate(date:string): string {
    let utcDate = new Date(date);
    return utcDate.toLocaleString();
}