import React from "react";
import {
  oldLogo,
  piper,
  wes,
  lwEmployer,
  bestVancouver,
  rileyEvent,
  petPalooza,
  crusAidevent,
  trademark,
  googleReview,
  halloween2023,
  dogRate4,
  dogRate3,
  indyDiscounted,
} from "../assets";
import { indianabones_logo2 } from "../assets";
import { TimelineComponent } from "./design/TimelineComponent";

export function Timeline() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <div className="text-white my-20">
            <img
              className="w-40 rounded-lg"
              src={oldLogo}
              alt="indiana bones old logo"
            />
            <h1 className="text-3xl py-4 h1">First Spark </h1>
            <h1 className="text-xl text-n-4">Oct. 4th</h1>
            <p className=" font-normal mb-8 text-n-4">
              Sam has, on his birthday, the idea of the creation of Indiana
              Bones.
            </p>
          </div>

          <div className="text-white my-20">
            <div className="flex gap-5">
              <img
                className="w-28 sm:w-36 sm:h-40 rounded-lg"
                src={piper}
                alt="indiana bones old logo"
              />
              <img
                className="w-28 sm:w-36 sm:h-40 rounded-lg"
                src={wes}
                alt="indiana bones old logo"
              />
            </div>
            <h1 className="text-3xl py-4 h1">Lucky Start</h1>
            <h1 className="text-xl text-n-4">December</h1>
            <p className=" font-normal mb-8 text-n-4">
              Indiana Bones’ first two puppies came from the same household and
              signed up for five hikes a week. Wes, a Weimaraner, and Piper, a
              Brittany Spaniel, both with unique personalities, filled 16% of
              the company’s available spots.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="text-white my-20">
            <img src="" alt="" />
            <h1 className="text-4xl py-4 h1">First Employee</h1>
            <h1 className="text-xl text-n-4">March</h1>
            <p className=" font-normal mb-8 text-n-4">
              Jeremy Pitt believes in the company structure and vision and turn
              into the first hired employee of Indiana Bones Dog Adventure
            </p>
          </div>

          <div className="text-white my-20">
            <img src="" alt="" />
            <h1 className="text-3xl py-4 h1">
              Indiana Bones and the Temple of the July 2022 Lost Bark
            </h1>
            <h1 className="text-xl text-n-4">July</h1>
            <p className=" font-normal mb-8 text-n-4">
              Creation of the Dog Camping Trip Service
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "150 Dogs",
      content: <div>
        <img
              className="w-40 rounded-lg"
              src={dogRate4}
              alt="indiana bones old logo"
            />
      </div>,
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="text-white my-20">
            <img src="" alt="" />
            <h1 className="text-4xl py-4 h1">Incorporated</h1>
            <h1 className="text-xl text-n-4">January</h1>
            <p className=" font-normal mb-8 text-n-4">
              Indiana Bones becomes incorporated
            </p>
          </div>

          <div className="text-white my-20">
            <img
              className="w-40 rounded-lg"
              src={lwEmployer}
              alt="indiana bones old logo"
            />
            <h1 className="text-3xl py-4 h1">Certified Living Wage Employer</h1>
            <h1 className="text-xl text-n-4">March</h1>
            <p className=" font-normal mb-8 text-n-4">
              Indiana Bones reiforce its commitment with the team members and
              the
            </p>
          </div>

          <div className="text-white my-20">
            <img
              className="w-40 rounded-lg"
              src={bestVancouver}
              alt="indiana bones old logo"
            />
            <h1 className="text-3xl py-4 h1">Best of Vancouver</h1>
            <h1 className="text-xl text-n-4">September</h1>
            <p className=" font-normal mb-8 text-n-4">
              In less than 2 years of operation, Indiana Bones is voted
              runner-up best dog walking company in Vancouver according to
              Georgia Straight’s best of Vancouer 2023.
            </p>
          </div>

          <div className="text-white my-20">
            <img
              className="w-40 rounded-lg"
              src={googleReview}
              alt="indiana bones old logo"
            />
            <h1 className="text-3xl py-4 h1">Google Review 5 star</h1>
            <h1 className="text-xl text-n-4">September</h1>
            <p className=" font-normal mb-8 text-n-4">
            achieved 5 stars in google reviews
            </p>
          </div>

          <div className="text-white my-20">
            <img src="" alt="" />
            <h1 className="text-3xl py-4 h1">Make or Break it Moment</h1>
            <h1 className="text-xl text-n-4">September</h1>
            <p className=" font-normal mb-8 text-n-4">
              Sam lack of experience as business owner resulted in bad strategic
              decisions and monetary loss. Sam locks himself away from the world
              for 3 months to come up with a plan to save Indiana Bones from
              closure.
            </p>
          </div>

          <div className="text-white my-20">
          <img
              className="w-40 rounded-lg"
              src={halloween2023}
              alt="indiana bones old logo"
            />
            <h1 className="text-3xl py-4 h1">
              First Indy Pumpkin Carving Contest
            </h1>
            <h1 className="text-xl text-n-4">October</h1>
            <p className=" font-normal mb-8 text-n-4">
              Big Success among clients
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="text-white my-20">
            <img
              className="w-40 rounded-lg"
              src={indianabones_logo2}
              alt="indiana bones old logo"
            />
            <h1 className="text-4xl py-4 h1">Indy 2.0</h1>
            <h1 className="text-xl text-n-4">January</h1>
            <p className=" font-normal mb-8 text-n-4">
              Total company revamp from logo to structures and processes.
              Creation of membersips, real-time ETA sharing, self service
              booking...
            </p>
          </div>

          <div className="text-white my-20">
          <img
              className="w-40 rounded-lg"
              src={indyDiscounted}
              alt="indiana bones old logo"
            />
            <h1 className="text-4xl py-4 h1">
              I.N.D.Y. It is now discounted, yes!
            </h1>
            <h1 className="text-xl text-n-4">February</h1>
            <p className=" font-normal mb-8 text-n-4">
              Iniative to provide discounts to clients gointn thougth financial
              hadship
            </p>
          </div>

          <div className="text-white my-20">
            <img src="" alt="" />
            <h1 className="text-4xl py-4 h1">From the Ashes</h1>
            <h1 className="text-xl text-n-4">March</h1>
            <p className=" font-normal mb-8 text-n-4">
              Indiana Bones increases its revenue in 115% and margin fo 20%.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "300 Dogs",
      content: <div>
        <img
              className="w-40 rounded-lg"
              src={dogRate3}
              alt="indiana bones old logo"
            />
      </div>,
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="text-white my-20">
            <img
              className="w-56 h-40 sm:w-96 sm:h-56 rounded-lg"
              src={rileyEvent}
              alt="indiana bones old logo"
            />
            <h1 className="text-4xl py-4 h1">
              Indiana Bones and the Temple of Zoom Ryley’s RIP
            </h1>
            <h1 className="text-xl text-n-4">May</h1>
            <p className=" font-normal mb-8 text-n-4">
              Collaboration with bike event.
            </p>
          </div>

          <div className="text-white my-20">
            <img
              className="w-52 sm:w-56 sm:h-56 rounded-lg"
              src={petPalooza}
              alt="indiana bones old logo"
            />
            <h1 className="text-4xl py-4 h1">Pet-a-Palooza</h1>
            <h1 className="text-xl text-n-4">August</h1>
            <p className=" font-normal mb-8 text-n-4">Huge Success</p>
          </div>

          <div className="text-white my-20">
            <img
              className="w-52 sm:w-40 sm:h-56 rounded-lg"
              src={crusAidevent}
              alt="indiana bones old logo"
            />
            <h1 className="text-4xl py-4 h1">
              Indiana Bones and the Nature CrusAID
            </h1>
            <h1 className="text-xl text-n-4">October</h1>
            <p className=" font-normal mb-8 text-n-4">
              Initiative with the approval of the government of West Van to
              clean the trails and why not a treasure hunt?
            </p>
          </div>

          <div className="text-white my-20">
            <img src="" alt="" />
            <h1 className="text-4xl py-4 h1">
              Second Indy Pumpkin Carving Contest
            </h1>
            <h1 className="text-xl text-n-4">October</h1>
            <p className=" font-normal mb-8 text-n-4">
              Big Success among clients
            </p>
          </div>

          <div className="text-white my-20">
            <img
              src={trademark}
              className="w-32 rounded-lg"
              alt="trademark symbol"
            />
            <h1 className="text-4xl py-4 h1">
              Indiana Bones is now a registered trademark
            </h1>
            <h1 className="text-xl text-n-4">October</h1>
            <p className=" font-normal mb-8 text-n-4"></p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <TimelineComponent data={data} />
    </div>
  );
}
