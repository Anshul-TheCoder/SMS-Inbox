import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

export const ContentItem = ({ List }) => {
    return (
        <Draggable draggableId={"draggable-" + List.num} index={List.id}>
            {(provided, _) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{List.name}</div>
                            {List.desc}
                        </div>
                        <span className="badge bg-primary rounded-pill">{List.num}</span>
                    </li>

                </div>
            )}
        </Draggable>
    )
}