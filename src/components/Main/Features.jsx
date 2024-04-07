const Features = ({ featuresList }) => {
  return (
    <div className="features-container">
      <h1 className="features-heading">How does it work?</h1>
      <div className="features">
      {featuresList.map((feature) => (
        <div className="feature" key={feature.id}>
          <img
            src={feature.path}
            alt={feature.alt} 
            width="100px"
          />

          <h3>{feature.title}</h3>
          <p>{feature.body}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Features