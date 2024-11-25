import { Fragment } from 'hono/jsx'

import { AppHeader } from '../components/header'
import { DotDivider } from '../components/dot-divider'
import { CTAEmergency } from '../components/cta-emergency'
import { FAQ } from '../components/faq'
import { CTABanner } from '../components/cta-banner'
import { AppFooter } from '../components/footer'
import { ServicesContent } from '../content/ServicesContent'

export const ServicesPage = (() => {
    return (
        <Fragment>
            <AppHeader>
                <div class="container max-w-sm pt-10 lg:pt-20 mx-auto mt-px text-left sm:max-w-md md:max-w-lg sm:px-4 md:max-w-none">
                    <h1 class="md:pl-6 sm:pr-4 text-3xl leading-loose tracking-wide oswald text-white sm:text-4xl md:text-6xl lg:text-8xl">
                        Get in touch
                    </h1>
                    <div class="md:pl-6 mt-5 md:mt-8 lg:mt-12 text-white md:max-w-lg md:text-xl">
                        Need to book an appointment or an emergency help? Get in touch with us now and our representative will help you soon.
                    </div>
                </div>
            </AppHeader>

            <DotDivider />

            <ServicesContent />

            <DotDivider />

            <CTAEmergency />

            <DotDivider />

            <FAQ />

            <CTABanner />

            <AppFooter />
        </Fragment>
    )
})
