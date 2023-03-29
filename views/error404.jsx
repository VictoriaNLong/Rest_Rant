const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                    <img className="error-img" src="/images/4040cry.jpg" alt="cryingcat"/>
                </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
