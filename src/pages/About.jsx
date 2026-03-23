import AboutMeCard from "../components/AboutMeCard";

function About() {
  return ( 
  <div className="p-10 bg-gray-50 min-h-screen">
      
      {/* Requirement: Header with 2 different text styles */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-800">Our Project Team</h1>
        <p className="text-sm uppercase tracking-widest text-gray-500">Unit 4: Props Assignment</p>
      </header>

      {/* Requirement: Layout using a simple Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        <AboutMeCard 
          name="Alexandro Calmo" 
          role="Project Lead (Basically)" 
          bio="Likes Sitcoms" 
          image="cat in da hat.avif" 
        />
        <AboutMeCard 
          name="Thing 1 (Mahmoud)" 
          role="Designer" 
          bio="Loves walking into poles" 
          image="Thing 1.jpg" 
        />
        <AboutMeCard 
          name="Thing 2 (Sandesh)" 
          role="Developer" 
          bio="Loves his cars" 
          image="Thing 2.jpg" 
        />
      </div>

      {/* Requirement: ASCII Art (using <pre>) */}
      <div className="mt-20 text-center">
        <pre className="inline-block text-blue-500 font-mono text-[10px] leading-none">
{`
   _  _  _ 
  | || || |
  | || || |
  |_||_||_|
`}
        </pre>
        <p className="bg-yellow-100 p-8 font-bold text-blue-600">Team Cards are working! 🎉</p>
      </div>

    </div>
)
};

export default About;
