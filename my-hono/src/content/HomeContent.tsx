import { Fragment } from 'hono/jsx'

export const HomeContent = (() => {
    return (
        <Fragment>
            <section class="py-20 bg-white">
                <div class="container max-w-6xl mx-auto">
                    <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-9 lg:grid-cols-12 sm:px-8 xl:px-0">
                        <div class="relative flex flex-col items-center justify-between col-span-4 lg:col-span-5 space-y-8">
                            <div class="flex flex-col justify-between p-8 space-y-4 bg-gray-50 transition-shadow hover:bg-white hover:shadow-2xl sm:rounded-xl">
                                <h4 class="text-xl font-medium text-gray-900">Quality Craftsmanship</h4>
                                <p class="text-gray-600">Whether it's a routine maintenance task or a complex installation, we adhere to the highest standards of craftsmanship.</p>
                            </div>

                            <div class="flex flex-col justify-between p-8 space-y-4 bg-gray-50 transition-shadow hover:bg-white hover:shadow-2xl sm:rounded-xl">
                                <h4 class="text-xl font-medium text-gray-900">Throrough Inspection</h4>
                                <p class="text-gray-600">We conduct thorough inspection to accurately assess the extent of damage and provide detailed reports, facilitating the claims process for you.</p>
                            </div>

                            <div class="flex flex-col justify-between p-8 space-y-4 bg-gray-50 transition-shadow hover:bg-white hover:shadow-2xl sm:rounded-xl">
                                <h4 class="text-xl font-medium text-gray-900">Expert Engineers</h4>
                                <p class="text-gray-600">With their expertise, our team works efficiently to complete projects in a timely manner.</p>
                            </div>
                        </div>

                        <div class="flex flex-col items-start justify-between col-span-5 lg:col-span-7 space-y-4 md:space-y-0">
                            <hgroup class="text-gray-900">
                                <h2 class="font-medium">About J&C Group</h2>
                                <h3 class="text-4xl lg:text-6xl lg:leading-snug oswald">Elevate your projects with superior quality</h3>
                            </hgroup>
                            <p class="mt-2 text-lg text-gray-600">We take pride in transforming plumbing challenges into opportunities for excellence. With a commitment to professionalism, quality service, and a touch of innovation, we stand as your trusted partner in the plumbing industry.</p>
                            <div class="grid grid-cols-2 gap-8 mt-10">
                                <div class="relative flex flex-col items-start justify-between p-8 space-y-4 overflow-hidden bg-gray-50 sm:rounded-xl">
                                    <h4 class="text-gray-900 text-xl font-medium">Our vision</h4>
                                    <p class="text-gray-600">To be the top choice. By turning challenges into great results with quality and creativity.</p>
                                </div>
                                <div class="relative flex flex-col items-start justify-between p-8 space-y-4 overflow-hidden bg-[#ff7a35] text-white sm:rounded-xl">
                                    <h4 class="text-xl font-medium">Our mission</h4>
                                    <p>To provide outstanding plumbing services with skill, care, and a focus on making our clients happy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-white">
                <div class="container max-w-6xl mx-auto">
                    <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-10 lg:grid-cols-12 sm:px-8 xl:px-0">
                        <div class="flex flex-col items-start justify-between col-span-6 space-y-6">
                            <h2 class="text-4xl text-gray-900 leading-snug oswald">
                                Our aim is to simplify your life and lighten your load
                            </h2>
                            <p class="text-gray-600">
                                Whether it is a complicated issue or one that just needs a quick fix, we&apos;ll help you figure it out and fix it at the most affordable cost.
                            </p>
                            <div class="grid grid-cols-2 gap-8">
                                <div class="relative flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden bg-white border-2 border-[#ff7a35] sm:rounded-xl">
                                    <h4 class="text-gray-900 text-xl font-medium">Quality service</h4>
                                    <p class="text-gray-600 text-sm">Our team comprises of very skilled craftsmen that are passionate about their work.</p>
                                </div>
                                <div class="relative flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden bg-white border-2 border-[#ff7a35] sm:rounded-xl">
                                    <h4 class="text-gray-900 text-xl font-medium">Quality material</h4>
                                    <p class="text-gray-600 text-sm">We are dedicated to using quality materials in very project we undertake.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 lg:col-span-6 space-y-8 overflow-hidden">
                            <img src="/static/img/person-inspecting.jpg" alt="" class="w-full rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
})
