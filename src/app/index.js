import React, {useState} from 'react';
import {Label} from "@/components/ui/label";
import DatePicker from "@/components/DatePicker";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import useLoginStore from "@/redux/loginStore";
import useUserStore from "@/redux/userStore";
import useFetchUser from "@/hooks/useFetchUser";
import Events from "@/components/Events";
import CreateEventForm from "@/components/CreateEventForm";
import dayjs from "dayjs";


const App = () => {
  const {isAuthenticated} = useLoginStore();
  const {name, email} = useUserStore();
  const [eventsDate, setEventsDate] = useState(dayjs().format('YYYY-MM-DD'));

  useFetchUser()

  return (
    <div className="p-8 flex flex-col items-center bg-accent h-screen pt-20">
      <div className="w-[720px] flex flex-col justify-space-between">
        <div className="flex flex-col mb-8 w-full">
          <div className='self-end'>
            {
              isAuthenticated
                ? <div className="p-3 border-2 rounded-lg	">
                  <Label className="mb-4 font-semibold text-base">{name}</Label>
                  <br/>
                  <Label className="mb-4 font-medium text-base">{email}</Label>
                </div>
                : <LoginWithGoogle/>
            }
          </div>
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col">
            <Label className="mb-4">Choose date</Label>
            <DatePicker setDate={setEventsDate}/>
          </div>
          <CreateEventForm/>
        </div>
        {isAuthenticated ? <Events date={eventsDate}/> :
          <Label className="w-full text-center mt-12 font-bold text-lg">{'Login to view events.'}</Label>}
      </div>
    </div>
  );
}

export default App;
