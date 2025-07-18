import TurretButton from "./TurretButton";
import { turrets } from "../../data/turrets";
import type { Turret } from "../../types/turret";

export default function TurretSelector() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 min-h-[75px]">
            {turrets.map((turret: Turret) => (
                <TurretButton
                    key={turret.name}
                    turretName={turret.name}
                />
            ))}
        </div>
    );
}