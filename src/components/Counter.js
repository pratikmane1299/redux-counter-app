import React from 'react';
import { connect } from 'react-redux';

import { decrement, increment } from '../actions';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="counter">
      <button className="increment-btn" onClick={() => increment()}>+</button>
      <span className="value">{counter}</span>
      <button className="decrement-btn" onClick={() => decrement()}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
