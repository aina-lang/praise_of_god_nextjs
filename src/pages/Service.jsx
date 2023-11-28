import React from 'react';

const servicesData = [
    {
        title: 'Sunday Worship',
        description: 'Join us for a powerful Sunday worship service with uplifting music and inspiring messages.',
    },
    {
        title: 'Midweek Prayer Meeting',
        description: 'Come together for a midweek prayer meeting to seek God\'s guidance and support one another.',
    },
    {
        title: 'Youth Fellowship',
        description: 'Our youth fellowship offers a vibrant and engaging environment for young people to grow in faith.',
    },
];

const Service = () => {
    return (
        <div className="flex flex-wrap justify-between p-10  lg:py-[120px] items-center">
            {servicesData.map((service, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 mx-auto">
                    <div className="max-w-xs bg-white p-4 sm:p-8 rounded-lg shadow-lg mx-auto">
                        <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Service;
