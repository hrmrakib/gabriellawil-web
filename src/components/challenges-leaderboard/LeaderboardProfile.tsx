"use client";

import { useState, useEffect } from "react";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

interface User {
  id: number;
  name: string;
  rank: string;
  points: number;
  avatar: string;
}

export default function LeaderboardProfile() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof User | null;
    direction: "ascending" | "descending";
  }>({
    key: null,
    direction: "ascending",
  });

  useEffect(() => {
    // Simulate API call to fetch leaderboard data
    const fetchData = async () => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        const mockUsers: User[] = [
          {
            id: 1,
            name: "Guy Hawkins",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
          {
            id: 2,
            name: "Darlene Robertson",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
          {
            id: 3,
            name: "Arlene McCoy",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
          {
            id: 4,
            name: "Annette Black",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
          {
            id: 5,
            name: "Wade Warren",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
          {
            id: 6,
            name: "Cameron Williamson",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
          {
            id: 7,
            name: "Marvin McKinney",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
          {
            id: 8,
            name: "Ralph Edwards",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
          {
            id: 9,
            name: "Brooklyn Simmons",
            rank: "001",
            points: 3750,
            avatar: "/users/1.png",
          },
        ];
        setUsers(mockUsers);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const handleSort = (key: keyof User) => {
    let direction: "ascending" | "descending" = "ascending";

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ key, direction });

    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setUsers(sortedUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderSortIcon = (key: keyof User) => {
    if (sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === "ascending" ? (
      <ChevronUp className='h-4 w-4' />
    ) : (
      <ChevronDown className='h-4 w-4' />
    );
  };

  return (
    <div className='min-h-screen bg-[#f9f1e4] p-4 md:p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-[#5c3a11] mb-6 text-center'>
          Leaderboard
        </h1>

        <div className='mb-6'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <Search className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='text'
              className='block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-[#e67e22] focus:border-[#e67e22]'
              placeholder='Search users...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className='bg-white rounded-lg overflow-hidden shadow-sm'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-[#e67e22] text-white'>
                  <th
                    className='px-6 py-3 text-left text-sm font-medium cursor-pointer'
                    onClick={() => handleSort("name")}
                  >
                    <div className='flex items-center'>
                      User Profile
                      {renderSortIcon("name")}
                    </div>
                  </th>
                  <th
                    className='px-6 py-3 text-left text-sm font-medium cursor-pointer'
                    onClick={() => handleSort("rank")}
                  >
                    <div className='flex items-center'>
                      Global Rank#
                      {renderSortIcon("rank")}
                    </div>
                  </th>
                  <th
                    className='px-6 py-3 text-left text-sm font-medium cursor-pointer'
                    onClick={() => handleSort("points")}
                  >
                    <div className='flex items-center'>
                      Earned Point
                      {renderSortIcon("points")}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={3} className='px-6 py-4 text-center'>
                      <div className='flex justify-center items-center'>
                        <svg
                          className='animate-spin h-5 w-5 text-[#e67e22] mr-3'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Loading leaderboard...
                      </div>
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={3}
                      className='px-6 py-4 text-center text-gray-500'
                    >
                      No users found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className='border-b hover:bg-gray-50'>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <Image
                            width={40}
                            height={40}
                              className='h-10 w-10 rounded-full'
                              src={user.avatar || "/placeholder.svg"}
                              alt={`${user.name}'s avatar`}
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {user.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-500'>
                        {user.rank}
                      </td>
                      <td className='px-6 py-4 text-sm text-gray-500'>
                        {user.points}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className='mt-4 text-sm text-gray-500 text-center'>
          Showing {filteredUsers.length} of {users.length} users
        </div>
      </div>
    </div>
  );
}
