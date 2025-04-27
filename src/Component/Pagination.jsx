import React from 'react'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function Pagination(props) {
 
  const next = () => {
    if (props.active === props.totalPages) return;
 
    props.setActive(props.active + 1);
  };
 
  const prev = () => {
    if (props.active === 1) return;
 
    props.setActive(props.active - 1);
  };
 
  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={props.active === 1}
        className='text-white border-white'
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="white" className="font-normal">
        Page <strong className="text-white-900">{props.active?props.active:0}</strong> of{" "}
        <strong className="text-white-900">{props.totalPages?props.totalPages:0}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={props.active === props.totalPages}
        className='text-white border-white'
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}

export default Pagination