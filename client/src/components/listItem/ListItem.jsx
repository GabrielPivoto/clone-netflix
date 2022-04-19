import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import "./listItem.scss"

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='listItem' 
    style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://cdn.mensagenscomamor.com/content/images/m000532516.jpg?v=2" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownAltOutlined/> 
        </div>
        <div className="itemInfoTop">
          <span>1h 32min</span>
          <span className='limit'>+18</span>
          <span>2002</span>
        </div>
        <div className="description">
          Tá pegando fogo bixo.
        </div>
        <div className="genre">Ação</div>
      </div>
    </div>
  )
}
