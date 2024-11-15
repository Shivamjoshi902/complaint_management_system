'use client';

import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Define the schema using Zod
const formSchema = z.object({
  userName: z.string().min(2, "Username must be at least 2 characters").max(50, "Username must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be 10 digits").max(10, "Phone number is too long"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  passkey: z.string().min(8, "Passkey must be at least 8 characters"),
  role: z.enum(["worker", "admin", "normal user", "super admin"], {
    invalid_type_error: "Select a valid role",
  }),
});

// Component
function Signin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      phoneNumber: "",
      address: "",
      passkey: "",
      role: "normal user",
    },
  });


  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data); // Handle form data
  };

  return (
    <div className="flex justify-center items-center h-screen mt-8">
      <div className="flex w-full max-w-5xl mx-auto  mt-8 ">
        {/* Form Section */}
        <div className="w-1/2 p-6 bg-white rounded-l-md border-black border-2 rounded-2xl m-6 p-6 mt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UserName</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input type='tel' placeholder="Mobile Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input type='text' placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passkey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Passkey</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Passkey" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="worker">Worker</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="normal user">Normal User</SelectItem>
                          <SelectItem value="super admin">Super Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
          
          {/* Sign-in prompt */}
          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <Link href="/signin" className="text-blue-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 bg-gray-200 rounded-r-md">
          <img
            src= 'data:image/jpeg;base64,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'
            alt="Right Section"
            className="w-full h-full object-cover rounded-r-md "
          />
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Signin), { ssr: false });
