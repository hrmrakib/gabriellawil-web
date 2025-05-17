"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"

// Sample initial user data
const initialUserData = {
  name: "Marvin McKinney",
  email: "mckinny@example.com",
  profileImage: "/users/1.png",
}

export default function EditProfilePage() {
  const [userData, setUserData] = useState(initialUserData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Initialize preview image with current profile image
    setPreviewImage(userData.profileImage)
  }, [userData.profileImage])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setPreviewImage(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to update profile
    setTimeout(() => {
      // Update profile image if a new one was selected
      if (previewImage && previewImage !== userData.profileImage) {
        setUserData({
          ...userData,
          profileImage: previewImage,
        })
      }

      setIsSubmitting(false)
      // Navigate back to profile page
      router.push("/profile")

      // In a real app, you would save the data to a database
      console.log("Updated profile:", {
        ...userData,
        profileImage: previewImage,
      })
    }, 1000)
  }

  const handleCancel = () => {
    router.push("/profile")
  }

  return (
    <div className="min-h-[750px] bg-[#f9f1e7] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm max-w-3xl w-full p-6 md:p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Edit Profile</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#494747] text-xl font-semibold">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#494747] text-xl font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full border-gray-300"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-[#494747] text-xl font-semibold block">Profile Picture</Label>

              {previewImage ? (
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src={previewImage || "/placeholder.svg"}
                    alt="Profile preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center w-64 h-64 mx-auto flex flex-col items-center justify-center">
                  <Upload className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 2MB)</p>
                </div>
              )}

              <div className="relative">
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Button type="button" variant="outline" className="w-full border-gray-300 text-[#494747] text-base font-semibold">
                  Change Picture
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
            <Button type="button" variant="outline" onClick={handleCancel} className="border-gray-300 text-gray-700">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-[#DD7109] hover:bg-[#dd7009cc] text-white">
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
