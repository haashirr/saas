import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
const DashboardLayout = ({
        children
}: {
    children: React.ReactNode;

}) => {
    return (
    
        <div className="dark h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80]">
                <Sidebar />            
            </div>
            <main className="h-full relative md:pl-72 text-gray-100">
        <Navbar />
        {children}
            </main>
        </div>
    );
}

export default DashboardLayout;