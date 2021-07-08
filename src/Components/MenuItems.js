import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio bg-white shadow border-10 p-2" key={item.id}>
                        <div className="image-data ">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} style={{fontSize:'12px',backgroundColor:'orange'}}>{item.icon1}</a>
                                </li>
                            </ul>
                        </div>
                        <span className="c-grey f-20">{item.title} <a href={item.link1} style={{fontSize:'10px',color:'red'}}>{item.icon1}</a></span>
                        <p>Placeholder paragraph</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
