"use client";

import Item from "./Item";
import Column from "./Column";

export default function Pipeline({
  pipelines,
  pipelineKey,
  pipelineItems,
  itemKey,
  renderHeader,
  renderItem,
  onDropItem,
}: {
  pipelines: any[];
  pipelineKey: (pipeline: any) => number | string;
  pipelineItems: (pipeline: any) => any[];
  itemKey: (item: any) => number | string;
  renderHeader: (pipeline: any) => React.ReactNode;
  renderItem: (item: any) => React.ReactNode;
  onDropItem: (pipeline: any, item: any) => void;
}) {
  return (
    <div className="w-full h-full flex flex-row flex-1 overflow-auto">
      <div className="flex flex-row p-2 gap-2">
        {pipelines.map((pipeline) => (
          <Column
            key={pipelineKey(pipeline)}
            pipeline={pipeline}
            pipelineItems={pipelineItems}
            itemKey={itemKey}
            renderHeader={renderHeader}
            renderItem={renderItem}
            onDropItem={onDropItem}
          />
        ))}
      </div>
    </div>
  );
}
