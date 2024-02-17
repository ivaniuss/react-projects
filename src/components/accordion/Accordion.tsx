'use client'
import { useState } from 'react';
import { data } from './data';

function Accordion() {
  const [selected, setSelected] = useState<string | null>(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState<boolean>(false);
  const [multiple, setMultiple] = useState<string[]>([]);

  function handleSingleSelection(id: string) {
    selected === id ? setSelected(null) : setSelected(id);
  }

  function handleMultipleSelection(id: string) {
    if (enableMultipleSelection) {
      multiple.includes(id) ? setMultiple(multiple.filter(item => item !== id)) : setMultiple([...multiple, id]);
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <button className='bg-blue-200 rounded-md p-2 my-2' onClick={() => setEnableMultipleSelection( prevState => !prevState)}>{enableMultipleSelection ? "enable single selection": "enable multiple selection"}</button>
      {data && data.length > 0 ?
        data.map((item) => (
          <div className='flex flex-col w-1/2 items-center'>
            <div className='flex bg-blue-300 mt-3'>
              <h3 onClick={enableMultipleSelection? () => handleMultipleSelection(item.id) : () => handleSingleSelection(item.id)}>
                {item.question}
              </h3>
              <span>
                {enableMultipleSelection ?
                  multiple.includes(item.id) ? '-' : '+'
                  :
                  selected === item.id ? '-' : '+'
                }
              </span>
            </div>
            <div className='bg-blue-400'>
              {enableMultipleSelection ?
                multiple.includes(item.id) && item.answer
                :
                selected === item.id && item.answer
              }
            </div>
          </div>
        ))
      :<div>no data</div>}
    </div>
  )
}

export default Accordion