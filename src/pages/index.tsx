import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import Card from "@/components/UI/Card";
import { certificates } from "@/utils/certificates";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [filteredPlaces, setPlaces] = useState(certificates);
    const [currentFilter, setCurrentFilter] = useState("all");

    const handleAllPlaces = () => {
        setPlaces(certificates);
        setCurrentFilter("all");
    };

    const handleCivil = () => {
        const filtered_places = certificates.filter((place) => place.type === "Civil");
        setPlaces(filtered_places);
        setCurrentFilter("Civil");
    };

    const handleComputerScience = () => {
        const filtered_places = certificates.filter((place) => place.type === "Computer Science");
        setPlaces(filtered_places);
        setCurrentFilter("Computer Science");
    };
    const handleEducation = () => {
        const filtered_places = certificates.filter((place) => place.type === "Education");
        setPlaces(filtered_places);
        setCurrentFilter("Education");
    };
    const handleInternationalExperiences = () => {
        const filtered_places = certificates.filter((place) => place.type === "International Experience");
        setPlaces(filtered_places);
        setCurrentFilter("International Experience");
    };
    const handleLanguageCourses = () => {
        const filtered_places = certificates.filter((place) => place.type === "Language Course");
        setPlaces(filtered_places);
        setCurrentFilter("Language Course");
    };

    const handleWorkExperiences = () => {
        const filtered_places = certificates.filter((place) => place.type === "Work Experience");
        setPlaces(filtered_places);
        setCurrentFilter("Work Experience");
    };


    return (
        <main>
            <section className="min-[0px]:flex sm:hidden p-8 min-h-screen items-center">
                <h3 className="text-center animate-text text-5xl font-black">
                    Unfortunately, the developer didn't have time to create a mobile
                    version of this page. 😢
                </h3>
            </section>
            <section
                className={`min-[0px]:hidden sm:flex flex-col px-24 py-16 min-h-screen ${inter.className}`}
            >
                <h3 className="text-center animate-text bg-gradient-to-r from-sky-800 via-slate-400 to-sky-300 bg-clip-text text-transparent text-5xl font-black">
                    My Certificates
                </h3>
                <h4 className="text-center">by Pedro Miguel Margalha Miranda
                </h4>
                <section className="mt-6 flex justify-center">
                    <div className="p-1 bg-slate-100 flex rounded-lg shadow-sm">
                        <div
                            className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${currentFilter === "all" ? "bg-slate-200" : ""
                                }`}
                            onClick={handleAllPlaces}
                        >
                            All
                        </div>
                        <div
                            className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${currentFilter === "Civil" ? "bg-slate-200" : ""
                                }`}
                            onClick={handleCivil}
                        >
                            Civil 👷‍
                        </div>
                        <div
                            className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${currentFilter === "Computer Science" ? "bg-slate-200" : ""
                                }`}
                            onClick={handleComputerScience}
                        >
                            Computer Science 💻
                        </div>
                        <div
                            className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${currentFilter === "Education" ? "bg-slate-200" : ""
                                }`}
                            onClick={handleEducation}
                        >
                            Education 📚
                        </div>
                        <div
                            className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${currentFilter === "International Experience" ? "bg-slate-200" : ""
                                }`}
                            onClick={handleInternationalExperiences}
                        >
                            International Experiences 🌎
                        </div>
                        <div
                            className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${currentFilter === "Language Course" ? "bg-slate-200" : ""
                                }`}
                            onClick={handleLanguageCourses}
                        >
                            Language Courses 👨‍🏫
                        </div>
                        <div
                            className={`px-4 py-3 font-medium cursor-pointer rounded-lg ${currentFilter === "Work Experience" ? "bg-slate-200" : ""
                                }`}
                            onClick={handleWorkExperiences}
                        >
                            Work Experiences 👨‍💼
                        </div>

                    </div>
                </section>
                <div
                    className={`mt-8 grid gap-y-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-items-center`}
                >

                    {filteredPlaces.map((certificate) => {
                        return (
                            <Card
                                key={certificate.name}
                                name={certificate.name}
                                organization={certificate.organization}
                                imgUrl={certificate.imgUrl}
                                pdfUrl={certificate.pdfUrl}
                                country={certificate.country}
                                class_type={certificate.class_type}
                                type={certificate.type}
                                initialDate={certificate.initialDate}
                                conclusionDate={certificate.conclusionDate}
                                duration={certificate.duration}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
