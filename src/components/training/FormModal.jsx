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
  // Backend integration props (replaces Formspree)
  apiEndpoint = "https://admin.torchbearer.co.ke/api/form-submissions",
  formType = "general",
  emailSubject = "Training Outline Request"
}) => {
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Basic phone validation
    if (formData.phone.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Always use backend API
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: emailSubject,
          message: `New ${formType} request from ${formData.email}. Phone: ${formData.phone}`,
          form_type: formType,
          status: 'pending'
        }),
      });

      const data = await response.json().catch(() => ({}));
      
      if (response.ok) {
        setShowSuccess(true);
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError(error.message || 'There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowSuccess(false);
    setFormData({ email: '', phone: '' });
    setIsSubmitting(false);
    setError('');
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
            
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+254 700 000 000"
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.email || !formData.phone}
                className="w-full bg-amber-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  submitText
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                * Required fields. Your information is secure and will not be shared.
              </p>
            </div>
          </>
        ) : (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{successTitle}</h3>
            <p className="text-gray-600 mb-6">{successMessage}</p>
            {accessLink && (
              <div className="space-y-3">
                <a
                  href={accessLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-amber-700 transition-colors"
                >
                  {accessLinkText}
                </a>
                <p className="text-sm text-gray-500">
                  You can also bookmark this page to access the materials later.
                </p>
              </div>
            )}
            <button
              onClick={resetForm}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormModal;