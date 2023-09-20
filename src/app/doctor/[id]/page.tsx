"use client";

import React from "react";
import Image from "next/image";
import { useGetSingleDoctorQuery } from "@/lib/redux/services/doctorApi";
import { useRouter } from "next/navigation";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import {BsChevronLeft} from "react-icons/bs"
import backgroundImage from "@/assets/images/manik-roy-u7GtZ0yVijw-unsplash 1.svg";


const page = ({ params }: {params : {id : string}}) => {
  const router = useRouter();
  const doctor_id: string = params.id;
  const { data, isLoading, isFetching, isError } = useGetSingleDoctorQuery(doctor_id);
  const doctor: any = data;

  
  if (isError){
    return <div>
      Error ocurred retriving the Doctor's data....
    </div>
  }
  
  if (isLoading || isFetching) {
    return (
      <div className="my-32 flex justify-center items-center text-3xl">
        <p className="border-dashed border-4 border-slate-800 rounded-full w-40 h-40 py-12 px-4 animate-bounce">
          loading...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col mx-auto font-primary mb-24 ">
      <div onClick={() => {router.replace('/')}} className="flex text-center gap-1 mt-20 ml-10 hover:text-blue-800 cursor-pointer w-32">
        <span className="pt-1"><BsChevronLeft/></span>
        <p>Go Back</p>
      </div>
      <div className="h-72 flex justify-center mx-auto px-10 mt-10 rounded-3xl overflow-hidden">
        <Image
          src={backgroundImage}
          width={100}
          height={100}
          alt="Background Image"
          className="w-fit h-full object-cover rounded-3xl shadow-2xl"
        />
      </div>
      <div className="h-48 w-48 mx-auto rounded-full border-2 border-blue-800 overflow-hidden -mt-24">
        <Image
          src={doctor.photo}
          width={100}
          height={100}
          alt="Doctor Image"
          className="h-48 w-48 object-cover"
        />
      </div>
      <div className="xl:mx-auto font-primary">
        <section className="px-10 md:px-20 lg:px-10 lg:mr-96 max-w-screen-md space-y-14 mt-10">
          <div className="flex gap-14 text-left justify-between">
            <div>
              <p className="font-bold text-3xl">{doctor.fullName}</p>
              <p className="font-light">{doctor.speciality[0].name}</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-light text-sm">Addis Ababa University</p>
              <p className="font-light">{doctor.institutionID_list[0].institutionName}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-extrabold text-lg">About</h2>
            <p className="max-w-7xl font-light">
              { doctor.summary ||
              `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quia accusantium voluptatibus maxime maiores nulla dignissimos
              nam, voluptate, provident nisi placeat ratione ipsam numquam
              dolor. Alias incidunt vitae libero aliquid. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nihil quod cupiditate alias
              quae explicabo ut obcaecati incidunt nostrum ullam neque,
              perspiciatis nulla vitae provident officiis assumenda dicta,
              eveniet facilis tempore.`}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-extrabold text-lg">Education</h2>
            <div className="flex justify-between">
              <div>
                <p className="font-bold">Addis Ababa University</p>
                <p className="font-light">Bsc. Medicine</p>
              </div>
              <p className="font-light">2003-2007</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-extrabold text-lg">Contact Info</h2>
            <div className="flex gap-3 text-sm">
              <p className="pt-1">
                <HiPhone />
              </p>
              <p className="flex flex-col">
                <span className="text-blue-800">Phone Number:</span>
                <span className="font-light">{(doctor?.phoneNumbers && doctor.phoneNumbers[0]) || `+25134454322`}</span>
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <p className="pt-1">
                <MdEmail />
              </p>
              <p className="flex flex-col">
                <span className="text-blue-800">Email:</span>
                <span className="font-light">{(doctor?.emails && doctor.emails[0]) || `fasil@gmail.com`}</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
