import axios from "axios";

const url = 'https://disease.sh/v3/covid-19';
// const url2 = 'https://corona.lmao.ninja/v2/historical';

export const fetchData = async (endpoint) =>{
    let changeableUrl = url;
    if(endpoint){
        changeableUrl = `${url}/${endpoint}`
    }
    else{
        changeableUrl = `${url}/all`
    }
    try {
        const {data} = await axios.get(changeableUrl);
        return data;
    } catch (error) {
        console.log(error)
    }

}


export const fetchDailyData = async (endpoint) => {
    
    if(endpoint === '' || endpoint === null || !endpoint || endpoint === 'global' || endpoint.length < 1){
        // endpoint = 'gambia'
        endpoint = 'all'
    }
    console.log("ENDPOINTTT" + endpoint);
    let changeableUrl2 = `${url}/historical/${endpoint}?lastdays=300`;
    // console.log("endpointttttttt"+endpoint);
    try {
        const data = axios.get(changeableUrl2);
        // if(endpoint === 'all'){
        //     console.log(data);
        // }
        return data;
    } catch (error) {
        console.log(error);
    }
}