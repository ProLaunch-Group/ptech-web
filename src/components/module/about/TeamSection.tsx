import Image from "next/image";

import { team } from "@/constants/service";



export default function TeamSection() {
  return (
    <section className="bg-[#e8f3ff] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-amberGold bg-[#e8f3ff]  text-bold uppercase font-semibold">
            Our Team
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Experienced operators and engineers
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our diverse team combines technical expertise,
            strategic thinking and years of industry experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {team.map((member) => (

            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border"
            >

              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="font-semibold">
                  {member.name}
                </h3>

                <p className="text-blue-600 text-sm mt-2">
                  {member.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}