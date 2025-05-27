"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";

interface PlanTask {
  day: string;
  task: string;
  points: number;
  completed?: boolean;
}

export default function PlanOverview() {
  const [tasks, setTasks] = useState<PlanTask[]>([
    {
      day: "Day 01",
      task: "Post introduction carousel about your brand story",
      points: 100,
      completed: false,
    },
    {
      day: "Day 02",
      task: 'Create & post 1 Reel: "Behind-the-scenes of product creation"',
      points: 100,
      completed: false,
    },
    {
      day: "Day 03",
      task: "Engage with 10 niche accounts (like, comment)",
      points: 100,
      completed: false,
    },
    {
      day: "Day 04",
      task: "Post Instagram Story: Poll about product preferences",
      points: 100,
      completed: false,
    },
    {
      day: "Day 05",
      task: "Share UGC (user-generated content) story with tag",
      points: 100,
      completed: false,
    },
    {
      day: "Day 06",
      task: "Follow 20 niche accounts",
      points: 100,
      completed: false,
    },
    {
      day: "Day 09",
      task: "Post UGC (customer photo with caption)",
      points: 100,
      completed: false,
    },
    {
      day: "Day 10",
      task: 'Post story quiz (e.g. "Guess our top seller?")',
      points: 100,
      completed: false,
    },
  ]);

  const [isAddingToPlan, setIsAddingToPlan] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleTaskCompletion = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddToPlan = async () => {
    setIsAddingToPlan(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsAddingToPlan(false);
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className='min-h-screen bg-orange-50 py-6 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-800 mb-4'>
            Plan Overview
          </h1>

          {/* Stats */}
          {/* <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6'>
            <div className='bg-white rounded-lg px-4 py-2 shadow-sm'>
              <span className='text-sm text-gray-600'>Completed Tasks:</span>
              <span className='ml-2 font-semibold text-orange-600'>
                {completedTasks}/{tasks.length}
              </span>
            </div>
            <div className='bg-white rounded-lg px-4 py-2 shadow-sm'>
              <span className='text-sm text-gray-600'>Total Points:</span>
              <span className='ml-2 font-semibold text-orange-600'>
                {totalPoints}
              </span>
            </div>
          </div> */}
        </div>

        {/* Plan Content */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='px-6 py-4 border-b border-gray-200'>
            <h2 className='text-xl sm:text-2xl font-semibold text-[#000000] p-2'>
              Instagram Growth
            </h2>
          </div>

          {/* Desktop Table View */}
          <div className='hidden md:block overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-orange-200'>
                <tr>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700 w-20'>
                    Day
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700'>
                    Task
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700 w-20'>
                    Point
                  </th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-700 w-24'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {tasks.map((task, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 transition-colors duration-150 ${
                      task.completed ? "bg-green-50" : ""
                    }`}
                  >
                    <td className='px-4 py-4 text-sm font-medium text-gray-700'>
                      {task.day}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm text-gray-600 ${
                        task.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {task.task}
                    </td>
                    <td className='px-6 py-4 text-sm font-medium text-gray-700'>
                      {task.points}
                    </td>
                    <td className='px-6 py-4'>
                      <button
                        onClick={() => toggleTaskCompletion(index)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                          task.completed
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-gray-300 hover:border-orange-400"
                        }`}
                      >
                        {task.completed && <Check className='w-4 h-4' />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className='md:hidden'>
            <div className='bg-orange-200 px-4 py-3'>
              <div className='grid grid-cols-3 gap-4 text-sm font-semibold text-gray-700'>
                <span>Day</span>
                <span>Task</span>
                <span className='text-right'>Point</span>
              </div>
            </div>
            <div className='divide-y divide-gray-200'>
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className={`p-4 ${task.completed ? "bg-green-50" : ""}`}
                >
                  <div className='flex items-start justify-between mb-2'>
                    <span className='text-sm font-medium text-gray-700'>
                      {task.day}
                    </span>
                    <div className='flex items-center gap-2'>
                      <span className='text-sm font-medium text-gray-700'>
                        {task.points}
                      </span>
                      <button
                        onClick={() => toggleTaskCompletion(index)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                          task.completed
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-gray-300 hover:border-orange-400"
                        }`}
                      >
                        {task.completed && <Check className='w-4 h-4' />}
                      </button>
                    </div>
                  </div>
                  <p
                    className={`text-sm text-gray-600 ${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.task}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className='mt-8 flex justify-center sm:justify-end'>
          <button
            onClick={handleAddToPlan}
            disabled={isAddingToPlan}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center gap-2 ${
              isAddingToPlan
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#DD7109] hover:bg-[#DD7109] focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105"
            }`}
          >
            {isAddingToPlan ? (
              <>
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                Adding...
              </>
            ) : (
              <>
                <Plus className='h-5 w-5' />
                Add to Plan
              </>
            )}
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className='fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-up'>
            <Check className='h-5 w-5' />
            <span>Successfully added to your plan!</span>
          </div>
        )}
      </div>
    </div>
  );
}
