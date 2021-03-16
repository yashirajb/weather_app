const txtCity = document.getElementById("txtCity");
const btnWeather = document.getElementById("btnWeather");
const result_output = document.getElementById("result");

btnWeather.onclick = function(){
    const city = txtCity.nodeValue;
    const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    fetch(url).then(response => {
        response.json().then(json => {
            let data = json;
            let output = formatResponse(data);
            result_output.innerHTML = output;
        });
    });
}

function kelvinToFarenheit(kTemp){
    const fTemp = kTemp * (9/5) - 459.67
    return fTemp;
}
function msToMPH(ms){{
    return ms * 2.237
}}

function formatResponse(data){
    let conditions = ""
    if(data.weather.length > 1)
}