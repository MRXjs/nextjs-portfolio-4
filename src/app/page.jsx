import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="overflow-hidden bg-no-repeat bg-cover bg-site">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </main>
  );
}
