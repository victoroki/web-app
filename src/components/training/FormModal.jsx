import { CheckCircle, Mail, Phone, X } from 'lucide-react';
import { useState } from 'react';

const FormModal = ({ 
  isOpen, 
  onClose, 
  title = "Get Training Outline",
  description = "Enter your details to access the full training materials",
  submitText = "Access Training Materials",
  successTitle = "Success!",
  successMessage = "Thank you for your interest. You can now access the training materials.",
  accessLink = "https://drive.google.com/file/d/1IPouG0rutZG-0cVAb9hpIgTJKl6jGvs4/view?usp=drive_link",
  accessLinkText = "Access Training Outline",
  formspreeEndpoint = "https://formspree.io/f/myyqrvvk",
  emailSubject = "Training Outline Request"
}) => {
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!formData.email || !formData.phone) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          subject: emailSubject,
          message: `New request from ${formData.email}. Phone: ${formData.phone}`
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowSuccess(false);
    setFormData({ email: '', phone: '' });
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {!showSuccess ? (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+254 700 000 000"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.email || !formData.phone}
                className="w-full bg-amber-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Submitting...' : submitText}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{successTitle}</h3>
            <p className="text-gray-600 mb-6">{successMessage}</p>
            {accessLink && (
              <a
                href={accessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-amber-700 transition-colors"
              >
                {accessLinkText}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormModal;