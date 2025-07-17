import TurretSelector from "./TurretSelector";
import BestOptionPanel from "./BestOptionPanel";
import AlternativeOptionPanel from "./AlternativeOptionsPanel";
import SlotList from "./SlotList";

export default function MainContainer({ route = "Paint Match" }: { route: string }) {
    return (
        <main className="h-auto grid grid-rows-4 grid-cols-4 gap-2 px-14">
            <section className="col-span-4 row-span-1 pt-3 flex justify-center items-center">
                <h1 className="text-2xl font-semibold">{route}</h1>
            </section>
            <section className="col-span-4 row-span-3 p-3 flex flex-row justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold">Select the turret(s):</h2>
                    <TurretSelector />
                </div>
                <div>
                    <a href="#" className="underline">How to use?</a>
                </div>
            </section>
            <section>
                <BestOptionPanel />
                <AlternativeOptionPanel />
            </section>
            <section>
                <SlotList />
            </section>
        </main>
    );
}