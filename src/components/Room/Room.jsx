import './Room.css'
export const Room = ({ imageUrl, title, body }) => (
  <div className="card">
    <img className="card__image" src={imageUrl} alt={title} />
    <div className="card__title">{title}</div>
    <div className="card__body">{body}</div>
  </div>
);