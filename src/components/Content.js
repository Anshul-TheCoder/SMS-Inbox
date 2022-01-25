import React from 'react'
import { ContentItem } from './ContentItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const Content = (props) => {
    return (
        <DragDropContext onDragEnd={(...props) => { console.log(props) }}>
            <container>
                <h3>Inbox</h3>
                <Droppable droppableId="droppable-1">
                    {(provided, _) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <ol className="list-group list-group-numbered">
                                {props.object.map((obj) => {
                                    return <ContentItem List={obj}/>
                                })}
                            </ol>
                        </div>
                    )}
                </Droppable>
            </container>
        </DragDropContext>
    )
}