/// <reference path="../typings/browser.d.ts" />

import * as React from 'react';

interface ITodo {
    description: string;
}

export interface ITodoItemState { }

export interface ITodoItemProps {
    item: ITodo;
    onRemove?: (todo: ITodo) => any;
    key?: number; 
}

export class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
    constructor() {
        super();
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem() {
        this.props.onRemove(this.props.item);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"> {this.props.item.description} </span>
                        </div>
                        <div class="card-action">
                            <a href="javascript:void(0);" onClick={this.removeItem} >Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
