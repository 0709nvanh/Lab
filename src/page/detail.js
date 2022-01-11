import { news } from "../data";

const DetailPage = {
    render(id) {
        const items = news.find((item) => item.id === id)
        return /*html*/ `
            <div>
                <h2>${items.title}</h2>
                <img src="${items.img}" />
                <p>${items.desc}</p>
            </div>
        `
    }
};
export default DetailPage;