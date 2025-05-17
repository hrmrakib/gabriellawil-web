"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// Sample initial user data
const initialUserData = {
  name: "Marvin McKinney",
  email: "mckinny@example.com",
  profileImage: "/users/1.png",
};

export default function ProfilePage() {
  const [userData, setUserData] = useState(initialUserData);
  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/profile/edit");
  };

  return (
    <div className='min-h-[750px] bg-[#f9f1e7] flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-sm max-w-3xl w-full h-[480px] flex items-center justify-center p-6 md:p-8'>
        <div className='w-full h-full flex flex-col md:flex-row gap-8 items-center md:items-start'>
          <div className='w-full md:w-auto flex-shrink-0'>
            <div className='relative w-64 h-64 md:w-[340px] md:h-[410px] overflow- rounded-lg'>
              <Image
                src={userData.profileImage || "/placeholder.svg"}
                alt={userData.name}
                width={400}
                height={1800}
                className='object-cover h-full rounded-2xl'
              />
            </div>
          </div>

          <div className='flex-1 h-full w-full md:w-auto flex  justify-center'>
            <div className='space-y-8 flex flex-col items-start justify-center'>
              <div>
                <h2 className='text-[#494747] text-xl font-semibold'>Name:</h2>
                <p className='text-[#494747] text-xl'>{userData.name}</p>
              </div>

              <div>
                <h2 className='text-[#494747] text-xl font-semibold'>Email:</h2>
                <p className='text-[#494747] text-xl'>{userData.email}</p>
              </div>

              <Button
                onClick={handleEditProfile}
                className='bg-[#DD7109] hover:bg-[#dd7009c0] text-[#fff] text-base font-semibold px-6 py-2 rounded-md'
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
