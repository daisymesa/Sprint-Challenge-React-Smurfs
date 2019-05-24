import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <img src="https://vignette.wikia.nocookie.net/smurfs/images/5/5e/Smurfs_villge_harmony.jpg/revision/latest/scale-to-width-down/670?cb=20150812140625" />

                <div className="nav-links">
                    <div>
                        <NavLink exact to="/">Home</NavLink>
                    </div>
                    <div>
                        <NavLink to="/smurf-form">Add New Smurfs!</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
