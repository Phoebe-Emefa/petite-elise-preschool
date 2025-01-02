/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import { userColumns } from "./columns";
import supabase from "@/utils/supabaseClient";
import StudentDetails from "../components/StudentDetails";

const Students = () => {
  const [fetchError, setfetchError] = useState<any>(null);
  const [students, setStudents] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  console.log("students", students);
  console.log("fetchError", fetchError);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase.from("children").select();
      if (error) {
        console.error("Supabase error details:", error);
        setfetchError(error?.message || "An unexpected error occurred");
        setStudents(null);
      }

      if (data) {
        setStudents(data);
        setfetchError(null);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      {fetchError && <div>Sorry, an error occured while fetching data </div>}
      {students && (
        <CustomTable
          data={students}
          columns={userColumns(setSelectedData, setIsOpen)}
        />
      )}
      {/* <CustomTable data={students} columns={userColumns} /> */}
      {isOpen && (
        <StudentDetails
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={selectedData}
        />
      )}
    </div>
  );
};

export default Students;
