import {useState} from 'react'
import bgBottom from './images/bg-bottom.svg'
import bgTop from './images/bg-top.svg'

function App() {
  const [annually, setAnnually] = useState(false)

  return (
    <>
      <div className='absolute top-0 right-0'>
        <img src={bgTop} alt="" className='w-full max-w-full'/>
      </div>
      <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen">
        <h1 className="text-center text-gray-500 mb-8 text-4xl">
          Our Pricing
        </h1>
        <div className="flex items-center justify-center mb-10 mx-0">
          <label className="name">Annually</label>
          <input 
            type="checkbox" 
            className="checkbox" 
            id="checkbox"
            checked={annually}
            onChange={() => setAnnually(!annually)}
          />
          <label for="checkbox" className="label">
            <div className="ball"></div>
          </label>
          <label className="name">Monthly</label>
        </div>
        <div className="flex flex-wrap justify-center flex-col gap-8 items-center max-w-5xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
          <article className="flex flex-col items-center justify-center p-8 rounded bg-white shadow lg:w-full">
            <h2 className="text-gray-500 text-xl mb-5">Basic</h2>

            {annually ? (<h3 className="flex items-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span> 19.99</h3>) 
            : (<h3 className="flex items-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span> 199.99</h3>)
            }
            
            <ul className="flex flex-col my-8">
              <li className="text-center py-3 text-gray-500 border-t border-slate-300">500 GB Storage</li>
              <li className="text-center py-3 text-gray-500 border-t border-slate-300">2 Users Allowed</li>
              <li className="text-center py-3 text-gray-500 border-t border-b border-slate-300">Send up to 3 GB</li>
            </ul>
            <button className="linear-gradient btn text-white py-3 w-full rounded-lg shadow border-2 uppercase  hover:text-gray-800">Learn More</button>
          </article>

          <article className="prof linear-gradient flex flex-col items-center justify-center p-8 rounded shadow lg:w-full">
            <h2 className="text-white text-xl mb-5">Professional</h2>
            
            {annually ? (<h3 className="flex items-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span> 24.99</h3>) 
            : (<h3 className="flex items-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span> 249.99</h3>)
            }

            <ul className="flex flex-col my-8">
              <li className="text-center py-3 text-white border-t border-white">1 TB Storage</li>
              <li className="text-center py-3 text-white border-t border-white">5 Users Allowed</li>
              <li className="text-center py-3 text-white border-t border-b border-white">Send up to 10 GB</li>
            </ul>
            <button className="bg-white text-slate-800 py-2 w-full rounded-lg shadow border-2 border-white uppercase hover:text-white hover:bg-transparent">Learn More</button>
          </article>

          <article className="flex flex-col items-center justify-center p-8 rounded bg-white shadow lg:w-full">
            <h2 className="text-slate-800 text-xl mb-5">Master</h2>
            
            {annually ? (<h3 className="flex items-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span> 39.99</h3>) 
            : (<h3 className="flex items-center text-slate-800 text-5xl"><span className="text-3xl mr-3">$</span> 399.99</h3>)
            }

            <ul className="flex flex-col my-8">
              <li className="text-center py-3 text-gray-500 border-t border-slate-300">2 TB Storage</li>
              <li className="text-center py-3 text-gray-500 border-t border-slate-300">10 Users Allowed</li>
              <li className="text-center py-3 text-gray-500 border-t border-b border-slate-300">Send up to 20 GB</li>
            </ul>
            <button className="linear-gradient btn text-white py-3 w-full rounded-lg shadow border-2 uppercase  hover:text-gray-800">Learn More</button>
          </article>
        </div>

        <br />
        <div class="attribution">
          Challenge by 
          <a 
          href="https://www.frontendmentor.io?ref=challenge" 
          target="_blank"
          rel='noreferrer'
          >
            Frontend Mentor
          </a>. 
          Coded by <a 
          href="https://github.com/uranov14"
          target="_blank"
          rel='noreferrer'
          >
            Uranov
          </a>.
        </div>
      </section>
      <div className='absolute bottom-0 left-0'>
        <img src={bgBottom} alt="" className='w-full max-w-full'/>
      </div>
    </>
  );
}

export default App;
