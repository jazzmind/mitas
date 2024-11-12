
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  content: {
    title: string;
    content: React.ReactNode;
  };
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ content, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-[#A31F34]">{content.title}</h3>
        <button 
          onClick={onClose} 
          className="p-1 hover:bg-gray-100 rounded-full"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
      </div>
      <div className="space-y-4">
        {content.content}
      </div>
    </div>
  </div>
);