import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, role });
    }

  return (
    <form className='mt-4 bg-white m-6 p-4 border border-gray-200 shadow-md rounded-md' onSubmit={handleSubmit}>
            <div className="flex gap-4 m-8">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="username">First Name</label>
                    <input type="text" id="username" name="username" required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fullname">Last Name</label>
                    <input type="text" id="fullname" name="fullname" required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
            </div>
            <div className="flex gap-4 m-8">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required className='border border-gray-200 rounded-md h-12 w-84 p-4' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="role">Selected Roles</label>
                    <select id="role" name="role" required className='border border-gray-200 rounded-md h-12 w-84 p-4 text-sm text-gray-400' value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="" disabled selected>Select Roles</option>
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