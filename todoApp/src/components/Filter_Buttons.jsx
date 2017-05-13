import React from 'react';
export const Filter_Buttons = () =>
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
   </div>

