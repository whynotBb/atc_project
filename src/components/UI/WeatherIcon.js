import IcoSunny from "../../assets/images/icon_weather_sunny.svg";
import IcoCloudy from "../../assets/images/icon_weather_cloudy.svg";
import IcoOvercast from "../../assets/images/icon_weather_overcast.svg";
import IcoRainy from "../../assets/images/icon_weather_rainy.svg";
import IcoSnow from "../../assets/images/icon_weather_snow.svg";
import IcoShower from "../../assets/images/icon_weather_shower.svg";
import IcoSnowstorm from "../../assets/images/icon_weather_snowstorm.svg";
import styled from "styled-components";
function WeatherIcon({ className }) {
    const WeatherIcon = styled.span`
        display: inline-block;
        width: 5.2rem;
        height: 3.8rem;
        background-repeat: no-repeat;
        background-position: center;
        &.sunny {
            background-image: url(${IcoSunny});
        }
        &.cloudy {
            background-image: url(${IcoCloudy});
        }
        &.overcast {
            background-image: url(${IcoOvercast});
        }
        &.rainy {
            background-image: url(${IcoRainy});
        }
        &.snow {
            background-image: url(${IcoSnow});
        }
        &.shower {
            background-image: url(${IcoShower});
        }
        &.snowstorm {
            background-image: url(${IcoSnowstorm});
        }
    `;
    return <WeatherIcon className={className}></WeatherIcon>;
}
export default WeatherIcon;
