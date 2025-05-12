import './App.css'
import { useState } from 'react';



export default function FollowCard({ userName, name,imgUrl,initialFollowing,children }) {
	
	const [isFollowing, setIsFollowing] = useState(initialFollowing);	
	const buttonClassName = isFollowing
	? 'tw-followCard-button is-following'
	: 'tw-followCard-button';
	const text = isFollowing ? 'Siguiendo' : 'Seguir';

	function handleClick () {
		setIsFollowing(!isFollowing)
	}

  return (
    <section className="tw-followCard">
      <header className="tw-followCard-header">
      <img 
				src={imgUrl} 
				alt={userName}  
				className='tw-followCard-avatar'/>
      <div className="tw-followCard-info">
				<strong>{children}</strong>{/* Contenido proyectado desde el padre */}
				<span className='tw-followCard-infoUserName'>@{userName}</span>
			</div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>          
					<span className='tw-followCard-text'>{text}</span>
					<span className='tw-followCard-stopFollow'>Dejar de seguir</span>
					</button>
      </aside>
    </section>
  );
}