import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setVisibilityFilterActionCreator } from './../actions/actions.js';

const
   Filter_Buttons = ({ setFilter }) =>
      <div className="button-container">
         <div className="buttons">
            <button onClick={() => setFilter('SHOW_ALL')} className="btn btn-primary">Show All</button>
         </div>
         <div className="buttons">
            <button onClick={() => setFilter('SHOW_COMPLETED')} className="btn btn-primary">Completed</button>
         </div>
         <div className="buttons">
            <button onClick={() => setFilter('SHOW_IN_PROGRESS')} className="btn btn-primary">In Progress</button>
         </div>
      </div>,
   // dispactch
   mapDispatchToProps = dispatch => ({
      setFilter: filter => {
         dispatch(setVisibilityFilterActionCreator(filter))
      }
   });

Filter_Buttons.propTypes = {
   setFilter: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Filter_Buttons)

