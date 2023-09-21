import { useState } from "react";
import StyledBanner from "styles/pages/home/StyledBanner";


const Banner = () => {
  //배너에 대한 더미 데이터
  const bannerData = [
    {
      id: 1,
      title: "banner 1",
      image: "fake image 1",
    },
    {
      id: 2,
      title: "banner 2",
      image: "fake image 2",
    },
    {
      id: 3,
      title: "banner 3",
      image: "fake image 3",
    },
    {
      id: 4,
      title: "banner 4",
      image: "fake image 4",
    },
    {
      id: 5,
      title: "banner 5",
      image: "fake image 5",
    },
    {
      id: 6,
      title: "banner 6",
      image: "fake image 6",
    },
  ];

  //배너 상태 관리자
  const [banner, setBanner] = useState(0);

  //배너 변경
  const handleBanner = (e) => {
    setBanner(e);
  };

  return (
    <StyledBanner>
      <div class="header">
        <div class="banner">
          {/* 배너 더미데이터의 banner번째 인덱스의 이미지 */}
          <div class="banner-image">{bannerData[banner].image}</div>

          {/* 배너 더미데이터의 타이틀을 내용으로 보여주고, 클릭 시 배너 변경 */}
          <ul>
            <li onClick={() => handleBanner(0)}>{bannerData[0].title}</li>
            <li onClick={() => handleBanner(1)}>{bannerData[1].title}</li>
            <li onClick={() => handleBanner(2)}>{bannerData[2].title}</li>
            <li onClick={() => handleBanner(3)}>{bannerData[3].title}</li>
            <li onClick={() => handleBanner(4)}>{bannerData[4].title}</li>
            <li onClick={() => handleBanner(5)}>{bannerData[5].title}</li>
          </ul>
        </div>
      </div>
    </StyledBanner>
  );
};

export { Banner };
