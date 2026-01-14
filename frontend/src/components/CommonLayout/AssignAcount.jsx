import React,{useState, useMemo} from 'react'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SearchIcon from '@mui/icons-material/Search'
import FolderIcon from '@mui/icons-material/Folder'
import EastIcon from '@mui/icons-material/East'
import WestIcon from '@mui/icons-material/West'
import {useAccounts} from '../../hook/useAccounts'

const AssignAcount = ({selectedAccounts, setSelectedAccounts}) => {
  const {accounts,loading} = useAccounts();

  const [search, setSearch] = useState("");
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const available = useMemo(() => {
    const assignedSet = new Set(selectedAccounts);
    return accounts.filter(acc => !assignedSet.has(acc.id));
  }, [accounts, selectedAccounts]);

  const filteredAvailable = useMemo(() =>
    available?.filter((acc) => acc?.name?.toLowerCase().includes(search.toLowerCase())) || [],
  [available, search]);

  const moveRight = () => {
    setSelectedAccounts(prev => [...prev, ...selectedLeft]);
    setSelectedLeft([]);
  };

  const moveLeft = () => {
    setSelectedAccounts(selectedAccounts.filter(a => !selectedRight.includes(a)));
    setSelectedRight([]);
  };

  const resetAll = () => {
    setSelectedAccounts([]);
    setSelectedLeft([]);
    setSelectedRight([]);
    setSearch('');
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-80 text-gray-500 text-xl font-semibold">
        Loading accounts
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 mx-8">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-xl">Manage Account Id(s)</h1>
        <button className="flex items-center gap-1 border-l border-gray-300 pl-4 text-gray-500 cursor-pointer" onClick={resetAll}>
          <RestartAltIcon fontSize="small" />
          Reset
        </button>
      </div>

      <div className="border border-gray-200 bg-gray-50 flex items-center justify-between p-4">

        <div className="border border-gray-300 rounded-md w-1/3 bg-white h-80 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 bg-blue-50 border-b">
            <h1 className="font-bold text-xl">Choose Account IDs to Associate</h1>
            <span className="text-blue-700 text-xl font-medium">{filteredAvailable.length} Available</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-3 border-b  border-gray-200 text-gray-500">
            <SearchIcon fontSize="small" />
            <input type="text" placeholder="Search" className="w-full outline-none text-base font-bold" onChange={handleSearchChange} />
          </div>

          <div className="flex-1 overflow-y-auto">
            <label className="flex items-center gap-2 p-3 border-b  border-gray-200  text-sm">
              <input type="checkbox" checked={selectedLeft.length === filteredAvailable.length && filteredAvailable.length > 0}
                onChange={(e) => setSelectedLeft(e.target.checked ? filteredAvailable.map(acc => acc.id): [])} />
              Select All
            </label>

            {filteredAvailable.map((item) => (
              <label key={item.id} className="flex items-center gap-2 p-3 border-b  border-gray-200 text-sm">
                <input type="checkbox" checked={selectedLeft.includes(item.id)}
                 onChange={(e) => setSelectedLeft((prev) => e.target.checked ? [...prev, item.id] : prev.filter(id => id !== item.id))} />
                {item.name}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <button className="p-2 border rounded-full bg-gray-400" onClick={moveRight} disabled={!selectedLeft.length}><EastIcon /></button>
          <button className="p-2 border rounded-full bg-gray-400" onClick={moveLeft} disabled={!selectedRight.length}><WestIcon /></button>
        </div>

        <div className="border border-gray-300 rounded-md w-1/3 bg-white h-80 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 bg-blue-50 border-b border-gray-300">
            <h1 className="font-bold text-xl">Associated Account IDs</h1>
            <span className="text-blue-700 text-xl font-medium">{selectedAccounts.length} Added</span>
          </div>

          {selectedAccounts.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-gray-500">
              <FolderIcon fontSize="large" />
              <h3 className="font-medium mt-2">No Account IDs Added</h3>
              <p className="text-sm">Selected Account IDs will be shown here.</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              {selectedAccounts.map(id => {
                const acc = accounts.find(a => a.id === id);
                return (
                  <label key={id} className="flex items-center gap-2 p-2 border-b text-sm">
                    <input type="checkbox" checked={selectedRight.includes(id)}
                      onChange={(e) => setSelectedRight(prev => e.target.checked ? [...prev, id] : prev.filter(i => i !== id))}/>
                    {acc?.name} ({id})
                  </label>
                );
              })}
            </div>  
            )}
        </div>
      </div>
    </div>
  )
}

export default AssignAcount
