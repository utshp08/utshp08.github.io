import { DragLayerMonitor } from 'react-dnd';
export default function useDrag() {
    return ({
        type: "",
        collect: (monitor: DragLayerMonitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })
}