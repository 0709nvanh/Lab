import FooterClient from "../client/footer";
import HeaderClient from "../client/header";

const SignIn = {
    render() {
        return /*html*/ `
            ${HeaderClient.render()}
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div>
                        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
                            Đăng nhập tài khoản
                        </h2>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true">
                        <div class="rounded-md shadow-sm -space-y-px">
                            <div class="py-3">
                                <div class="py-[5px]">
                                    <label for="email-address" class="text-[#333] font-semibold">Email</label>
                                </div>
                                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
                            </div>
                            <div class="py-3">
                                <div class="py-[5px]">
                                    <label for="password" class="text-[#333] font-semibold">Mật khẩu</label>
                                </div>
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu">
                            </div>
                            <div class="flex items-center justify-between py-6">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div class="text-sm">
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>
                            <div class="py-2">
                                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    </svg>
                                    </span>
                                    Đăng nhập
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            ${FooterClient.render()}
        `
    }
}
export default SignIn;