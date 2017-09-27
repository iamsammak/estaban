import React from 'react';

const Boat = () => {
  return (
      <div className="boat">
        <div className="wrap">
          <div className="main">
            <div className="boat-top-layer">
              <div className="top">
                <div className="pole"></div>
                <div className="help"><span></span></div>
              </div>
              <div className="bottom"></div>
              </div>
            <div className="boat-mid-layer">
              <div className="top"></div>
              <div className="bottom"></div>
            </div>
            <div className="boat-bot-layer">
              <div className="top"></div>
              <div className="bottom"></div>
            </div>
          </div>
        </div>
        <div className="water">
          <div className="drops clearfix drops-1">
            <span className="drop drop-a"></span>
            <span className="drop drop-b"></span>
            <span className="drop drop-c"></span>
            <span className="drop drop-d"></span>
            <span className="drop drop-e"></span>
            <span className="drop drop-f"></span>
            <span className="drop drop-g"></span>
            <span className="drop drop-h"></span>
          </div>
          <div className="drops clearfix drops-2">
            <span className="drop drop-a"></span>
            <span className="drop drop-b"></span>
            <span className="drop drop-c"></span>
            <span className="drop drop-d"></span>
            <span className="drop drop-e"></span>
            <span className="drop drop-f"></span>
            <span className="drop drop-g"></span>
            <span className="drop drop-h"></span>
          </div>
        </div>
      </div>
  );
};

export default Boat;
