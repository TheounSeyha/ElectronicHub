import p1 from "../Photo/card.jpg";

import "./New.css";
function New() {
    return (
      <section className="main">
        <div className="image">
          <img src={p1} alt="" />
        </div>
        <div className="text">
          <h2>Iphone16 Promax</h2>
          <p>
            The iPhone 16 Pro Max display has rounded corners that follow a
            beautiful curved design, and these corners are within a standard
            rectangle. When measured as a standard rectangular shape, the screen
            is 6.86 inches diagonally (actual viewable area is less).
          </p>
          <button type="button"><a href="#">Read Detail</a></button>
        </div>
      </section>
    );
}

export default New;
