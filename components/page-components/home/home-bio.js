import { Fragment } from 'react';
import { useState } from 'react';
import bios from './home-bio-content';

function HomeBio(props) {
  const [rangeval, setRangeval] = useState(2);
  return (
    <Fragment>
      <div className="relative">
        <label htmlFor="customRange1" className="form-label font-modern">
          Bio length
        </label>
        <input
          type="range"
          className="form-range appearance-none w-full h-6 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none bg-gray-700 rounded-lg p-2"
          id="customRange1"
          style={{ color: '#fff', border: 'none' }}
          min={0}
          max={4}
          defaultValue={2}
          onChange={(event) => setRangeval(event.target.value)}
        />
      </div>
      <div className="justify-center pb-20 md:pb-0 w-9/12 h-24">
        <div className="text-center text-lg">{bios[rangeval]}</div>
      </div>
    </Fragment>
  );
}

export default HomeBio;
