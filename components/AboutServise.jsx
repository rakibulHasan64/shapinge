"use client";

import Link from "next/link";

const AboutServise = () => {

   const blogs = [
      {
         id: 1,
         image: "https://via.placeholder.com/300x200?text=Blog+1",
         title: "How to Build a Strong Company Culture",
         date: "12th May, 2021",
         readTime: "8 Min To Read",
         description: "Learn how to create a positive and engaging workplace culture for your employees."
      },
      {
         id: 2,
         image: "/about-img.png",
         title: "The Role of Leadership in Business Success",
         date: "28th June, 2021",
         readTime: "10 Min To Read",
         description: "Explore how effective leadership drives company growth and innovation."
      },
      {
         id: 3,
         image: "/about-img.png",
         title: "Scaling Your Startup Successfully",
         date: "15th July, 2021",
         readTime: "12 Min To Read",
         description: "Tips and strategies for expanding your startup while maintaining quality and culture."
      },
      {
         id: 4,
         image: "/about-img.png",
         title: "Embracing Diversity in the Workplace",
         date: "20th August, 2021",
         readTime: "9 Min To Read",
         description: "Understand the benefits of diversity and how to foster an inclusive work environment."
      },
      {
         id: 5,
         image: "/about-img.png",
         title: "How Technology Impacts Modern Businesses",
         date: "5th September, 2021",
         readTime: "11 Min To Read",
         description: "Discover how the latest technology trends are reshaping the business landscape."
      },
      {
         id: 6,
         image: "/about-img.png",
         title: "Building a Brand that Resonates with Customers",
         date: "18th October, 2021",
         readTime: "10 Min To Read",
         description: "Learn the key elements of creating a strong and memorable brand identity."
      },
      {
         id: 7,
         image: "/about-img.png",
         title: "Effective Marketing Strategies for Small Businesses",
         date: "25th November, 2021",
         readTime: "8 Min To Read",
         description: "Explore affordable and impactful marketing techniques for small business growth."
      },
      {
         id: 8,
         image: "/about-img.png",
         title: "The Importance of Employee Well-being",
         date: "10th December, 2021",
         readTime: "9 Min To Read",
         description: "Find out how focusing on employee well-being can improve productivity and morale."
      },
   ];



   return (
      <>
         
         <div className="bg-green-50 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
               {blogs.map((blog) => (
                  <div
                    
                     key={blog.id}
                     className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
                  >
                     <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover rounded-md"
                     />
                     <h3 className="text-lg font-semibold mt-3">{blog.title}</h3>
                     <div className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                     </div>
                     <p className="text-gray-500 mt-2">{blog.description}</p>
                     <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                        Read More
                     </button>
                  </div>
               ))}
            </div>
         </div>

      </>
   );
};

export default AboutServise;
