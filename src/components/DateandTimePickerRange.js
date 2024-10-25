import React, { forwardRef } from "react";
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const DateandTimePickerRange = forwardRef(({ setDateRange }, ref) => {
    return (
        <RangePicker
            ref={ref}
            showTime
            format="YYYY-MM-DD HH:mm"
            onChange={(dates) => setDateRange(dates)}
            className="mb-4"
        />
    );
});

export default DateandTimePickerRange;
