import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie"?"Filmes":"Séries"}</span>
          <select name="genre" id="genre">
            <option >Gênero</option>
            <option value="adventure">Aventura</option>
            <option value="comedy">Comédia</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasia</option>
            <option value="horror">Terror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Ficção</option>
            <option value="thriller">Thriller</option>
            <option value="western">Faroeste</option>
            <option value="animation">Animação</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentário</option>
          </select>
        </div>
      )}
      <img src="https://www.inatel.br/imprensa/images/Campus_Inatel.JPG" alt="" />
      <div className="info">
      <img src="https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/inatel-1610566114-inatelpng.png" alt="" />
        <span className="desc">
          Um documentário sobre a melhor faculdade de engenharia do Brasil.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}