export const getTime = (time: number) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

export const getRandNumb = () => Math.floor((Math.random() * Math.random()) * 10) + 1