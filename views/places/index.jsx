const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            
            <p className="text-center">
                <h2>{place.name}</h2>
              {place.cuisines}
            </p>
            <img className="w-75" style={{width: "50%", height: "60%"}} src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
      
    return (
      <Def>
          <main>
              <h1>Places to visit</h1>
              <div className='row'>
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  

module.exports = index