// src/components/MainContainer.tsx
import TurretSelector from "./TurretSelector";
import BestOptionPanel from "./BestOptionPanel";
import AlternativeOptionPanel from "./AlternativeOptionsPanel";
import SlotList from "./SlotList";

export default function MainContainer() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Select the turret(s):</h2>
          <a href="#" className="underline">How to use?</a>
        </div>
        <TurretSelector />
      </div>

      <div className="flex flex-row gap-4 h-[700px] mb-24">
        <div className="
          flex flex-col gap-6
          h-full w-9/12
          bg-[#E8EDF3]
          p-6
          rounded-lg
          shadow-md
        ">
          <BestOptionPanel />
          <AlternativeOptionPanel />
        </div>

        <aside className="
          flex flex-col gap-6
          w-3/12 h-full
          bg-[#E8EDF3]
          p-6
          rounded-lg
          shadow-md
        ">
          <SlotList />
        </aside>
      </div>
    </section>
  );
}