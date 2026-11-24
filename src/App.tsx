import LibraryItem from "./LibraryItem.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function App() {
  return <>
    <Header></Header>
    <div className="mt-16 mb-16 ml-8">
      <LibraryItem></LibraryItem>
    </div>
    <Footer></Footer>
  </>


}