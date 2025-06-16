import { Search, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import faqs from "../data/faq.json";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-7"></div>
                <div className="absolute top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

                <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight sm:leading-tight">
                        Your Career
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Journey Starts Here
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-xl text-gray-600 mb-10 max-w-md sm:max-w-2xl mx-auto leading-relaxed">
                        Connect talented professionals with amazing
                        opportunities. Whether you're looking for your next role
                        or the perfect candidate.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-4 sm:gap-6 justify-center items-center">
                        <Link to="/jobs">
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-xl py-6 px-6  shadow-md hover:scale-105 transition-transform duration-200">
                                <Search className=" w-5 h-5" />
                                Find Jobs
                            </Button>
                        </Link>
                        <Link to="post-job">
                            <Button className="bg-white text-gray-700 border border-gray-300 font-xl font-extrabold py-6 px-9  shadow-sm hover:bg-gray-50 hover:scale-105 transition-transform duration-200">
                                <Briefcase className="w-5 h-5" />
                                Post Jobs
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-14 sm:mt-20">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                                50K+
                            </div>
                            <div className="text-gray-600 text-sm sm:text-lg">
                                Active Jobs
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                                25K+
                            </div>
                            <div className="text-gray-600 text-sm sm:text-lg">
                                Companies
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                                100K+
                            </div>
                            <div className="text-gray-600 text-sm sm:text-lg">
                                Success Stories
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center gap-10 sm:gap-20 py-10 sm:py-20 px-4 sm:px-40 bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-gray-900">
                    Frequently Asked Questions
                </h2>
                <Accordion type="multiple" className="w-[80%] space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index + 1}`}
                            className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
                        >
                            <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left text-gray-800 hover:bg-gray-100 transition-all duration-100">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed bg-white">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default LandingPage;
