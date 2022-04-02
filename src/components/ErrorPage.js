import React,{useEffect,useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPinLock  } from "@fortawesome/free-solid-svg-icons"

  var rootStyle = {
    height: '100vh',
    minheight : '100vh',
    backgroundColor: "#04a7ea"
  }

  const ErrorPage = () => {
      return (
        <div style={rootStyle}>
          <div style={{ width: '60vh', minheight: '100vh', backgroundColor: "#ffffff", position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <h2 style={{textAlign:"center"}} className="pt-5"><FontAwesomeIcon icon={faLocationPinLock} size="lg" /></h2>
            <h6 className='pt-5 pb-5' style={{textAlign:"center"}}> Whoa! Looks like there was an error <br/> with your zipcode</h6>
            <div style={{textAlign:"center"}}><Link to="/" className='btn btn-danger mb-5' >Try Again</Link></div>
          </div>
        </div>
      );
    }

export default ErrorPage;