import { news } from "../../../data";

const UpdateNews = {
    render(id){
        const result = news.find((item) => item.id === id);
        return /*html*/`
                        <div class="min-h-full">
                            <nav class="bg-gray-800">
                                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div class="flex items-center justify-between h-16">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0">
                                                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                                            </div>
                                            <div class="hidden md:block">
                                                <div class="ml-10 flex items-baseline space-x-4">
                                                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                                    <a href="/admin/dashboard" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Thống kế</a>
                                    
                                                    <a href="/admin/news" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tin Tức</a>
                                    
                                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Hoạt động</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>

                            <header class="bg-white shadow">
                                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    <h1 class="text-3xl font-bold text-gray-900">
                                        Chỉnh sửa bài tin tức
                                    </h1>
                                </div>
                            </header>
                            <main>
                                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                                    <!-- Replace with your content -->
                                    <div class="px-4 py-6 sm:px-0">
                                        <div class="border-4 border-dashed border-gray-200 rounded-lg h-[500px]">
                                            <div class="px-4 py-3">
                                                <div class="md:grid md:grid-cols-3 md:gap-6">
                                                    <div class="md:col-span-1">
                                                        <div class="px-4 sm:px-0">
                                                            <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                                                            <p class="mt-1 text-sm text-gray-600">
                                                                This information will be displayed publicly so be careful what you share.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-5 md:mt-0 md:col-span-2">
                                                        <form action="#" method="POST">
                                                            <div class="shadow sm:rounded-md sm:overflow-hidden">
                                                                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                                    <div class="">
                                                                        <div class="col-span-3 sm:col-span-2">
                                                                            <div class="">
                                                                                <label for="about" class="block text-sm font-medium text-gray-700">
                                                                                    Tiêu đề
                                                                                </label>    
                                                                                <div class="mt-1">
                                                                                    <input id="about" name="about" value="${result.title}" class="max-w-none p-3 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Enter new title..."/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                    
                                                                    <div>
                                                                        <label for="about" class="block text-sm font-medium text-gray-700">
                                                                            Mô tả
                                                                        </label>
                                                                        <div class="mt-1">
                                                                            <textarea id="about" name="about" rows="3" class="p-3 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Enter new description...">${result.desc}</textarea>
                                                                        </div>
                                                                    </div>
                                                    
                                                                    <div>
                                                                        <label class="block text-sm font-medium text-gray-700">
                                                                            Upload ảnh
                                                                        </label>
                                                                        <div class="justify-center pt-5 pb-6">
                                                                            <img src="${result.img}" class="h-[200px] w-[300px]">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                                        Lưu
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /End replace -->
                                </div>
                            </main>
                        </div>
                    
        `
    }
}
export default UpdateNews;