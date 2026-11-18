import logo from './images/Logo.png';
import search from './images/Shape.png';
import box1 from './images/Container-4.png';
import box2 from './images/Container.png';
import box3 from './images/Container-2.png';
import box4 from './images/Container-5.png';
import box5 from './images/Container-1.png';
import box6 from './images/Container-3.png';
import box7 from './images/Container-8.png';
import box8 from './images/Container-7.png';
import box9 from './images/Container-6.png';
import block2 from './images/Base.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
        <div className='header-text'>
          <p>Blog</p>
          <p>About</p>
        </div>
        <div className='header-search'>
        <img src={search}/>
        </div>
        <div className='header-btn'>
          <button>Contact Us</button>
        </div>
      </header>
      <div className='block-1'>
        <div className='text-block1'>
          <h4>OUR BLOGS</h4>
          <h1>Find our all blogs from here</h1>
          <p>our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along</p>
        </div>

        <div className='blox-block1'>
          <div className='box1'>
            <img src={box1}/>
            <div className='text-box'>
              <h1>Train Or Bus Journey?Which one suits?</h1>
              <p>The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
          <div className='box1'>
            <img src={box2}/>
            <div className='text-box'>
              <h1>Best Website to research for your  next project</h1>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
          <div className='box1'>
            <img src={box3}/>
            <div className='text-box'>
              <h1>How to Be a Dancer in 2023 with proper skills?</h1>
              <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
          <div className='box1'>
            <img src={box4}/>
            <div className='text-box'>
              <h1>Who is the best singer on chart?Know him?</h1>
              <p>chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
          <div className='box1'>
            <img src={box5}/>
            <div className='text-box'>
              <h1>Train Or Bus Journey?Which one suits?</h1>
              <p>The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
          <div className='box1'>
            <img src={box6}/>
            <div className='text-box'>
              <h1>Train Or Bus Journey?Which one suits?</h1>
              <p>The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
          <div className='box1'>
            <img src={box7}/>
            <div className='text-box'>
              <h1>Train Or Bus Journey?Which one suits?</h1>
              <p>The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
          <div className='box1'>
            <img src={box8}/>
            <div className='text-box'>
              <h1>Train Or Bus Journey?Which one suits?</h1>
              <p>The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
          <div className='box1'>
            <img src={box9}/>
            <div className='text-box'>
              <h1>Train Or Bus Journey?Which one suits?</h1>
              <p>The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person </p>
              <a href='#'>Read More...</a>
            </div>
          </div>
        </div>
      </div>
      <div className='block2'>
        <img src={block2}/>
      </div>
    </div>
  );
}

export default App;
