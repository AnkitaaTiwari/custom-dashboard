import React, { useRef, useState } from 'react';
import jQuery from 'jquery';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';	
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';

window.jQuery = window.$ = jQuery;

function Footer() {
  const keyRef = useRef(Date.now());
  const [dates, setDates] = useState({
    startDate: moment('2020/03/01'),
    endDate: moment('2020/03/15'),
  });
  const [ranges, setRanges] = useState({
    ['Today']: [
      moment().subtract(1, 'days'),
      moment().add(1, 'days'),
    ],
  });
  const handleApply = (event, picker) => {
    setDates({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  };
  const randomNumber = () => Math.floor(Math.random() * 20) + 1;
  const handleChangeRanges = () => {
    keyRef.current = Date.now();
    setRanges({
      [`Range ${Date.now()}`]: [
        moment().subtract(randomNumber(), 'days').startOf('day'),
        moment().add(randomNumber(), 'days').startOf('day'),
      ],
    });
  };

  return (
    <DateRangePicker
      key={keyRef.current}
      onApply={handleApply}
      onCancel={() => {}}
      onEvent={() => {}}
      onHide={() => {}}
      onHideCalendar={() => {}}
      onShow={() => {}}
      onShowCalendar={() => {}}
      initialSettings={{ ranges }}
    >
      <input type="text" className="form-control col-4" />
    </DateRangePicker>
  );
}

export default Footer;
