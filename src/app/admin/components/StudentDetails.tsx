/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent } from "@/components/ui/modal";
import React, { Dispatch, SetStateAction } from "react";
import {
  FaUserAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdPlace } from "react-icons/md";

const StudentDetails = ({
  isOpen,
  setIsOpen,
  data,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: any;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-3xl h-[80vh] overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg"
        hideDefaultCloseButton={true}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg relative">
          <h2 className="text-xl font-semibold text-center">Student Details</h2>
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="h-full p-6 space-y-6 bg-gray-50">
          {/* General Information */}
          <section>
            <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
              <FaUserAlt className="text-blue-500" />
              General Information
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
              <p>
                <strong>Child's Name:</strong> {data?.childName || "N/A"}
              </p>
              <p>
                <strong>Date of Birth:</strong> {data?.childDOB || "N/A"}
              </p>
              <p>
                <strong>Age:</strong> {data?.childAge || "N/A"}
              </p>
              <p>
                <strong>Parent's Name:</strong> {data?.parentName || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {data?.parentEmail || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong> {data?.parentPhoneNumber || "N/A"}
              </p>
              <p>
                <strong>WhatsApp:</strong> {data?.parentWhatsappNumber || "N/A"}
              </p>
              <p>
                <strong>Address:</strong> {data?.address || "N/A"}
              </p>
            </div>
          </section>

          {/* Emergency Contact */}
          <section>
            <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              Emergency Contact
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
              <p>
                <strong>Name:</strong> {data?.emergencyContactName || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong> {data?.emergencyContactPhoneNumber || "N/A"}
              </p>
              <p>
                <strong>WhatsApp:</strong> {data?.emergencyContactWhatsappNumber || "N/A"}
              </p>
              <p>
                <strong>Relationship:</strong>{" "}
                {data?.emergencyContactRelationshipToChild || "N/A"}
              </p>
            </div>
          </section>

          {/* Drop-Off Information */}
          <section>
            <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
              <MdPlace className="text-blue-500" />
              Drop-Off Information
            </h3>
            <div className="mt-2 text-sm">
              <p>
                <strong>Will Drop Off Self:</strong>{" "}
                {data?.dropChildOffSelf ? "Yes" : "No"}
              </p>
              <p>
                <strong>Authorized Drop-Off Names:</strong>
              </p>
              {data?.dropOffNames?.length > 0 ? (
                <ul className="list-disc pl-5">
                  {data.dropOffNames.map(
                    (
                      dropOff: { name: string; relationToChild: string },
                      index: number
                    ) => (
                      <li key={index}>
                        <strong>{dropOff.name}</strong> - {dropOff.relationToChild}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p className="text-gray-500">No authorized drop-off names</p>
              )}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentDetails;
