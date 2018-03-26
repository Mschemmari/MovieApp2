import React from 'react'

const Section = ({children, sectionTitle}) => (
  <section className="items-section">
    <h5 className="items-section-title">{sectionTitle}<a href="">Ver todas</a></h5>
    <div className="items-section-body">
      <div className="row">
        {children}
      </div>
    </div>
  </section>
)

export default Section;
