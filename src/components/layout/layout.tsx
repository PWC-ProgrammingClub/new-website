import { PropsWithChildren } from 'react'
import { PageNav } from '../nav'

type TPageLayoutProps = {
    on?: string,
} & PropsWithChildren

/** The default layout for pages. 'on' describes what page is being viewed for navbar rendering. */
export default function PageLayout({ on, children }: TPageLayoutProps) {

    return <>
        <PageNav on={on} />
        {children}
    </>

}