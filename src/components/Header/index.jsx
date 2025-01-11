import { Navigation } from "../Navigation"
import './style.css'

export const Header = () => {
    return(
        <>
            <section className="header">
                < Navigation />
                <h1 className="header-name">We are creatives</h1>
            </section>
        </>
    )
}