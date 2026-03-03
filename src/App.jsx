import Navbar from "./components/ Navbar";

function Section({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center text-4xl font-bold"
    >
      {id.toUpperCase()}
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Section id="about" />
        <Section id="skills" />
        <Section id="projects" />
        <Section id="contact" />
      </div>
    </>
  );
}

export default App;
