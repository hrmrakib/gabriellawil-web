"use client";

import type React from "react";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe, MapPin, Building, User } from "lucide-react";

type Competitor = {
  id: string;
  name: string;
  domain: string;
  logo: string;
  domainRating: number;
  backlinks: string;
  referringDomains: number;
  organicKeywords: number;
  monthlyTraffic: string;
};

type AddCompetitorDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (competitor: Competitor) => void;
};

export default function AddCompetitorDialog({
  isOpen,
  onClose,
  onAdd,
}: AddCompetitorDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    location: "",
    businessType: "",
    domainRating: "0",
    backlinks: "0",
    referringDomains: "0",
    organicKeywords: "0",
    monthlyTraffic: "0",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCompetitor: Competitor = {
      id: Date.now().toString(),
      name: formData.name,
      domain: formData.domain,
      logo: "/placeholder.svg?height=24&width=24",
      domainRating: Number.parseInt(formData.domainRating) || 0,
      backlinks: formData.backlinks || "0",
      referringDomains: Number.parseInt(formData.referringDomains) || 0,
      organicKeywords: Number.parseInt(formData.organicKeywords) || 0,
      monthlyTraffic: formData.monthlyTraffic || "0",
    };

    onAdd(newCompetitor);

    // Reset form
    setFormData({
      name: "",
      domain: "",
      location: "",
      businessType: "",
      domainRating: "0",
      backlinks: "0",
      referringDomains: "0",
      organicKeywords: "0",
      monthlyTraffic: "0",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[550px] p-0 overflow-hidden rounded-lg'>
        <div className='bg-orange-500 py-4 px-6'>
          <DialogTitle className='text-white text-xl font-medium'>
            Add Competitor
          </DialogTitle>
        </div>

        <form onSubmit={handleSubmit} className='p-6'>
          <div className='space-y-5'>
            <div className='relative'>
              <Label
                htmlFor='name'
                className='text-gray-600 font-medium mb-1 block'
              >
                Competitor Name
              </Label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400'>
                  <User size={18} />
                </div>
                <Input
                  id='name'
                  name='name'
                  className='pl-10 py-3 border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500'
                  placeholder='Enter a recognizable name...'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='relative'>
              <Label
                htmlFor='domain'
                className='text-gray-600 font-medium mb-1 block'
              >
                Website URL
              </Label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400'>
                  <Globe size={18} />
                </div>
                <Input
                  id='domain'
                  name='domain'
                  className='pl-10 py-3 border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500'
                  placeholder='Paste the homepage URL...'
                  value={formData.domain}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='relative'>
              <Label
                htmlFor='location'
                className='text-gray-600 font-medium mb-1 block'
              >
                Primary Target Location
              </Label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400'>
                  <MapPin size={18} />
                </div>
                <Input
                  id='location'
                  name='location'
                  className='pl-10 py-3 border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500'
                  placeholder='Where do they operate or rank most?'
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='relative'>
              <Label
                htmlFor='businessType'
                className='text-gray-600 font-medium mb-1 block'
              >
                Business Type (Optional)
              </Label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400'>
                  <Building size={18} />
                </div>
                <Input
                  id='businessType'
                  name='businessType'
                  className='pl-10 py-3 border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500'
                  placeholder='Select the industry or niche they operate in'
                  value={formData.businessType}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='hidden'>
              <Input
                id='domainRating'
                name='domainRating'
                type='hidden'
                value={formData.domainRating}
              />
              <Input
                id='backlinks'
                name='backlinks'
                type='hidden'
                value={formData.backlinks}
              />
              <Input
                id='referringDomains'
                name='referringDomains'
                type='hidden'
                value={formData.referringDomains}
              />
              <Input
                id='organicKeywords'
                name='organicKeywords'
                type='hidden'
                value={formData.organicKeywords}
              />
              <Input
                id='monthlyTraffic'
                name='monthlyTraffic'
                type='hidden'
                value={formData.monthlyTraffic}
              />
            </div>
          </div>

          <div className='mt-8 flex justify-end gap-3'>
            <Button
              type='button'
              variant='outline'
              onClick={onClose}
              className='border-gray-300 text-gray-700 hover:bg-gray-50 px-6'
            >
              Cancel
            </Button>
            <Button
              type='submit'
              className='bg-orange-500 hover:bg-orange-600 text-white px-8'
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
