import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Loading = () => (
    <div>loading……</div>
)

const dymanicModule = (getComponent) => {
    return class DymanicModule extends Component {
        constructor(props) {
            super(props)
            this.state = {
                loading: false,
                Mod: null
            }
        }
        componentWillMount() {
            this.setState({
                loading: true,
            })
            if (!this.state.Mod) {
                setTimeout(() => {
                    getComponent().then(mod => {
                        this.setState({
                            Mod: mod.default,
                            loading: false,
                        })
                    })
                }, 500)
            }
        }
        render() {
            let { Mod, loading } = this.state
            return Mod
                ?
                <Mod />
                :
                loading
                    ?
                    <Loading />
                    :
                    null
        }
    }
}

class Site extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to="/">主页</Link>
                        <Link to="/book">book</Link>
                        <Link to="/movie">movie</Link>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/" component={dymanicModule(() => import('./home'))}></Route>
                            <Route path="/book" component={dymanicModule(() => import('./book'))}></Route>
                            <Route path="/movie" component={dymanicModule(() => import('./movie'))}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

render(<Site></Site>, document.getElementById('root'))