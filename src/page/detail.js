import { news } from "../data";

const DetailPage = {
    render(id) {
        const items = news.find((item) => item.id === id)
        const posts = news.filter((post) => post.id !== id)
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
                <div class="grid grid-cols-5 gap-3">
                        ${posts.map((post) => /* html */`
                        <div class="border p-4">
                            <a href="">
                                <img src="${post.img}" alt="" />                    
                            </a>
                            <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                            <p class="text-sm text-gray-500">${post.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        `
    }
};
export default DetailPage;