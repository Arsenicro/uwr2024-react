export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export const randomDelay = () => Math.floor(Math.random() * 1000);
