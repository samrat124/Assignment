import React,{useState} from 'react'
import './Home.css'
import Asset from '../utils/Asset.png';
import Group194 from '../utils/Group194.svg'
import Asset2ne from '../utils/Asset2ne.svg'
import Group195 from '../utils/Group195.svg'
import Group110 from '../utils/Group110.svg'
import Path681 from '../utils/Path681.svg'
import VectorSmartObject from '../utils/VectorSmartObject.png'
 
const Home = () => {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    alert('Form is Submitted');
  }
  return (
    <div>
    <div className='home-main'>
        <div className='text-main'>
      <div className="logo">
        <img src={Asset} alt="logo" />
        <h1>Take your graphics protection to the next level with DOL Max overlaminates</h1>
        <h3 className="article2">Pair with MPI 1105 wrapping film for ramped up protection</h3>
        <div className='group-main'>
           <div className="group-div"> <img className='group1' src={Group194} alt="" /></div>
           <div className="group-div"> <img className='group1' src={Group195} alt="" /></div>
           <div className="group-div"> <img className='group1' src={Asset2ne} alt="" /></div>
        </div>
      </div>
      <div className="form-main">
        <form   action="" className='form'>
            <div className='form-top'> 
            <label>
                <h2>Connect with us</h2>
                <h4 className='form-article'>for outstanding protective overlaminates</h4>
                </label>
            </div>
           <div className="name">
            <label>
                First Name
            <input name='first-name' type="text" className="fname" onChange={handleChange}  placeholder=''/>
            </label>
             <br/>
            <label>
                Last Name
            <input name='last-name' type="text" className="lname" onChange={handleChange}  placeholder=''/>
            </label>
           </div>
           <div className="name">
            <label>
                Email
            <input  name='email' onChange={handleChange} type="email" className="fname"  placeholder=''/>
            </label>
            <br/>
            <label>
                Contact Number
            <input name='contact-number' onChange={handleChange} type="text" className="lname"  placeholder=''/>
            </label>
           </div>
           <div className="name">
            <label>
                Company
            <input name='company' onChange={handleChange} type="text" className="fname"  placeholder=''/>
            </label>
            
            <label className='state-main'>
                State
            <select name='state' onChange={handleChange} className='state'   id="">
                <option value="california">California</option>
                <option value="newyork">Newyork</option>
            </select>
            </label>
           </div>
           <div>
            <label  className='rate'>
                How would you describe yourself?
            <select className='describe-select' name="" id="">
                <option value="installer">Installer</option>
            </select>
            </label>
           </div>
           <div>
            <label  className='rate'>
                Preffered Distributor:
            <select className='describe-select' name="" id="">
                <option value="installer">Installer</option>
            </select>
            </label>
           </div>
        <div className='textarea-form'>
            <label >
                Additional information
                <textarea  rows = "5" cols = "50" name = "description">
         </textarea>
            </label>
        </div>
        <div className='checkbox-form'>
            <label  >
                <input type="checkbox"  />
                <p className='below-form'>I'd like to receive promotions, product information and service offers from Avery Dennison.</p>
            </label>
        </div>
        <button onClick={handleSubmit} className='form-btn'>Submit</button>
        </form>
      </div>
      </div>
    </div>
    <div className="second-part">
      <div className='second-text'>
        <div className='second-text-part1'>
        <h1>DOL Max Overlaminate Films</h1>
        <p>Printed graphics deserve maximum protection, DOL Max is the solution.</p>

        <h4>Features & Benefits:</h4>
        <li>
            Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.
        </li>
        <li>
        The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.
        </li>
        <li>Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
        </div>
      </div>
    </div>
    <div className="part3">
        <div className="part3-part1"></div>
        <div className="part3-part2">
            <div className="part3-part2-part1">
                <h1>Why us?</h1>
                <div className="content1">
                   <div className="content-img"> <img src={Group110} alt="" />
                   </div>
                    <label >
                        <h4>Quality Products</h4>
                        <p>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
                    </label>
                </div>
                <div className="content1">
                    <div className='content-img'><img src={Path681} alt="" /></div>
                    <label >
                        <h4>Multiple Options</h4>
                        <p>We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition</p>
                    </label>
                </div>
                <div className="content1">
                    <div className="content-img"><img src={Group110} alt="" />
                    </div>
                    <label >
                        <h4>Expertise and Support </h4>
                        <p>Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond. </p>
                    </label>
                </div>
                <div className="content1">
                   <div className="content-img"> <img src={Group110} alt="" />
                   </div>
                    <label >
                        <h4>Durability Assurance</h4>
                    <p>Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</p>
                    </label>
                </div>
                <button className='part3-btn'>Request a call back </button>
            </div>
        </div>
    </div>
    <div className="part4">
        <div className="part4-part1">
            <div className='foot-div1'>
            <div className="foot1">
              <h3>Best solutions from</h3>
              <img src={VectorSmartObject} alt="" />
            </div>
            <div className="foot2">
             <h3>DOL Max Overlaminate Films</h3>
             <h3>Why us</h3>
             <h3>Enquire now</h3>
            </div>
            </div>
            <div className="foot-div2">
                
            <div className="foot3">
            <p>Avery Dennison Overlaminate Avery Dennison Overlaminate Films Avery Dennison Digital Overlaminate Films Avery Dennison DOL Max</p>
            </div>
            <div className="foot4">

             <p>Overlaminate Overlaminate Films Digital Overlaminate Films</p>
            </div>
            </div>
        </div>
    </div>
    <div className="part5">
        <p>© 2023 Avery Dennison Label Packaging Material. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Home