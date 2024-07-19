import Image from "next/image";
export default function Card({
    name,
    organization,
    country,
    class_type,
    imgUrl,
    pdfUrl,
    type,
    initialDate,
    conclusionDate,
    duration,
}: {
    name: string;
    organization: string;
    country: string;
    class_type: string;
    imgUrl?: string;
    pdfUrl?: string;
    type: string;
    initialDate: string;
    conclusionDate: string;
    duration: string;
}) {
    return (
        <div className="max-w-sm rounded flex flex-col justify-between overflow-hidden shadow-lg text-center">
            <a href={pdfUrl} target="_blank">

                {imgUrl ? (
                    <img src={imgUrl} alt={name} className="bg-cover w-full h-52" />
                ) : null}
                <div className="px-6 py-4">
                    <h1 className="mt-2 font-bold text-xl mb-2">{name}</h1>
                    <h2 className="mt-2 font-bold text-md mb-2">{organization}</h2>
                    <h3 className="mt-2 font-bold text-md mb-2">{country}</h3>
                    <h4 className="mt-2 font-bold text-md mb-2">{class_type}</h4>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Type: {type}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Initial Date: {initialDate}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Conclusion Date: {conclusionDate}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Duration: {duration}
                    </span>
                </div>
            </a>

        </div>
    );
}
