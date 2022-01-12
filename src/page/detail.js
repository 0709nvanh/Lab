import { news } from "../data";

const DetailPage = {
    render(id) {
        const items = news.find((item) => item.id === id)
        return /*html*/ `
            <div class="py-3 px-7">
                <a href="" class="font-bold text-3xl text-[#8d8d8d] hover:text-black duration-200">Tin tức</a>
                <div class="grid grid-cols-2 pt-3 px-5">
                    <div>
                        <img src="${items.img}" />
                    </div>
                    <div class="px-3">
                        <h2 class="font-semibold">${items.title}</h2>
                        <p class="py-3">${items.desc}</p>
                    </div>
                </div>
            </div>
        `
    }
};
export default DetailPage;