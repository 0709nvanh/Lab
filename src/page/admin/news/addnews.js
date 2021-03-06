import NavAdmin from "../../../component/navadmin";
const AddNews = {
    render(){
        return /*html*/`
                  <div class="min-h-full">
                    ${NavAdmin.render()}
                      <header class="bg-white shadow">
                        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <!-- This example requires Tailwind CSS v2.0+ -->
                            <div class="lg:flex lg:items-center lg:justify-between">
                              <div class="flex-1 min-w-0">
                                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                  Thêm mới bài viết
                                  </h2>
                              </div>
                              <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                <a href="/admin/news" class="sm:ml-3">
                                  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                      </svg>
                                      Quay lại
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </header>
                    <main>
                        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                            <!-- Replace with your content -->
                            <div class="px-4 py-6 sm:px-0">
                                <div class="border-4 border-dashed border-gray-200 rounded-lg">
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
                                                  <input id="about" name="about" class="max-w-none p-3 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Enter new title..."/>
                                                </div>
                                                </div>
                                              </div>
                                            </div>
                                
                                            <div>
                                              <label for="about" class="block text-sm font-medium text-gray-700">
                                                Mô tả
                                              </label>
                                              <div class="mt-1">
                                                <textarea id="about" name="about" rows="3" class="p-3 outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Enter new description..."></textarea>
                                              </div>
                                            </div>
                                
                                            <div>
                                              <label class="block text-sm font-medium text-gray-700">
                                                Upload ảnh
                                              </label>
                                              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div class="space-y-1 text-center">
                                                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                  </svg>
                                                  <div class="flex text-sm text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                      <span>Upload a file</span>
                                                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                  </div>
                                                  <p class="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                              Save
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <!-- /End replace -->
                        </div>
                    </main>
              </div>
        
      </div>
      
      </div>
        `
    }
}
export default AddNews;