import React, { useRef, useEffect } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';

const TitleCards = ({ title }) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
  event.preventDefault();
  if (cardsRef.current) {
    const scrollAmount = event.deltaY > 0 ? 100 : -100;
    cardsRef.current.scrollLeft += scrollAmount;
  }
};


  useEffect(() => {
    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handleWheel);
    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('zoom-in', entry.isIntersecting);
      });
    },
    { threshold: 0.5 }
  );

  cards.forEach((card) => observer.observe(card));

  return () => {
    cards.forEach((card) => observer.unobserve(card));
  };
}, []);


  // Filter cards based on the title/category
  const filteredCards = cards_data.filter((card) => card.category === title);

  return (
    <div className='titlecards' ref={cardsRef}> {/* Apply ref to titlecards container */}
      <h2>{title || 'Popular On Portfolio'}</h2>
      <div className="card-list">
  {filteredCards.map((card, index) => (
    <div className="card-container" key={index}>
      <div className="card">
        <img src={card.image} alt={card.name} className="card-image" />
        <div className="card-content">
          <p className="card-title">{card.name}</p>
          {/* Additional content or icons can be added here */}
        </div>
      </div>
    </div>
  ))}
</div>





    </div>
  );
};

export default TitleCards;
