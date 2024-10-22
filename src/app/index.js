import React from 'react';
import {Label} from "@/components/ui/label";
import DatePicker from "@/components/DatePicker";
import {Button} from "@/components/ui/button";
import LoginWithGoogle from "@/components/LoginWithGoogle";

const App = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center bg-accent h-screen">
      <div className="w-[720px] flex flex-col justify-center">
        <div className="mb-8 self-end">
          <LoginWithGoogle/>
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col">
            <Label className="mb-4">Choose date</Label>
            <DatePicker/>
          </div>
          <Button variant="outline">Create Event</Button>
        </div>

        <div className="mt-16 flex flex-col w-full">
          <Label className="mb-4">{`Today's Event`}</Label>
          {['9 AM to 10AM - Meeting', '11 AM to 2PM - Lunch', '3 PM to 5 PM - Code'].map((e) => (
            <div key={e} className="border-b border-gray-400 py-4">
              <Label className="mb-4">{e}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
