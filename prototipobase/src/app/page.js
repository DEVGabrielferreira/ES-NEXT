import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Vantagens } from "./_components/vantagens";
import { Alta } from "./_components/alta";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Alta />
      <Vantagens />
      <Footer />
    </main>
  );
}
