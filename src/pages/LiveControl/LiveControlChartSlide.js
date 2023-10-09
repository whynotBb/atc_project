import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartA from "./ChartA";
import ChartB from "./ChartB";
import styled from "styled-components";
import IconArrowL from "../../assets/images/slide_arrow_l.svg";
import IconArrowR from "../../assets/images/slide_arrow_r.svg";

function LiveControlChartSlide() {
    const ChartSlideBox = styled.div`
        .slick-prev,
        .slick-next {
            top: -2.8rem;
            background: #f9f9f9;
            border-radius: 1rem;
            background-repeat: no-repeat;
            background-position: center;
            &::before {
                display: none;
            }
        }
        .slick-prev {
            left: initial;
            right: 4.6rem;
            background-image: url(${IconArrowL});
        }
        .slick-next {
            right: 2rem;
            background-image: url(${IconArrowR});
        }
    `;
    //slide settings
    const settings = {
        // dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <ChartSlideBox>
            <Slider {...settings}>
                <div>
                    <ChartA />
                </div>
                <div>
                    <ChartB />
                </div>
            </Slider>
        </ChartSlideBox>
    );
}
export default LiveControlChartSlide;
