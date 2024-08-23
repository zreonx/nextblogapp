import React from "react";

export default function Comments() {
  return (
    <div className='mt-8 '>
      <h2 className='text-2xl font-bold'>Comments</h2>
      <ul className='mt-3'>
        <li className='mb-4 bg-slate-200 px-4 py-3 rounded-md'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='text-blue-500 font-bold mr-2'>John Doe</div>
            <div className='text-gray-500 text-xs'>10-November-2024</div>
          </div>
          <p>Awesome!!</p>
        </li>
      </ul>
    </div>
  );
}
