import './style.css'

export const StandOut = () => {
    return(
        <>
          <section className="standout">
            <div className="cup"/>
            <div className="standout-content">
              <h2 className="standout-content__name">Stand out to the right audience</h2>
              <p className="standout-content__text">
                Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
              </p>
              <a href="#" className="standout-content__link">Learn more</a>
            </div>
          </section>
        </>
    )
}