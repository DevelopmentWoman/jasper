export const DetailServices = ({linkImgHome}) => {
    // console.log(linkImgHome.initUrl)
  return (
    <div>
        {
        linkImgHome.map(el=>  
        <div key={el.id} className="g-serv-sect">
            <div className="cont-det-g-inf">
                <div className="con-bg-layout">
                    <div className="g-cont-img-serv"><img className="g-img-sev" src={`${el.url}`} alt="services"  /></div>
                    <div>
                        <span>{el.subtitle}</span>
                        <span>{el.subtitle2}</span>
                        <ul>{el.charact.map(it=><li>{it}</li>)}</ul>
                    </div>
                </div>
            </div>      
            <div className="img-img-full"><img src={`${el.urlPhoto}`} alt="services" /></div>
        </div>)
        }
    </div>


  )
}

