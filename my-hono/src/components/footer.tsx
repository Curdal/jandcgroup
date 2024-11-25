export const AppFooter = (() => {
    return (
        <footer class="bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-10">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center py-4 space-x-2 font-extrabold text-white md:py-0">
                        <span class="flex items-center justify-center w-8 h-8 bg-white text-gray-900 rounded-full">
                            <svg class="w-auto h-5 -translate-y-px" viewBox="0 0 69 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m31.2 12.2-3.9 12.3-13.4.5-13.4.5 10.7 7.7L21.8 41l-3.9 12.1c-2.2 6.7-3.8 12.4-3.6 12.5.2.2 5-3 10.6-7.1 5.7-4.1 10.9-7.2 11.5-6.8.6.4 5.3 3.8 10.5 7.5 5.2 3.8 9.6 6.6 9.8 6.4.2-.2-1.4-5.8-3.6-12.5l-3.9-12.2 8.5-6.2c14.7-10.6 14.8-9.6-.4-9.7H44.2L40 12.5C37.7 5.6 35.7 0 35.5 0c-.3 0-2.2 5.5-4.3 12.2Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        <span>LOGO</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Services</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-800 lg:my-8" />
                <p class="block text-sm text-gray-500 dark:text-gray-400">
                    &copy; 2024 <a href="/">J&C Group</a>. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
})
