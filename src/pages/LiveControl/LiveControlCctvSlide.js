import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgCctv1 from "../../assets/images/cctv_sample_1.png";
import ImgCctv2 from "../../assets/images/cctv_sample_2.png";
import ImgCctv3 from "../../assets/images/cctv_sample_3.png";
import styled from "styled-components";
function LiveControlCctvSlide() {
    const SlideBox = styled.div`
        .cctvImg {
            width: 21.2rem;
            height: 12rem;
            object-fit: contain;
            border-radius: 0.4rem;
            overflow: hidden;
        }
        .slick-dots li {
            margin: 0;
            button:before {
                opacity: 1;
                color: #f2f2f2;
            }
            &.slick-active button:before {
                opacity: 1;
                color: #000000;
            }
        }
    `;
    //slide settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <SlideBox>
            <Slider {...settings}>
                <div className="cctvImg">
                    <img src={ImgCctv1} alt="cctv 이미지" />
                </div>
                <div className="cctvImg">
                    <img src={ImgCctv2} alt="cctv 이미지" />
                </div>
                <div className="cctvImg">
                    <img src={ImgCctv3} alt="cctv 이미지" />
                </div>
            </Slider>
        </SlideBox>
    );
}
export default LiveControlCctvSlide;
