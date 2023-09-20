"use client";

import React from "react";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { TfiSearch } from "react-icons/tfi";
import { FiDelete } from "react-icons/fi"
import Card from "./DoctorCard";
import { useGetDoctorsQuery } from "@/lib/redux/services/doctorApi";
import { Pagination } from "../components/Pagination";

const DoctorList = () => {
  const { data, isLoading, error, isFetching } = useGetDoctorsQuery(null);
  const [searched, setSearched] = useState("");
  
  const [page, setPage] = useState<number>(1);
  const [listPerPage, setListsPerPage] = useState(6); // Dynamic number of doctors per page
  const [paginationCount, setPaginationCount] = useState(5);
  

  const doctors = data?.data;
  const totalList = doctors?.length;
  const startIndex = (page - 1) * listPerPage;
  const endIndex = startIndex + listPerPage;
  let doctorsToShow = doctors
  if(searched.length > 0){
    doctorsToShow = doctors?.filter((doc : any) => doc.fullName.toLowerCase().includes(searched.toLowerCase()))
  }
  const paginatedList = doctorsToShow?.slice(startIndex, endIndex);
  
  if (isLoading || isFetching) {
    return (
      <div className="my-32 flex justify-center items-center text-3xl">
        <p className="border-dashed border-4 border-slate-800 rounded-full w-40 h-40 py-12 px-4 animate-bounce">
          loading...
        </p>
      </div>
    );
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearched(e.target.value);
  };

  return (
    <main className="pt-8 sm:mx-14 md:20 lg:mx-28 font-primary">
      <form className="flex px-8">
        <input
          value={searched}
          type="text"
          placeholder="Name"
          onChange={(e) => handleChange(e)}
          className="border w-full py-3 px-10 rounded-full border-slate-300 placeholder:text-xl placeholder:text-slate-300"
        ></input>
        <button type="button" onClick={() => setSearched("")} className="ml-[-42px] text-2xl text-slate-400">
          {" "}
          <FiDelete />{" "}
        </button>
      </form>
      <div className="flex flex-wrap justify-center gap-8 py-20">
        {paginatedList.map((item: any, index: number) => [
          <Card key={index} doctor={...item} />,
        ])}
        <Pagination
          listPerPage={listPerPage}
          paginationCount={paginationCount}
          setPage={setPage}
          totalList={totalList}
          page={page}
        />
      </div>
    </main>
  );
};

export default DoctorList;
