import SelectedBook from "./SelectedBook.tsx";
import SelectedBooks from "./SelectedBooks.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";


export default function App() {
  return <>
    <Header></Header>
    <div className="mt-5 ml-8.5 mb-44.5">
      <SelectedBooks />
    </div>
    <Footer></Footer>
  </>

}