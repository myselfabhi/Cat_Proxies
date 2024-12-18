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
      <div className="space-y-8 container">
        {/* Header */}
        <div className="text-gray-800">
          <h1 className="text-2xl font-semibold mt-4">Orders</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto  p-6">
          <table className="min-w-full text-sm text-gray-700">
            {/* Table Header */}
            <thead className="bg-gray-100 text-left rounded-lg border-b text-gray-500">
              <tr>
                <th className="py-2 px-4">INVOICE ID</th>
                <th className="py-2 px-4">PLAN NAME</th>
                <th className="py-2 px-4">DATE</th>
                <th className="py-2 px-4">AMOUNT</th>
                <th className="py-2 px-4">PAYMENT METHOD</th>
                <th className="py-2 px-4">STATUS</th>
              </tr>
            </thead>

            {/* Conditional Rendering */}
            {invoiceData.length === 0 ? (
              <tbody>
                {/* Empty Data State */}
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-gray-600  "
                  >
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <img
                        src="/cat_invoices.svg"
                        alt="No Invoices"
                        className="w-140 h-100 mt-40"
                      />

                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {/* Populated Data */}
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
            )}
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
