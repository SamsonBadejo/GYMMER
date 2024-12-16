import React from "react";
import Image1 from "../../Assets/Gallery 1.jpg";  // Replace with your actual image imports
import Image2 from "../../Assets/Gallery 2.jpg";
import Image3 from "../../Assets/Gallery 3.jpg";
import Image4 from "../../Assets/Gallery 4.jpg";
import Image5 from "../../Assets/Gallery 5.jpg";
import Image6 from "../../Assets/Gallery 6.jpg";
import Image7 from "../../Assets/Gallery 1.jpg";
import Image8 from "../../Assets/Gallery 7.jpg";

const Team = () => {
  const teamMembers = [
    {
      image: Image1,
      name: "John Doe",
      position: "Fitness Instructor",
    },
    {
      image: Image2,
      name: "Jane Smith",
      position: "Yoga Instructor",
    },
    {
      image: Image3,
      name: "Mark Lee",
      position: "Strength Coach",
    },
    {
      image: Image4,
      name: "Lucy King",
      position: "Personal Trainer",
    },
    {
      image: Image5,
      name: "Chris Black",
      position: "Gym Trainer",
    },
    {
      image: Image6,
      name: "Nina Gray",
      position: "Cardio Specialist",
    },
    {
      image: Image7,
      name: "Oliver White",
      position: "Wellness Coach",
    },
    {
      image: Image8,
      name: "Emma Green",
      position: "Pilates Instructor",
    },
  ];

  return (
    <section className=" py-12">
      <div className="container px-6 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-white lg:text-3xl mb-8">
          Meet our <span className="text-red-500">Instructors</span>
        </h2>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src={member.image}
                alt={member.name}
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium text-white">{member.name}</h3>
                <span className="mt-1 font-medium text-red-600">{member.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
