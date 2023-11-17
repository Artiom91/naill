import { useState } from "react";
import image1 from "../img/11.png";
import image2 from "../img/11.png";
import image3 from "../img/11.png";

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mt-16  cursor-pointer transform hover:scale-95">
    <img className="w-full" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-0">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

const CardList = () => {
  const cardsData = [
    {
      id: 1,
      image: image1,
      title: "Карточка 1",
      description: "Описание карточки 1",
    },
    {
      id: 2,
      image: image2,
      title: "Карточка 2",
      description: "Описание карточки 2",
    },
    {
      id: 3,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 4,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 5,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 6,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 7,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 9,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 28,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 38,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 48,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 58,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 68,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 78,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 88,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
    {
      id: 8,
      image: image3,
      title: "Карточка 3",
      description: "Описание карточки 3",
    },
  ];

  const cardsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardsData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 justify-center items-center">
        {currentCards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <a
            key={page}
            href="#"
            className={`mx-2 p-2 rounded ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardList;
