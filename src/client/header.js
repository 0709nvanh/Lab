import FooterClient from "./footer";

const HeaderClient = {
    render(){
        return  /*html*/`
        <div class="bg-blue-800 py-4">
            <a href="">
            <img src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png" alt="" class="mx-auto h-[40px] w-[75px]">
            </a>
        </div>
            <nav class="bg-[#ff6026] flex justify-between items-center box-border">
                <ul class="flex justify-center">
                    <li><a href="/" class="text-[#fff] block px-[20px] py-3 hover:text-blue-700 duration-300">Trang chủ</a></li>
                    <li><a href="/signin" class="text-[#fff] block px-[20px] py-3 hover:text-blue-700 duration-300">Đăng nhập</a></li>
                    <li><a href="/signup" class="text-[#fff] block px-[20px] py-3 hover:text-blue-700 duration-300">Đăng ký</a></li>
                    <li><a href="/admin/dashboard" class="text-[#fff] block px-[20px] py-3 hover:text-blue-700 duration-300">Admin</a></li>
                    <li><a href="/tuyendung" class="text-[#fff] block px-[20px] py-3 hover:text-blue-700 duration-300">Tuyển dụng</a></li>
                </ul>
                <div class="search center py-3 pr-[32px] flex justify-between">
                    <input type="text" class="outline-none px-2 border border-transparent rounded-md" placeholder="Tim kiem...">
                    <div class="pl-[30px]">
                        <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Tim kiem</button>
                    </div>
                 </div>
            </nav>

        `
    }
}
export default HeaderClient;