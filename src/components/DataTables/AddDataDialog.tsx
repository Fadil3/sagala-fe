/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Select from 'react-select';
import { complexType } from '../../data/complex';
import { developmentType } from '../../data/development';
import { fourColumnType } from '../../data/four-column';

interface AddDataDialogProps {
  isVisible: boolean;
  variant: string;
  onClose: () => void;
  onAdd: (newData: complexType | developmentType | fourColumnType) => void;
}

const osOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'android', label: 'Android' },
  { value: 'windows', label: 'Windows' }
];

const statusOptions = [
  { value: 'Approved', label: 'Approved' },
  { value: 'Disable', label: 'Disable' },
  { value: 'Error', label: 'Error' }
];

const formDataDevelopment = {
  name: '',
  os: [],
  date: '',
  progress: 0
};

const formDataComplex = {
  name: '',
  progress: 0,
  status: '',
  date: '',
};

const formDataFourColumn = {
  name: '',
  quantity: 0,
  date: '',
  progress: 0
}

const AddDataDialog: React.FC<AddDataDialogProps> = ({ isVisible, onClose, onAdd, variant }) => {
  const [formData, setFormData] = useState(variant === 'development' ? formDataDevelopment : variant === 'complex' ? formDataComplex : formDataFourColumn);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOptions: any) => {
    setFormData({ ...formData, os: selectedOptions ? selectedOptions.map((option: any) => option.value) : [] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData as complexType | developmentType | fourColumnType);
    onClose();

    setFormData(variant === 'development' ? formDataDevelopment : variant === 'complex' ? formDataComplex : formDataFourColumn);

    alert('Data added successfully');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[100]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] lg:w-[350px]">
        <h2 className="text-xl font-bold mb-4">Add New Data</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {variant === 'complex' && (
            <div className="mb-4">
              <label className="block text-gray-700">Status</label>
              <Select
                name="status"
                //  @ts-ignore
                value={statusOptions.filter(option => formData?.status === option.value)}
                onChange={(selectedOption: any) => setFormData({ ...formData, status: selectedOption.value })}
                options={statusOptions}
                className="w-full"
                required
              />
            </div>
          )}
          {variant === 'development' && (
            <div className="mb-4">
              <label className="block text-gray-700">OS</label>
              <Select
                name="os"
                //  @ts-ignore
                value={osOptions.filter(option => formData.os.includes(option.value))}
                onChange={handleSelectChange}
                options={osOptions}
                isMulti
                className="w-full"
                required
              />
            </div>
          )}
          {
            variant === 'fourColumn' || variant === 'check' && (
              <div className="mb-4">
                <label className="block text-gray-700">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  //  @ts-ignore
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  min={0}
                  required
                />
              </div>
            )
          }
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Progress</label>
            <input
              type="number"
              name="progress"
              value={formData.progress}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              min={0}
              max={100}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDataDialog;