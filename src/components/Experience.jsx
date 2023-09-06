import { useConfigurator } from "../contexts/Configurator";
import { Table } from "./Table";
import {
  AccumulativeShadows,
  OrbitControls,
  Stage,
  accumulativeContext,
} from "@react-three/drei";

export const Experience = () => {
  const {legs} = useConfigurator(); // shadow rerenderlar

  return (
    <>
    
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
        <Table />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
