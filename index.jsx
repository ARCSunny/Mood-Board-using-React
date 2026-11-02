export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem 
          color="#2a9d8f" 
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" 
          description="Santorini" 
        />
        <MoodBoardItem 
          color="#e76f51" 
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" 
          description="Shore" 
        />
        <MoodBoardItem 
          color="#e9c46a" 
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" 
          description="Pathway" 
        />
      </div>
    </div>
  );
}

export default MoodBoard;