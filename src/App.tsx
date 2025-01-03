import { Bg } from "./Bg";
import { Envelope } from "./Envelope";

function App() {
  return (
    <main className="w-full h-screen flex items-center justify-center px-5 md:px-10">
      <Envelope />
      <Bg />
    </main>
  );
}

export default App;
