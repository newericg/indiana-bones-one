import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";

import { adventure, mission, safety, sam, sam2, social, sustain, vision } from "../assets";

const safetyItens = [
  'Dogs can be fitted with GPS collars  (Tractive) for your peace of mind. Just ask us for it and we will provide it free of charge.',' All dog hikers have first aid training', 'We use climatized vehicles to transport your dog.', 'Thorough behavioral assessment of new dogs to ensure the safety of our furry friends and hikers.', ' All trails used are approved for commercial off-leash dog hiking and dog walking', 'Only vegan treats are used to avoid allergic reactions.', 'A thorough enrollment process is divided into 3 trials to guarantee we are accepting the right fit for the pack and guarantee everyones safety.', 
]

const sustainabilityAndAnimalWelfareItens = [
  'Criminal check of all Indiana Bones dog hikers.', 'Reference check of all Indiana Bones dog hikers.', 'All poop bags are compostable.', 'Automated routing with ETA sharing guarantees that the client is in the loop and the pup doesnt stay in the car for long.' ,
]

const socialResponsabilityItens = [
  'Provide living wage for the employees', "Driver's record check of all Indiana Bones dog hikers.", "Extended Health Benefits for Employees", "First Aid Course for Employees", "Dog Training Course After 1 Year of Employment - The Company Pays 50% of The Total Value."
]

const adventureItens = [
  'All trails are safe but challenging.', 'Guaranteed dog hiking time of 1.5 hours.'
]

