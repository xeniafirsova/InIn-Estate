import React, { useEffect, useRef, useState } from "react";

import { Button, Paper, Typography } from "@mui/material";

import EastIcon from "@mui/icons-material/East";
import JoinSection from "./JoinSection";
import IconSection from "./IconSection";

import { useTranslation } from "next-i18next";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import FeaturedItem from "./FeaturedItem";



function HomeSection() {

  const { t } = useTranslation();

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="section-container">
      {/* Featured section */}
      <Typography id="section-title" variant="h4" component="h1">
        {t("featured-title")}
      </Typography>
      {domLoaded && (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper featured-swiper"
        >

          {[...Array(2)].map((_, index) => (
            <>
            <SwiperSlide className="swiper-slides">
            <FeaturedItem
              title="featured-name-1"
              sqm="132"
              price="70.000"
              img1="https://i.ibb.co/B2FgfHV/house-with-wood-facade-reveals-the-diversity-of-teak-2-1679614331.jpg"
              img2="https://cdn.jacobsenarquitetura.com/uploads/2015/09/2008_residencia_mdt_4-scaled-1280x0-c-default.webp"
            />
          </SwiperSlide>

          <SwiperSlide className="swiper-slides">
            <FeaturedItem
              title="featured-name-2"
              sqm="64"
              price="30.000"
              img1="https://i.ibb.co/yPzZt3X/house-for-two-artists-mikael-bergquist-arkitektkontor-9.jpg"
              img2="https://images.adsttc.com/media/images/63c7/326a/760d/d27d/ee12/9d92/slideshow/house-for-two-artists-mikael-bergquist-arkitektkontor_7.jpg?1673999102"
            />
          </SwiperSlide>

          <SwiperSlide className="swiper-slides">
            <FeaturedItem
              title="featured-name-3"
              sqm="97"
              price="65.000"
              img1="https://static.dezeen.com/uploads/2015/07/Cedar-Lodges-by-Adam-Knibb-Architects_dezeen_784_0.jpg"
              img2="https://static.dezeen.com/uploads/2015/07/Cedar-Lodges-by-Adam-Knibb-Architects_dezeen_468_7.jpg"
            />
          </SwiperSlide>
          </>
          ))}
          

        </Swiper>
      )}

      {/* Decore section */}

      <div className="section-decore-container">
        <div className="section-decore">
          <div className="section-decore-left">
            <img src="https://i.ibb.co/qFpk0T8/decore.png" alt="" />
          </div>
          <div className="section-decore-right">
            <Typography
              id="section-decore-right-text"
              variant="h4"
              component="h2"
            >
              {t("decore-text")}
            </Typography>
            <Typography
              id="section-decore-right-inin"
              variant="h6"
              component="p"
            >
              - InIn Estate
            </Typography>
            <Button className="section-decore-right-button" variant="contained">
              {t("decore-button")} <EastIcon fontSize="small" sx={{ ml: 1 }} />
            </Button>
          </div>
        </div>
      </div>

      {/* Join clients' zone section */}
      <JoinSection />

      {/* Icon info section */}
      <IconSection />
    </div>
  );
}

export default HomeSection;
