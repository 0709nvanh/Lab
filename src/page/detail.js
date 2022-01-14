import FooterClient from "../client/footer";
import HeaderClient from "../client/header";
import { news } from "../data";

const DetailPage = {
    render(id) {
        const items = news.find((item) => item.id === id);
        const posts = news.filter((post) => post.id !== id);
        return /*html*/ `
            ${HeaderClient.render()}
            <div class="py-3 px-7">
                <a href="" class="font-bold text-3xl text-[#8d8d8d] hover:text-black duration-200">Tin tức</a>
                <div class="grid grid-cols-2 pt-3 px-5">
                    <div>
                        <img src="${items.img}" />
                    </div>
                    <div class="px-6">
                        <h2 class="font-semibold">${items.title}</h2>
                        <p class="py-3">${items.desc}</p>
                    </div>
                </div>
                <div class="pt-9">
                    <h3 class="uppercase text-2xl">Tin tức liên quan</h3>
                </div>
                <div class="grid grid-cols-5 gap-3 py-8">
                        ${posts.map((post) => /* html */`
                        <div class="border p-4">
                            <a href="">
                                <img src="${post.img}" alt="" />                    
                            </a>
                            <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-justify text-orange-500 text-lg hover:text-orange-700 duration-300">${post.title}</a></h3>
                            
                        </div>
                    `).join("")}
                </div>
            </div>
            ${FooterClient.render()}
        `
    }
};
export default DetailPage;