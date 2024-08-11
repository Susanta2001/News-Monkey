import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            mode: "light"
        }
    }
    themeMode = () => {
        this.setState(prevState => ({
            mode: prevState.mode === 'light' ? 'dark' : 'light'
        }));
    }
    render() {
        return (
            <>
                <nav className={`navbar navbar-expand-lg sticky-top bg-${this.state.mode === 'light' ? 'light' : 'dark'}`}>
                    <div className="container-fluid">
                        <NavLink className={`navbar-brand  ${this.state.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/">News Monkey</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={`nav-link  ${this.state.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link  ${this.state.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/entertainment">Entertainment</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link  ${this.state.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/health">Health</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link  ${this.state.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/sports">Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link  ${this.state.mode === 'light' ? 'text-dark' : 'text-light'}`} to="/technology">Technology</NavLink>
                                </li>
                            </ul>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.themeMode} />
                                <label className={`form-check-label ${this.state.mode === 'light' ? 'text-dark' : 'text-light'}`} htmlFor="flexSwitchCheckDefault">
                                    <span className="material-symbols-outlined">
                                        {`${this.state.mode}_mode`}
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;
