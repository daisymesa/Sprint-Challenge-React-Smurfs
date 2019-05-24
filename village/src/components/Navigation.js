import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <img src="https://vignette.wikia.nocookie.net/smurfs/images/5/5e/Smurfs_villge_harmony.jpg/revision/latest/scale-to-width-down/670?cb=20150812140625" alt="the smurfs village" />

                <div className="nav-links">
                    <div className="nav-link">
                        <NavLink exact to="/">
                            <p>Village Home</p>
                        </NavLink>
                    </div>
                    <div className="nav-link">
                        <NavLink to="/smurf-form">
                            <p>Add New Smurfs!</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
