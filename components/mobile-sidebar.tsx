
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import {useState, useEffect } from "react";

export const useClient = () => {
    const [isMounted, setIsMounted] = useState(false); 
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if(!isMounted) {
        return null;
    }
    return isMounted;
};

const MobileSidebar = () => {
    const isClient = useClient();
    return (
        <Sheet>
            <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
            </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;

