import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
// import Router from './router';
import { push } from 'react-router-redux';

import { Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom';

// const target = document.querySelector('#root')

// ReactDOM.render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <Router />
//             </div>
//         </ConnectedRouter>
//     </Provider>,
//     target
// )


// const App = ({ match }) => (
//     <div>
//         <h1>App</h1>
//         <span>{match.url}</span>
//         {/* 把 <a> 变成 <Link> */}
//         <ul>
//             <li><Link to={`${match.url}/about`}>About</Link></li>
//             <li><Link to="/inbox">Inbox</Link></li>
//         </ul>

//         {/*
//             接着用 `this.props.children` 替换 `<Child>`
//             router 会帮我们找到这个 children
//           */}
//         {/* {this.props.children} */}
//         <Route path={`${match.url}/about`} component={About} />
//     </div>
// )

// class Message extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return <h3>Message</h3>
//     }
// }

// class Inbox extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Inbox</h2>
//                 {/* 渲染这个 child 路由组件 */}
//                 {this.props.children || "Welcome to your Inbox"}
//             </div>
//         )
//     }
// }


// class About extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <h2>About</h2>
//                 {/* 渲染这个 child 路由组件 */}
//                 {this.props.children || "Welcome to your About"}
//             </div>
//         )
//     }
// }

import Topics from './login/component/test.jsx'

class BasicExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: 0
        }
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/about">About</Link></li> */}
                        <li><Link to="/topics">Topics</Link></li>
                        <li><button onClick={() => history.push('/about')}>About</button></li>
                    </ul>
                    <span>{this.state.test}</span>
                    {
                        setInterval(() => {
                            let a = this.state.test
                            this.setState({
                                test: a++
                            })
                        }, 1000)
                    }
                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" render={(props) => <Topics {...this.props} {...props} history={history} />} />
                </div>
            </Router>
        )
    }
}

// const BasicExample = () => (
//     <Router history={history}>
//         <div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/topics">Topics</Link></li>
//             </ul>
//             {
//                 <span>test</span>
//             }
//             <hr />

//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/topics" component={Topics} />
//         </div>
//     </Router>
// )

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)



// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <span>{`url: ${match.url}`}</span>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>
//                     Rendering with React
//           </Link>
//             </li>
//             <li>
//                 {/* <Link to={`${match.url}/components`}>
//                     Components
//           </Link> */}

//                 <button onClick={() => {
//                     console.log(`${match.url}/components`)
//                     push('/about')
//                 }}>Components</button>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>
//                     Props v. State
//           </Link>
//             </li>
//         </ul>

//         <Route path={`${match.url}/components`} component={Topic} />
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )} />
//     </div>
// )

// const Topic = ({ match }) => (
//     <div>
//         <h3>{`aaa: ${match.url}`}</h3>
//     </div>
// )

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
ReactDOM.render(
    <BasicExample></BasicExample>
    , document.querySelector('#root'))
