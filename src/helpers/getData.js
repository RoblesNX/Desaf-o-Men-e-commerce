import stock from "../data/data";

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000);
    })
}

export default getData