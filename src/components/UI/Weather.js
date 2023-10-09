import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";

function Weather() {
    const Weather = styled.div`
        display: flex;
        align-items: center;
        gap: 0.8rem;
        & > span {
            margin-right: 0.4rem;
        }
        p {
            font-size: 1.2rem;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.gray1};
            display: flex;
            align-items: center;
            i {
                padding-right: 0.2rem;
            }
            b {
                line-height: 2.4rem;
                font-size: 2rem;
                font-weight: bold;
            }
            em {
                color: ${({ theme }) => theme.colors.black};
            }
            &.temp {
                b {
                    color: ${({ theme }) => theme.colors.secondary};
                }
                em {
                    font-size: 2rem;
                }
            }
            &.humidity {
                b {
                    color: ${({ theme }) => theme.colors.primaryDark};
                }
            }
        }
    `;
    return (
        <Weather className="weather">
            <WeatherIcon className="sunny" />
            <p className="temp">
                <i>기온</i>
                <b>24</b>
                <em>°</em>
            </p>
            <p className="humidity">
                <i>습도</i>
                <b>30</b>
                <em>%</em>
            </p>
        </Weather>
    );
}
export default Weather;
