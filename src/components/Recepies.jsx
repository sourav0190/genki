import React, { useState } from "react";

function Recepies() {
  // List of random texts to display on hover
  const randomTexts = [
    "Delicious Dish",
    "Tasty Recipe",
    "Yummy Meal",
    "Try This Now!",
    "Chef's Special",
    "Food Lover's Paradise",
    "Savor the Flavor",
    "Gourmet Dish"
  ];

  // State to manage the random text display
  const [hoverText, setHoverText] = useState("");

  const handleHover = () => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    setHoverText(randomTexts[randomIndex]);
  };

  const handleLeave = () => {
    setHoverText(""); // Clear text when hover ends
  };

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {[
            {
              imgSrc:
                "https://images.unsplash.com/photo-1630409351211-d62ab2d24da4?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://unsplash.com/photos/14n0HJZl5aA",
              alt: "Yellow rice on white ceramic plate"
            },
            {
              imgSrc:
                "https://images.unsplash.com/photo-1628606338096-686cf7dba76a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://unsplash.com/photos/VqS0H-hOwwE",
              alt: "Cooked food on white ceramic bowl"
            },
            {
              imgSrc:
                "https://images.unsplash.com/photo-1628606336803-77914bbe8225?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://unsplash.com/photos/psI83a1A4qs",
              alt: "Fried rice on black round plate"
            },
            {
              imgSrc:
                "https://plus.unsplash.com/premium_photo-1675727579542-ad785e1cee41?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://unsplash.com/photos/qBdzPpDeTFA",
              alt: "Three bowls of tomato soup on a table"
            },
            {
              imgSrc:
                "https://plus.unsplash.com/premium_photo-1694506374847-ced565472398?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://unsplash.com/photos/vkftQUmX-pw",
              alt: "Three bowls of food on a table with spoons"
            },
            {
              imgSrc:
                "https://images.unsplash.com/photo-1638049924984-90618133d462?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://unsplash.com/photos/aXK9bB5XAiA",
              alt: "A white plate topped with rice covered in sauce"
            },
            {
              imgSrc:
                "https://plus.unsplash.com/premium_photo-1700061780561-3c2c80b6ae5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://unsplash.com/photos/mBFSrszNks8",
              alt: "A table topped with three black trays filled with food"
            },
            {
              imgSrc:
                "https://plus.unsplash.com/premium_photo-1700760417062-8ad47baf02aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://unsplash.com/photos/y7N57YnG1NE",
              alt: "Four plastic containers filled with different types of food"
            }
          ].map((item, index) => (
            <div className="col" key={index}>
              <div
                className="card shadow-sm"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="img-container">
                    <div className="img-wrapper">
                      <img
                        src={item.imgSrc}
                        alt={item.alt}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                </a>
                {hoverText && <div className="card-body">{hoverText}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recepies;
