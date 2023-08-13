export default function ExperienceBox({ data }) {
    return (
        <div className="flex justify-center mt-8 m-auto">
            <div className="p-4 flex flex-col justify-center items-center rounded-md bg-[#F9F9F9] text-blue-500">
                <h3 className="text-5xl text-center mb-4">{data.experience}</h3>
                <p className="text-lg text-black text-center">
                    Years Of Experiance
                </p>
            </div>
            <div className="p-4 flex flex-col gap-4 ">
                {/* <ul> */}
                {data.features &&
                    data.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                {/* <li>Unleash Locom</li>
                <li>Automate referral generation</li>
                <li>amplify your online reputation</li>
                <li>skyrocket your sales</li> */}
                {/* </ul> */}
            </div>
        </div>
    );
}
