const TestimonialCard = ({ name, role, message, image }) => {
  return (
    <div className="min-w-[280px] max-w-[300px] bg-white border-1 rounded-xl shadow-md p-6 flex-shrink-0 text-center hover:shadow-xl transition-transform duration-300">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4 border-4 border-gray-200 mx-auto" />
      <p className="text-gray-600 italic mb-4">"{message}"</p>
      <h3 className="text-lg font-semibold">{name}</h3>
      <span className="text-sm text-gray-500">{role}</span>
    </div>
  );
};

export default TestimonialCard;
