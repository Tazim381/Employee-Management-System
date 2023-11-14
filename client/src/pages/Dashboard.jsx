import React, { useEffect, useState } from 'react'
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Pie, PieChart } from "recharts";
import DashboardComponent from '../layout/DashboardComponent';
import {IoIosPeople} from 'react-icons/io'
import {GiTakeMyMoney} from 'react-icons/gi'
import {IoMdMan} from 'react-icons/io'
import {motion} from 'framer-motion'

export default function Dashboard() {

  const [employees, setEmployees] = useState([])
  const[totalAge,setTotalAge] = useState(0)
  const[totalSalary,setTotalSalary] = useState(0)


  useEffect(() => {
    fetch('https://tazim-1234.vercel.app/api/employee',{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem(`set-token-for-user`)} `
      }
    })
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
        const totalAge = data.reduce((total, employee) => total + employee.age, 0);
        const totalSalary = data.reduce((total, employee) => total + employee.salary, 0);
        setTotalAge(totalAge);
        setTotalSalary(totalSalary)
      });
  }, []);

  return (
    <motion.div animate={{ y: 0 }}
    initial={{ y: -1000 }} 
    exit={{ y: 1000 }} 
    className='m-10 flex flex-col gap-10'>
      <div className='flex flex-col   md:flex-row md:justify-between gap-5'>
         <DashboardComponent title={"Total Employee"} content={employees.length} icon={<IoIosPeople/>} />
         <DashboardComponent title={"Avarage Age"}  content={Math.ceil(totalAge/employees.length)}  icon={<IoMdMan/>}/>
         <DashboardComponent title={"Total Investment"}  content={(`$ ${totalSalary}`)}  icon={<GiTakeMyMoney/>}/>
      </div>
      <div className=' flex flex-col   md:flex-row md:justify-between gap-5'>
        <div className='border-2 border-gray-600 shadow-2xl rounded  p-5'>
          <p className='flex items-center content-center justify-center font-bold text-2xl text-[#262F3F]'>Salary Chart</p>
          <LineChart
            width={550}
            height={300}
            data={employees}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="firstName" strokeWidth={2} />
            <YAxis dataKey="salary" strokeWidth={2} />
            <Tooltip />
            <Legend strokeWidth={3} />
            <Line
              type="monotone"
              dataKey="salary"
              stroke="#262F3F"
              strokeWidth={3}
              activeDot={{ r: 20 }}
            />
          </LineChart>

        </div>
        <div className='border-2 border-gray-600 shadow-2xl rounded p-5'>
          <p className='flex items-center content-center justify-center font-bold text-2xl text-[#262F3F]'>Age Chart</p>
          <LineChart
            width={550}
            height={300}
            data={employees}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="firstName" strokeWidth={2} />
            <YAxis dataKey="age" strokeWidth={2} />
            <Tooltip />
            <Legend strokeWidth={3} />
            <Line
              type="monotone"
              dataKey="age"
              stroke="#262F3F"
              strokeWidth={3}
              activeDot={{ r: 20 }}
            />
          </LineChart>
        </div>
      </div>
    </motion.div>
  );
}
