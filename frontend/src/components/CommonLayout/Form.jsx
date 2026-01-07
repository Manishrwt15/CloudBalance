import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useUsers from '../../hook/useUsers';


const Form = ({data}) => {

    const navigate = useNavigate();
    const {addUser, editUser} = useUsers();

    const isEdit = Boolean(data?.id);

    const [form,setForm] = useState({
        id : null,
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        role : ""
    })

    useEffect(() => {
        if(data){
            setForm({
                id : data.id ?? null,
                firstName : data.firstName ?? "",
                lastName : data.lastName ?? "",
                email : data.email ?? "",
                password : data.password ?? "",
                role : data.role ?? "",
            });
        }
    },[data])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if(form.id){
            await editUser(form.id,form);
        } else {
            const {...newUser} = form; 
            await addUser(newUser);
        }
        navigate(-1);
    }

  return (
    <form className='mt-4 bg-white m-6 p-4 border border-gray-200 shadow-md rounded-md' onSubmit={handleSubmit}>
            <div className="flex gap-4 m-8">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="username">First Name</label>
                    <input type="text" id="username" name="firstName" value={form.firstName} required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter First Name' onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fullname">Last Name</label>
                    <input type="text" id="fullname" name="lastName" value={form.lastName} required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter Last Name' onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={form.email} required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter Email' onChange={handleChange}/>
                </div>
            </div>
            <div className="flex gap-4 m-8">
                {!isEdit && <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Password</label>
                    <input type="password" id="password" name="password" value={form.password} required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter Password' onChange={handleChange}/>
                </div>}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="role">Selected Role</label>
                    <select id="role" name="role" value={form.role} required className='border border-gray-200 rounded-md h-12 w-84 p-4 text-sm' onChange={handleChange}>
                        <option value="" disabled>Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                        <option value="read_only">Read Only</option>
                    </select>
                </div>
            </div>
            <button type="submit" className='mx-8 border rounded-md bg-blue-700 text-white w-42 h-12 text-xl cursor-pointer'>{`${data?.id ? "Edit" : "Add" }`}</button>
     </form>
  )
}

export default Form