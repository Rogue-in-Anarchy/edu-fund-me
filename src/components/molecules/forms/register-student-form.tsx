"use client";
import UseRegisterStudent from "@/hooks/UseRegisterStudent";
import pinata from "@/utils/constants/SDK/pinata";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  surname: string;
  studentId: string;
  email: string;
  phone: string;
  Transcript: string;
}

const StudentForm: React.FC = () => {
  const registerStudent = UseRegisterStudent();
  const [disabled, setDisabled] = useState(true);
  const [transcript, setTranscript] = useState<File>(
    new File(["transcript"], "trans")
  );
  const { isConnected } = useWeb3ModalAccount();

  const handleTranscriptChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    console.log(files);
    if (files && files.length > 0) {
      if (isConnected) {
        setDisabled(false);
      }
      const selectedFile = files[0];
      setTranscript(selectedFile);
    }
    console.log(transcript);
  };

  const register = async () => {
    try {
      const upload = await pinata.upload.file(transcript);
      const hash = process.env.NEXT_PUBLIC_gateway + "/ipfs/" + upload.IpfsHash;
      registerStudent(hash);
      console.log(hash);
      console.log(upload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-center text-2xl">
        you are not a registered student please upload your transcript and click
        on the button below to register
      </div>
      <div className="text-center text-2xl">
        <div>
          <label className="block text-sm font-medium">Transcript</label>
          <input
            type="file"
            name="Transcript"
            onChange={handleTranscriptChange}
            accept=".pdf,.doc,.docx,.txt"
            className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-primary-3 focus:border-primary-3 sm:text-sm`}
          />
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          className={` font-semibold  px-4 py-2 rounded-md bg-[#00D3D3] hover:bg-[#005a5ad4] duration-300 `}
          disabled={disabled}
          onClick={() => register()}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
