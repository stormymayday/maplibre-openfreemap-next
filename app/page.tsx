import Map from "@/components/Map";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="h-[100vh] flex flex-col items-center justify-center">
            <Map />
            <div>
                <Button>Click me</Button>
            </div>
        </main>
    );
}
