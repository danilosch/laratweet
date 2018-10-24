import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Tweet something...</div>

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" maxlenth="140" placeholder="Whats up?" required></textarea>
                                    </div>
                                    <input type="submit" value="Post" className="form-control"></input>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">App Component</div>

                            <div className="card-body">
                                I'm an app component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;