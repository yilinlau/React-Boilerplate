import Header from "./components/layouts/Header";
import Router from "./router/Router";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-gray-100 text-zinc-800 dark:bg-zinc-800 dark:text-gray-100 max-w-7xl mx-auto">
        <Router />
      </div>
    </div>
  );
};

export default App;
