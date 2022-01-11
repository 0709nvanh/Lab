import { action } from "../data"

const ActionList = {
    render(){
        return /*html*/`
        <h2 class="font-semibold text-2xl my-4 text-blue-900 uppercase">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${action.map((act) => /* html */`
                        <div class="border p-4">
                        <a href="">
                            <img src="${act.imag}" alt="" />                    
                        </a>
                        <h3 class="my-3"><a href="#" class="font-semibold text-orange-500 text-lg">${act.title}</a></h3>
                        <p class="text-sm text-gray-500">${act.text} </p>
                    </div>
                `).join("")}
            </div>
        `
    }
}
export default ActionList;