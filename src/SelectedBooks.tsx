import SelectedBook from "./SelectedBook.tsx";
import {useState} from "react";

function SelectedBooks() {

  const [books, setBooks] = useState([
    {
      id: 1,
      BookImg: "/Book1.png",
      Title: "Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani",
      Price: "205 000.00 uzs",
      DiscountPrice: "155 000.00 uzs"
    },
    {
      id: 2,
      BookImg: "/Book2.png",
      Title: "Shaxmatchilar klubi nishoni",
      Price: "2 500 000.00 uzs",
      DiscountPrice: "2 000 000.00 uzs"
    },
    {
      id: 3,
      BookImg: "/Book3.png",
      Title: "“Shox”lar uchun shox donasi ko‘rinishidagi nishon",
      Price: "600 000.00 uzs",
      DiscountPrice: "525 250.00 uzs"
    }
  ]);

  const removeBook = (id: number) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };
  return <div className="flex flex-row gap-6">
    <div className="flex flex-col gap-y-5">
      {books.map((book) => (
        <SelectedBook
          key={book.id}
          BookImg={book.BookImg}
          Title={book.Title}
          Price={book.Price}
          DiscountPrice={book.DiscountPrice}
          onDelete={() => removeBook(book.id)}
        />
      ))}
    </div>
    <div className="flex flex-col gap-6">

      <div className="w-81.5 h-91 bg-[#0B1418CC]/80 rounded-2xl border border-[#1F272A]">
        <img src="/total.png" alt="img"/>
      </div>
      <img className="h-48 w-81.5" src="/Banners.png" alt="img"/>

    </div>

  </div>

}

export default SelectedBooks;