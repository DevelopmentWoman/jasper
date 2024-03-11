

export const MainPhoto = ({classAbout,imgSrc}) => {
  return (
    <div  className="card-about-d">
      <div className="cont-m-pho-lap">
          <div className={`${classAbout} photo-card-all`}></div>
          <div className="cover-bg-photo"></div>
      </div>
      <div className="wrap-img-card"> <img src={imgSrc}/></div>
    </div>
  )
}

