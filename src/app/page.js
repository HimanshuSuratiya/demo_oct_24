"use client"

import * as React from "react"
import DatePicker from "@/components/DatePicker";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

export default function App() {
  const [date, setDate] = React.useState()

  return (
    <div style={{
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{width: '720px'}}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Label style={{marginBottom: '16px'}}>Choose date</Label>
            <DatePicker/>
          </div>
          <Button variant="outline">Create Event</Button>
        </div>

        <div style={{
          marginTop: '64px',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}>
          <Label style={{marginBottom: '16px'}}>{`Today's Event`}</Label>
          {['Apple', 'Mango', 'Grape'].map(e => {
            return <div key={e} style={{borderBottom: '1px solid grey', padding: '16px 0'}}><Label
              style={{marginBottom: '16px'}}>{e}</Label>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
