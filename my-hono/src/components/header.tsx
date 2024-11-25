import { Navigation } from './navigation'

export const AppHeader = (({ children }) => {
    return (
        <header class="w-full px-6 pb-12 antialiased bg-[#ff7a35]">
            <div class="mx-auto max-w-7xl">
                <Navigation />

                {children}
            </div>
        </header>
    )
})
