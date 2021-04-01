
import axios from 'axios';

const localhost = "http://localhost:8080"
const casaDoSaberAPI = 'https://dev-casadosaber-294800.rj.r.appspot.com';


export const subscribe = async (clientData) => {
  try{
      const subscriptionRequest = {
        name: clientData.name,
        email: clientData.email,
        tel: clientData.tel
      };
  
      const options = {
        headers: {
          Authorization: `${process.env.CASA_API_AUTHORIZATION}`,
          'Content-Type': 'application/json',
        },
      };
    
      const subscriptionResponse = await axios.post(
        `${casaDoSaberAPI}/lps-casa/subscribeFreeClass`,
        subscriptionRequest,
        options
      );
    
      return subscriptionResponse;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  };
  