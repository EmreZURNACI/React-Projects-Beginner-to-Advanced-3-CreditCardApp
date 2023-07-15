import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundCard from './Templates/BackgroundCard.jsx';
import CardContextProvider from './Contexts/CardContext.jsx';
function App() {
  return (
    <CardContextProvider>
      <BackgroundCard />
    </CardContextProvider>
  );
}

export default App;
