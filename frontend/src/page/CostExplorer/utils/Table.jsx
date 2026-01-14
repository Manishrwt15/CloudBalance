import React from 'react'
const Table = ({costs, loading, error}) => {

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data.</p>;

    const months = Object.keys(costs[0]?.monthlyCost || {});

    const formatUSD = value =>
    `$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

    const formattedCosts = costs.map(item => ({service: item.groupKey, prices: months.map(month => item.monthlyCost[month] || 0)}));

    const getServiceTotal = prices => prices.reduce((sum, p) => sum + p, 0);
    const getMonthTotal = monthIndex => formattedCosts.reduce((sum, service) => sum + service.prices[monthIndex], 0);
    const grandTotal = formattedCosts.reduce((sum, service) => sum + getServiceTotal(service.prices),0);

  return (
    <div className='mt-10'>
        <table className='w-full'>
            <thead >
                <tr className='bg-gray-100'>
                    <th className='border px-4 py-2'>Service</th>
                    {months.map((month,index) => (
                        <th key={index} className='border px-4 py-2'>
                            {new Date(month + '-01').toLocaleString('default', { month: 'short' })}
                        </th> 
                    ))}
                    <th className='border px-4 py-2 text-blue-700'>Total</th>
                </tr>
            </thead>
            <tbody className=''>
                {formattedCosts.map((item, index) => (
                    <tr key={index} className="bg-white">
                        <td className="border px-4 py-2 font-medium">
                            {item.service}
                        </td>

                        {item.prices.map((price, idx) => (
                            <td key={idx} className="border px-4 py-2">
                            {formatUSD(price)}
                            </td>
                        ))}

                        <td className="border px-4 py-2 font-semibold text-blue-700">
                            {formatUSD(getServiceTotal(item.prices))}
                        </td>
                    </tr>
                ))}
                <tr className='bg-blue-100'>
                    <td className="border px-4 py-2 text-blue-700">Total</td>
                    {months.map((_, index) => (
                    <td key={index} className="border px-4 py-2 text-blue-700">
                        {formatUSD(getMonthTotal(index))}
                    </td>
                    ))}
                    <td className="border px-4 py-2 text-blue-700">
                        {formatUSD(grandTotal)}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table