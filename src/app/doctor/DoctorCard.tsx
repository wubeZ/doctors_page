import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  doctor: any;
}

const DoctorCard = ({ doctor }: Props) => {
  return (
    <Link href={`/doctor/${doctor._id}`}>
      <div className="relative font-primary flex flex-col shadow-2xl w-72 my-8 gap-8 items-center h-56 rounded-3xl hover:scale-105">
        <div className="absolute top-[-50px] h-24 w-24 rounded-full border-2 border-[#6C63FF] overflow-hidden">
          <Image
            src={doctor.photo}
            width={100}
            height={100}
            alt="image"
            className="object-cover"
          />
        </div>
        <p className="absolute top-16 text-lg font-primary font-semibold">
          {doctor.fullName}
        </p>
        <p className="absolute top-28 rounded-full w-44 text-sm bg-blue-500 font-light text-center text-white">
          {doctor.speciality[0].name}
        </p>
        <div className="absolute top-44 text-center">
          {doctor.institutionID_list.map((place: any) => {
            return (
              <p className="text-sm font-normal">{place?.institutionName} | </p>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
