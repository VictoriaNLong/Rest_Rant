const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
                <h1>Edit Place</h1>
                <br />
                <form method='POST' action={`/places/${data.id}?_method=PUT`}>
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Name</label>
                            <input
                                className="form-control"
                                id="pic"
                                name="pic"
                                type="text"
                                value={data.place.pic} />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input
                                className="form-control"
                                id="city"
                                name="city"
                                type="text"
                                value={data.place.city} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input
                                className="form-control"
                                id="state"
                                name="state"
                                type="text" 
                                value={data.place.state}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                className="form-control"
                                id="cuisines"
                                name="cuisines"
                                type="text"
                                required 
                                value={data.place.cuisines}/>
                        </div>
                        <br />
                    </div>
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Submit Changes" />
                </form>
            </main>
    </Def>
  );
}

module.exports = edit_form;
