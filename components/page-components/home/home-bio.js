import { Fragment } from 'react';
import { useState } from 'react';
import bios from './home-bio-content';

function HomeBio() {
  const [rangeval, setRangeval] = useState(2);
  return (
    <Fragment>
      <div className="relative hidden md:block">
        <label htmlFor="customRange1" className="form-label font-modern">
          Bio length
        </label>
        <input
          type="range"
          className="form-range appearance-none w-full h-4 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none bg-gray-700 rounded-lg p-2"
          id="customRange1"
          style={{
            color: '#fff',
            border: 'none',
            height: '10px',
            borderRadius: '10px',
            background: 'linear-gradient(to right, #f12711, #f5af19)',
          }}
          min={0}
          max={4}
          defaultValue={2}
          onChange={(event) => setRangeval(event.target.value)}
        />
      </div>
      <div className="justify-center mb-10 w-7/12 h-24 hidden md:block">
        <div className="text-center text-lg">{bios[rangeval]}</div>
      </div>
    </Fragment>
  );
}

export default HomeBio;
