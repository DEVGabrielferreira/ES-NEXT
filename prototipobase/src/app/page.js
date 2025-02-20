import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Advantages } from "./_components/advantages";
import { Hype } from "./_components/hype";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Hype />
      <Advantages />
      <Footer />
    </main>
  );
}
