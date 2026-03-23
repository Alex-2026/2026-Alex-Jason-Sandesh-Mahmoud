function AboutMeCard({ name, role, bio, image }) {
  return (
    <div className="p-6 m-4 bg-white border-2 border-gray-300 rounded-lg shadow-md w-64 text-center">
      {/* Requirement: Picture */}
      <img src={image} alt={name} className="w-32 h-32 mx-auto mb-4 rounded-md" />
      
      {/* Requirement: Name & Title */}
      <h2 className="text-xl font-bold text-black">{name}</h2>
      <p className="text-blue-600 font-semibold mb-2">{role}</p>
      
      {/* Requirement: Blurb */}
      <p className="text-gray-700 text-sm">"{bio}"</p>
    </div>
  );
}

export default AboutMeCard;