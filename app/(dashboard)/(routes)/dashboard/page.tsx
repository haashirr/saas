"use client";
import { ArrowRight, MessageSquare, MusicIcon, ImageIcon, VideoIcon, CodeIcon} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-700",
        bgColor: "bg-violet-500/10",
        href: "/conversation"
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        color: "text-green-700",
        bgColor: "bg-green-500/10",
        href: "/music"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-500/10",
        href: "/image"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-teal-600",
        bgColor: "bg-teal-400/10",
        href: "/video"
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        color: "text-yellow-600",
        bgColor: "bg-yellow-500/10",
        href: "/code"
    }
]
const DashboardPage = () => {
    const router = useRouter();
    return (
        <div>
       <div className="mb-8 space-y-4">
        <h2 className="font-sans font-santext-2xl md:text-4xl font-bold text-center">Welcome to Stellar</h2>
        <p className="font-sans text-muted-foreground text-sm md:text-lg text-center">
           Your one stop solution to all things AI.
        </p>
       </div>
       <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool)=> (
            <Card
            onClick={()=> router.push(tool.href)}
                key={tool.href}
                 className="p-4 borderslate/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                    <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                            <tool.icon className={cn("w-8 h-8", tool.color)} />
                        </div>
                        <div className="font-semibold">
                            {tool.label}
                        </div>
                    </div>
                    <ArrowRight className="w-5 h-5" />
            </Card>
        ))}
       </div>
        </div>
    );
}

export default DashboardPage;