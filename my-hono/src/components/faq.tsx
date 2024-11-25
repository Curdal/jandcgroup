export const FAQ = (() => {
    return (
        <section class="py-24 bg-white">
            <div class="px-8 mx-auto max-w-7xl lg:px-16">
                <div class="grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-3 md:gap-16">
                    <div>
                        <h2 class="mb-4 text-xl font-medium text-gray-900 md:text-4xl">Your questions, answered</h2>
                        <p class="mt-6">Answers to the most common questions our customers have. If you don&apos;t find the information you&apos;re looking for, feel free to contact us.</p>
                        <div class="relative inline-flex w-full md:w-auto mt-6">
                            <a href="tel:+27820702181"
                                class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-lg xl:px-10 md:w-auto hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                Contact us
                            </a>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div x-data="{
                                activeAccordion: '',
                                setActiveAccordion(id) {
                                    this.activeAccordion = (this.activeAccordion == id) ? '' : id
                                }
                            }"
                            class="flex flex-col gap-8 w-full mx-auto overflow-hidden">
                            <div x-data="{ id: $id('accordion') }" class="cursor-pointer group border-2 border-gray-200 rounded-xl">
                                <button x-on:click="setActiveAccordion(id)" class="flex items-center justify-between w-full p-6 text-left select-none group-hover:underline text-lg font-semibold text-gray-900">
                                    <span>How do I implement into my project?</span>
                                    <svg class="w-4 h-4 duration-200 ease-out" x-bind:class="{ 'rotate-180': activeAccordion==id }"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                <div x-show="activeAccordion==id" x-collapse x-cloak>
                                    <div class="p-6 pt-0">
                                        Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your own page.
                                    </div>
                                </div>
                            </div>
                            <div x-data="{ id: $id('accordion') }" class="cursor-pointer group border-2 border-gray-200 rounded-xl">
                                <button x-on:click="setActiveAccordion(id)" class="flex items-center justify-between w-full p-6 text-left select-none group-hover:underline text-lg font-semibold text-gray-900">
                                    <span>What is the license on the pages?</span>
                                    <svg class="w-4 h-4 duration-200 ease-out" x-bind:class="{ 'rotate-180': activeAccordion==id }"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                <div x-show="activeAccordion==id" x-collapse x-cloak>
                                    <div class="p-6 pt-0">
                                        You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.
                                    </div>
                                </div>
                            </div>
                            <div x-data="{ id: $id('accordion') }" class="cursor-pointer group border-2 border-gray-200 rounded-xl">
                                <button x-on:click="setActiveAccordion(id)" class="flex items-center justify-between w-full p-6 text-left select-none group-hover:underline text-lg font-semibold text-gray-900">
                                    <span>Can I cancel my account if I not longer need it?</span>
                                    <svg class="w-4 h-4 duration-200 ease-out" x-bind:class="{ 'rotate-180': activeAccordion==id }"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                <div x-show="activeAccordion==id" x-collapse x-cloak>
                                    <div class="p-6 pt-0">
                                        Of course, you can feel free to cancel your account at anytime, and you can feel free to come back and upgrade again whenever you're ready.
                                    </div>
                                </div>
                            </div>
                            <div x-data="{ id: $id('accordion') }" class="cursor-pointer group border-2 border-gray-200 rounded-xl">
                                <button x-on:click="setActiveAccordion(id)" class="flex items-center justify-between w-full p-6 text-left select-none group-hover:underline text-lg font-semibold text-gray-900">
                                    <span>What if I need help with my project?</span>
                                    <svg class="w-4 h-4 duration-200 ease-out" x-bind:class="{ 'rotate-180': activeAccordion==id }"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                <div x-show="activeAccordion==id" x-collapse x-cloak>
                                    <div class="p-6 pt-0">
                                        If you need assistance implementing the templates into your project you can contact support or you can visit our <a href="https://devdojo.com/questions" class="text-gray-900 underline" data-primary="indigo-500">question section</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
