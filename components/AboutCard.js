

function AboutCard({ item }) {
   
   return (
      <>
         <div className="space-y-3 mb-4 text-current">
            <img src={item.img} alt="Item Image" className="w-80 h-60 object-cover rounded-md mx-auto" />
            <h3 className="text-xl font-semibold text-center">{item.name}</h3>
            <p className="text-center">{item.title}</p>
         </div>

         
      </>
   );
}

export default AboutCard;