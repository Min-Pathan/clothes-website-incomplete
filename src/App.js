import './App.css';
import GalleryReact from './Component/GalleryReact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Component/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <GalleryReact/>
    </div>
  );

  }
export default App;
