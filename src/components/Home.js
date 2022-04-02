import React,{useEffect,useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { gql } from '@apollo/client';
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { weatherData } from '../store/weatherData'
import { MDBSpinner } from 'mdb-react-ui-kit';

  var rootStyle = {
    height: '100vh',
    minheight : '100vh',
    backgroundColor: "#04a7ea"
  }

  const Home = () => {

    const [state, setState, getState] = useState({
      value: "",
      finalvalue: ""
    });

    let history = useHistory();

    function handlesubmit(e) {
      e.preventDefault();
      setState(currentState => ({
        ...currentState,
        finalvalue:state.value
      }))
      getWeatherData();
    }   
  
      const GETDATA = gql`
        query GetWeatherData($value: String!) {
            getWeatherData(value: $value) {
              description
              pincode
              windspeed
              temp
              Humidity
          }
        }
        `

      const [ getWeatherData, { data, loading, error }] = useLazyQuery(GETDATA, {variables:{value:state.finalvalue}} );
      if (error) {
        console.log(error);
        history.push('/500');
      }
      if(data){
        weatherData(data);
        history.push('/forecast');
      }

      return (
        <div style={rootStyle}>
          <div style={{ width: '60vh',minheight : '100vh',backgroundColor: "#04a7ea", position: "fixed",top: "40%",left: "50%",transform: "translate(-50%, -50%)" }}>
          <h2 htmlFor="formGroupExampleInput" style={{color:"white",textAlign:"center"}}>Weather Forcast</h2>
          <h6 className='pt-5 pb-5' style={{color:"white",textAlign:"center"}}>Enter a Norwegian zipcode below to get the<br/> current weather condition for that area</h6>
          <form onSubmit={handlesubmit}>
              <div className='row pt-5' style={{ width: '70vh'}}>
              <input type="text" className="form-control col-8" placeholder='Enter Zipcode..'
                id="formGroupExampleInput" 
                onChange={(event) => setState(currentState => ({...currentState, value:event.target.value })) } 
                onKeyDown={(e) => e.key === 'Enter' && handlesubmit} />
              <input type="submit" className='btn col-3 ml-1' style={{background:"#F20000", color:"white"}} value="Enter" />
              { loading ? 
                <MDBSpinner color='dark'>
                  <span className='visually-hidden'></span>
                </MDBSpinner>
                : ''}
              </div>
          </form>
          </div>
        </div>
      );
    }

export default Home;