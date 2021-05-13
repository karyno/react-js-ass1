import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    
      <main>
        <div className = "left-section">
        <h1>Learn to code by <br/> watching others</h1>
        <p className="section-text">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developer think is invaluable</p>
        </div>

      <div className = "right-section">
        <button className = "purple-btn">Try it free 7 days <span className = "top-btn"> then $20/mo. thereafter</span></button>

        <form>
          <div className="form-group">
              <label for="fname">First Name</label>
              <input type="text" id="fname" placeholder="First Name"/><br/>
              <label for="lname">Last Name</label>
              <input type="text" id="lname" placeholder="Last Name"/><br/>
             
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Email Address"/><br/>
             
              <label for="password">Password</label>
              <input type="password" id="password" placeholder="Password"/><br/>
            
          </div>

            <button className="green-btn">CLAIM YOUR FREE TRIAL</button>
            <p className="terms">By clicking the button you are agreeing to our <span className="red-terms">Terms and Services</span></p>
        </form>
      </div>
    </main>


    </>


  );
}

export default App;
