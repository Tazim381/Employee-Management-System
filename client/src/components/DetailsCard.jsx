import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const DetailsCard = (employeeData) => {
    return (
        <div className=' h-screen flex items-center justify-center '>
            <Card className="w-full max-w-[70rem] h-3/4 flex-row gap-10">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={employeeData.image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody className='flex flex-col  justify-center'>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        <p ><span className='font-bold'>Name : </span> {employeeData.firstName} {employeeData.lastName}</p>
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        <p><span className='font-bold'>Department :</span> {employeeData.department}</p>
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        <p><span className='font-bold'>Position : </span>{employeeData.position}</p>
                        <p><span className='font-bold'>Salary : </span>{employeeData.salary}</p>
                        <p><span className='font-bold'>Email : </span>{employeeData.email}</p>
                        <p><span className='font-bold'>Phone : </span>{employeeData.phone}</p>
                        <p><span className='font-bold'>Address : </span>{employeeData.address}</p>
                        <p><span className='font-bold'>Skills : </span>{employeeData.skills}</p>
                        <p><span className='font-bold'>Joining Date : </span>{employeeData.joiningDate}</p>
                        <p><span className='font-bold'>Age : </span>{employeeData.age}</p>
                        <p><span className='font-bold'>Education</span></p>
                        <p><span className='font-bold'>Degree : </span>{employeeData.degree}</p>
                        <p><span className='font-bold'>University : </span> {employeeData.university}</p>
                        <p><span className='font-bold'>Graduation Year : </span>{employeeData.graduationYear}</p>
                    </Typography>
                </CardBody>
            </Card>
        </div>
    )
}

export default DetailsCard