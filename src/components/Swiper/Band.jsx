import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { createCustomAxios } from '../../API/API';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import styled from 'styled-components';

/**
 * Main 페이지에 사용되는 Swiper 컴포넌트 입니다.
 */
const Band = ({ scrollY }) => {
  /** BigBanner의 데이터를 받아오기 위한 useState 생성 */
  const [bandDataList, setBandDataList] = useState([]);

  /** 화면이 처음 로딩될 때 배너에 대한 정보를 받아오기 위한 useEffect */
  useEffect(() => {
    requestBandDataGet();
  }, []);

  /** BigBanner에 대한 Data를 받아오기 위한 Axios BaseURL */
  const BandAxiosBaseURL = '../goobne/data/MainBandData.json';
  /** createCustomAxios 함수를 불러와 BaseURL을 적용시켜준다. */
  const BandAxios = createCustomAxios(BandAxiosBaseURL);

  /**
   * Custom Axios를 이용하여 BigBanner에 대한 Data를 Json파일에서 받아온다.
   * @property response는 변수지정을 하지만 실제로 사용하지 않기 때문에 에러줄을 없애기 위해 eslint-disable-line no-unused-vars를 사용
   * */
  const requestBandDataGet = async () => {
    const response = await BandAxios.get() //eslint-disable-line no-unused-vars
      .then(response => {
        setBandDataList(response.data.result);
      })
      .catch(error => {
        if (error) {
          alert('에러가 발생했습니다.');
        }
      });
  };

  if (!bandDataList) return null;

  return (
    <BandContainer>
      <TitleWrap className={scrollY >= window.innerHeight / 3 && 'pageOffset'}>
        <h2>Oven Menu</h2>
      </TitleWrap>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        slidesPerView={'4'}
        spaceBetween={100}
        loop
        coverflowEffect={{
          rotate: 20, // 슬라이드 회전 각도
          stretch: 0, // 슬라이드 사이의 간격
          depth: 100, // 슬라이드와 슬라이드 사이의 거리
          modifier: 1, // 슬라이드 크기
          slideShadows: true, // 슬라이드 그림자
        }}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {bandDataList.map(({ id, href, src, alt, tag }) => {
          return (
            <SwiperSlide key={id}>
              <SlideInnerWrap>
                <ImageWrap>
                  <Link to={href}>
                    <img src={src} alt={alt} />
                  </Link>
                </ImageWrap>
                <TextWrap>
                  <span>{tag}</span>
                </TextWrap>
              </SlideInnerWrap>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BandContainer>
  );
};

export default Band;

const BandContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 150px;
  background-color: #f8e6d3;
  overflow: hidden;

  & > .mySwiper {
    height: 400px;
    overflow: hidden;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 55px;
  font-family: 'Rubik';
  font-weight: 900;
  transition: all 0.3s ease-in-out;
  opacity: 0;

  &.pageOffset {
    opacity: 1;
    top: 10%;
  }
`;

const SlideInnerWrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  position: relative;
  border-radius: 15px;
  overflow: hidden;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;

  & > a {
    width: 100%;
    height: 100%;
  }

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

const TextWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 25px;
    font-family: 'Rubik';
    font-weight: 700;
    color: #fff;
  }
`;
