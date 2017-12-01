import React, { Component } from 'react';
import { Router, Link, Route } from 'react-router-dom';

class Topics extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { match } = this.props

        console.log(this.props.match)

        return (
            <div>
                <h2>Topics</h2>
                <span>{`url: ${match.url}`}</span>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>
                            Rendering with React
              </Link>
                    </li>
                    <li>
                        {/* <Link to={`${match.url}/components`}>
                        Components
              </Link> */}

                        <button onClick={() => {
                            console.log(`${match.url}/components`)
                            this.props.history.push('/about')
                        }}>Components</button>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
              </Link>
                    </li>
                </ul>

                <Route path={`${match.url}/components`} component={Topic} />
                <Route exact path={match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )} />
            </div>
        )
    }
}

const Topic = ({ match }) => (
    <div>
        <h3>{`aaa: ${match.url}`}</h3>
    </div>
)

export default Topics