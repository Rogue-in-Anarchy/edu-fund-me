"use client"

import React from 'react';
import { Menu, Transition } from '@headlessui/react';



interface Loan {
    id: string;
    amount: string;
    interestRate: string;
    term: string;
    outstandingBalance: string;
}

interface LoanHistoryTableProps {
    loans: Loan[];
}

export const LoanHistoryTable: React.FC<LoanHistoryTableProps> = ({ loans }) => {
    return (
        <div className="overflow-x-auto space-y-5">
            <h1 className="text-black font-bold text-xl">Loan history</h1>
            <table className="min-w-full bg-white border border-bleck">
                <thead className='border-b border-bleck'>
                    <tr>
                        <th className="py-2 px-3 border-b text-left text-sm font-semibold text-gray-700">Loan ID</th>
                        <th className="py-2 px-3 border-b text-left text-sm font-semibold text-gray-700">Loan Amount</th>
                        <th className="py-2 px-3 border-b text-left text-sm font-semibold text-gray-700">Interest Rate</th>
                        <th className="py-2 px-3 border-b text-left text-sm font-semibold text-gray-700">Repayment Term</th>
                        <th className="py-2 px-3 border-b text-left text-sm font-semibold text-gray-700">Outstanding Balance</th>
                        <th className="py-2 px-3 border-b text-left text-sm font-semibold text-gray-700"></th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map((loan) => (
                        <LoanRow key={loan.id} loan={loan} />
                    ))}
                </tbody>
            </table>
            <h1 className="text-black font-bold text-lg text-right"> All Loan</h1>
        </div>
    );
};


interface LoanRowProps {
    loan: {
        id: string;
        amount: string;
        interestRate: string;
        term: string;
        outstandingBalance: string;
    };
}

export const LoanRow: React.FC<LoanRowProps> = ({ loan }) => {
    return (
        <tr className="hover:bg-gray-100">
            <td className="py-2 px-3 border-b">{loan.id}</td>
            <td className="py-2 px-3 border-b">{loan.amount}</td>
            <td className="py-2 px-3 border-b">{loan.interestRate}</td>
            <td className="py-2 px-3 border-b">{loan.term}</td>
            <td className="py-2 px-3 border-b">{loan.outstandingBalance}</td>
            <td className="py-2 px-3 border-b text-right">
                <MoreOptionsButton />
            </td>
        </tr>
    );
};


export const MoreOptionsButton: React.FC = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-4 h-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 bg-primary-2">
                •••
            </Menu.Button>

            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                        } block px-4 py-2 text-sm`}
                                >
                                    Edit
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                        } block px-4 py-2 text-sm`}
                                >
                                    Delete
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
