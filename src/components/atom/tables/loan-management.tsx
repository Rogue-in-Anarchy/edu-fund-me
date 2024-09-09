import React from 'react'

const loanData = [
    {
        id: 'L-001',
        amount: '$5,000',
        interestRate: '5%',
        term: '24 Months',
        balance: '$2,500',
        nextPaymentDue: 'August-20-2024',
        status: 'Active',
    },
];


const LoanRow = ({ loan }: { loan: any }) => {
    return (
        <tr className="text-center">
            <td className="py-2 px-4 border-b">{loan.id}</td>
            <td className="py-2 px-4 border-b">{loan.amount}</td>
            <td className="py-2 px-4 border-b">{loan.interestRate}</td>
            <td className="py-2 px-4 border-b">{loan.term}</td>
            <td className="py-2 px-4 border-b">{loan.balance}</td>
            <td className="py-2 px-4 border-b">{loan.nextPaymentDue}</td>
            <td className="py-2 px-4 border-b">
                <span className={`text-sm font-medium ${loan.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                    {loan.status}
                </span>
            </td>
            <td className="py-2 px-4 border-b">
                <button className="bg-primary-3 text-white px-4 py-1 rounded">View</button>
            </td>
        </tr>
    );
};



const LoanTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-2 px-4 border-b">Loan ID</th>
                        <th className="py-2 px-4 border-b">Loan Amount</th>
                        <th className="py-2 px-4 border-b">Interest Rate</th>
                        <th className="py-2 px-4 border-b">Repayment Term</th>
                        <th className="py-2 px-4 border-b">Outstanding Balance</th>
                        <th className="py-2 px-4 border-b">Next Payment Due</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loanData.map((loan, index) => (
                        <LoanRow key={index} loan={loan} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const LoanManagement = () => {
    return (
        <div className=''>
            <LoanTable />
        </div>
    )
}

export default LoanManagement