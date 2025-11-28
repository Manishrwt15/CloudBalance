import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = ({data}) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        navigate(-1);
    }

    const [form,setForm] = useState({
        id : "",
        firstname : "",
        lastname : "",
        email : "",
        roles : ""
    })

    useEffect(() => {
        if(data){
            setForm({
                id : data.id ?? "",
                firstname : data.firstname ?? "",
                lastname : data.lastname ?? "",
                email : data.email ?? "",
                roles : data.roles ?? "",
            });
        }
    },[data])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

  return (
    <form className='mt-4 bg-white m-6 p-4 border border-gray-200 shadow-md rounded-md' onSubmit={handleSubmit}>
            <div className="flex gap-4 m-8">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="username">First Name</label>
                    <input type="text" id="username" name="firstname" value={form.firstname} required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter First Name' onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fullname">Last Name</label>
                    <input type="text" id="fullname" name="lastname" value={form.lastname} required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter Last Name' onChange={handleChange}/>
                </div>
            </div>
            <div className="flex gap-4 m-8">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={form.email} required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter Email' onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="role">Selected Roles</label>
                    <select id="role" name="roles" value={form.roles} required className='border border-gray-200 rounded-md h-12 w-84 p-4 text-sm text-gray-400' onChange={handleChange}>
                        <option value="" disabled>Select Roles</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="read_only">Read Only</option>
                    </select>
                </div>
            </div>
            <button type="submit" className='mx-8 border rounded-md bg-blue-700 text-white w-42 h-12 text-xl cursor-pointer'>Submit</button>
     </form>
  )
}

export default Form