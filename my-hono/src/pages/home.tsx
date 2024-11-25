// import { jsxRenderer } from 'hono/jsx-renderer'
import { Fragment } from 'hono/jsx'

import { AppHeader } from '../components/header'
import { DotDivider } from '../components/dot-divider'
import { CTAEmergency } from '../components/cta-emergency'
import { FAQ } from '../components/faq'
import { CTABanner } from '../components/cta-banner'
import { AppFooter } from '../components/footer'

import { HomeContent } from '../content/HomeContent'

export const HomePage = (() => {
    return (
        <Fragment>
            <AppHeader>
                <div class="container max-w-sm pt-10 lg:pt-20 mx-auto mt-px text-left sm:max-w-md md:max-w-lg sm:px-4 md:max-w-none">
                    <div class="grid sm:grid-cols-2 gap-12">
                        <div class="col-span-1">
                            <h1 class="lg:pt-16 md:pt-8 sm:pr-4 text-3xl leading-loose tracking-wide oswald text-white sm:text-4xl md:text-6xl lg:text-8xl">
                                Your trusted <br class="hidden sm:block" /> plumbing solutions
                            </h1>
                            <div class="mt-5 md:mt-8 lg:mt-12 text-white md:max-w-lg md:text-xl">
                                We have tackled a wide range of projects, from small repairs to extensive renovations, earning the trust and
                                satisfaction of countless clients along the way.
                            </div>
                            <div class="flex flex-col items-start justify-start mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <span class="relative inline-flex w-full md:w-auto">
                                    <a href="/contact" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                        Get in touch
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <div class="rounded-xl overflow-hidden">
                                <img src="/static/img/man-inspecting-ceiling.webp" alt="" srcset="" class="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </AppHeader>

            <DotDivider />

            <HomeContent />

            <DotDivider />

            <CTAEmergency />

            <DotDivider />

            <FAQ />

            <CTABanner />

            <AppFooter />
        </Fragment>
    )
})
