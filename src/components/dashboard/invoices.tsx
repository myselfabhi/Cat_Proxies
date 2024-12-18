"use client";
import { CreditCard, Phone } from "lucide-react";
import DashboardLayout from "../layout";

const Invoices = () => {
  const invoiceData: any[] = [
    {
      id: "Invoice A10",
      planName: "Residential",
      date: "Mar 15, 2020",
      amount: "$143.00",
      paymentMethod: "**** 4231",
      paymentType: <CreditCard className="w-5 h-5 text-gray-500" />,
      status: "PAID",
    },
    {
      id: "Invoice A09",
      planName: "IPv6",
      date: "Feb 15, 2020",
      amount: "$439.00",
      paymentMethod: "**** 4231",
      paymentType: <Phone className="w-5 h-5 text-gray-500" />,
      status: "PAID",
    },
    {
      id: "Invoice A08",
      planName: "Datacenter",
      date: "Jan 10, 2020",
      amount: "$125.00",
      paymentMethod: "**** 4231",
      paymentType: <Phone className="w-5 h-5 text-gray-500" />,
      status: "PAID",
    },
    {
      id: "Invoice A07",
      planName: "Mobile",
      date: "Dec 16, 2019",
      amount: "$49.00",
      paymentMethod: "**** 4231",
      paymentType: <Phone className="w-5 h-5 text-gray-500" />,
      status: "PAID",
    },
    {
      id: "Invoice B02",
      planName: "Residential",
      date: "Dec 15, 2019",
      amount: "$49.00",
      paymentMethod: "**** 4231",
      paymentType: <Phone className="w-5 h-5 text-gray-500" />,
      status: "PAID",
    },
    {
      id: "Invoice B01",
      planName: "Residential",
      date: "Dec 01, 2019",
      amount: "$150.00",
      paymentMethod: "**** 4231",
      paymentType: <Phone className="w-5 h-5 text-gray-500" />,
      status: "PAID",
    },

  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-gray-800">
          <h1 className="text-2xl font-semibold mt-4">Orders</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          {invoiceData.length === 0 ? (
            <div className="py-10 text-center text-gray-600">
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/cat_invoices.svg"
                  alt="No Invoices"
                  className="w-40 h-40"
                />
                <p>No Invoices Available</p>
              </div>
            </div>
          ) : (
            <table className="w-full text-sm text-gray-700 hidden md:table">
              {/* Table Header */}
              <thead className="bg-gray-100 text-gray-500 border-b">
                <tr>
                  <th className="py-2 px-4 text-left">INVOICE ID</th>
                  <th className="py-2 px-4 text-left">PLAN NAME</th>
                  <th className="py-2 px-4 text-left">DATE</th>
                  <th className="py-2 px-4 text-left">AMOUNT</th>
                  <th className="py-2 px-4 text-left">PAYMENT METHOD</th>
                  <th className="py-2 px-4 text-left">STATUS</th>
                </tr>
              </thead>

              {/* Table Data */}
              <tbody>
                {invoiceData.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-2 px-4">{invoice.id}</td>
                    <td className="py-2 px-4">{invoice.planName}</td>
                    <td className="py-2 px-4">{invoice.date}</td>
                    <td className="py-2 px-4 font-semibold">
                      {invoice.amount}
                    </td>
                    <td className="py-2 px-4 flex items-center gap-2">
                      {invoice.paymentType}
                      <span>{invoice.paymentMethod}</span>
                    </td>
                    <td className="py-2 px-4">
                      <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Responsive Cards for Mobile */}
        {invoiceData.length > 0 && (
          <div className="block md:hidden space-y-4">
            {invoiceData.map((invoice) => (
              <div
                key={invoice.id}
                className="p-4 bg-white rounded-lg shadow-md space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-800">
                    {invoice.id}
                  </span>
                  <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                    {invoice.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>
                    <strong>Plan Name:</strong> {invoice.planName}
                  </p>
                  <p>
                    <strong>Date:</strong> {invoice.date}
                  </p>
                  <p>
                    <strong>Amount:</strong> {invoice.amount}
                  </p>
                  <div className="flex items-center gap-2">
                    {invoice.paymentType}
                    <span>{invoice.paymentMethod}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
