import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Lnb = () => {
    return (
        <nav class="lnb">
            <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                spaceBetween={20}
                centeredSlides={true}
                centeredSlidesBounds={true}
            >
                <SwiperSlide className="current"><a href="">홈</a></SwiperSlide>
                <SwiperSlide><a href="">커뮤니티</a></SwiperSlide>
                <SwiperSlide><a href="">초빙정보</a></SwiperSlide>
                <SwiperSlide><a href="">임대분양</a></SwiperSlide>
                <SwiperSlide><a href="">설문조사</a></SwiperSlide>
                <SwiperSlide><a href="">뉴스</a></SwiperSlide>
                <SwiperSlide><a href="">의학정보</a></SwiperSlide>
                <SwiperSlide><a href="">웹심포지움</a></SwiperSlide>
                <SwiperSlide><a href="">개원올인원</a></SwiperSlide>
                <SwiperSlide><a href="">연봉인덱스</a></SwiperSlide>
                <SwiperSlide><a href="">처방정보</a></SwiperSlide>
                <SwiperSlide><a href="">입지분석</a></SwiperSlide>
            </Swiper>
        </nav>
    )
}
export default Lnb