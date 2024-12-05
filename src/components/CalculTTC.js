import React from 'react';
import Pht from './pht';
import TVA from './tva';
import BUTTON from './button';
import RES from './res';
function CalculTTC() {
  return (
    <body className='body'>
      <div>
      <form>
        <Pht />
        <TVA />
        <BUTTON />
        <RES />
      </form>
    </div>
    </body>
    
  );
}

export default CalculTTC;
