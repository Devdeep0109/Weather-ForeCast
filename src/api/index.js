const baseURL ="https://api.weatherapi.com/v1/current.json?key=5c6bcc38f349491896874254232012";

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return response.json();
}
export const getWeatherDataForLocation = async(lat ,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return response.json();
}