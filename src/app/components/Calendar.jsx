import React from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'

const Calendar = () => {
    const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 16)
    return (
        <div className="w-50">
            <CalendarComponent value={dateValue}
            isMultiSelection={true}
            >

            </CalendarComponent>
        </div>
    )
}

export default Calendar