const AboutUsPage = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col items-center"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mt-10"
          title="About Us"
          tag="Indiana Bones Dog Adventures"
        />
      </Reveal>
      <Reveal>
        <main className="flex flex-col items-center w-full text-justify sm:text-center text-n-4 px-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center mx-auto gap-20 lg:w-1/2">
              <div className="lg:w-1/2">
                <picture>
                  <img
                    src={sam}
                    alt="dog barking in the woods"
                    className="object-cover w-full rounded-lg"
                  />
                </picture>
              </div>
              <div className="lg:w-1/2">
                {" "}
                <h1 className="mb-10 text-center">Indiana Bones' Story</h1>
                <p className="text-justify">
                  Have you ever felt like you haven't discovered your true
                  passion? Consider yourself fortunate if you have already found
                  it at an early stage in life. It took me 18 years to find the
                  courage to leave my career as a Mechanical Engineer and pursue
                  something different. Indiana Bones was born out of my desire
                  to engage in a pursuit that I genuinely love - dogs and
                  hiking. Although the idea started modestly, it grew into
                  something extraordinary in my mind. As I devoted myself to
                  building the company, my determination only intensified.
                  Indiana Bones was created to address a gap in the market
                  within our "mountainless" region. We strive to provide you and
                  your dogs with the most exceptional experience imaginable.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center mx-auto gap-20 lg:w-1/2">
              <div className="lg:w-1/2">
                {" "}
                <h1 className="my-10 text-center"> Indiana Bones' Founder </h1>
                <p className="text-justify">
                  Sam Zambon is a mechanical engineer with master's degree in
                  industrial management and master's degree in human resources
                  (leadership and conflict resolution). He moved here from
                  Brazil in 2018. His love for dogs started since his first days
                  of life with a Doberman called Ariane, after her many others
                  came: Nikita (Poodle), Antaris (Husky), Bubby (German
                  Sheppard), Jimmy (Sheepdog) and finally Anya (Shar-pei, above)
                  and Oscar (mix of Lab and Great Pyrenees - top and left).
                  "Each of them taught me as much as I taught them."
                </p>
              </div>
              <div className="lg:w-1/2">
                <picture>
                  <img
                    src={sam2}
                    alt="dog barking in the woods"
                    className="object-cover w-full rounded-lg"
                  />
                </picture>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h1></h1>
          </Reveal>
        </main>
        <div className="w-full mx-auto my-32 py-20 flex justify-center bg-color-600">
          <div className="lg:w-1/3 flex flex-col px-10">
            <p>
              {" "}
              "The Indy crew are true dog lovers and very trustworthy. Our pup
              can’t wait for his adventure hikes every week! Highly recommend."
            </p>
            <br />
            <p>Brenda H. - Marlow's mom.</p>
            <p>Team Indy since April 2022.</p>
          </div>
        </div>
        <h1 className="h1 mb-20 px-5">Vison, Mission and Values</h1>
        <section className="flex justify-center text-n-4 text-justify">
            <div className="flex flex-col lg:flex-row justify-center lg:w-1/2 gap-12 lg:gap-32 px-10">
                <div className="lg:w-1/2 gap-5 flex flex-col items-center">
                  <h1 className="text-2xl">Vison</h1>
                  <div className="w-auto h-auto">
                    <img className="rounded-lg" src={vision} alt="" />
                  </div>
                  <p className="">Indiana Bones envisions a future where every dog in British Columbia can embrace the energizing and joyful experience of off-leash trail hiking while reaping the multitude of physical and mental health benefits it offers. With a passion for the well-being and happiness of our furry companions, our goal is to provide a safe and inclusive platform for dogs of all shapes, sizes, and abilities to explore the great outdoors and embark on memorable adventures. By promoting responsible and sustainable practices, we strive to foster a community where dogs and their owners can forge lifelong bonds, create treasured memories, and enjoy the wonders of nature together.
                 </p>
                </div>
                <div className="lg:w-1/2 gap-5 flex flex-col items-center">
                  <h1 className="text-2xl">Mission</h1>
                  <div className="w-full h-auto">
                    <img className="rounded-lg mx-auto" src={mission} alt="" />
                  </div>
                  <p> Our mission at Indiana Bones Dog Adventures is to provide an exceptional dog hiking experience for Vancouver's dog owners. We strive to promote the physical and mental well-being of dogs by offering exhilarating off-leash activities on the challenging trails of the picturesque North Shore. Safety and sustainability are at the forefront of our operation as we prioritize the welfare of both dogs and the environment. Our dedicated team ensures a secure return of our furry adventurers to their homes, ensuring they are exhausted and in improved overall well-being. Through our services, we aim to enhance the bond between dogs and their owners, enabling them to lead active, fulfilling lives together in the great outdoors. 
                 </p>
                </div>
            </div>
        </section>
        <div className="w-full mx-auto my-32 py-20 flex justify-center bg-color-600">
          <div className="lg:w-1/3 flex flex-col px-10">
            <h1> Our Values</h1>
            <br />
            <p>At Indiana Bones, we understand that dogs are more than pets. They are companions, best friends, and family members. To make sure you trust us with their well-being, we rigorously adhere to these values</p>
            
          </div>
        </div>
        <section className="flex justify-center text-n-4 text-justify mt-32">
            <div className="flex flex-col lg:flex-row justify-center lg:w-1/2 gap-12 lg:gap-32 px-10">
                <div className="lg:w-1/2 gap-5 flex flex-col items-center">
                  <h1 className="text-2xl">Safety</h1>
                  <img className="rounded-lg w-auto h-72" src={safety} alt="" />
                    <ul className="list-disc">
                     {safetyItens.map((item) => (
                      <li> {item} </li>
                     ))}
                    </ul>
                </div>
                <div className="lg:w-1/2 gap-5 flex flex-col items-center">
                  <h1 className="text-2xl text-center">Sustainability and Animal Welfare</h1>
                  <img className="rounded-lg w-auto h-72" src={sustain} alt="" />
                  <ul className="list-disc">
                     {sustainabilityAndAnimalWelfareItens.map((item) => (
                      <li> {item}</li>
                     ))}
                  </ul>
                </div>
            </div>
        </section>

        <section className="flex justify-center text-n-4 text-justify mt-32">
            <div className="flex flex-col lg:flex-row justify-center lg:w-1/2 gap-12 lg:gap-32 px-10">
                <div className="lg:w-1/2 gap-5 flex flex-col items-center">
                  <h1 className="text-2xl">Social Responsability</h1>
                  <img className="rounded-lg w-auto h-72" src={social} alt="" />
                    <ul className="list-disc">
                     {socialResponsabilityItens.map((item) => (
                      <li> {item} </li>
                     ))}
                    </ul>
                </div>
                <div className="lg:w-1/2 gap-5 flex flex-col items-center">
                  <h1 className="text-2xl text-center">Adventure</h1>
                  <img className="rounded-lg w-auto h-72" src={adventure} alt="" />
                  <ul className="list-disc">
                     {adventureItens.map((item) => (
                      <li> {item}</li>
                     ))}
                  </ul>
                </div>
            </div>
        </section>
      </Reveal>
    </Section>
  );
};

export default AboutUsPage;
