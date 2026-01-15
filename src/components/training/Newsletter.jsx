import React, { useState } from 'react';
import { Mail, BookOpen, Download, Send, ArrowRight } from 'lucide-react';

const NewsletterPage = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    const newsletterUrl = "https://drive.google.com/file/d/1AsYWPiqini9DjpQf43MAEwP6ScZ6K2D3/preview";
    const downloadUrl = "https://drive.google.com/file/d/1AsYWPiqini9DjpQf43MAEwP6ScZ6K2D3/view?usp=sharing";

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 pt-10 pb-12">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-100 opacity-20 transform -skew-x-12 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-amber-100 opacity-20 transform -skew-x-12 -translate-x-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Torchbearer <span className="text-amber-600">Newsletter</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            Stay ahead in the renewable energy sector with our latest insights, success stories, and industry updates.
                        </p>

                    </div>
                </div>
            </section>

            {/* Newsletter Content - Iframe */}
            <section id="latest-issue" className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                    <FileTextIcon className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Latest Edition</h2>
                                    <p className="text-gray-500">Volume 1 • December 2025</p>
                                </div>
                            </div>
                            <a
                                href={downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                            </a>
                        </div>

                        <div className="relative w-full h-[800px] bg-gray-100">
                            <iframe
                                src={newsletterUrl}
                                className="w-full h-full border-0"
                                title="Newsletter Preview"
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

// Helper icon component since FileText is already imported in some contexts, preventing potential conflicts or just for custom styling
const FileTextIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
);

export default NewsletterPage;
