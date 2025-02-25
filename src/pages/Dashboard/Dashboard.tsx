import { EventAvailableOutlined, HomeOutlined, PaymentsOutlined } from "@mui/icons-material"

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-4 gap-5">
                <div className="bg-white rounded-2xl p-5 flex items-center justify-between">
                    <div>
                        <p className="text-text3 mb-2 font-medium">Active Properties</p>
                        <span className="text-4xl font-semibold">15</span>
                    </div>
                    <div>
                        <HomeOutlined className="!text-4xl text-text3" />
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 flex items-center justify-between">
                    <div>
                        <p className="text-text3 mb-2 font-medium">Total Bookings</p>
                        <span className="text-4xl font-semibold">15</span>
                    </div>
                    <div>
                        <EventAvailableOutlined className="!text-4xl text-text3" />
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 flex items-center justify-between">
                    <div>
                        <p className="text-text3 mb-2 font-medium">Total Earnings</p>
                        <span className="text-4xl font-semibold">15</span>
                    </div>
                    <div>
                        <PaymentsOutlined className="!text-4xl text-text3" />
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 flex items-center justify-between">
                    <div>
                        <p className="text-text3 mb-2 font-medium">Total Earnings</p>
                        <span className="text-4xl font-semibold">15</span>
                    </div>
                    <div>
                        <PaymentsOutlined className="!text-4xl text-text3" />
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="w-[70%] bg-white rounded-2xl p-5">
                </div>
                <div className="w-[30%] bg-white rounded-2xl p-5">
                </div>
            </div>
        </div>
    )
}

export default Dashboard