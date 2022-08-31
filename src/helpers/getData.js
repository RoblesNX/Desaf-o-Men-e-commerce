import { stock } from "../data/data";

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000);
    })
}