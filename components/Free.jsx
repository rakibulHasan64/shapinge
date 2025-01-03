
function Free() {

   const plans = [
      {
         title: "Startup",
         price: 29,
         description: "Lorem ipsum dolor sit amet, consectetur justo.",
         features: [
            "Track Reward Part Program",
            "Design And Prototype Powerful",
            "Keep Work In Unlimited Storage",
            "Add People Document Handoff.",
         ],
      },
      {
         title: "Promotional",
         price: 99,
         description: "Lorem ipsum dolor sit amet, consectetur justo.",
         features: [
            "Track Reward Part Program",
            "Design And Prototype Powerful",
            "Keep Work In Unlimited Storage",
            "Add People Document Handoff.",
         ],
         recommended: true,
      },
      {
         title: "Enterprise",
         price: 129,
         description: "Lorem ipsum dolor sit amet, consectetur justo.",
         features: [
            "Track Reward Part Program",
            "Design And Prototype Powerful",
            "Keep Work In Unlimited Storage",
            "Add People Document Handoff.",
         ],
      },
   ];
   return (
      <>
         <div className="bg-green-50 py-10">
            <div className="container mx-auto">
               <div className="flex justify-center gap-6">
                  {plans.map((plan, index) => (
                     <div
                        key={index}
                        className={`${plan.recommended ? "border-green-500 border-2" : "border-gray-200"
                           } bg-white rounded-lg shadow-md p-6 w-80 hover:shadow-lg transition`}
                     >
                        {plan.recommended && (
                           <div className="absolute -top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-sm">
                              Recommended
                           </div>
                        )}
                        <h2 className="text-2xl font-bold text-green-600">${plan.price}/Month</h2>
                        <h3 className="text-xl font-semibold mt-3">{plan.title}</h3>
                        <p className="text-gray-500 mt-2">{plan.description}</p>
                        <ul className="mt-4 space-y-2">
                           {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                 <span className="text-green-500">✔</span>
                                 <span>{feature}</span>
                              </li>
                           ))}
                        </ul>
                        <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full">
                           Start Free Trial
                        </button>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         
         
      </>
   );
}

export default Free;