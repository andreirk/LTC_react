import React, {Component, PropTypes} from 'react'
 
import { Link, IndexLink } from 'react-router'
 
export default class Nav extends Component { 
    constructor(){
        super()
        this.state = {
            collapsed: true
        }
    }

    toggleCollapse = () => {
        const collapsed = !this.state.collapsed;
        this.setState({
            collapsed
        })
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const featuredClass = location.pathname === '/' ? "active" : "";
        const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

       
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" >
                <div className='container' >
                    <div className="navbar-header" >
                        <button type="button" className="navbar-toggle" onClick={this.toggleCollapse} >
                            <span className='sr-only' >Toggle navigation</span>
                            <span className='icon-bar' >Toggle navigation</span>
                            <span className='icon-bar' >Toggle navigation</span>
                            <span className='icon-bar' >Toggle navigation</span>
                        </button>
                    </div>
                    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        <li  >
                            <IndexLink to="/" onClick={this.toggleCollapse}>Featured</IndexLink>
                        </li>
                        <li >
                            <Link to="todos" onClick={this.toggleCollapse}>Todos</Link>
                        </li>
                        <li >
                            <Link to="settings" onClick={this.toggleCollapse}>Settings</Link>
                        </li>
                        </ul>
                    </div>                    
                </div>
            </nav>
        )
    }

    handleChage(ev) {
        const title = ev.target.value;
        this.props.changeTitle(title)
    }
}