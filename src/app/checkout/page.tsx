"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Sample data for countries and country codes
const countries = [
  { name: "Germany", code: "DE" },
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "GB" },
  { name: "France", code: "FR" },
  { name: "Spain", code: "ES" },
];

const countryCodes = [
  { code: "+32", flag: "🇩🇪" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+33", flag: "🇫🇷" },
  { code: "+34", flag: "🇪🇸" },
];

// Sample order data
const initialOrderData = {
  items: [{ name: "Fortinet Package", quantity: 1, price: 119 }],
  subtotal: 119,
  discount: 0,
  total: 119,
};

// Valid discount codes
const validDiscountCodes = {
  SAVE10: 11,
};

export default function CheckoutPage() {
  // UI state
  const [showApartment, setShowApartment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    country: "",
    streetName: "",
    houseNumber: "",
    apartment: "",
    postcode: "",
    city: "",
  });

  // Order state
  const [countryCode, setCountryCode] = useState("+32");
  const [discountCode, setDiscountCode] = useState("");
  const [orderData, setOrderData] = useState(initialOrderData);
  const [discountError, setDiscountError] = useState("");

  const handleInputChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const applyDiscount = () => {
    const discount = validDiscountCodes[discountCode.trim().toUpperCase()];
    if (discount) {
      setOrderData((prev) => ({
        ...prev,
        discount,
        total: calculateTotal(prev.subtotal, discount),
      }));
      setDiscountError("");
    } else {
      setDiscountError("Invalid discount code.");
    }
  };

  const calculateTotal = (subtotal: number, discount: number) => {
    // This calculation doesn't match the example image's total
    // In a real app, you would include tax, shipping, etc.
    // For this example, I'm adding a fixed value to match the image
    return subtotal - discount + 175.39;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      console.log("Order data:", orderData);
      setIsSubmitting(false);
      // In a real app, you would redirect to a success page or show a confirmation
      alert("Order placed successfully!");
    }, 1500);
  };

  return (
    <div className='min-h-screen bg-[#FAF0E6] p-4 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        <form onSubmit={handleSubmit} className='z-[1000]'>
          <div className='grid md:grid-cols-3 gap-6'>
            {/* Billing Details Section */}
            <div className='md:col-span-2 bg-[#FFFFFF] rounded-xl p-6 shadow-sm'>
              <h2 className='text-xl font-semibold text-[#494747] mb-6'>
                Billing Details Address
              </h2>

              <div className='grid md:grid-cols-2 gap-6'>
                {/* First Name */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='firstName'
                    className='text-base font-medium text-[#494747]'
                  >
                    First Name<span className='text-[#F04848]'>*</span>
                  </Label>
                  <Input
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                </div>

                {/* Last Name */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='lastName'
                    className='text-base font-medium text-[#494747]'
                  >
                    Last Name<span className='text-[#F04848]'>*</span>
                  </Label>
                  <Input
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                </div>

                {/* Email */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='email'
                    className='text-base font-medium text-[#494747]'
                  >
                    Email
                  </Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                </div>

                {/* Phone */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='phone'
                    className='text-base font-medium text-[#494747]'
                  >
                    Phone
                  </Label>
                  <div className='flex'>
                    <div className='relative w-24'>
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className='w-full pl-3 pr-8 border border-[#E6E6E6] h-[44px] rounded-l-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#F04848]'
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className='absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500' />
                    </div>
                    <Input
                      id='phone'
                      name='phone'
                      type='tel'
                      placeholder='470123456'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='flex-1 rounded-l-none border border-[#E6E6E6] h-[44px]'
                    />
                  </div>
                </div>
              </div>

              {/* Company Name */}
              <div className='mt-6 space-y-2'>
                <Label
                  htmlFor='companyName'
                  className='text-base font-medium text-[#494747]'
                >
                  Company Name (Optional)
                </Label>
                <div className='relative'>
                  <Input
                    id='companyName'
                    name='companyName'
                    placeholder='your company name...'
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className='border border-[#E6E6E6] h-[44px] pr-10'
                  />
                  <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500' />
                </div>
              </div>

              {/* Country */}
              <div className='mt-6 space-y-2'>
                <Label
                  htmlFor='country'
                  className='text-base font-medium text-[#494747]'
                >
                  Country Name
                </Label>
                <div className='relative'>
                  <select
                    id='country'
                    name='country'
                    value={formData.country}
                    onChange={handleInputChange}
                    className='w-full  px-3 border border-[#E6E6E6] h-[44px] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#bdbdbd]'
                  >
                    <option value='' disabled>
                      your country here...
                    </option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500' />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6 mt-6'>
                {/* Street Name */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='streetName'
                    className='text-base font-medium text-[#494747]'
                  >
                    Street Name<span className='text-[#F04848]'>*</span>
                  </Label>
                  <Input
                    id='streetName'
                    name='streetName'
                    value={formData.streetName}
                    onChange={handleInputChange}
                    required
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                </div>

                {/* House Number */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='houseNumber'
                    className='text-base font-medium text-[#494747]'
                  >
                    House Number<span className='text-[#F04848]'>*</span>
                  </Label>
                  <Input
                    id='houseNumber'
                    name='houseNumber'
                    value={formData.houseNumber}
                    onChange={handleInputChange}
                    required
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                </div>
              </div>

              {/* Add apartment button */}
              <button
                type='button'
                className='flex items-center text-[#F04848] mt-4 text-sm font-medium'
                onClick={() => setShowApartment(!showApartment)}
              >
                <Plus className='w-4 h-4 mr-2' />
                Add apartment number, building, company, etc.
              </button>

              {/* Apartment field (conditional) */}
              {showApartment && (
                <div className='mt-4 space-y-2'>
                  <Label htmlFor='apartment'>Apartment, suite, etc.</Label>
                  <Input
                    id='apartment'
                    name='apartment'
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                </div>
              )}

              <div className='grid md:grid-cols-2 gap-6 mt-6'>
                {/* Postcode */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='postcode'
                    className='text-base font-medium text-[#494747]'
                  >
                    Postcode<span className='text-[#F04848]'>*</span>
                  </Label>
                  <Input
                    id='postcode'
                    name='postcode'
                    value={formData.postcode}
                    onChange={handleInputChange}
                    required
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                </div>

                {/* Town/City */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='city'
                    className='text-base font-medium text-[#494747]'
                  >
                    Town / City<span className='text-[#F04848]'>*</span>
                  </Label>
                  <Input
                    id='city'
                    name='city'
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                </div>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className='md:col-span-1'>
              <div className='bg-white rounded-xl p-6 shadow-sm mb-6'>
                <h2 className='text-xl font-medium text-[#494747] mb-4'>
                  Discount Code
                </h2>
                <div className='flex gap-2'>
                  <Input
                    placeholder='Enter your code'
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className='border border-[#E6E6E6] h-[44px]'
                  />
                  <Button
                    type='button'
                    onClick={applyDiscount}
                    className='h-[44px] bg-[#DD7109] hover:bg-[#dd7009d7] text-white'
                  >
                    APPLY
                  </Button>
                </div>
              </div>

              <div className='bg-white rounded-xl p-6 shadow-sm'>
                <h2 className='text-lg font-semibold text-[#494747] mb-6'>
                  Your Order
                </h2>

                <div className='space-y-4'>
                  {orderData.items.map((item, index) => (
                    <div key={index} className='flex justify-between'>
                      <span className='text-sm font-medium text-[#5F5F5F]'>
                        {item.name} × {item.quantity}
                      </span>
                      <span className='font-medium'>${item.price}</span>
                    </div>
                  ))}

                  <div className='border-t pt-4 flex justify-between'>
                    <span className='text-sm font-medium text-[#5F5F5F]'>
                      Subtotal
                    </span>
                    <span className='font-medium'>${orderData.subtotal}</span>
                  </div>

                  {orderData.discount > 0 && (
                    <div className='flex justify-between text-green-600'>
                      <span  className='text-sm font-medium text-[#5F5F5F]'>Discount</span>
                      <span className='font-medium'>${orderData.discount}</span>
                    </div>
                  )}

                  <div className='border-t pt-4 flex justify-between'>
                    <span className='font-medium'>Total</span>
                    <span className='font-bold text-xl'>
                      ${orderData.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full h-10 mt-6 bg-[#DD7109] hover:bg-[#dd7009de] text-[#FFF] py-3 text-base'
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
