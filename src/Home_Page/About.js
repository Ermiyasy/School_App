import loginimag from '../Admin/asset/bg-01.jpg'
import"./LoginCard.css"


function About(){
   
  return(
    <>

    <div className="login-card">
            <div>
            <img className='card-image' src={loginimag} alt="Game card " />
            </div>
                        <h2 className='card-title'>About US PAGE</h2>
                <div className="login-input">
                      <h2>
                        This will GiVE  the information about our work <br />
                      </h2>
                </div>
        </div>
        </>
  );

}
export default About