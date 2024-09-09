"use client";

import UseCreateProposal from "@/hooks/UseCreateProposal";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  proposalTitle: string;
  proposalCategory: string;
  description: string;
  requestedAmount: string;
  submissionDate: string;
  name: string;
  surname: string;
  studentId: string;
  email: string;
  phone: string;
  transcript: File | null;
  referenceLetter: File | null;
  proposalGoal: string;
  expectedImpact: string;
  timeline: string;
}

type ValidatorFn<T> = (value: T) => string | null;

type Validators<T> = {
  [K in keyof T]?: ValidatorFn<T[K]>[];
};

type ValidationErrors<T> = {
  [K in keyof T]?: string;
};

const required = (value: string) => (value ? null : "This field is required.");
const isEmail = (value: string) =>
  /\S+@\S+\.\S+/.test(value) ? null : "Invalid email format.";
const isPositiveNumber = (value: string) =>
  !isNaN(Number(value)) && Number(value) > 0
    ? null
    : "Must be a positive number.";
const maxLength = (max: number) => (value: string) =>
  value.length <= max ? null : `Cannot exceed ${max} characters.`;

const formValidators: Validators<FormData> = {
  proposalTitle: [required, maxLength(50)],
  email: [required, isEmail],
  requestedAmount: [required, isPositiveNumber],
  name: [required],
  surname: [required],
  proposalGoal: [required, maxLength(200)],
  expectedImpact: [required, maxLength(200)],
  timeline: [required, maxLength(200)],
};

const ProposalForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    proposalTitle: "",
    proposalCategory: "",
    description: "",
    requestedAmount: "",
    submissionDate: "",
    name: "",
    surname: "",
    studentId: "",
    email: "",
    phone: "",
    transcript: null,
    referenceLetter: null,
    proposalGoal: "",
    expectedImpact: "",
    timeline: "",
  });

  const [errors, setErrors] = useState<ValidationErrors<FormData>>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors<FormData> = {};

    for (const key in formValidators) {
      if (Object.prototype.hasOwnProperty.call(formValidators, key)) {
        const field = key as keyof FormData;
        const value = formData[field];
        const validators = formValidators[field];

        // Check if value is a string
        if (validators && typeof value === "string") {
          for (const validator of validators as ValidatorFn<string>[]) {
            const error = validator(value);
            if (error) {
              newErrors[field] = error;
              break; // Stop after the first validation error
            }
          }
        }

        // Check if value is a File
        if (validators && value instanceof File) {
          for (const validator of validators as ValidatorFn<File>[]) {
            const error = validator(value);
            if (error) {
              newErrors[field] = error;
              break; // Stop after the first validation error
            }
          }
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const router = useRouter();

  // request to the blockchain
  const createProposal = UseCreateProposal();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      // form submission
      localStorage.setItem("Proposal", formData.toString());
      createProposal(
        formData.proposalTitle,
        formData.description,
        Number(formData.requestedAmount),
        String(formData.transcript)
      );
      // router.push("/dashboard/my-proposal");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pb-5 space-y-8">
      {/* Proposal Information Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Proposal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Proposal Title</label>
            <input
              type="text"
              name="proposalTitle"
              value={formData.proposalTitle}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 bg-white border ${
                errors.proposalTitle ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
            />
            {errors.proposalTitle && (
              <p className="text-red-500 text-sm mt-2">
                {errors.proposalTitle}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">
              Proposal Category
            </label>
            <select
              name="proposalCategory"
              value={formData.proposalCategory}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm"
            >
              <option value="">Select Category</option>
              <option value="Category1">Category 1</option>
              <option value="Category2">Category 2</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium">
              Requested Amount
            </label>
            <input
              type="text"
              name="requestedAmount"
              value={formData.requestedAmount}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 bg-white border ${
                errors.requestedAmount ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
            />
            {errors.requestedAmount && (
              <p className="text-red-500 text-sm mt-2">
                {errors.requestedAmount}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Submission Date</label>
            <input
              type="date"
              name="submissionDate"
              value={formData.submissionDate}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 bg-white border ${
                errors.submissionDate ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
            />
            {errors.submissionDate && (
              <p className="text-red-500 text-sm mt-2">
                {errors.submissionDate}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section>
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 bg-white border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 bg-white border ${
                errors.surname ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
            />
            {errors.surname && (
              <p className="text-red-500 text-sm mt-2">{errors.surname}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 bg-white border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm"
            />
          </div>
        </div>
      </section>

      {/* Proposal Details */}
      <section>
        <h2 className="text-xl font-bold mb-4">Proposal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">
              Requested Amount
            </label>
            <input
              type="text"
              name="requestedAmount"
              value={formData.requestedAmount}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 bg-white border ${
                errors.requestedAmount ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
            />
            {errors.requestedAmount && (
              <p className="text-red-500 text-sm mt-2">
                {errors.requestedAmount}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Submission Date</label>
            <input
              type="date"
              name="submissionDate"
              value={formData.submissionDate}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium">Proposal Goal</label>
          <textarea
            name="proposalGoal"
            value={formData.proposalGoal}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              errors.proposalGoal ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
          />
          {errors.proposalGoal && (
            <p className="text-red-500 text-sm mt-2">{errors.proposalGoal}</p>
          )}
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium">Expected Impact</label>
          <textarea
            name="expectedImpact"
            value={formData.expectedImpact}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              errors.expectedImpact ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
          />
          {errors.expectedImpact && (
            <p className="text-red-500 text-sm mt-2">{errors.expectedImpact}</p>
          )}
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium">Timeline</label>
          <textarea
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              errors.timeline ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
          />
          {errors.timeline && (
            <p className="text-red-500 text-sm mt-2">{errors.timeline}</p>
          )}
        </div>
      </section>

      {/* File Uploads */}
      <section>
        <h2 className="text-xl font-bold mb-4">File Uploads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">Transcript</label>
            <input
              type="file"
              name="transcript"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-primary-2 hover:file:bg-indigo-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Reference Letter
            </label>
            <input
              type="file"
              name="referenceLetter"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-primary-2 hover:file:bg-indigo-100"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-between w-2/5 items-center mt-8">
        <button
          type="button"
          className="w-fit inline-flex justify-center border border-transparent shadow-sm font-medium hover:bg-primary-3/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-3/40 bg-primary-3 text-sm rounded-lg px-6 py-2 text-white"
        >
          Save as draft
        </button>
        <button
          type="submit"
          className="w-fit inline-flex justify-center border border-transparent shadow-sm text-sm font-medium  hover:bg-primary-2/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-2/40 bg-primary-2 rounded-lg px-6 py-2 text-primary-3"
        >
          Review & submit
        </button>
      </div>
    </form>
  );
};

export default ProposalForm;
