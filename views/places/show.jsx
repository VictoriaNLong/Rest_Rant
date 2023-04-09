const React = require("react");
const Def = require("../default");

function Show(data) {
  let message = ''
  if (data.message) {
    message = (
      <h4 className="alert-danger">
        {data.message}
      </h4>
    )
  }

  let comments = (
    <h3 className='inactive'>
        No comments yet! 
    </h3>
)
let rating = (
  <h3 className="inactive">
    Not yet rated
  </h3>
)
if (data.place.comments.length) {
  let sumRatings = data.place.comments.reduce((tot, c) => {
    return tot + c.stars
  }, 0)
  let averageRating = Math.round(sumRatings / data.place.comments.length)
  let stars = ''
  for (let i = 0; i < averageRating; i++) {
    stars += '⭐'
  }
  rating = (
    <h3>
      {stars} stars
    </h3>
  )
}

if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
        return (
            <div className="border">
                <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                <h4>{c.content}</h4>
                <h3>{c.author}</h3>
                <h4>Rating: {c.stars}</h4>
            </div>
        )
    })
}

  return (
      <Def>
          <main>
              <h1>{data.place.name}</h1>
              {message}
              <div className="row">
                  <div className="col-sm-6">
                      <img src={data.place.pic} alt={data.place.name} className="img-max" />                    
                  </div>

                  <div className="col-sm-6">
                      <div className="row">
                          <h3>Description</h3>
                          <p className="text-center">
                              <br />
                              {data.place.showEstablished()}
                              <br />
                          </p>
                      </div>
                      <h3>Ratings</h3>
                      {rating}
                      <h4>Comments</h4>
                      {comments}
                  </div>
              </div>

              <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>  
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                      Delete
                  </button>
              </form>
          </main>
      </Def>
  )
}

module.exports = Show
