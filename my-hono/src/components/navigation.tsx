export const Navigation = (() => {
    return (
        <nav class="relative z-50 h-24 select-none" x-data="{ showMenu: false }">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-white/20 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
                <div class="flex items-center justify-start w-1/4 h-full pr-4">
                    <a href="/" class="flex items-center py-4 space-x-2 font-extrabold text-gray-900 md:py-0">
                        <span class="flex items-center justify-center w-8 h-8 text-white bg-gray-900 rounded-full">
                            <svg class="w-auto h-5 -translate-y-px" viewBox="0 0 69 66" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m31.2 12.2-3.9 12.3-13.4.5-13.4.5 10.7 7.7L21.8 41l-3.9 12.1c-2.2 6.7-3.8 12.4-3.6 12.5.2.2 5-3 10.6-7.1 5.7-4.1 10.9-7.2 11.5-6.8.6.4 5.3 3.8 10.5 7.5 5.2 3.8 9.6 6.6 9.8 6.4.2-.2-1.4-5.8-3.6-12.5l-3.9-12.2 8.5-6.2c14.7-10.6 14.8-9.6-.4-9.7H44.2L40 12.5C37.7 5.6 35.7 0 35.5 0c-.3 0-2.2 5.5-4.3 12.2Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        <span>LOGO</span>
                    </a>
                </div>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex" x-bind:class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                        <a href="#_" class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">
                            <svg class="w-auto h-5" viewBox="0 0 355 99" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <path
                                        d="M119.1 87V66.4h19.8c34.3 0 34.2-49.5 0-49.5-11 0-22 .1-33 .1v70h13.2zm19.8-32.7h-19.8V29.5h19.8c16.8 0 16.9 24.8 0 24.8zm32.6-30.5c0 9.5 14.4 9.5 14.4 0s-14.4-9.5-14.4 0zM184.8 87V37.5h-12.2V87h12.2zm22.8 0V61.8c0-7.5 5.1-13.8 12.6-13.8 7.8 0 11.9 5.7 11.9 13.2V87h12.2V61.1c0-15.5-9.3-24.2-20.9-24.2-6.2 0-11.2 2.5-16.2 7.4l-.8-6.7h-10.9V87h12.1zm72.1 1.3c7.5 0 16-2.6 21.2-8l-7.8-7.7c-2.8 2.9-8.7 4.6-13.2 4.6-8.6 0-13.9-4.4-14.7-10.5h38.5c1.9-20.3-8.4-30.5-24.9-30.5-16 0-26.2 10.8-26.2 25.8 0 15.8 10.1 26.3 27.1 26.3zM292 56.6h-26.6c1.8-6.4 7.2-9.6 13.8-9.6 7 0 12 3.2 12.8 9.6zm41.2 32.1c14.1 0 21.2-7.5 21.2-16.2 0-13.1-11.8-15.2-21.1-15.8-6.3-.4-9.2-2.2-9.2-5.4 0-3.1 3.2-4.9 9-4.9 4.7 0 8.7 1.1 12.2 4.4l6.8-8c-5.7-5-11.5-6.5-19.2-6.5-9 0-20.8 4-20.8 15.4 0 11.2 11.1 14.6 20.4 15.3 7 .4 9.8 1.8 9.8 5.2 0 3.6-4.3 6-8.9 5.9-5.5-.1-13.5-3-17-6.9l-6 8.7c7.2 7.5 15 8.8 22.8 8.8z"
                                        id="a"></path>
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="currentColor">
                                        <path d="M19.742 49h28.516L68 83H0l19.742-34z"></path>
                                        <path d="M26 69h14v30H26V69zM4 50L33.127 0 63 50H4z"></path>
                                    </g>
                                    <g fill-rule="nonzero">
                                        <use fill="currentColor" xlink:href="#a"></use>
                                        <use fill="currentColor" xlink:href="#a"></use>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <div class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a href="/" class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-gray-900 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                            <a href="/about" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-900 sm:text-white md:w-auto md:px-0 md:mx-2 hover:text-black lg:mx-3 md:text-center">About</a>
                            <a href="/services" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-900 sm:text-white md:w-auto md:px-0 md:mx-2 hover:text-black lg:mx-3 md:text-center">Services</a>
                            <a href="/contact" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-900 sm:text-white md:w-auto md:px-0 md:mx-2 hover:text-black lg:mx-3 md:text-center">Contact</a>
                        </div>
                        <div class="flex flex-col items-start justify-end w-full mt-4 sm:mt-0 pt-2 sm:pt-4 md:items-center md:w-1/3 md:flex-row md:py-0 border sm:border-0">
                            <a href="tel:+27820702181" class="w-full px-6 py-2 mr-0 text-gray-900 sm:text-white md:pl-3 md:pr-0 md:w-auto">
                                <div class="flex flex-row items-center gap-2">
                                    <div class="shrink text-gray-900 sm:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-6 fill-current" fill="none" viewBox="0 0 256 256">
                                            <path
                                                d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="grow">
                                        <p class="text-xs">Emergency Call</p>
                                        <p class="text-sm">(+27) 82 070 2181</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div x-on:click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                    <svg class="w-6 h-6 text-gray-900" x-show="!showMenu" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg class="w-6 h-6 text-gray-900" x-show="showMenu" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </div>
            </div>
        </nav>
    )
})