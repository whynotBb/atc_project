import styled from "styled-components";

function Weather() {
    const Weather = styled.ul`
        display: flex;
    `;
    return (
        <Weather className="weather">
            <li className="icon">sunny</li>
            <li className="temp">
                기온<b>24</b>
            </li>
            <li className="humidity">
                습도<b>30</b>%
            </li>
        </Weather>
    );
}
export default Weather;
