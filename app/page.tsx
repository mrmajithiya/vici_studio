import Hero from "./components/Hero";
import Header from "./components/ArtisticHeader";
import Secondsection from "./components/secondsection";
import Thirdsection from "./components/thirdsection";
import Fourthsection from "./components/fourthsection";
import Fifthsection from "./components/fifthsection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header/>
      <Hero />
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
    </main>
  );
}
