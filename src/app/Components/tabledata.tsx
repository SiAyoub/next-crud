"use client";
import React, { useState, useEffect } from "react";

type Row = {
  id: number;
  facilityName: string;
  dataType: string;
  fuel: string;
  value: string;
  unit: string;
};

type Option = {
  id: number;
  value: string;
};

type EditingCell = {
  rowId: number | null;
  colKey: string | null;
};

const FacilitiesTable = () => {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, facilityName: "", dataType: "", fuel: "", value: "", unit: "" },
  ]);

  const [editingCell, setEditingCell] = useState<EditingCell>({
    rowId: null,
    colKey: null,
  });

  const [dataTypeOptions, setDataTypeOptions] = useState<Option[]>([]);
  const [fuelOptions, setFuelOptions] = useState<Option[]>([]);

  useEffect(() => {
    fetchDataTypeOptions();
    fetchFuelOptions();
  }, []);

  const fetchDataTypeOptions = async () => {
    try {
      // Fetching data from the server (mocked for now)
      const data = [
        { id: 1, value: "Option 1-1" },
        { id: 2, value: "Option 1-2" },
        { id: 3, value: "Option 1-3" },
      ];
      setDataTypeOptions(data);
    } catch (error) {
      console.error("Error loading data type options:", error);
    }
  };

  const fetchFuelOptions = async () => {
    try {
      const data = [
        { id: 1, value: "Option 2-1" },
        { id: 2, value: "Option 2-2" },
        { id: 3, value: "Option 2-3" },
      ];
      setFuelOptions(data);
    } catch (error) {
      console.error("Error loading fuel options:", error);
    }
  };

  const addRow = () => {
    const newId =
      rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
    setRows([
      ...rows,
      {
        id: newId,
        facilityName: "",
        dataType: "",
        fuel: "",
        value: "",
        unit: "",
      },
    ]);
  };

  const deleteRow = (id: number) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    } else {
      setRows([
        {
          id: 1,
          facilityName: "",
          dataType: "",
          fuel: "",
          value: "",
          unit: "",
        },
      ]);
    }
  };

  const updateCell = (id: number, colKey: keyof Row, value: string) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [colKey]: value } : row))
    );
  };

  const handleCellClick = (rowId: number, colKey: string) => {
    if (colKey !== "dataType" && colKey !== "fuel") {
      setEditingCell({ rowId, colKey });
    }
  };

  const saveTableData = () => {
    console.log("Data saved:", rows);
    // Send data to the server
    alert("Data saved successfully!");
  };

  const renderCell = (row: Row, colKey: keyof Row) => {
    if (editingCell.rowId === row.id && editingCell.colKey === colKey) {
      return (
        <input
          type="text"
          className="w-full p-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={row[colKey]}
          onChange={(e) => updateCell(row.id, colKey, e.target.value)}
          onBlur={() => setEditingCell({ rowId: null, colKey: null })}
          autoFocus
        />
      );
    }

    if (colKey === "dataType") {
      return (
        <select
          className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={row[colKey]}
          onChange={(e) => updateCell(row.id, colKey, e.target.value)}
        >
          <option value="">Select...</option>
          {dataTypeOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      );
    }

    if (colKey === "fuel") {
      return (
        <select
          className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={row[colKey]}
          onChange={(e) => updateCell(row.id, colKey, e.target.value)}
        >
          <option value="">Select...</option>
          {fuelOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      );
    }

    return (
      <div className="text-sm text-gray-900 min-h-6 p-1 hover:bg-blue-50 rounded cursor-pointer">
        {row[colKey] || "—"}
      </div>
    );
  };

  // Column definitions for cleaner code
  const columns = [
    { key: "facilityName", label: "Facility Name" },
    { key: "dataType", label: "Data Type" },
    { key: "fuel", label: "Fuel" },
    { key: "value", label: "Value" },
    { key: "unit", label: "Unit" },
  ];

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Add Your Facilities
          </h2>
          <p className="text-sm text-gray-600 mt-1"></p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  #
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {col.label}
                  </th>
                ))}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={() => handleCellClick(row.id, col.key)}
                    >
                      {renderCell(row, col.key as keyof Row)}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => deleteRow(row.id)}
                      className="text-red-600 hover:text-red-900 mr-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <button
            onClick={addRow}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center transition duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add data for new facility
          </button>

          <button
            onClick={saveTableData}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center transition duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesTable;
