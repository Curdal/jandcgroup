import { Fragment } from 'hono/jsx'

export const ContactContent = (() => {
    return (
        <Fragment>
            <section class="py-20 bg-white">
                <div class="container max-w-6xl mx-auto lg:px-14 md:px-10 sm:px-8 px-4">
                    <div class="grid grid-cols-2 gap-6">
                        <form method="post" action="./mail.php" class="col space-y-4 md:space-y-0">
                            <hgroup class="text-gray-900 mb-6">
                                <h2 class="text-3xl font-medium lg:leading-snug oswald">Your Message</h2>
                                <h3 class="mt-2 text-lg text-gray-600">Your email address will not be published. Required fields are marked *</h3>
                            </hgroup>

                            <div class="flex flex-col justify-between pb-4 space-y-4">
                                <label for="name">Name</label>
                                <input class="w-full border border-gray-300 rounded-lg py-2 px-3" type="text" name="name" id="name" required />
                            </div>
                            <div class="flex flex-col justify-between pb-4 space-y-4">
                                <label for="email">Email</label>
                                <input class="w-full border border-gray-300 rounded-lg py-2 px-3" type="email" name="email" id="email" required />
                            </div>
                            <div class="flex flex-col justify-between pb-4 space-y-4">
                                <label for="comment">Comment</label>
                                <textarea class="w-full border border-gray-300 rounded-lg py-2 px-3" name="comment" id="comment" rows="5"></textarea>
                            </div>

                            <button class="bg-[#ff7a35] text-white hover:bg-[#e86e2f] py-3 px-4 rounded-lg" type="submit">Submit message</button>
                        </form>

                        <div class="col bg-gray-100 rounded-xl overflow-hidden"></div>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-white">
                <div class="container max-w-6xl mx-auto lg:px-14 md:px-10 sm:px-8 px-4">
                    <h2 class="text-4xl text-gray-900 leading-snug oswald mb-6">
                        Contact Information
                    </h2>
                    <div class="grid grid-cols-3 gap-12">
                        <div class="flex flex-col justify-between space-x-7">
                            <h4 class="text-base text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block size-6 fill-current text-[#ff7a35]" fill="none" viewBox="0 0 256 256">
                                    <path
                                        d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z">
                                    </path>
                                </svg>
                                Email
                            </h4>
                            <p class="text-gray-900 text-xl">help@jandcgroup.com</p>
                        </div>
                        <div class="flex flex-col justify-between space-x-7">
                            <h4 class="text-base text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block size-6 fill-current text-[#ff7a35]" fill="none" viewBox="0 0 256 256">
                                    <path
                                        d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z">
                                    </path>
                                </svg>
                                Phone number
                            </h4>
                            <p class="text-gray-900 text-xl">082 070 2181</p>
                        </div>
                        <div class="flex flex-col justify-between space-x-7">
                            <h4 class="text-base text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block size-6 fill-current text-[#ff7a35]" fill="none" viewBox="0 0 256 256">
                                    <path
                                        d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z">
                                    </path>
                                </svg>
                                Address
                            </h4>
                            <p class="text-gray-900 text-xl">Randburg, JHB, SA</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
})
